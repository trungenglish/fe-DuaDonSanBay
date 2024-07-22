import icFlight from "../../assets/iconFlight.png";
import icLocation from "../../assets/iconLocation.png";
import icCalender from "../../assets/iconCalender.png";
import icClock from "../../assets/iconClock.png";
import icSearch from "../../assets/iconSearch.png";
import icRotate from "../../assets/iconRotate.png";
import { useEffect, useState, useRef } from "react";
import backgroundImage from "../../assets/introPic.png";
import brand1 from "../../assets/Brand1.png";
import brand2 from "../../assets/Brand2.png";
import brand3 from "../../assets/Brand3.png";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';



const API_BASE_URL = "https://cnpm-api-thanh-3cf82c42b226.herokuapp.com";

const SearchBar = () => {
  const [showAirports, setShowAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);

  //get data danh sách sân bay
  useEffect(() => {
    const getDanhSachSanBay = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/GetDanhSachSanBay`);
        console.log(res.data);
        setShowAirports(res.data.danhSachSanBay);
      } catch (error) {
        console.error(
          "Request failed with status code",
          error.response?.status
        );
      }
    };
    getDanhSachSanBay();
  }, []); 

  // Xử lý click toàn cục để ẩn danh sách sân bay khi nhấp ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    setShowDropdown(true);
    setFilteredAirports(showAirports); // Hiển thị toàn bộ danh sách sân bay khi nhấp vào ô chọn
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelectedAirport(value);
    setFilteredAirports(
      showAirports.filter((airport) =>
        airport.TenSanBay.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleAirportClick = (airport) => {
    setSelectedAirport(airport.TenSanBay);
    setShowDropdown(false);
    setFilteredAirports([]);
  };

  //get data trạm dừng
  const [showTramDung, setShowTramDung] = useState([]);
  const [filteredTramDung, setFilteredTramDung] = useState([]);
  const [selectedTramDung, setSelectedTramDung] = useState("");
  const [showDropdownTD, setShowDropdownTD] = useState(false);
  const containerRefTD = useRef(null);
  //axios get
  useEffect(() => {
    const getDanhSachTramDung = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/GetTramDung`);
        console.log(res.data);
        setShowTramDung(res.data.tramDung);
      } catch (error) {
        console.error(
          "Request failed with status code",
          error.response?.status
        );
      }
    };
    getDanhSachTramDung();
  }, []); 

  const handleInputClickTD = () => {
    setShowDropdownTD(true);
    setFilteredTramDung(showTramDung); // Hiển thị toàn bộ danh sách sân bay khi nhấp vào ô chọn
  };

  const handleInputChangeTD = (e) => {
    const value = e.target.value;
    setSelectedTramDung(value);
    setFilteredTramDung(
      showTramDung.filter((tramdung) =>
        tramdung.DiaChi.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleTramDungClick = (tramdung) => {
    setSelectedTramDung(tramdung.DiaChi);
    setShowDropdownTD(false);
    setFilteredTramDung([]);
  };

  // Xử lý click toàn cục để ẩn danh sách trạm khi nhấp ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRefTD.current && !containerRefTD.current.contains(event.target)) {
        setShowDropdownTD(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  // Xử lý click toàn cục để ẩn lịch khi nhấp ra ngoài
  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Ẩn lịch khi chọn ngày
  };
  //xử lý chọn giờ 
  const [time, setTime] = useState('10:00');
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleToggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };
  return (
    <div
      className="h-auto bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <h1 className="text-white text-4xl text-center pt-28 pb-16">
          Từ Đông Nam Á Đến Thế Giới Trong Tầm Tay Bạn
        </h1>
      </div>
      <div className="container mx-auto pt-12 pb-52 flex justify-center">
        {/* From Airport */}
        <div className="flex flex-col items-start py-2 max-w-md relative" ref={containerRef}>
          <label className="text-white flex items-center space-x-2">
            <span>Từ sân bay</span>
          </label>
          <div className="flex items-center bg-white shadow rounded-lg mt-3 w-full">
            <img src={icFlight} alt="icon-flight" className="h-6 w-6 m-3" />
            <input
              type="text"
              placeholder="Ví dụ sân bay quốc tế Narita"
              className="bg-transparent outline-none mx-2 w-64 "
              value={selectedAirport}
              onClick={handleInputClick}
              onChange={handleInputChange}
            />
          </div>
          {showDropdown && filteredAirports && (
            <div className="absolute top-full left-0 bg-white shadow rounded-lg mt-3 w-full max-h-64 overflow-y-auto">
              {filteredAirports.map((airport) => (
                <div
                  key={airport.MaSB}
                  className="p-2 border-b cursor-pointer"
                  onMouseDown={() => handleAirportClick(airport)}
                >
                  {airport.TenSanBay}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="">
          <img src={icRotate} alt="icon-rotate" className="h-8 w-8 mt-14" />
        </div>

        {/* Arrived Locate */}
        <div className="flex flex-col items-start py-2 relative" ref={containerRefTD}>
          <label className="text-white flex items-center space-x-2">
            <span>Đến khu vực địa chỉ tòa nhà</span>
          </label>
          <div className="flex items-center bg-white shadow rounded-lg mt-3 " >
            <img src={icLocation} alt="icon-flight" className="h-6 w-6 m-3" />
            <input
              type="text"
              placeholder="Ví dụ sân bay quốc tế Narita"
              className="bg-transparent outline-none mx-2 w-64"
              value={selectedTramDung}
              onClick={handleInputClickTD}
              onChange={handleInputChangeTD}
            />
          </div>
          {showDropdownTD && filteredTramDung && (
            <div className="absolute top-full left-0 bg-white shadow rounded-lg mt-3 w-full max-h-64 overflow-y-auto">
              {filteredTramDung.map((tramdung) => (
                <div
                  key={tramdung.MaTram}
                  className="p-2 border-b cursor-pointer"
                  onMouseDown={() => handleTramDungClick(tramdung)}
                >
                  {tramdung.DiaChi}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pick-up Date */}
        <div className="flex flex-col items-start py-2 relative" ref={calendarRef}>
          <label className="text-white flex items-center space-x-2">
            <span>Ngày đón</span>
          </label>
          <div
            className="flex items-center bg-white shadow rounded-lg mt-3" onClick={() => setShowCalendar(!showCalendar)}>
            <img src={icCalender} alt="icon-flight" className="h-6 w-6 m-3" />
            <input
              type="text"
              className="bg-transparent outline-none mx-2 w-52"
              value={selectedDate ? selectedDate.toLocaleDateString() : ''}
              readOnly
              placeholder="Chọn ngày"
            />
           {showCalendar && (
            <div className="absolute top-full left-0 bg-white shadow rounded-lg mt-3 w-full max-h-64 overflow-y-auto z-10">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="bg-transparent w-full"
              />
            </div>
          )}
          </div>
        </div>
        {/* Pick-up Time */}
        <div className="flex flex-col items-start py-2 relative">
          <label className="text-white flex items-center space-x-2">
            <span>Từ sân bay</span>
          </label>
          <div className="flex items-center bg-white shadow rounded-lg mt-3">
            <img src={icClock} alt="icon-flight" className="h-6 w-6 m-3" />
            <input
              type="text"
              className="bg-transparent outline-none mx-2 w-32"
              value={time}
          readOnly
          onClick={handleToggleTimePicker}
            />
          </div>
          {showTimePicker && (
        <div className="absolute top-full left-0 bg-white shadow rounded-lg mt-3 w-full max-h-64 overflow-y-auto">
          <TimePicker
            onChange={setTime}
            value={time}
          />
        </div>
      )}
        </div>
        {/* Search Button */}
        <Link to="/listBooking">
          <div className="text-white flex items-center mt-10">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              <img src={icSearch} alt="icon-search" className="h-6 w-6 m-1" />
            </button>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center mt-10 pb-24 text-center">
        <label className="text-white flex items-center space-x-2 px-2">
          <span>Trusted by</span>
        </label>
        <img src={brand1} alt="brand1" className="h-10 w-10 m-1" />
        <img src={brand2} alt="brand2" className="h-10 w-10 m-1" />
        <img src={brand3} alt="brand3" className="h-10 w-16 m-1" />
      </div>
    </div>
  );
};

export default SearchBar;

import bgMain from "../../../assets/bgMain.png";

import vehicle from "../../../assets/Vehicle.png";

import brandVehicle from "../../../assets/BrandVehicle.png";
import icUserGray from "../../../assets/icUserGray.png";
import baggages from "../../../assets/Baggages.png";
import ExpandDetailCard from "./ExpandDetailCard";
import { useEffect, useState } from "react";
import axios from "axios";
import NavigationVehiclle from "./NavigationVehicle";
import BenefitsVehicle from "./BenefitsVehicle";

const API_BASE_URL = "https://cnpm-api-thanh-3cf82c42b226.herokuapp.com";

export const ListBooking = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const [dataCar, setDataCar] = useState([]);
  //Xử lý data xe
  useEffect(() => {
    const getListCar = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/GetDetailCar`);
        console.log(res.data);
        setDataCar(res.data.chiTietXeOto);
      } catch (error) {
        console.error(
          "Request failed with status code",
          error.response?.status
        );
      }
    };
    getListCar();
  }, []);

  return (
    <section
      className=" py-12 bg-white -mt-14 rounded-tl-3xl rounded-tr-3xl"
      style={{ backgroundImage: `url(${bgMain})`, backgroundSize: "cover" }}
    >
      <div className="container max-w-screen-lg mx-auto ">
        {/* Locate */}
        <div className="container mx-auto flex justify-between border-b-2 border-gray-200 py-8">
          <div className="max-w-4xl ml-12">
            <h2 className="text-3xl font-semibold break-words whitespace-normal">
              From Tan Son Nhat International Airport - International Arrival
              Gate (SGN)
            </h2>
            <p>Thứ tư, 03 tháng 07 2024 | 22:25</p>
          </div>
          <div className="flex items-center mr-12">
            <button className="border border-white text-white px-4 py-2 rounded-lg shadow bg-blue-800">
              Thay đổi tìm kiếm
            </button>
          </div>
        </div>
        {/* Vehicle */}
        <NavigationVehiclle />
        {/* Advantage */}
        <BenefitsVehicle />
        {/*List Vehicle */}
        {dataCar.map((car,index) => (
          <div key={index} className="">
            <div key={index} className="hover:border-[#00266B] hover:border-2 container flex justify-between mx-auto rounded-lg my-10 bg-white shadow p-6 ml-12">
              <div className="flex">
                <div>
                  <img src={car.Image} alt="Car"></img>
                  <div className="w-full flex justify-center">
                    <img className="" src={brandVehicle} alt="Brand"></img>
                  </div>
                </div>
                <div className="flex flex-col justify-between px-4">
                  <div>
                    <div className="flex">
                      <p className="font-bold">{car.TenHangXe}</p>
                      <p className="font-medium text-gray-500 px-1">(Standard)</p>
                    </div>
                    <p className="font-thin text-gray-500">
                      {car.CongTy}
                    </p>
                    <div className="flex">
                      <div className="flex items-center">
                        <img className="h-4 w-4" src={icUserGray} alt="User"></img>
                        <p className="font-thin text-gray-500 px-1" >
                          {car.SoGheToiDa} passenger(s)
                        </p>
                      </div>
                      <div className="flex items-center px-4">
                        <img className="h-4 w-4" src={baggages} alt="User"></img>
                        <p className="font-thin text-gray-500 px-1">{car.SoHanhLyToiDa} baggage(s)</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto font-bold" onClick={handleToggleDetails}>
                    Chi tiết xe
                  </div>
                </div>
              </div>
              <div className="mr-4">
                <div className="font-bold text-blue-800 py-1">264.196 VND/car</div>
                <button className="border w-44 border-white text-white p-3 rounded-lg shadow bg-blue-800">
                  Chọn
                </button>
              </div>
            </div>
            {showDetails && (
              <div className="w-full border-t border-gray-200 ml-12 mb-10">
                {/* Nội dung chi tiết xe */}
                  <ExpandDetailCard />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

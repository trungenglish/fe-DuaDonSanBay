function CarBookingDemo() {
    return ( 
        <div className="">
          <div className="container flex justify-between mx-auto rounded-lg my-10 bg-white shadow p-6 ml-12">
            <div className="flex">
              <div>
                <img src={vehicle} alt="Car"></img>
                <div className="w-full flex justify-center">
                  <img className="" src={brandVehicle} alt="Brand"></img>
                </div>
              </div>
              <div className="flex flex-col justify-between px-4">
                <div>
                  <div className="flex">
                    <p className="font-bold">Compact</p>
                    <p className="font-medium text-gray-500 px-1">(Standard)</p>
                  </div>
                  <p className="font-thin text-gray-500">
                    SHOGIE TRANS INDONESIA Jakarta AT
                  </p>
                  <div className="flex">
                    <div className="flex items-center">
                      <img className="h-4 w-4" src={icUserGray} alt="User"></img>
                      <p className="font-thin text-gray-500 px-1">
                        2 passenger(s)
                      </p>
                    </div>
                    <div className="flex items-center px-4">
                      <img className="h-4 w-4" src={baggages} alt="User"></img>
                      <p className="font-thin text-gray-500 px-1">2 baggage(s)</p>
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
            <div className="mt-4 p-4 border-t border-gray-200">
              {/* Nội dung chi tiết xe */}
              <p>Thông tin chi tiết về xe...</p>
            </div>
          )}
        </div>
     );
}

export default CarBookingDemo;
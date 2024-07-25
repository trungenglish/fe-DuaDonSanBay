import Car from "../../../assets/Car.png";
import Bus from "../../../assets/Bus.png";
import Train from "../../../assets/Train.png";
function NavigationVehiclle() {
    return ( 
        <div className="container mx-auto flex rounded-lg my-10 bg-white shadow p-6 ml-12">
          <div className="flex items-center ml-12">
            <img className="w-4 h-4" src={Car} alt="Car"></img>
            <div className="text-2xl px-2 font-bold text-blue-800">
              Car
            </div>
          </div>
          <div className="flex items-center ml-12">
            <img className="w-4 h-4" src={Train} alt="Car"></img>
            <div className="text-2xl px-2 font-bold text-blue-800">
              Airport Train
            </div>
          </div>
          <div className="flex items-center ml-12">
            <img className="w-4 h-4" src={Bus} alt="Car"></img>
            <div className="text-2xl px-2 font-bold text-blue-800">
              Shuttle Bus
            </div>
          </div>
        </div>
     );
}

export default NavigationVehiclle;
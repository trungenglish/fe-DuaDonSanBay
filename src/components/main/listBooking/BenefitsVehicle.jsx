import NiceService from "../../../assets/NiceService.png";
import check from "../../../assets/check.png";
function BenefitsVehicle() {
    return ( 
        <div className="container mx-auto flex items-center ml-12 relative">
          <div className="absolute top-0 left-0">
            <img src={NiceService} alt="NiceService"></img>
          </div>
          <div className="h-24 w-18"></div>
          <div className="flex ml-10 bg-blue-900 w-full">
            <div className="flex items-center ml-20 p-6 text-white">
              <img className="w-4 h-4" src={check} alt="Car"></img>
              Avaliable 24 hours
            </div>
            <div className="flex items-center ml-8 p-6 text-white">
              <img className="w-4 h-4" src={check} alt="Car"></img>
              Convenient pick-up point
            </div>
            <div className="flex items-center ml-8 p-6 text-white">
              <img className="w-4 h-4" src={check} alt="Car"></img>
              All-inclusive price
            </div>
          </div>
        </div>
     );
}

export default BenefitsVehicle;
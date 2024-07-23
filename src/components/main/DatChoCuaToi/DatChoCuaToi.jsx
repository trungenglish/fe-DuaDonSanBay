import LeftNavBar from "./LeftNavBar";
import RightContent from "./RightContent";
function DatChoCuaToi() {
    return ( 
        <div className=" flex w-full justify-center">
            <div className="w-[1222px]">
                <LeftNavBar />
                <RightContent />
            </div>
        </div>
     );
}

export default DatChoCuaToi;
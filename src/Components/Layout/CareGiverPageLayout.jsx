import { Outlet } from "react-router-dom";
import CareGiverDashboard from "../Pages/CareGiver/CareGiverDashboard";


const CareGiverPageLayout = () => {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 ">
                <CareGiverDashboard></CareGiverDashboard>
            </div>
            
            <div className="col-span-9 min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CareGiverPageLayout;
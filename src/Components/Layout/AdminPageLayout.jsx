import { Outlet } from "react-router-dom";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
const AdminPageLayout = () => {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 ">
                <AdminDashboard></AdminDashboard>
            </div>
            
            <div className="col-span-9 min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminPageLayout;
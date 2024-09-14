import { Outlet } from "react-router-dom";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
const AdminPageLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3 h-screen">
                <AdminDashboard></AdminDashboard>
            </div>
            
            <div className="col-span-9 bg-yellow-300">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminPageLayout;
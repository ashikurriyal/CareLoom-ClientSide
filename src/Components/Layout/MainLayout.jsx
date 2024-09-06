import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div className="min-h-[calc(100vh-362px)]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
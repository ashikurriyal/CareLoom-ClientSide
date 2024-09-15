import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminPageLayout from "../Layout/AdminPageLayout";
import AdminWelcome from "../Pages/Admin/AdminWelcome";
import CareGiverApplyForm from "../Pages/CaregiverApply/CareGiverApplyForm";



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/login',
            element: <Login></Login>
        }, 
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/services',
          element: <ServicesPage></ServicesPage>
        },
        {
          path: '/contactus',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/careGiverApplyForm',
          element: <CareGiverApplyForm></CareGiverApplyForm>
        }
    ]
  },

  {
    path: '/adminDashboard',
    element: <AdminPageLayout></AdminPageLayout>,
    children: [
      {
        path:'/adminDashboard',
        element: <AdminWelcome></AdminWelcome>,
      }
    ]
  }
]);

export default router;
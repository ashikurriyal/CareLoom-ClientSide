import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminPageLayout from "../Layout/AdminPageLayout";
import CareGiverApplyForm from "../Pages/Home/CaregiverApply/CareGiverApplyForm";
import AdminRoute from "./AdminRoute";
import AdminWelcome from "../Pages/Admin/AdminWelcome";
import CareGiverReq from "../Pages/Admin/CareGiverReq";
import ProfileDetails from "../Pages/Shared/ProfileDetails/ProfileDetails";
import AllUsers from "../Pages/Admin/AllUsers";



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
        },
        {
          path : '/profileDetails',
          element: <ProfileDetails></ProfileDetails>
        }
    ]
  },

  {
    path: '/adminDashboard',
    
    element: <AdminPageLayout></AdminPageLayout>,
    children: [
      {
        path: '/adminDashboard/welcome',
        element: <AdminRoute><AdminWelcome></AdminWelcome></AdminRoute>,
      },
      {
        path: '/adminDashboard/careGiverReq', 
        element: <CareGiverReq></CareGiverReq>,
        // element: <AdminRoute><AdminWelcome></AdminWelcome></AdminRoute>,
      },
      {
        path: '/adminDashboard/users',
        element: <AllUsers></AllUsers>
      }
      
    ]
  }
]);

export default router;

// ,
      // {
      //   path: '/careGiverReq', 
      //   element: <AdminRoute><CareGiverReq></CareGiverReq></AdminRoute>
      // }
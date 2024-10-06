import { createBrowserRouter } from "react-router-dom";
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
import ApplyCareForm from "../Pages/Home/ApplyForCare/ApplyCareForm";
import CareGiverPageLayout from "../Layout/CareGiverPageLayout";
import CareRequest from "../Pages/CareGiver/CareRequest";
import MyCareRequest from "../Pages/Shared/MyCareRequest/MyCareRequest";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <PrivateRoutes><ServicesPage></ServicesPage></PrivateRoutes>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/careGiverApplyForm",
        element: <PrivateRoutes><CareGiverApplyForm></CareGiverApplyForm></PrivateRoutes>,
      },
      {
        path: "/profileDetails",
        element: <ProfileDetails></ProfileDetails>,
      },
      {
        path: "/applyCareForm",
        element: <PrivateRoutes><ApplyCareForm></ApplyCareForm></PrivateRoutes>,
      },
      {
        path: '/myCareRequest',
        element: <PrivateRoutes><MyCareRequest></MyCareRequest></PrivateRoutes>
      }
    ],
  },

  {
    path: "/adminDashboard",

    element: <AdminPageLayout></AdminPageLayout>,
    children: [
      {
        path: "/adminDashboard/welcome",
        element: (
          <AdminRoute>
            <AdminWelcome></AdminWelcome>
          </AdminRoute>
        ),
      },
      {
        path: "/adminDashboard/careGiverReq",
        element: <CareGiverReq></CareGiverReq>,
      },
      {
        path: "/adminDashboard/users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },

  {
    path: "/careGiverDashboard",

    element: <CareGiverPageLayout></CareGiverPageLayout>,
    children: [
      {
        path: "/careGiverDashboard/careRequest",
        element: <CareRequest></CareRequest>,
      },
    ]
  },
]);

export default router;

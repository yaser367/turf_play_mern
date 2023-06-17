import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Register from "./components/Register";
import UserName from "./components/UserName";
import ProfilePage from "./pages/ProfilePage";
import Password from "./components/Password";
import Reset from "./components/Reset";
import ChangePassword from "./components/changePassword";
import Home from "./components/sampleHome";
import H from "./pages/user/Home/Home";
import Service from "./pages/user/Service/Service";
import Booking from "./pages/user/Booking/Booking";
import UserList from "./pages/admin/UserList";
import TurfAdmin from "./pages/TurfAdmin/TurfHome";
import OneTurf from "./pages/TurfAdmin/OneTurfView";
import AddTurfs from "./pages/TurfAdmin/AddTurf";
import Registration from "./pages/TurfAdmin/Registration";
import Login from "./pages/TurfAdmin/Login";
import OtpPage from "./pages/TurfAdmin/OtpPage";
import OneTurfViewuser from "./pages/user/OneTurfView";
import BookNowPage from "./pages/BookNowPage";
import TurfAdminProfile from "./pages/TurfAdmin/TurfAdminProfile";
import { AuthorizeUser, homeAuth, logAuth } from "./middleware/auth";
import { ProtectRout } from "./middleware/auth";
import Dashboard from "./pages/admin/Dashboard";
import Requests from "./pages/admin/RequestsPage";
import ForgotPassword from "./components/TurfAdmin/ForgotPassword";
import Layout from "./components/layout";
import TurfAdminmng from "./pages/admin/TurfAdminmng";
import ChangePasswordTurf from "./components/TurfAdmin/ChangePasswordTurf";
import UploadIMG from "./pages/TurfAdmin/UploadIMG";
import Otp from "./components/Otp";
import AdminLogin from "./components/admin/Login";
import AddLocation from "./pages/TurfAdmin/AddLocation";
import UploadDoc from "./pages/TurfAdmin/UploadDoc";
import RequestTurfDetails from "./pages/admin/RequestTurfDetails";
import Auth from "./components/TurfAdmin/Auth";

function App() {
  return (
    <Routes>
      {/* user side */}
      <Route
        path="/home"
        element={
          <AuthorizeUser>
            <Home />
          </AuthorizeUser>
        }
      />
      {/* <Route
        path="/login"
        element={
          <homeAuth>
            <UserName />
          </homeAuth>
        }
      /> */}
      <Route path="/login" element={<UserName />} />
      <Route
        path="/"
        element={
          <AuthorizeUser>
            <H />
          </AuthorizeUser>
        }
      />
      <Route
        path="/password"
        element={
          <ProtectRout>
            <Password />
          </ProtectRout>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthorizeUser>
            <ProfilePage />
          </AuthorizeUser>
        }
      />
      <Route path="/reset/:id" element={<Reset />} />
      <Route path="/resend" element={<ChangePassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Service />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/turf/:id" element={<OneTurfViewuser />} />
      <Route path="/book/:id" element={<BookNowPage />} />
      <Route path="/otp/:userName" element={<Otp />} />
      {/* admin side */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users" element={<UserList />} />
      <Route path="/admin/TurfAdminmng" element={<TurfAdminmng />} />
      <Route path="/admin/requests" element={<Requests />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/viewDetails/:id" element={<RequestTurfDetails />} />
      //**Turf Admin */
      <Route path="/" element={<Layout />}>
        <Route element={<Auth />}>
          <Route path="/turfAdmin/home" element={<TurfAdmin />} />
          <Route path="/turfAdmin/turf/:id" element={<OneTurf />} />
          <Route path="/turfAdmin/addTurf" element={<AddTurfs />} />
          <Route path="/turfAdmin/uploadImg/:id" element={<UploadIMG />} />
          <Route path="/turfAdmin/uploadDoc/:id" element={<UploadDoc />} />
          <Route path="/turfAdmin/addlocation/:id" element={<AddLocation />} />
          <Route path="/turfAdmin/profile" element={<TurfAdminProfile />} />
          <Route path="/turfAdmin/editTurf/:id" element={<AddTurfs />} />
        </Route>

        <Route path="/turfAdmin/forgot" element={<ForgotPassword />} />
        <Route
          path="/turfAdmin/changePassword/:email"
          element={<ChangePasswordTurf />}
        />
        <Route path="/turfAdmin/register" element={<Registration />} />
        <Route path="/turfAdmin/login" element={<Login />} />
        <Route path="/turfAdmin/login" element={<Login />} />
        <Route path="/turfAdmin/otp/:type/:value" element={<OtpPage />} />
      </Route>

   
    </Routes>
  );
}

export default App;

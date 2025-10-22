import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layouts from "../layout/Layouts";
import UserManagement from "../pages/usermanagement/UserManagement";
import StoreManagement from "../pages/storemanagement/StoreManagement";
import MenuManagement from "../pages/menumanagement/MenuManagement";
import OrdersAndKitchen from "../pages/ordersandkitchen/OrdersAndKitchen";
import WalletAndRewards from "../pages/walletandrewards/WalletAndRewards";
import OfferManagement from "../pages/offermanagement/OfferManagement";
import NearbyAttractions from "../pages/nearbyattractions/NearbyAttractions";
import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/reports/Reports";
import Setttings from "../pages/settings/Setttings";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import User from "../pages/settings/user/User";
import Roles from "../pages/settings/roles/Roles";
import EditUser from "../pages/settings/user/EditUser";
import EditRoles from "../pages/settings/roles/EditRoles";
import Profile from "../pages/dashboard/profile/Profile";
import ViewMenu from "../pages/menumanagement/ViewMenu";
import ViewStoreManagment from "../pages/storemanagement/ViewStoreManagement";
import ViewUserManagement from "../pages/usermanagement/ViewUserManagement";
import AddRoles from "../pages/settings/roles/AddRoles";

const Approutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<Layouts />}>
            <Route path="/dashboard">
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
             <Route path="/usermanagement">
              <Route index element={<UserManagement />} />
              <Route
                path="viewusermanagement"
                element={<ViewUserManagement />}
              />
            </Route>
            <Route path="/storemanagement">
              <Route index element={<StoreManagement />} />
              <Route
                path="viewstoremanagement"
                element={<ViewStoreManagment />}
              />
            </Route>

            <Route path="/menumanagement">
              <Route index element={<MenuManagement />} />
              <Route path="viewmenu" element={<ViewMenu />} />
            </Route>
            <Route path="/ordersandkitchen" element={<OrdersAndKitchen />} />
            <Route path="/walletandrewards" element={<WalletAndRewards />} />
            <Route path="/offersmanagement" element={<OfferManagement />} />
            <Route path="/nearbyattractions" element={<NearbyAttractions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings">
              <Route path="user">
                <Route index element={<User />} />
                <Route path="edituser" element={<EditUser />} />
              </Route>
              <Route path="roles">
                <Route index element={<Roles />} />
                <Route path="editroles" element={<EditRoles />} />
                <Route path="addroles" element={<AddRoles />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approutes;

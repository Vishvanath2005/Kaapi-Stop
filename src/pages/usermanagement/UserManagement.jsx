import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { File, AlertTriangle } from "lucide-react";
import EditUsers from "./EditUsers";
import AddUsers from "./AddUsers";
import axios from "axios";
import { API } from "../../Host";

const UserManagement = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const Columns = [
    { label: "User ID", key: "userId" },
    { label: "Name", key: "name" },
    { label: "Phone Number", key: "phone" },
    { label: "Email", key: "email" },
    { label: "Wallet Balance", key: "wallet_balance" },
    { label: "MemberShip Type", key: "membership_type" },
    { label: "Status", key: "status" },
  ];

   const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API}/user/getallusers`);
      const transformedData = response.data.data.map((item, index) => ({
        userId: item.userId,
        name: item.name,
        phone: item.phone,
        email: item.email,
        wallet_balance: item.wallet_balance,
        membership_type: item.membership_type,
        status: item.status,
      }));

      setUserData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Table
        title="User Mangement"
        pagetitle="User Management"
        addButtonLabel="Add User"
        AddModal={AddUsers}
        addButtonIcon={
          <div className="relative w-6 h-6">
            <File className="absolute  w-6 h-6" />
            <AlertTriangle className="absolute left-1.5 top-2  w-3 h-3" />
          </div>
        }
        coloums={Columns}
        tabledata={userData}
        routepoint={"viewusermanagement"}
        EditModal={EditUsers}
        loading={loading}
      />
    </div>
  );
};

export default UserManagement;

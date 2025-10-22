import React from "react";
import Table from "../../components/Table";
import { LuLandPlot } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { usermanagementdata } from "../../components/Data";

import { File, AlertTriangle } from 'lucide-react';
import EditUsers from "./EditUsers";
import AddUsers from "./AddUsers";

const UserManagement = () => {
  const Columns = [
    { label: "User ID", key: "userid" },
    { label: "Name", key: "name" },
    { label: "Phone Number", key: "phonenumber" },
    { label: "Email", key: "email" },
    { label: "Wallet Balance", key: "walletbalace" },
    { label: "MemberShip Type", key: "membershiptype" },
    { label: "Status", key: "status" },
  ];

  return (
    <div>
      <Table
        title="User Mangement"
        pagetitle="User Management"
        addButtonLabel="Add User"
        AddModal={AddUsers}
        addButtonIcon={<div className="relative w-6 h-6">
          <File className="absolute  w-6 h-6" />
          <AlertTriangle className="absolute left-1.5 top-2  w-3 h-3" />
          </div>}
        coloums={Columns}
        tabledata={usermanagementdata}
        routepoint={"viewusermanagement"}
        EditModal={EditUsers}
      />
    </div>
  );
};

export default UserManagement;

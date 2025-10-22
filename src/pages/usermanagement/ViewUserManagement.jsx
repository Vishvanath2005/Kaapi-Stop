import React, { useState } from "react";
import Title from "../../components/Title";
import { TbBuildingStore } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import Pic from "../../assets/images/Pic.png";
import { useLocation, useNavigate } from "react-router";
import { MdOutlineBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";

const ViewUserManagement = () => {
  const { state } = useLocation();
  const user = state?.item;
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const blockReasons = [
    "Fraudulent Activity",
    "Spamming",
    "Abusive Behavior",
    "Violation of Policies",
    "Other",
  ];

  if (!user) {
    return <p className="p-4"> No user data found.</p>;
  }

  const mainFields = [
    { label: "Name", value: user.name },
    { label: "Phone Number", value: user.phone },
    { label: "Email", value: user.email },
    { label: "Wallet Balance", value: user.wallet_balance },
    { label: "Membership Type", value: user.membership_type },
    { label: "Status", value: user.status },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title title="User Management" active_title="User Management" />
        <button
          onClick={() => {
            if (user.status === "Active") {
              setOpenModal("block");
            } else {
              navigate(-1);
            }
          }}
          className={`flex items-center gap-2 cursor-pointer text-white px-4 py-3 rounded-lg text-sm font-medium mr-4 bg-dark-brown`}
        >
          {" "}
          {user.status === "Active" ? (
            <>
              <MdOutlineBlock size={20} />
              Block
            </>
          ) : (
            <>
              <CgUnblock size={20} />
              Unblock
            </>
          )}
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg space-y-2 text-sm mt-3 mr-4">
        <p className="font-semibold text-center text-lg">User Management</p>
        <div className="grid grid-cols-12 gap-1.5 items-start mt-3">
          {mainFields.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="col-span-5 font-medium">{field.label}</p>
              <div className="col-span-7">
                <span
                  className={`text-sm text-gray-500 ${
                    field.label === "Status" && field.value === "Active"
                      ? "text-green-600 font-medium"
                      : "text-red-600"
                  }text-black`}
                >
                  {field.value}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50 z-20">
          <div className="bg-white rounded-lg w-[800px] shadow-lg max-w-md p-8 relative space-y-4">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <IoMdClose size={22} />
            </button>

            <h2 className="text-lg text-center font-semibold mb-4">
              Block User
            </h2>
            <p className="text-sm text-center mb-4">
              Are you sure you want to Block this user?
            </p>

            <div className="flex justify-center items-center gap-6">
              <img src={Pic} alt="Pic" className="w-36 rounded-full" />
              <div className="text-center">
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-red-900">User ID: {user.userid}</p>
                <p
                  className={`${
                    user.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Status: {user.status}
                </p>
              </div>
            </div>

            <div className="px-5">
              <p className="mb-2">Reason for blocking</p>
              <select
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-dark-brown"
              >
                <option value="">Select a reason</option>
                {blockReasons.map((reason, idx) => (
                  <option key={idx} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>

              {selectedReason === "Other" && (
                <input
                  type="text"
                  placeholder="Enter custom reason"
                  className="w-full border rounded-lg p-2 mt-2 text-sm focus:outline-none focus:ring-1 focus:ring-dark-brown"
                />
              )}
            </div>

            <p className="text-sm text-center text-red-900 mb-4">
              The user won't be able to log in or place orders.
            </p>

            <div className="flex justify-end gap-3 mt-7">
              <button
                onClick={() => setOpenModal(false)}
                className="px-5 py-2 border border-gray-300 rounded-sm text-sm cursor-pointer "
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-sm text-sm cursor-pointer ">
                Block User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewUserManagement;

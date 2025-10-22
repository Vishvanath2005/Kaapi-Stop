import React, { useState } from "react";
import Title from "../../components/Title";
import { TbBuildingStore } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";
import { useLocation } from "react-router";

import { CgUnblock } from "react-icons/cg";
import { MdOutlineBlock } from "react-icons/md";

const ViewStoreManagment = () => {
  const { state } = useLocation();
  const user = state?.item;
  const [openModal, setOpenModal] = useState(false);

  const mainFields = [
    { label: "Store ID", value: user.storeid },
    { label: "Store Name", value: user.storename },
    { label: "City", value: user.city },
    { label: "Address", value: user.address },
    { label: "Contact Number", value: user.contactnumber },
    { label: "Opening House", value: user.openinghouse },
    { label: "Status", value: user.status },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title title="Store Management" active_title="Store Management" />
        <button
          onClick={() => {
            if (user.status === "Active") {
              setOpenModal("Enable");
            } else {
              navigate(-1);
            }
          }}
          className={`flex items-center gap-2 cursor-pointer text-white px-4 py-3 rounded-lg text-sm font-medium mr-4 bg-dark-brown`}
        >
          {" "}
          {user.status === "Active" ? (
            <>
              <TbBuildingStore size={20} />
              Enable
            </>
          ) : (
            <>
              <TbBuildingStore size={20} />
              Disable
            </>
          )}
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg space-y-2 text-sm mt-3 mr-4">
        <p className="font-semibold text-center text-lg">Store Management</p>
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
        <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <IoMdClose size={22} />
            </button>

            <h2 className="text-lg text-center font-semibold mb-4">
              Disable Store
            </h2>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 bg-[#FCFAF7] p-3 rounded-md">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#F2E8E6]">
                  <TbBuildingStore size={20} className="text-dark-brown" />
                </div>
                <div>
                  <p className="font-medium">The Corner Shop</p>
                  <span className="text-xs text-dark-brown">
                    Store ID: #5689336
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#FCFAF7] p-3 rounded-md">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#F2E8E6]">
                  <BsCheckCircle size={20} />
                </div>
                <p className="font-medium">Status : {user.status}</p>
              </div>
            </div>

            <p className="text-sm text-center mb-4">
              Are you sure you want to enable this store?
            </p>

            <textarea
              className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FCFAF7]"
              placeholder="Type Here"
              rows={5}
            />

            <p className="text-xs text-[#99594D] mt-3">
              Enabling the store will make it visible to customers and available
              for new orders.
            </p>

            <div className="flex justify-end gap-3 mt-7">
              <button
                onClick={() => setOpenModal(false)}
                className="px-5 py-2 border border-gray-300 rounded-sm text-sm cursor-pointer "
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-sm text-sm cursor-pointer ">
                Disable
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStoreManagment;

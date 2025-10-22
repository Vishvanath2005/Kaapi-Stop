import React, { useState } from "react";
import Title from "../../components/Title";
import { LuLayoutDashboard } from "react-icons/lu";
import { useLocation } from "react-router";

const ViewMenu = () => {
    const { state } = useLocation();
  const user = state?.item;
  
  const [mainFields] = useState([
    { label: "Product ID", value: user.productId },
    { label: "Product Name", value: user.product_name },
    { label: "Category", value: user.category },
    { label: "Price", value: `$${user.price}` },
    {
      label: "Add-ons Available",
      value: user.add_ons,
    },
    { label: "Status", value: user.status },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Title title="Menu Management" active_title="Menu Management" />

        <button className="flex items-center gap-2 bg-dark-brown cursor-pointer text-white px-4 py-3 rounded-lg text-sm font-medium mr-4  ">
          <LuLayoutDashboard size={20} />
          Available
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg space-y-2 text-sm mt-3 mr-4">
        <p className="font-semibold text-center text-lg">Menu Management</p>
        <div className="grid grid-cols-12 gap-1.5 items-start mt-3">
          {mainFields.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="col-span-5 font-medium">{field.label}</p>
              <div className="col-span-7">
                <span
                  className={`text-sm text-gray-500 ${
                    field.label === "Status" && field.value === "Available"
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
    </div>
  );
};

export default ViewMenu;

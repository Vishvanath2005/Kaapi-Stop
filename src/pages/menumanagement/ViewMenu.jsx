import React, { useState } from "react";
import Title from "../../components/Title";
import { LuLayoutDashboard } from "react-icons/lu";

const ViewMenu = () => {
  const [mainFields] = useState([
    { label: "Product ID", value: "#5689336",  },
    { label: "Product Name", value: "Coffee",  },
    { label: "Category", value: "Coffee",  },
    { label: "Price", value: "$9.99",  },
    {
      label: "Add-ons Available",
      value: "Extra Sugar",
      
    },
    { label: "Status", value: "Active",  },
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
    </div>
  );
};

export default ViewMenu;
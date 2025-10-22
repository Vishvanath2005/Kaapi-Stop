import React from "react";
import Table from "../../components/Table";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { TbFileExport } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";
import ChartTitle from "../../components/ChartTitle";
import AreaCharts from "../../components/AreaCharts";
import BarCharts from "../../components/BarCharts";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between py-2 pb-3">
        <Title title="Dashboard" page_title="Dashboard" />
        <div className="flex items-center gap-2 mr-4">
          <Button
            button_icon={<TbFileExport size={22} />}
            button_name="Export"
            bgColor="bg-white"
            textColor="text-dark-brown"
          />
          <Button
            button_icon={<BiFilterAlt size={22} />}
            button_name="Filter"
            bgColor="bg-white"
            textColor="text-dark-brown"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pr-3 mb-4">
        {[
          { label: "Total Orders", value: "1,234" },
          { label: "Total Revenue", value: "$56,789" },
          { label: "Active Stores", value: "12" },
          { label: "Active Users", value: "3,420" },
          { label: "Pending Requests", value: "1,234" },
          { label: "Wallet Recharges", value: "₹3,20,000" },
        ].map((item, i) => (
          <div
            key={i}
            className="col-span-1 flex flex-col gap-2 pl-4 rounded-md border-gray-300 border bg-white py-2.5"
          >
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-3 pr-3 mb-4">
        <div className="rounded-md border-gray-300 border bg-white col-span-1 p-5">
          <ChartTitle title="Revenue Trend" count="₹12,45,000" growth="+12%" />
          <AreaCharts />
        </div>
        <div className="rounded-md border-gray-300 border bg-white col-span-1 p-5">
          <ChartTitle title="Wallet Recharge Distribution" count="₹3,20,000" growth="+12%" />
          <AreaCharts />
        </div>
        <div className="rounded-md border-gray-300 border bg-white col-span-1 p-5">
          <ChartTitle title="Orders by Store" count="₹12,45,000" growth="+12%" />
          <AreaCharts />
        </div>
      </div>
       <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pr-3 mb-10">
        <div className="rounded-md border-gray-300 border bg-white col-span-1 p-5">
          <ChartTitle title="Top Selling Products" count="3,240" growth="+8%" />
          <BarCharts />
        </div>
         <div className="rounded-md border-gray-300 border bg-white col-span-1 p-5">
          <ChartTitle title="Orders by Store" count="3,240" growth="+8%" />
          <BarCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

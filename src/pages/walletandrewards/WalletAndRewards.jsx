import React, { useState } from "react";
import Title from "../../components/Title";

import { Wallet } from "lucide-react";

import Button from "../../components/Button";
import { TbFileExport } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";

import WalletManagements from "./walletmanagement/WalletManagements";
import ScratchManagement from "./scratchmanagement/ScratchManagement.";

const WalletAndRewards = () => {
  const [activeTab, setActiveTab] = useState("walletmanagement");
  const tabs = [
    { id: "walletmanagement", label: "Wallet Management" },
    { id: "scratchmanagement", label: "ScratchCard Management" },
  ];
  //   const currentTabLabel = tabs.find((tab) => tab.id === activeTab)?.label;
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 pb-3 gap-3">
        <Title title="Wallet & Rewards" page_title="Wallet and Rewards" />

        <div className="flex flex-wrap items-center gap-2 md:gap-3 mr-0 md:mr-4">
          <Button
            button_icon={<Wallet size={22} />}
            button_name="Add money"
            bgColor="bg-dark-brown"
            textColor="text-white"
            paddingY="py-3 "
            paddingX="px-3"
          />

          <Button
            button_icon={<TbFileExport size={22} />}
            button_name="Export"
            bgColor="bg-white"
            textColor="text-darkest-blue"
            paddingY="py-3"
            paddingX="px-3"
          />

          <Button
            button_icon={<BiFilterAlt size={22} />}
            button_name="Filter"
            bgColor="bg-white"
            textColor="text-darkest-blue"
            paddingY="py-3"
            paddingX="px-3"
          />
        </div>
      </div>

      <div className="">
        <div className="flex justify-between mt-2 ">
          <div className="flex gap-2  ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-4 rounded-md text-sm font-medium ${
                  activeTab === tab.id
                    ? " text-white bg-dark-brown font-light   font-roboto-flex"
                    : "text-black bg-light-yellow font-light font-roboto-flex"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="">
          {activeTab === "walletmanagement" && <WalletManagements />}
          {activeTab === "scratchmanagement" && <ScratchManagement />}
        </div>
      </div>
    </div>
  );
};

export default WalletAndRewards;

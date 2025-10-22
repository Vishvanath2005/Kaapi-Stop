import React, { useState } from 'react'
import Table from '../../components/Table'
import Title from '../../components/Title'
import { TbFileExport } from 'react-icons/tb'
import { BiFilterAlt } from 'react-icons/bi'
import Button from '../../components/Button'
import Summary from './summary/Summary'
import Tables from './table/Tables'

const OrdersAndKitchen = () => {
    const [activeTab, setActiveTab] = useState("summary");
    const tabs = [
        { id: "summary", label: "Summary" },
        { id: "table", label: "Table" },
      ];
  return (
    <div>
      <div className="flex justify-between py-2 pb-3">
        <Title
          title="Orders and Kitchen"
          page_title="Orders and Kitchen"
          
        />
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
      <div className="">
        <div className="flex justify-between mt-2 ">
          <div className="flex gap-3 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-4 rounded-md text-sm font-medium cursor-pointer ${
                  activeTab === tab.id
                    ? " text-white bg-dark-brown font-light   font-roboto-flex"
                    : "text-black  font-light font-roboto-flex"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
         
           
        </div>
        <div className="">
          {activeTab === "summary" && <Summary />}
          {activeTab === "table" && <Tables />}
        </div>
      </div>
    </div>
  )
}

export default OrdersAndKitchen

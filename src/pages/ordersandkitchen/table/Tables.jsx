import React from 'react'
import Table from '../../../components/Table';
import { tablesdata } from '../../../components/Data';
import EditOrder from './EditOrder';

const Tables = () => {
  const Columns = [
    { label: "Order ID", key: "orderid" },
    { label: "Store Name", key: "storename" },
    { label: "User Name", key: "username" },
    { label: "Order Type", key: "ordertype" },
    { label: "Payment Mode", key: "paymentmode" },
    { label: "Amount", key: "amount" },
    { label: "Order Time", key: "ordertime" },
    { label: "Status", key: "status" },
  ];
  return (
    <div>
      <Table 
      tabledata={tablesdata}
      coloums={Columns} 
      EditModal={EditOrder}
      showExport={false}
      showFilter={false}/>
    </div>
  )
}

export default Tables

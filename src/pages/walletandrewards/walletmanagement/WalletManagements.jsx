import React from 'react'
import Table from '../../../components/Table';
import { walletmanagementdata } from '../../../components/Data';

const WalletManagements = () => {
  const Columns = [
    { label: "User ID", key: "userid" },
    { label: "Name", key: "name" },
    { label: "Current Balance", key: "currentbalance" },
    { label: "Last Top-up", key: "lasttopup" },
    { label: "Recharge Mode", key: "rechargemode" },
  ];
  return (
    <div>
      <Table coloums={Columns}
      tabledata={walletmanagementdata}
      showActions={false} 
      showExport={false}
      showFilter={false}/>
    </div>
  )
}

export default WalletManagements


import React from 'react'
import Table from '../../../components/Table';
import { ScratchManagementdata } from '../../../components/Data';

const ScratchManagement = () => {
  const Columns = [
    { label: "Card ID", key: "cardid" },
    { label: "Type", key: "type" },
    { label: "Elligibility", key: "elligibility" },
    { label: "Expiry Date", key: "expirydate" },
    { label: "Status", key: "status" },
  ];
  return (
    <div>
      <Table coloums={Columns}
      tabledata={ScratchManagementdata} 
      showExport={false}
      showFilter={false}/>
    </div>
  )
}

export default ScratchManagement

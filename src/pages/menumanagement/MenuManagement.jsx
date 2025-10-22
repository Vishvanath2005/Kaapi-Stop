import React from 'react'
import Table from '../../components/Table'
import { LuLandPlot, LuLayoutDashboard } from 'react-icons/lu'
import { menumanagementdata } from '../../components/Data';
import AddUser from '../settings/user/AddUser';
import ViewMenu from './ViewMenu';
import EditMenuManagement from './EditMenuManagement';

const MenuManagement = () => {
    const Columns = [
        { label: "Product ID", key: "productid" },
        { label: "Product Name", key: "productname" },
        { label: "Category", key: "category" },
        { label: "Price", key: "Price" },
        { label: "Add-One Available", key: "addoneavailable" },
        { label: "Last Update", key: "lastupdate" },
        { label: "Status", key: "status" },
      ];
  return (
    <div>
      <Table 
           title="Menu Management"
           pagetitle="Menu Management"
           addButtonLabel="Add Product"
      addButtonIcon={<LuLayoutDashboard size={24}/>} 
         coloums={Columns}
         tabledata={menumanagementdata}
         EditModal={EditMenuManagement}
         routepoint={"viewmenu"}
         ViewModel={ViewMenu} />
    </div>
  )
}

export default MenuManagement

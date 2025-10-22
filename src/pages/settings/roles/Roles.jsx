import React from 'react'
import Table from '../../../components/Table'
import { LuLandPlot } from 'react-icons/lu'
import { rolesdata } from '../../../components/Data';
import EditRoles from './EditRoles';
import AddRoles from './AddRoles';

const Roles = () => {
    const Columns = [
        { label: "Name", key: "name" },
        { label: "Roles", key: "roles" },
        { label: "Created By", key: "createdby" },
      ];
  return (
    <div>
      <Table title="Settings"
             sub_title="Roles"
          
          pagetitle="Roles"
          addButtonLabel="Add Role"
      addButtonIcon={<LuLandPlot size={24}/>}
         coloums={Columns}
         tabledata={rolesdata}
         showViewButton={false}
         EditModal={true}
         editroutepoint={"editroles"}
         AddModal={AddRoles}
         addroutepoint={"addroles"}/>
    </div>
  )
}

export default Roles

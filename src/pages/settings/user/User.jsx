import React from 'react'
import Table from '../../../components/Table'
import { LuLandPlot } from 'react-icons/lu'
import { Userdata } from '../../../components/Data';
import AddUser from './AddUser';
import EditUser from './EditUser';

const User = () => {
    const Columns = [
        { label: "Name", key: "name" },
        { label: "Roles", key: "roles" },
       
        { label: "Phone Number", key: "phonenumber" },
        { label: "Status", key: "status" },
        { label: "Created By", key: "createdby" },
      ];
  return (
    <div>
      <Table title="Setttings"
             sub_title="User"
          
          pagetitle="User"
          addButtonLabel="Add User"
          addButtonIcon={<LuLandPlot size={24}/>}
          coloums={Columns}
          tabledata={Userdata}
          showViewButton={false}
          AddModal={AddUser}
          EditModal={true}
          editroutepoint={"edituser"}/>
    </div>
  )
}

export default User

import React from 'react'
import Table from '../../components/Table'
import { LuLandPlot } from 'react-icons/lu'
import { nearbyattractionsdata } from '../../components/Data';
import AddNewAttractions from './AddNewAttractions';

const NearbyAttractions = () => {
    const Columns = [
        { label: "Attaraction ID", key: "attractionid" },
        { label: "Title", key: "title" },
        { label: "City/Location", key: "citylocation" },
        { label: "Linked Store", key: "linkedstore" },
        
        { label: " Add On", key: "addon" },
        { label: "Status", key: "status" },
      ];
  return (
    <div>
      <Table title="Nearby Attractions"
          
          pagetitle="Nearby Attractions"
          addButtonLabel="Add New Attraction"
      addButtonIcon={<LuLandPlot size={24} />}
           coloums={Columns}
           AddModal={AddNewAttractions}
           tabledata={nearbyattractionsdata}/>
    </div>
  )
}

export default NearbyAttractions

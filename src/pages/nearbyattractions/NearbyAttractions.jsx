import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { LuLandPlot } from "react-icons/lu";
import AddNewAttractions from "./AddNewAttractions";
import axios from "axios";
import { API, formatDate, formatDate1 } from "../../Host";

const NearbyAttractions = () => {
  const [attractionData, setAttractionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const Columns = [
    { label: "Attaraction ID", key: "attractionID" },
    { label: "Title", key: "title" },
    { label: "City/Location", key: "city" },
    { label: "Linked Store", key: "linked_store" },
    { label: " Add On", key: "added_on" },
    { label: "Status", key: "status" },
  ];

 const fetchAttractions = async () => {
    try {
      const response = await axios.get(`${API}/attraction/getallattractions`);
      const transformedData = response.data.data.map((item, index) => ({
        attractionID: item.attractionID,
        title: item.title,
        city: item.city,
        linked_store: Array.isArray(item.linked_store)
          ? item.linked_store.join(", ")
          : item.linked_store || "All Stores",
        status: item.status,
        added_on: formatDate1(item.added_on),
      }));

      setAttractionData(transformedData.reverse());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttractions();
  }, []);

  return (
    <div>
      <Table
        title="Nearby Attractions"
        pagetitle="Nearby Attractions"
        addButtonLabel="Add New Attraction"
        addButtonIcon={<LuLandPlot size={24} />}
        coloums={Columns}
        AddModal={AddNewAttractions}
        tabledata={attractionData}
        loading={loading}
      />
    </div>
  );
};

export default NearbyAttractions;

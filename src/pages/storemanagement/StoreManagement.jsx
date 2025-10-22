import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import EditStore from "./EditStore";
import ViewStoreManagment from "./ViewStoreManagement";
import axios from "axios";
import { API } from "../../Host";

const StoreManagement = () => {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);


  const Columns = [
    { label: "Store ID", key: "storeId" },
    { label: "Store Name", key: "store_name" },
    { label: "City", key: "city" },
    { label: "Address", key: "address" },
    { label: "Contact Number", key: "store_number" },
    { label: "Opening House", key: "opening_hours" },
    { label: "Status", key: "status" },
  ];

  const fetchStores = async () => {
    try {
      const response = await axios.get(`${API}/store/getallstores`);
      const transformedData = response.data.data.map((item, index) => ({
        storeId: item.storeId,
        store_name: item.store_name,
        city: item.city,
        address: item.address,
        store_number: item.store_number,
        opening_hours: item.opening_hours,
        status: item.status,
      }));

      setStoreData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);
  return (
    <div>
      <Table
        title="Store Management"
        pagetitle="Store Management"
        coloums={Columns}
        tabledata={storeData}
        EditModal={EditStore}
        routepoint={"viewstoremanagement"}
        ViewModel={ViewStoreManagment}
        loading={loading}
      />
    </div>
  );
};

export default StoreManagement;

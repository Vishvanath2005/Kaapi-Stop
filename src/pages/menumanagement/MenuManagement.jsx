import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { LuLandPlot, LuLayoutDashboard } from "react-icons/lu";
import { menumanagementdata } from "../../components/Data";
import ViewMenu from "./ViewMenu";
import EditMenuManagement from "./EditMenuManagement";
import axios from "axios";
import { API, formatDate1 } from "../../Host";

const MenuManagement = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  const Columns = [
    { label: "Product ID", key: "productId" },
    { label: "Product Name", key: "product_name" },
    { label: "Category", key: "category" },
    { label: "Price", key: "price" },
    { label: "Add-One Available", key: "add_ons" },
    { label: "Last Update", key: "last_updated" },
    { label: "Status", key: "status" },
  ];

  const fetchMenu = async () => {
    try {
      const response = await axios.get(`${API}/menu/getallmenu`);
      const transformedData = response.data.data.map((item, index) => ({
        productId: item.productId,
        product_name: item.product_name,
        category: item.category,
        price: item.price,
        add_ons: item.add_ons,
        last_updated: formatDate1(item.last_updated),
        status: item.status,
      }));

      setMenuData(transformedData.reverse());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div>
      <Table
        title="Menu Management"
        pagetitle="Menu Management"
        addButtonLabel="Add Product"
        addButtonIcon={<LuLayoutDashboard size={24} />}
        coloums={Columns}
        tabledata={menuData}
        EditModal={EditMenuManagement}
        routepoint={"viewmenu"}
        ViewModel={ViewMenu}
        loading={loading}
      />
    </div>
  );
};

export default MenuManagement;

import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { TbFileDollar } from "react-icons/tb";
import CreateOffer from "./CreateOffer";
import axios from "axios";
import { API, formatDate } from "../../Host";

const OfferManagement = () => {
  const [offerData, setOfferData] = useState([]);
  const [loading, setLoading] = useState(true);

  const Columns = [
    { label: "Offer ID", key: "offerId" },
    { label: "Title", key: "title" },
    { label: "Offer Type", key: "offer_type" },
    { label: "Discount", key: "discount" },
    { label: "Validity (From - To)", key: "validity" },
    { label: "Applicable Stores", key: "applicable_store" },
    { label: "Status", key: "status" },
  ];

  const fetchOffers = async () => {
    try {
      const response = await axios.get(`${API}/offer/getalloffers`);
      const today = new Date();
      const transformedData = response.data.data.map((item, index) => ({
        offerId: item.offerId,
        title: item.title,
        offer_type: item.offer_type,
        discount: item.discount,
        validity: `${formatDate(item.valid_from)} - ${formatDate(
          item.valid_to
        )}`,
        applicable_store: Array.isArray(item.applicable_store)
          ? item.applicable_store.join(", ")
          : item.applicable_store || "All Stores",
        status:
          new Date(item.valid_from) > today
            ? "Upcoming"
            : new Date(item.valid_to) < today
            ? "Expired"
            : "Active",
      }));

      setOfferData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div>
      <Table
        title="Offer Management"
        pagetitle="Offer Management"
        addButtonLabel="Create offer"
        addButtonIcon={<TbFileDollar size={24} />}
        coloums={Columns}
        tabledata={offerData}
        AddModal={CreateOffer}
        loading={loading}
      />
    </div>
  );
};

export default OfferManagement;

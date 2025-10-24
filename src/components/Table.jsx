import React, { useMemo, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import { TbFileExport } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";
import { Columns, Pencil } from "lucide-react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import Pagination from "./Pagination";

const Table = ({
  title,
  pagetitle,
  sub_title,
  addButtonLabel,
  addButtonIcon,
  coloums = [],
  contentMarginTop = "mt-4",
  tabledata,
  showActions = true,
  showViewButton = true,
  AddModal,
  EditModal,
  editroutepoint,
  ViewModel,
  routepoint,
  showExport = true,
  showFilter = true,
  addroutepoint,
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [showAdd, setShowAdd] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const safeData = Array.isArray(tabledata) ? tabledata : [];

  const sortedItems = useMemo(() => {
    const items = [...safeData];
    if (sortConfig.key) {
      items.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return items;
  }, [safeData, sortConfig]);
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  return (
    <div>
      <div className="font-roboto-flex flex flex-col h-full">
        <div className="lg:flex lg:justify-between">
          <Title title={title} sub_title={sub_title} page_title={pagetitle} />
          <div className="my-2 flex flex-wrap items-center gap-2 mr-4">
            {addButtonLabel && (
              <div className=" flex flex-wrap items-center mr-4">
                <Button
                  button_name={addButtonLabel}
                  button_icon={addButtonIcon}
                  onClick={() => {
                    if (addroutepoint) {
                      navigate(`${addroutepoint}`);
                    }
                    if (AddModal === true) {
                      setShowAdd(false);
                    } else {
                      setShowAdd(true);
                    }
                  }}
                />
              </div>
            )}
            {/* <div className="flex items-center gap-2 mr-4"> */}
            {showExport && (
              <Button
                button_icon={<TbFileExport size={22} />}
                button_name="Export"
                bgColor="bg-white"
                textColor="text-dark-brown"
                paddingX={"px-4"}
              />
            )}
            {showFilter && (
              <Button
                button_icon={<BiFilterAlt size={22} />}
                button_name="Filter"
                bgColor="bg-white"
                textColor="text-dark-brown"
                paddingX={"px-4"}
              />
            )}
            {/* </div> */}
          </div>
        </div>
        <div
          className={`${contentMarginTop} overflow-y-auto no-scrollbar h-11/12`}
        >
          <div className="overflow-auto no-scrollbar mr-5">
            <table className="w-full whitespace-nowrap ">
              <thead>
                <tr className="font-semibold text-sm bg-white border-b-4 border-light-yellow h-14 ">
                  <th className="p-3.5 rounded-l-lg">S.no</th>
                  {coloums.map((col, index) => {
                    const isLastColumn = index === coloums.length - 1;
                    const hasAction = EditModal || ViewModel;

                    const addRightRadius = isLastColumn && !hasAction;
                    return (
                      <th
                        key={col.key}
                        className={`p-3.5 ${
                          addRightRadius ? "rounded-r-lg" : ""
                        }  cursor-pointer`}
                        onClick={() => handleSort(col.key)}
                      >
                        <div className="flex items-center justify-center gap-3">
                          {col.label}{" "}
                          <HiArrowsUpDown
                            onClick={() => {
                              let direction = "asc";
                              if (
                                sortConfig.key === col.key &&
                                sortConfig.direction === "asc"
                              ) {
                                direction = "desc";
                              }
                              setSortConfig({ key: col.key, direction });
                            }}
                            size={18}
                            className={
                              sortConfig.key === col.key
                                ? sortConfig.direction === "asc"
                                  ? "rotate-180"
                                  : ""
                                : ""
                            }
                          />
                        </div>
                      </th>
                    );
                  })}
                  {(showActions || EditModal || ViewModel) && (
                    <th className="pr-2 text-center rounded-r-lg">Action</th>
                  )}
                </tr>
              </thead>
              <tbody className="text-grey bg-white  text-sm font-light">
                {sortedItems.length > 0 ? (
                  sortedItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b-[3px] border-light-yellow text-center justify-center "
                    >
                      <td className="p-1 text-center rounded-l-lg">
                        {index + 1}
                      </td>
                      {coloums.map((col, colIndex) => {
                        const value =
                          item[col.key] !== undefined ? item[col.key] : "-";
                        const isStatusCol = col.key.toLowerCase() === "status";

                        return (
                          <td key={colIndex} className="p-3.5">
                            {isStatusCol ? (
                              <span
                                className={
                                  value === "Active" ||
                                  value === "Available" ||
                                  value === "Completed"
                                    ? "text-green-700 font-medium"
                                    : "text-red-800 font-medium"
                                }
                              >
                                {value}
                              </span>
                            ) : (
                              value
                            )}
                          </td>
                        );
                      })}

                      {(showActions ||
                        EditModal ||
                        editroutepoint ||
                        ViewModel ||
                        routepoint) && (
                        <td className="p-1 pr-4 text-center rounded-r-lg">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => {
                                if (editroutepoint) {
                                  navigate(`${editroutepoint}`, {
                                    state: { item },
                                  });
                                }
                                if (EditModal === true) {
                                  setShowEdit(false);
                                } else {
                                  setSelectedItem(item);
                                  setShowEdit(true);
                                }
                              }}
                              className="cursor-pointer bg-[#C9E0FF] p-1.5 rounded"
                            >
                              <Pencil size={14} className="text-blue-500" />
                            </button>
                            {showViewButton && (
                              <button
                                onClick={() => {
                                  if (routepoint) {
                                    navigate(`${routepoint}`, {
                                      state: { item },
                                    });
                                  }
                                  if (ViewModel === true) {
                                    setShowView(false);
                                  } else {
                                    setSelectedItem(item);
                                    setShowView(true);
                                  }
                                }}
                                className="cursor-pointer bg-[#BAFFBA] p-1.5 rounded"
                              >
                                <LuEye size={14} className="text-[#008000]" />
                              </button>
                            )}
                            <button className="cursor-pointer bg-red-100 p-1.5 rounded-sm">
                              <RiDeleteBinLine
                                size={16}
                                className="text-red-600"
                              />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={coloums.length + 2}
                      className="text-center py-4"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        totalItems={sortedItems.length}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {AddModal && showAdd && <AddModal onclose={() => setShowAdd(false)} />}
      {EditModal && showEdit && (
        <EditModal onclose={() => setShowEdit(false)} item={selectedItem} />
      )}
      {ViewModel && showView && (
        <ViewModel onclose={() => setShowView(false)} item={selectedItem} />
      )}
    </div>
  );
};

export default Table;

import React from 'react'
import NavBar from './NavBar'
import { NavLink, Outlet, useLocation } from 'react-router';
import { RiDashboardLine, RiUserAddLine } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { TbBuildingStore, TbFileDollar, TbReportAnalytics, TbShirtSport } from 'react-icons/tb';
import { Box, Settings, Wallet } from 'lucide-react';
import { BsBookmarkStar } from 'react-icons/bs';
import { LuLayoutDashboard } from 'react-icons/lu';
import { GrGroup, GrRestaurant } from 'react-icons/gr';
import { File, AlertTriangle } from 'lucide-react';
import { Clipboard, DollarSign } from "lucide-react";


const Layouts = () => {
    const location = useLocation();
  
    const Menus = [
      {
        title: "Dashboard",
        icon: <RiDashboardLine size={27} />,
        to: "/dashboard",
      },
      {
        title: "User Management",
        icon: <div className="relative w-6 h-6">
        <File className="absolute  w-6 h-6" />
        <AlertTriangle className="absolute left-1.5 top-2  w-3 h-3" />
        </div>,
        to: "/usermanagement",
      },
      {
        title: "Store Management",
        icon: <TbBuildingStore size={27} />,
        to: "/storemanagement",
      },
      {
        title: "Menu Management",
        icon: <LuLayoutDashboard size={27} />,
        to: "/menumanagement",
      },
      {
        title: "Orders & Kitchen",
        icon: <GrRestaurant size={27} />,
        to: "/ordersandkitchen",
      },
      {
        title: "Wallet & Rewards",
        icon: <Wallet size={27} />,
        to: "/walletandrewards",
      },
      {
        title: "Offers Management",
        icon: <div className="relative w-6 h-6">
        <Clipboard className="absolute " />
        <DollarSign className="absolute left-1 top-2 w-3 h-3" />
        </div>,
        to: "/offersmanagement",
      },
      {
        title: "Nearby Attractions",
        icon: <Settings size={27} />,
        to: "/nearbyattractions",
      },
      {
        title: "Reports",
        icon: <TbReportAnalytics size={27} />,
        to: "/reports",
      },
      {
        title: "Settings",
        icon: <Settings size={27} />,
        to: "/settings/user",
        nested: [
            {
              title: "User",
              icon: <RiUserAddLine size={23} />,
              to: "/settings/user",
            },
            {
              title: "Roles",
              icon: <GrGroup size={23} />,
              to: "/settings/roles",
            },
          ],
      }
  
  
  
    ]
  
    const isMenuActive = (menu) => {
      if (location.pathname.startsWith(menu.to)) {
        return true;
      }
      if (
        menu.nested &&
        menu.nested.some((item) => location.pathname.startsWith(item.to))
      ) {
        return true;
      }
      return false;
    };

    const isMenuActives = (menu) => {
        if (location.pathname.startsWith(menu.to)) {
          return true;
        }
        if (
          menu.nested &&
          menu.nested.some((item) => location.pathname.startsWith(item.to))
        ) {
          return true;
        }
        return false;
      };
    return (
      <div className=" font-roboto-flex w-full fixed h-screen ">
        <NavBar />
        <div className="flex bg-light-yellow h-11/12 ">
        <div className="px-7 pb-10 bg-light-yellow overflow-auto no-scrollbar ">
            <ul>
              {Menus.map((menu, index) => (
                <React.Fragment key={index}>
                  <NavLink to={menu.to}>
                    <li
                      className={`w-[92px] text-sm font-light flex flex-col items-center text-center p-[10px] my-5   rounded-xl ${
                        isMenuActive(menu)
                          ? " text-white   bg-dark-brown "
                          : " text-dark-brown border border-light-pink "
                      }`}
                    >
                      <span>{menu.icon}</span>
                      <p>{menu.title}</p>
                    </li>
                  </NavLink>
                </React.Fragment>
              ))}
            </ul>
          </div>
          {Menus.map((menu, index) => {
          const isNestedSidebarVisible = (menuTitle, pathname) => {
            if (menuTitle === "User Management") {
              return (
                pathname.startsWith("/usermanagement/") && pathname !== "/usermanagement"
              );
            }

            if (menuTitle === "Store Management") {
              return pathname.startsWith("/storemanagement/") && pathname !== "/storemanagement";
            }

            if (menuTitle === "Menu Management") {
              return pathname.startsWith("/menumanagement/") && pathname !== "/menumanagement";
            }

            if (menuTitle === "Orders & Kitchen") {
              return pathname.startsWith("/ordersandkitchen/") && pathname !== "/ordersandkitchen";
            }

            if (menuTitle === "Wallet & Rewards") {
              return pathname.startsWith("/walletandrewards/") && pathname !== "/walletandrewards";
            }

            if (menuTitle === "Offers Management") {
              return pathname.startsWith("/offersmanagement/") && pathname !== "/offersmanagement";
            }

            if (menuTitle === "Nearby Attractions") {
              return pathname.startsWith("/nearbyattractions/") && pathname !== "/nearbyattractions";
            }

            if (menuTitle === "Reports") {
              return pathname.startsWith("/reports/") && pathname !== "/reports";
            }

            return pathname.startsWith(`/${menuTitle.toLowerCase()}`);
          };

          const shouldShowSidebar =
            menu.nested &&
            isNestedSidebarVisible(menu.title, location.pathname);

          return (
            shouldShowSidebar &&
            isMenuActives(menu) && (
              <div
                key={index}
                className="mx-2 w-56 text-sm  my-4 rounded-lg bg-white overflow-auto no-scrollbar shadow-lg py-6 mb-10"
              >
                <ul>
                  {menu.nested.map((item, index) => (
                    <li key={index} className="mb-2">
                      <NavLink to={item.to}>
                        <div
                          className={`w-full   flex  items-center gap-2 py-3 px-3 cursor-pointer ${
                            location.pathname.startsWith(item.to)
                              ? "bg-light-yellow text-dark-brown border-r-5 "
                              : "text-dark-brown"
                          }`}
                        >
                          <span>{item.icon}</span>
                          <p>{item.title}</p>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          );
        })}

          <div className="w-full pt-5 ml-4 overflow-auto no-scrollbar ">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  
export default Layouts
  



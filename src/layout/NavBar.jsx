import LOGO from "../assets/images/logo.png";
import { Search } from "lucide-react";
import { HiOutlineBell } from "react-icons/hi";
import { useNavigate } from "react-router";


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full z-10 font-roboto-flex flex justify-between items-center bg-white px-2 h-1/12 mt-3 mb-3">
      <div className="flex items-center gap-5  ">
        <img
          src={LOGO}
          className="w-[70px] h-[70px] ml-7  "
          alt="Logo Image"
        />
        <div className="flex items-center gap-3 px-5  rounded-md w-[290px] sm:w-[290px] bg-light-yellow">
          <Search className="w-5 h-5 text-dark-brown" />
          <input
            type="text"
            className="h-11 placeholder:text-dark-brown outline-0"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-center lg:p-2 md:p-2 p-1.5 lg:gap-3.5 md:gap-2   items-center text-center  rounded-full mr-3">
        <div className=" flex  items-center gap-2 text-sm font-extralight  text-dark-brown ">
          Profile name
          <div className="">
            <button className="bg-light-yellow text-darkest-blue font-medium w-9 h-9 text-sm rounded-full flex cursor-pointer items-center justify-center" 
               onClick={()=>{navigate('/dashboard/profile')}}>
              
              KA
            </button>
          </div>
        </div>
        <p className="bg-light-yellow w-9 h-9  p-2 rounded-full">
          <HiOutlineBell className=" size-5 text-dark-brown" />
        </p>

        
      </div>
    </div>
  );
};

export default NavBar;

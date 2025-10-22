import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../../components/Inputfield";





const schema = yup.object().shape({
  storename: yup
    .string()
    
    .required("Storename is required"),
  username: yup
    .string()
    
    .required("Username is required"),
    ordertype: yup
    .string()
    
    .required("OrderType is required"),
  paymentmode: yup
    .string()
    
    .required("PaymentMode is required"),
  
  ordertime: yup
  .string()
  
  
  
  .required("Ordertime is required"),
  status: yup
  .string()
  
  
  .oneOf(["Pending", "Completes", "Cancelled"], "Invalid Status")
  .required("Role is required"),
});



const EditOrder = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // onclose();
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className=" shadow-lg py-2  bg-white  rounded-md  ">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my- md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">
            Edit Order
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-7 py-6">
              <div className=" lg:space-y-4 space-y-3">
                <InputField
                  label="Store Name"
                
                  name="storename"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="User Name"
                  name="username"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Order Type"
                 
                  name="ordertype"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                 
                />
                <InputField
                  label="Payment Mode"
                  name="paymentmode"
                  register={register}
                  errors={errors}
                  
                  placeholder="Type Here"
                  
                />
                
                <InputField
                  label="Order Time"
                 
                  name="ordertime"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                
                  
                />
                 <InputField
                  label="Status"
                 
                  name="status"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
                  type="select"
                  options={["Pending", "Completed", "Cancelled"]}
                
                  
                />
               
              </div>
            </div>
            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer  border  border-dark-yellow  text-dark-yellow px-6 py-2   rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 bg-dark-brown text-white py-2   rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
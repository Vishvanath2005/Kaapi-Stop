import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/Inputfield";



const schema = yup.object().shape({
  AttractionID: yup
    .string()
    
    .required("AttractionID is required"),
  Title: yup
    .string()
    
    .required("Title is required"),
    Citylocation: yup
    .string()
    
    .required("City/Location is required"),
  linkedstore: yup
    .string()
    .oneOf(["Store A", "Store B"], "Invalid Linkedstore")
    .required("DateandTime is required"),
  status: yup.string()
  .oneOf(["Active", "Inactive"], "Invalid Status")
  .required("Court is required"),
  addon: yup.string().required("Add On is required"),
  
});



const AddNewAttractions = ({ onclose }) => {
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
            Add New Attraction
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-7 py-6">
              <div className=" lg:space-y-4 space-y-3">
                <InputField
                  label="Attraction ID"
                
                  name="AttractionID"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="Title"
                  name="Title"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                  
                />
                <InputField
                  label="City/Location"
                 
                  name="Citylocation"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                 
                />
                <InputField
                  label="Linked Store"
                  name="linkedstore"
                  register={register}
                  errors={errors}
                  type="select"
                  placeholder="Type Here"
                  options={[
                    {
                      value: "Store A",
                      label: "Store A",
                    },
                    { value: "Store B", label: "Store B" },
                    
                  ]}
                />
                <InputField
                  label="Status"
                  
                  name="status"
                  register={register}
                  errors={errors}
                  type="select"
                  placeholder="Type Here"
                  options={[
                    {
                      value: "Active",
                      label: "Active",
                    },
                    { value: "Inactive", label: "Inactive" },
                    
                  ]}
                />
                <InputField
                  label="Add On"
                 
                  name="addon"
                  register={register}
                  errors={errors}
                  placeholder="Type Here"
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

export default AddNewAttractions;

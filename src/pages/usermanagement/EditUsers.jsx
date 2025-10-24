import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/Inputfield";
import { useLocation } from "react-router";
import axios from "axios";
import { API } from "../../Host";

const schema = yup.object().shape({
  name: yup
    .string()

    .required("UserID is required"),
  phonenumber: yup
    .string()

    .required("Name is required"),
  emailid: yup
    .string()

    .required("EmailID is required"),
  walletbalance: yup
    .string()

    .required("PhoneNumber is required"),

  membershiptype: yup
    .string()

    .required("Role is required"),
  status: yup
    .string()

    .required("Role is required"),
});

const EditUsers = ({ onclose, item }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`${API}/user/updateuserbyid/${item.userId}`, data);

      if (response.status === 200 || response.status === 201) {
        console.log("User updated successfully:", response.data);
        onclose();
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
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
          <h1 className="text-center font-medium text-2xl py-2">Edit User</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" px-7 py-6">
              <div className=" lg:space-y-4 space-y-3">
                <InputField
                  label="Name"
                  name="name"
                  placeholder={`${item.name}`}
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Phone Number"
                  name="phonenumber"
                  placeholder={`${item.phone}`}
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Email ID"
                  name="emailid"
                  placeholder={`${item.email}`}
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Wallet Balance"
                  name="walletbalance"
                  register={register}
                  errors={errors}
                  placeholder={`${item.wallet_balance}`}
                />

                <InputField
                  label="Membership Type"
                  name="membershiptype"
                  register={register}
                  errors={errors}
                  type="select"
                   placeholder="Select Membership Type"
                  options={[
                    { value: "Free", label: "Free" },
                    { value: "Gold", label: "Gold" },
                    { value: "Silver", label: "Silver" },
                  ]}
                />
                <InputField
                  label="Status"
                  name="status"
                  type="select"
                  register={register}
                  errors={errors}
                  placeholder="Select Status"
                  options={[
                    { value: "Active", label: "Active" },
                    { value: "Inactive", label: "Inactive" },
                    { value: "Blocked", label: "Blocked" },
                  ]}
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
                className="cursor-pointer px-6 bg-dark-brown text-white py-2 rounded"
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

export default EditUsers;

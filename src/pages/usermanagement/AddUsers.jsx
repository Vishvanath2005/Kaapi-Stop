import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../components/Inputfield";
import axios from "axios";
import { API } from "../../Host"; // Ensure API base URL is defined

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  wallet_balance: yup.string().required("Wallet Balance is required"),
});

const AddUsers = ({ onclose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API}/user/createuser`, data);

      if (response.status === 201 || response.status === 200) {
        reset();
        onclose();
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50 drop-shadow-lg z-20">
      <div className="shadow-lg py-2 bg-white rounded-md">
        <div className="grid">
          <button
            onClick={onclose}
            className="place-self-end cursor-pointer bg-white rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my- md:-my-5 -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1"
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">Add User</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-7 py-6">
              <div className="lg:space-y-4 space-y-3">
                <InputField
                  label="Name"
                  name="name"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Email ID"
                  name="email"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Wallet Balance"
                  name="wallet_balance"
                  placeholder="Type Here"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>

            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer border border-dark-yellow text-dark-yellow px-6 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-6 bg-dark-brown text-white py-2 rounded"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;

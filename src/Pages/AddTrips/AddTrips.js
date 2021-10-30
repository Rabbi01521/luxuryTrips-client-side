import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddTrips = () => {
  const history = useHistory();
  const location = useLocation();
  const [found, setFound] = useState({});
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const redirect_uri = location.state?.from || "/home";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = "https://shielded-woodland-51760.herokuapp.com/trips";

    const postTrip = async () => {
      try {
        const res = await axios.post(url, data);
        if (res.data.insertedId) {
          alert("Successfully Added The Trip");
          history.push(redirect_uri);
        }
      } catch (error) {
        console.log(error);
      }
    };
    postTrip();
  };
  console.log(errors);
  return (
    <div className="container mx-auto py-4">
      <div className="w-full relative shadow-2xl p-10 rounded-lg">
        <div className="md:mt-6">
          <div className="text-center font-bold text-4xl text-purple-700 mb-3">
            Add a Trip
          </div>
          <div className="text-center font-base text-black">
            Plan Your Trip · Travel Like a Pro
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span className="px-1 text-sm text-gray-600">Trip Name</span>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              placeholder="Trip Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <span className="text-red-500 block">This field is required</span>
            )}
            <span className="px-1 text-sm text-gray-600">Picture</span>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              placeholder="Picture Url"
              {...register("picture", {
                required: true,
              })}
            />
            {errors.picture && (
              <span className="text-red-500 block">This field is required</span>
            )}
            <span className="px-1 text-sm text-gray-600">Price</span>
            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
            <div className="">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Package Number"
                {...register("package", { required: true })}
              />
              {errors.package && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <textarea
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Write About Trip"
              {...register("about", { required: true })}
            />
            {errors.about && (
              <span className="text-red-500">This field is required</span>
            )}
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Add Trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrips;

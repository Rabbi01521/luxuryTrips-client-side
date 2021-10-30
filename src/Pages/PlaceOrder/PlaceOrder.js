import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
import Slider from "react-slick";
import useAuth from "../../hooks/useAuth";
import useTrips from "../../hooks/useTrips";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const history = useHistory();
  const location = useLocation();
  const [found, setFound] = useState({});
  // const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const redirect_uri = location.state?.from || "/myOrders";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { tripId } = useParams();
  const [trips] = useTrips();
  console.log(trips);
  const filterOrder = trips.find((trip) => trip._id === tripId);
  console.log(filterOrder);
  useEffect(() => {
    setFound(filterOrder);
    reset(filterOrder);
  }, [tripId, trips, reset, filterOrder]);

  const url = "https://shielded-woodland-51760.herokuapp.com/orders";
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, []);
  // const filter = orders.filter((order) => order.Email === user.email);
  // console.log(filter);
  // const findSameId = orders.find((trip) => trip._id === tripId);
  const onSubmit = (data) => {
    console.log(data);
    // data.filterOrder = found;

    // if (findSameId) {
    //   alert("This Trip is already in use!! Please Select another one");
    //   history.push("/home");
    //   return;
    // }
    // date collect from order submit
    // else {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;
    // console.log(dateTime);
    data.dateTime = dateTime;
    data.status = "Pending";

    const orderPost = async () => {
      try {
        const res = await axios.post(url, data);
        if (res) {
          // setShowModal(true);
          alert("Order PLaced Successfully");
          reset(res);
          history.push(redirect_uri);
        }
      } catch (error) {
        console.log(error);
      }
    };
    orderPost();
  };
  console.log(errors);
  const settings = {
    speed: 300,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    nextArrow: false,
    prevArrow: false,
    // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
  };
  return (
    <div className=" bg-blue-100">
      <div
        className=" h-52 bg-green-800	bg-left-top bg-auto bg-repeat-x  flex justify-center items-center mb-16"
        style={{
          backgroundImage: `url(${found?.picture})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <h1 className="border-4 border-indigo-500 border-opacity-100 text-blue-800 p-3 text-3xl font-black">
          {found?.name}
        </h1>
      </div>

      <section className="md:py-16">
        <div className=" grid grid-cols-1 items-center">
          <div className="w-full md:w-9/12 sm:w-5/12 ml-auto mr-auto px-4 ">
            <div className="rounded-lg">
              <Slider {...settings} className="rounded-lg">
                <div className="w-full">
                  <img
                    src={found?.img?.img1 ? found?.img?.img1 : found?.picture}
                    alt=""
                    className="object-contain w-full"
                  />
                </div>
                <div>
                  <img
                    src={found?.img?.img2 ? found?.img?.img2 : found?.picture}
                    alt=""
                    className="object-contain  w-full"
                  />
                </div>
                <div>
                  <img
                    src={found?.img?.img3 ? found?.img?.img3 : found?.picture}
                    alt=""
                    className="object-contain w-full"
                  />
                </div>
                <div>
                  <img
                    src={found?.img?.img4 ? found?.img?.img4 : found?.picture}
                    alt=""
                    className="object-contain w-full"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="w-full md:w-9/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold">{found?.name}</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {found?.about}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 py-10">
        <div className="container max-w-full mx-auto md:py-10 px-6">
          <div className=" max-w-6xl mx-auto px-6">
            <div className="relative flex flex-wrap">
              <div className="w-full relative shadow-2xl p-10 rounded-lg">
                <div className="md:mt-6">
                  <div className="text-center font-bold text-4xl text-purple-700 mb-3">
                    Reserve your Sit
                  </div>
                  <div className="text-center font-base text-black">
                    Plan Your Trip · Travel Like a Pro
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="px-1 text-sm text-gray-600">Username</span>
                    <input
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      type="text"
                      defaultValue={user?.displayName}
                      placeholder="Full Name"
                      {...register("FullName", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.FullName && (
                      <span className="text-red-500 block">
                        This field is required
                      </span>
                    )}
                    <span className="px-1 text-sm text-gray-600">Email</span>
                    <input
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      type="email"
                      placeholder="Email"
                      defaultValue={user?.email}
                      {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.Email && (
                      <span className="text-red-500 block">
                        This field is required
                      </span>
                    )}
                    <span className="px-1 text-sm text-gray-600">Phone</span>
                    <input
                      type="tel"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      placeholder="Phone"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                    <div className="md:flex md:justify-between ">
                      <div className=" md:w-5/12">
                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          placeholder="From"
                          {...register("from", { required: true })}
                        />
                        {errors.from && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className=" md:w-5/12">
                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          placeholder="To"
                          defaultValue={found?.name}
                          {...register("to", { required: true })}
                        />
                        {errors.to && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="md:flex md:justify-between ">
                      <div className=" md:w-5/12">
                        <span className="px-1 text-sm text-gray-600">
                          Select Your Travel Date
                        </span>
                        <input
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          type="date"
                          placeholder="Date"
                          {...register("DateStart", { required: true })}
                        />
                        {errors.DateStart && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className=" md:w-5/12">
                        <span className="px-1 text-sm text-gray-600">
                          Return Date
                        </span>
                        <input
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          type="date"
                          placeholder="Last date of Travel"
                          {...register("DateEnd", { required: true })}
                        />
                        {errors.DateEnd && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="md:flex md:justify-between ">
                      <div className=" md:w-5/12">
                        <input
                          type="number"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          placeholder="Adults"
                          {...register("adults", { required: true })}
                        />
                        {errors.adults && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className=" md:w-5/12">
                        <input
                          type="number"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          placeholder="Child"
                          {...register("child", { required: true })}
                        />
                        {errors.child && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                    <textarea
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      placeholder="Write any special request"
                      {...register("Description", { required: true })}
                    />
                    {errors.Description && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                    <button
                      type="submit"
                      className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    >
                      Place Order
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

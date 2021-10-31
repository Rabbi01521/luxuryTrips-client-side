import {
  ArrowRightIcon,
  CurrencyDollarIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log(user.email);
  useEffect(() => {
    fetch("https://shielded-woodland-51760.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // DELETE a Orders
  const handleDeleteEvents = (id) => {
    console.log(id);
    const proceed = window.confirm("Are You Sure, You Want To Delete ?");
    if (proceed) {
      const url = `https://shielded-woodland-51760.herokuapp.com/orders/${id}`;
      const deleteEvents = async () => {
        try {
          const res = await axios.delete(url);
          console.log(res);
          if (res) {
            alert("Delete Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        } catch (error) {
          console.log(error);
        }
      };
      deleteEvents();
    }
  };

  const filterOrder = orders.filter((order) => order.Email === user.email);
  console.log(filterOrder);
  return (
    <div className="">
      {filterOrder.length ? (
        <div className="container mx-auto grid md:grid-cols-2 gap-4">
          {filterOrder.length ? (
            filterOrder.map((orderInfo) => (
              <div key={orderInfo._id} className="py-6">
                <div className="">
                  <div className="flex flex-col bg-center bg-cover">
                    {/* <!-- defualt theme --> */}
                    <div className="max-w-3xl w-full mx-auto z-10">
                      <div className="flex flex-col">
                        <div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
                          <div className="flex-none sm:flex">
                            <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                              <img
                                src={orderInfo?.picture}
                                alt={orderInfo?.name}
                                className=" w-32 h-32 object-cover rounded-2xl"
                              />
                              {/* <a
                              href="#/"
                              className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                              </svg>
                            </a> */}
                            </div>
                            <div className="flex-auto sm:ml-5 justify-evenly">
                              <div className="flex items-center justify-between sm:mt-2">
                                <div className="flex items-center">
                                  <div className="flex flex-col">
                                    <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">
                                      {orderInfo?.FullName}
                                    </div>
                                    <div className="flex-auto text-gray-500 my-1">
                                      <span className="mr-3 ">
                                        {orderInfo?.name}
                                      </span>
                                      <span className="mr-3 border-r border-gray-200  max-h-0"></span>
                                      {/* <span>Cochin, IND</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-center">
                                <div className="flex items-center">
                                  <div>
                                    <p>From : {orderInfo?.from}</p>
                                  </div>
                                  <ArrowRightIcon className="w-5 h-5 mx-3" />
                                  <div>
                                    <p>To : {orderInfo?.to}</p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h1>
                                  {orderInfo?.status === "Pending" ? (
                                    <h1 className=" text-red-400">Pending</h1>
                                  ) : (
                                    <h1 className="text-green-600">Approved</h1>
                                  )}
                                </h1>
                              </div>
                              <div className="flex pt-2  text-sm text-gray-500">
                                <div className="flex-1 inline-flex items-center">
                                  <CurrencyDollarIcon className="h-5 w-5 mr-2"></CurrencyDollarIcon>
                                  <p className="">{orderInfo?.price}</p>
                                </div>
                                <div className="flex-1 inline-flex items-center">
                                  <PhoneIcon className="h-5 w-5 mr-2"></PhoneIcon>
                                  <p className="">{orderInfo?.phone}</p>
                                </div>
                                <button
                                  onClick={() =>
                                    handleDeleteEvents(orderInfo?._id)
                                  }
                                  className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className=" flex justify-center items-center my-52">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      ) : (
        <div className="container mx-auto flex justify-center items-center w-screen h-screen">
          <h1 className="text-3xl">No Orders Available</h1>
        </div>
      )}
    </div>
  );
};

export default MyOrders;

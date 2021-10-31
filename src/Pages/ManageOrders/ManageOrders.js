import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const ManageOrders = () => {
  const { user } = useAuth();
  const [update, setUpdate] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://shielded-woodland-51760.herokuapp.com/orders/")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [update]);
  console.log(orders);
  // DELETE a product
  const handleDeleteEvents = (id) => {
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

  const approvedStatus = (id) => {
    const url = `https://shielded-woodland-51760.herokuapp.com/orders/${id}`;
    const findOrder = orders.find((order) => order._id === id);
    // console.log(findOrder);
    if (findOrder.status === "Approved") {
      alert("Your Trips already Approved !!");
    } else {
      findOrder.status = "Approved";
      console.log(findOrder);

      const approved = async () => {
        try {
          const res = await axios.put(url, findOrder);
          if (res.data.modifiedCount > 0) {
            alert("Approved");
            console.log(res);
            setUpdate(true);
          }
        } catch (error) {
          console.log(error);
        }
      };
      approved();
    }
  };
  return (
    <div>
      {user?.email ? (
        <div className="h-screen w-full bg-white relative flex overflow-hidden">
          <div className="w-full h-full flex flex-col justify-between">
            {/* <!-- Main --> */}
            <main className="max-w-full h-full flex relative overflow-y-hidden">
              {/* <!-- Container --> */}
              <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
                <table className="min-w-full border-collapse block md:table">
                  <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Name
                      </th>
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        TripName
                      </th>
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Registration Date
                      </th>
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Email Address
                      </th>
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Phone
                      </th>
                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Status
                      </th>

                      <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {orders.length ? (
                    orders?.map((order) => (
                      <tbody
                        key={order._id}
                        className="block md:table-row-group"
                      >
                        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              Name
                            </span>
                            {order.FullName}
                          </td>
                          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              TripName
                            </span>
                            {order.name}
                          </td>
                          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              Registration Date
                            </span>
                            {order?.dateTime?.slice(0, 10)}
                          </td>
                          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              Email Address
                            </span>
                            {order.Email}
                          </td>
                          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              Phone
                            </span>
                            {order.phone}
                          </td>
                          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              Status
                            </span>
                            {order.status}
                          </td>
                          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span className="inline-block w-1/3 md:hidden font-bold">
                              Actions
                            </span>
                            <button
                              onClick={() => approvedStatus(order?._id)}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-3"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteEvents(order?._id)}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <div className=" flex justify-center items-center my-52">
                      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    </div>
                  )}
                </table>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-5xl">This is restricted without Login</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageOrders;

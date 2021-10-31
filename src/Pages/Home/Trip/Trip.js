import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Trip = ({ trip }) => {
  const { setDetails } = useAuth();
  const history = useHistory();
  const { picture, _id, name, price, packages } = trip;
  const handleSavedDetails = (trip) => {
    delete trip._id;
    setDetails(trip);
    history.push(`/trip/${_id}`);
  };
  return (
    <div onClick={() => handleSavedDetails(trip)} className="cursor-pointer">
      {/* <Link to={`/trip/${_id}`}> */}
      <div
        className="bg-gray-100 mx-auto  h-64 mt-5 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${picture})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row items-end h-full w-full">
          <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
            <div className="flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <p>{packages ? packages : trip?.package} packages</p>
            </div>
            <span>
              <small>Price starts from (per person) ,</small>
            </span>
            <h2>
              <strong>BDT {price}</strong>
            </h2>
            <h3 className=" text-sm font-bold leading-5 uppercase">{name}</h3>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Trip;

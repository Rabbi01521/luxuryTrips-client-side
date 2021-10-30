import React from "react";
import useHotel from "../../hooks/useHotel";

const Hotel = () => {
  const [hotels] = useHotel();
  return (
    <div>
      <div
        className=" h-52 bg-green-800	bg-left-top bg-auto bg-repeat-x  flex justify-center items-center mb-16"
        style={{
          backgroundImage: `url("https://api.sharetrip.net/api/v1/hotel/image?key=qAwM/bnNobHHx/NnjGMbh+ebQsiybLB8PCnO2zivDKA7497/vIshjfzsaqUOJjHqZrD3Q4uK+V4LEyV2VnSzOA==")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="border-4 border-indigo-500 border-opacity-100 text-blue-800 p-3 text-3xl font-black">
          Hotels
        </h1>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Explore Our Top Hotels
          </h2>

          {hotels.length ? (
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={hotel.picture}
                      alt={hotel.name}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={hotel.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {hotel.location.slice(0, 25)}...
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {hotel.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=" flex justify-center items-center my-52">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotel;

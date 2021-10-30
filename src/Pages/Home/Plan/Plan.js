import React from "react";

const Plan = () => {
  return (
    <>
      <section className="container px-6 py-4 -mt-12 mx-auto">
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Card 1 --> */}
          <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div className="p-3 mr-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
              <div className="w-6 h-6 flex justify-center items-center">
                <i className="fas fa-search-location"></i>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-900">
                Build a trip
              </p>
              <p className="text-sm font-normal text-gray-800">
                Tell us where and when you want to go.
              </p>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div className="p-3 mr-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
              <div className="w-6 h-6 flex justify-center items-center">
                <i className="fas fa-suitcase-rolling"></i>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-900">
                Refine it
              </p>
              <p className="text-sm font-normal text-gray-800">
                You have complete flexibility on your destinations and itinerary
              </p>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div className="p-3 mr-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
              <div className="w-6 h-6 flex justify-center items-center">
                <i className="fas fa-box-open"></i>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-900">
                Book as a package
              </p>
              <p className="text-sm font-normal text-gray-800">
                Use our travel agents to get package savings and hassle free
                booking
              </p>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <div className="p-3 mr-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
              <div className="w-6 h-6 flex justify-center items-center">
                <i className="fas fa-plane-departure"></i>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-900">
                Enjoy your trip!
              </p>
              <p className="text-sm font-normal text-gray-800">
                Enjoy our 24x7 on-trip assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;

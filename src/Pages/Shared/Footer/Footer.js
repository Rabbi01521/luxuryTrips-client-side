import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://image.freepik.com/free-photo/abstract-black-white-bokeh-background_1962-1324.jpg)",
        }}
      >
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="container mx-auto px-6 lg:px-10 py-12">
            <div className="lg:flex">
              <div className="w-full lg:w-2/3">
                <div className="lg:flex">
                  <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                    <h2
                      style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                      className="font-bold text-xl text-gray-100 mb-4"
                    >
                      LuxryTrip
                    </h2>
                    <p className="text-gray-400">
                      Drawing from a database of over 80,000 destinations Trips
                      Planner makes trip planning easy, intuitive and enjoyable
                      for over 25 million travelers a year....
                    </p>
                    <div className="flex mt-6">
                      <i
                        style={{ backgroundColor: "#3B5998" }}
                        className="flex items-center justify-center h-12 w-12 mr-1 rounded-full fab fill-current text-white text-xl fa-facebook-f"
                      ></i>
                      <i
                        style={{ backgroundColor: "#dd4b39" }}
                        className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope"
                      ></i>
                      <i
                        style={{ backgroundColor: "#125688" }}
                        className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram"
                      ></i>
                      <i
                        style={{ backgroundColor: "#55ACEE" }}
                        className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-twitter"
                      ></i>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                      <h2
                        style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                        className="font-bold text-gray-100 mb-4"
                      >
                        Useful Links
                      </h2>
                      <ul className="text-gray-50 text-sm">
                        <li className="pt-1 pb-2">
                          <Link to="/home">Home</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/aboutUs">About us</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/destination">Destination</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/">Terms of Services</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                      <h2
                        style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                        className="font-bold text-gray-100 mb-4"
                      >
                        Help
                      </h2>
                      <ul className="text-gray-50 text-sm">
                        <li className="pt-1 pb-2">
                          <Link to="/faq">FAQ</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/contactUs">Contact us</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/policy">Cookie policy</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/">Copyright policy</Link>
                        </li>
                        <li className="pt-1 pb-2">
                          <Link to="/">Trips by other users</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <h2
                  className=" font-bold text-gray-100 mb-4"
                  style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                >
                  Our Newsletter
                </h2>
                <div className="text-gray-300 mb-8">
                  Subscribe our weely Newsletter to get regular updates about
                  our blogs.
                </div>
                <div className="flex">
                  <input
                    type="text"
                    className="rounded-l px-2 focus:outline-none"
                  />
                  <button
                    className="text-gray-200 rounded-r hover:bg-blue-500 px-4 py-2 focus:outline-none"
                    style={{ backgroundColor: "#dc0900" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer bottom --> */}
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="container mx-auto px-6 lg:px-20 py-6">
            <div className="flex justify-center text-gray-300 mb-1">
              © 2021  <span className="font-bold">Rabbi Hasan</span> 2021 All
              right reserved.
            </div>
            <div className="flex font-light justify-center text-gray-500 text-sm">
              <p>
                Designed by <span className="font-bold">Rabbi Hasan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

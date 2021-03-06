import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Popover className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/home">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-7">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                      )}
                    >
                      <NavLink to="/home">
                        <span>Home</span>
                      </NavLink>
                    </Popover.Button>
                  </>
                )}
              </Popover>
              <Link
                to="/hotel"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Hotel
              </Link>
              <Link
                to="/aboutUs"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About Us
              </Link>
              {user.email && (
                <div className="md:flex space-x-7">
                  <Link
                    to="/myOrders"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/manageOrders"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Manage Orders
                  </Link>
                  <Link
                    to="/addPlace"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Add New Place
                  </Link>
                </div>
              )}
            </Popover.Group>
            {!user.email ? (
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link
                  to="/signin"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  {user.displayName}
                </p>
                <button
                  onClick={logOut}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="flex flex-col justify-center items-center">
                  <Link
                    to="/home"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 mt-6"
                  >
                    Home
                  </Link>
                  <Link
                    to="/hotel"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 mt-6"
                  >
                    Hotel
                  </Link>
                  <Link
                    to="/aboutUs"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 mt-6"
                  >
                    About Us
                  </Link>
                </div>
                {!user.email ? (
                  <div>
                    <Link
                      to="/signUp"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <Link
                        to="/signin"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col justify-center items-center">
                      <Link
                        to="/myOrders"
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        My Orders
                      </Link>
                      <Link
                        to="/manageOrders"
                        className=" mt-6 text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Manage Orders
                      </Link>
                      <Link
                        to="/addPlace"
                        className="mt-6 text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Add New Place
                      </Link>
                    </div>
                    <p className="mt-6 mb-2 text-center text-base font-medium text-gray-500">
                      {user?.displayName}
                    </p>
                    <Link
                      to="/logOut"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Header;

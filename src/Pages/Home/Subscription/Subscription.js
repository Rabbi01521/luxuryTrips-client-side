import React from "react";

const Subscription = () => {
  return (
    <div>
      <div
        className=" w-full  flex  flex-row  flex-wrap  bg-gray-600  p-10  py-20  justify-center"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundPosition: "center center",
          backgroundImage:
            "url(https://s.inspirockcdn.com/images/home/v42-hero-return.jpg)",
        }}
      >
        <div className=" w-full  text-center">
          <div className=" text-3xl  text-center text-white  antialiased">
            Get Updates
          </div>
          <div className="text-xl   text-center  text-white antialiased">
            Find out about events and other news
          </div>
        </div>

        <form
          className=" mt-3  flex   flex-row   flex-wrap"
          action=""
          method="POST"
        >
          <div className="text-gray-600  w-2/3">
            <input
              type="text"
              name="email"
              className="  w-full  p-2   rounded-l-lg"
              placeholder="john@mail.com"
            />
          </div>
          <div className=" w-1/3">
            <button
              className=" w-full text-white  p-2  bg-indigo-400  rounded-r-lg text-center hover:bg-indigo-300"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscription;

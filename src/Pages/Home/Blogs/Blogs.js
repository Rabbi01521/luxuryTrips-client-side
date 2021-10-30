import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
              <div className="w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                  Blogs
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4 shadow-xl">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                    src="https://assets-global.website-files.com/56e9debf633486e330198479/57b6720f0c7bdb62381c5e7f_top-10-travel-bloggers-you-should-be-follow-header.jpg"
                    alt="Size 720x400"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Dan Flying Solo
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    The Social Girl Traveler
                  </h2>
                  <p className="leading-relaxed text-base">
                    Daniel an amazing writer with tons of useful tips, and is an
                    even better photographer. I had the privilege of traveling
                    with Daniel and working with him in India. There was never a
                    dull moment!...
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 shadow-xl">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="https://assets-global.website-files.com/56e9debf633486e330198479/57b6723c0c7bdb62381c5e86_top-10-travel-bloggers-you-should-be-follow-danflyingsolo-danielclarke-lonelyplanet-skyscanner.jpg"
                    alt="Size 720x400"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    A Broken Backpack
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Melissa
                  </h2>
                  <p className="leading-relaxed text-base">
                    Melissa is a Canadian doll. She has no filter and is such a
                    warm hearted individual. YOU MUST catch her on Snapchat or
                    Youtube. She's either hitchhiking though SE Asia or sharing
                    her travel shenanigans...
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 shadow-xl">
                <div className="bg-white p-6 rounded-lg">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="https://assets-global.website-files.com/56e9debf633486e330198479/57b6727f0c7bdb62381c5e8a_top-10-travel-bloggers-you-should-be-follow-drewbinsky-thehungrypartier.jpg"
                    alt="Size 720x400"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    The Blonde Abroad
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Keirsten
                  </h2>
                  <p className="leading-relaxed text-base">
                    Keirsten is a California native who quit a career in finance
                    to travel the world. She’s been traveling for 5 years and is
                    ‘killing it’. This girl has some amazing girl power! She
                    works with top brands...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Blogs;

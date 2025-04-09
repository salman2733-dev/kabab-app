import React from "react";

const Suscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white mt-2"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="email"
            data-aos="fade-up"
            placeholder="Enter your E-mail"
            className="w-full py-3 px-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suscribe;

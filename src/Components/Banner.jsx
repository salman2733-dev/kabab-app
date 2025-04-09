import React from "react";
import {
  HomeIcon,
  TruckIcon,
  TagIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className="min-h-[450px] flex justify-center mt-24 mb-2 px-4 md:px-8">
      <div className="container max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div
            data-aos="zoom-in"
            className="flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <img
              className="max-w-full md:max-w-[600px] h-[250px] md:h-[350px] w-full object-cover rounded-lg"
              src="https://media.istockphoto.com/id/1171892996/photo/70-off-sales-promotion-on-retail-shop-display-window-black-friday-clearance-mega-sale.jpg?s=612x612&w=0&k=20&c=WLQaCqVJb1o_VBux-BrSRo9xAN8bIR2DSxDNiOmd-bA="
              alt="Winter Sale"
            />
            <div className="flex flex-col justify-center gap-4 md:gap-6 text-center">
              <h1
                data-aos="fade-up"
                className="text-2xl md:text-4xl w-[550px] font-bold"
              >
                Winter sale upto 45% off!
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm md:text-base text-gray-600 tracking-wide leading-5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vitae vel doloremque.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div
                  data-aos="fade-up"
                  className="flex flex-col items-center md:items-start gap-2"
                >
                  <HomeIcon className="h-10 w-10 p-2 rounded-full bg-blue-800 text-white" />
                  <p className="text-xs md:text-sm">Quality Products</p>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex flex-col items-center md:items-start gap-2"
                >
                  <CreditCardIcon className="h-10 w-10 p-2 rounded-full bg-orange-500 text-white" />
                  <p className="text-xs md:text-sm">Easy Payment</p>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex flex-col items-center md:items-start gap-2"
                >
                  <TruckIcon className="h-10 w-10 p-2 rounded-full bg-yellow-500 text-white" />
                  <p className="text-xs md:text-sm">Fast Delivery</p>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex flex-col items-center md:items-start gap-2"
                >
                  <TagIcon className="h-10 w-10 p-2 rounded-full bg-red-400 text-white" />
                  <p className="text-xs md:text-sm">Great Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

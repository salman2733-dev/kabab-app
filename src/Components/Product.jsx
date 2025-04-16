import React from "react";
import image1 from "../Accets/ethics.jpg";
import image2 from "../Accets/Mens.jpg";
import image3 from "../Accets/Shopping.jpg";
import image4 from "../Accets/Women.jpg";
import { CakeIcon } from "@heroicons/react/24/solid";

const productdata = [
  {
    id: 1,
    image: image1,
    rating: 5.0,
    color: "white",
    title: "Ethics Book",
    aosdelay: "0",
  },
  {
    id: 2,
    image: image2,
    rating: 4.5,
    color: "blue",
    title: "Men's Look",
    aosdelay: "200",
  },
  {
    id: 3,
    image: image3,
    rating: 4.8,
    color: "orange",
    title: "Shopping Experience",
    aosdelay: "400",
  },
  {
    id: 4,
    image: image4,
    rating: 4.6,
    color: "red",
    title: "Women's Fashion",
    aosdelay: "600",
  },
];

const Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[900px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            assumenda debitis deleniti ab, distinctio dicta ullam molestias.
            Similique, molestias soluta commodi illo, quas autem tempora est
            enim quis dolor rem.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 mt-20">
            {productdata.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosdelay}
                className="p-3 border rounded-lg shadow-md"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  aria-label={data.title}
                  className="h-[290px] w-[225px] object-cover rounded-md"
                />

                <div className="mt-2">
                  <h3 className="font-bold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <CakeIcon className="text-yellow-400 w-5 h-5" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:bg-gray-700 transition duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

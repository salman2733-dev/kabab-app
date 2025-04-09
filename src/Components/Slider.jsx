import { div, text } from "framer-motion/client";
import React from "react";
import Slider from "react-slick";

const sliderdata = [
  {
    id: 1,
    name: "victor",
    text: "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci laborum aut optio maxime autem error obcaecati reprehenderit deserunt. Ut, totam!",
    img: "https://media.istockphoto.com/id/1770527363/photo/window-display-with-text-sale.webp?b=1&s=612x612&w=0&k=20&c=stgcGT_Kzd1i_G97nA9Y3-Ok_UV2vvI2u4ZcLDgBSS4=",
  },
  {
    id: 2,
    name: "Angela",
    text: "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci laborum aut optio maxime autem error obcaecati reprehenderit deserunt. Ut, totam!",
    img: "https://media.istockphoto.com/id/2157490082/photo/young-woman-shopping-online.webp?b=1&s=612x612&w=0&k=20&c=D4QP1UdEhOXIrI2b2m7IwTcy_BooLaDBHURsVC4UZOc=",
  },
  {
    id: 3,
    name: "Buraq",
    text: "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci laborum aut optio maxime autem error obcaecati reprehenderit deserunt. Ut, totam!",
    img: "https://media.istockphoto.com/id/1819827867/photo/asian-beautiful-two-women-shopping-goods-outdoor-in-department-store-attractive-young-female.webp?b=1&s=612x612&w=0&k=20&c=CWnFiEka2jr9V4esLLk8RrOxmQGrRyfbTy4ED9cunwk=",
  },
  {
    id: 4,
    name: "Square",
    text: "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci laborum aut optio maxime autem error obcaecati reprehenderit deserunt. Ut, totam!",
    img: "https://media.istockphoto.com/id/2149424189/photo/asian-family-shopping-on-vacation.webp?b=1&s=612x612&w=0&k=20&c=fQ9l6rCsTQzVYnS5XToXJwL9qdOR6NDbQ0sBlf2ObhE=",
  },
  {
    id: 5,
    name: "Lalit burari",
    text: "Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci laborum aut optio maxime autem error obcaecati reprehenderit deserunt. Ut, totam!",
    img: "https://media.istockphoto.com/id/1816053812/photo/rear-view-of-young-happy-woman-enjoying-in-her-shopping.webp?b=1&s=612x612&w=0&k=20&c=tGJbPVA8NjzfvR7tF_jV0wdYBFsOh_oS6d4Ta3vkPc0=",
  },
];
const Slider = () => {
  var setting = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        setting: {
          slideToShow: 3,
          slideToscroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        setting: {
          slideToShow: 2,
          slideToscroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        setting: {
          slideToShow: 1,
          slideToscroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10 ">
      <div className="container ">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What oue coustmer are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testomonials{" "}
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            consequatur cumque atque recusandae optio. Placeat dicta dolore
            omnis iure exercitationem. Et?
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...setting}>{sliderdata.map((data)=>(
            <div className="my-6">
                <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative ">
                <div className="mb-4">
                    <img src={data.img} alt="" className="rounded-full w-20 h-10" />
                </div>
                <div className="flex flex-col items-center gap-4 ">
                    <div className="space-y-3">
                        <p className="text-xs dark:text-grey-500 text-black/80 dark:text-slate-300-light text-gray-500">
                        {data.text}</p>
                        <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light"></h1>
                    </div>
                </div>
                 <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
            </div>
          ))}</Slider>
        </div>
      </div>
    </div>
  );
};

export default Slider;

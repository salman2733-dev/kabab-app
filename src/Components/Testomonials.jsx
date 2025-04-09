import React from "react";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "The shopping experience was fantastic! Quick delivery and excellent customer service. I'll definitely be back for more purchases soon.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Angela",
    text: "I love the wide selection of products. The website is easy to navigate and checkout was seamless. Highly recommend to anyone looking for quality items.",
    img: "https://media.istockphoto.com/id/2152960546/photo/young-woman-using-digital-tablet-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=ERw6vEbS6Hy_i0QFlu5HXjEFd1v98QdyKCg3lOcA-M4=",
  },
  {
    id: 3,
    name: "Buraq",
    text: "Five stars! My order arrived ahead of schedule and the quality exceeded my expectations. The support team was very helpful with my questions.",
    img: "https://media.istockphoto.com/id/1985248194/photo/businessman-using-laptop-computer-with-digital-padlock-on-internet-technology-networking.webp?a=1&b=1&s=612x612&w=0&k=20&c=PsxF7b86phmuFH7LW03lFWJMy0vgaiUGZlp_I8xafZc=",
  },
];

const TestimonialCards = () => {
  return (
    <div className="py-10 mb-10 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
            What our customers are saying
          </p>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Testimonials
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Our customers love shopping with us. Here's what some of them have
            to say about their experience with our products and services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialData.map((data) => (
              <div key={data.id} className="testimonial-card">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-white dark:bg-gray-700 relative h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={`${data.name}'s profile`}
                      className="rounded-full w-20 h-20 object-cover border-4 border-blue-100 dark:border-blue-900"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold text-gray-800 dark:text-white text-center">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-gray-200 dark:text-gray-600 text-6xl font-serif absolute top-0 right-4 leading-none opacity-20">
                    "
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font lg:mx-40">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-950 animate-fade-in">
            Welcome to our BlogPage,
            <br className="hidden lg:inline-block" />
            A destination for inspiration, insights that matter!
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700 animate-fade-in">
            Discover a world of ideas, stories, and inspiration on our blog.
            From expert tips to personal experiences, we bring you content that
            informs, engages, and sparks curiosity.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <Link href={"/blog"}>Our Blogs</Link>
            </button>
            <button
              className="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <img
            className="object-cover object-center rounded shadow-lg hover:bg-gray-700"
            alt="hero"
            src="/hero.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

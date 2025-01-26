import React from "react";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-semibold text-black text-center">
          About me
        </h1>
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-400 mb-5 mt-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
          </svg>
          <p className="leading-relaxed text-lg">
            Hey there! I'm a passionate writer, aspiring web developer, and UI
            enthusiast who loves blending creativity with functionality.
            Currently, I'm pursuing a degree in Business Management, which gives
            me a unique perspective on how design and technology can shape the
            modern business world. Writing is my way of connecting with people,
            while coding lets me bring ideas to life in the digital space. When
            I'm not learning new programming skills or exploring UI trends,
            you'll find me diving into books or enjoying the small moments that
            make life beautiful. Join me as I navigate this exciting journey of
            growth, creativity, and endless possibilities!
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
          <h2 className="text-gray-900 mt-3 font-medium title-font tracking-wider text-lg">
            Alizah Fatima
          </h2>
          <p className="italic mt-3 text-gray-500">
            Web Developer | UI/UX Designer | Business Management
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

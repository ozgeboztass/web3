import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

const coin = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <div className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border-[0.5px]    border-blue-400"
              src="./img/nftt.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                Digital Nexus
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-purple-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-purple-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-purple-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-purple-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-purple-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">
                "Digital Nexus" is a mesmerizing digital artwork symbolizing the
                intricate connectivity of the digital world. This exclusive NFT
                features a network-like structure with glowing lines
                interweaving against a dark backdrop, representing the complex
                web of data and interactions in the digital age. It's a modern,
                sleek representation of technology and connectivity, ideal for
                collectors who value art with a digital pulse.
              </p>

              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-white">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-gradient-to-t to-purple-400 from-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            className="sm:text-4xl text-3xl font-medium title-font mb-2 bg-gradient-to-r from-blue-600 via-purple-500
           inline-block text-transparent bg-clip-text"
          >
            Collection
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Dive into the vibrant world of NFTs, where art meets blockchain
            technology to create a new era of digital ownership. Explore
            exclusive, one-of-a-kind digital masterpieces, each offering a
            unique blend of creativity and innovation. Join us in shaping the
            future of art, where your next collection piece isn't just an asset,
            but a part of digital history.
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Price
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Volume
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  ID
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br" />
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <a className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400  text-transparent bg-clip-text inline-flex items-center md:mb-2 lg:mb-0">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button className="flex ml-auto text-white bg-gradient-to-t to-purple-400 from-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
            Button
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default coin;

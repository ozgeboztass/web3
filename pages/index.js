import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Field, Formik, Form } from "formik";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 border-[0.5px]    border-blue-400">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./img/hero1.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Empowering the Digital Frontier
          </h1>
          <p className="mb-8 leading-relaxed">
            Our platform was established with the vision to be a beacon in the
            digital landscape, offering innovative solutions and insights into
            the world of Web3 and blockchain technology. We aim to demystify
            complex digital concepts, making them accessible to both enthusiasts
            and professionals. Our mission is to empower individuals and
            businesses alike to navigate, understand, and harness the full
            potential of the digital revolution, shaping a future where
            technology and human ingenuity converge for greater progress and
            sustainability.
          </p>
        </div>
      </div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-[0.5px]    border-blue-400"
                  src="./img/d1.png"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-[0.5px]    border-blue-400"
                  src="./img/d4.png"
                />
              </div>
              <div className="md:p-2 p-1 w-full ">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block border-[0.5px]    border-blue-400"
                  src="./img/d3.png"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 ">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block border-[0.5px]    border-blue-400"
                  src="./img/d2.png"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-[0.5px]    border-blue-400"
                  src="./img/d5.png"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block border-[0.5px]    border-blue-400"
                  src="./img/d6.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Connect With Innovators
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Get in touch with us to discover how our cutting-edge
                  solutions can revolutionize your digital experience and drive
                  your success in the ever-evolving tech landscape.
                </p>
              </div>

              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-blue-400 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-blue-400 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Message
                      </label>
                      <Field
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-blue-400 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        as="textarea"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white bg-gradient-to-t to-purple-400 from-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg transition duration-300 ease-in-out"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="./img/e1.png"
                />
                <p className="leading-relaxed">
                  "As an industry expert, I'm thoroughly impressed with the
                  depth and innovation presented on this site. The integration
                  of cutting-edge Web3 concepts with user-friendly interfaces is
                  remarkable. It's a go-to resource for anyone looking to stay
                  ahead in the digital space."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Jordan Smith
                </h2>
                <p className="text-gray-500"> Technology Analyst</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="./img/e2.png"
                />
                <p className="leading-relaxed">
                  This platform has been an invaluable asset in keeping me
                  updated with the latest trends in blockchain technology. The
                  clarity of information and the practical applications
                  discussed here are top-notch. It's rare to find such a
                  well-rounded resource that caters to both beginners and
                  experienced professionals."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Alexa Martinez
                </h2>
                <p className="text-gray-500">BlockChain Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="./img/e3.png"
                />
                <p className="leading-relaxed">
                  I've been following this site for its insightful analysis and
                  forward-thinking perspectives on the digital economy. It
                  consistently delivers high-quality content that's both
                  informative and thought-provoking. A must-visit for anyone
                  involved in or interested in the future of technology."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Dr. Emily Zhang
                </h2>
                <p className="text-gray-500">Digital Economy Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}

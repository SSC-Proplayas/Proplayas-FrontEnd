"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-center h-[350px] md:h-[100px]"></div>
      <div>
        <h1 className="text-center font-bold text-[#00A1FF] text-4xl mb-12">
          WEBINARS
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-24 gap-8 mb-48">
          <div className="order-2 lg:order-1 mt-16 px-2 lg:px-10">
            <p className="font-normal text-xl text-justify text-gray-700  lg:mt-10">
              lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus sed rhoncus arcu. Nunc sed tincidunt enim. Fusce lacinia
              lorem ac elit sollicitudin gravida. Quisque sodales tincidunt
              gravida. Integer dapibus erat risus, vitae rutrum ligula
              ullamcorper gravida. lorem Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus sed rhoncus arcu. Nunc sed tincidunt
              enim. Fusce lacinia lorem ac elit sollicitudin gravida. Quisque
              sodales tincidunt gravida. Integer dapibus erat risus, vitae
              rutrum ligula ullamcorper gravida. lorem Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus sed rhoncus arcu. Nunc
              sed tincidunt enim. Fusce lacinia lorem ac
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image src="/assets/Webinar2.jpg" alt="" width="800" height="200" />
          </div>
        </div>
        <div className="flex flex-wrap mt-16 mx-24">
          <div className="w-full rounded-lg bg-[#00A1FF] mx-4 mb-4 shadow ">
            <div className="flex md:flex-row-reverse flex-wrap">
              <div className="w-full md:w-3/4 rounded-lg bg-[#00A1FF] p-4 text-center sm:text-left  text-gray-700">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                    Titulo
                  </h5>
                  <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                    00/00/00
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Esse, beatae aliquid! Labore, unde corrupti quae ratione
                    perferendis nam vitae tempora recusandae quasi saepe iste
                    voluptates quis natus facere sapiente! Qui?
                  </p>
                </div>
                <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-slate-200 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:text-slate-200 duration-300 p-2 shadow-2xl  w-36 rounded-lg text-blue-700">
                  ver mas
                </button>
              </div>
              <div className="w-full md:w-1/4 rounded-lg bg-[#00A1FF] p-4 text-center text-gray-200">
                <img
                  className="rounded-lg"
                  src="/assets/placeholder.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg bg-white mx-4 mb-4 shadow ">
            <div className="flex md:flex-row-reverse flex-wrap">
              <div className="w-full md:w-3/4 rounded-lg bg-white p-4 text-center sm:text-left text-gray-700">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                    Titulo
                  </h5>
                  <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                    00/00/00
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Esse, beatae aliquid! Labore, unde corrupti quae ratione
                    perferendis nam vitae tempora recusandae quasi saepe iste
                    voluptates quis natus facere sapiente! Qui?
                  </p>
                </div>
                <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-[#00A1FF] hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 hover:text-[#00A1FF] hover:border-blue-600 hover:shadow-lg duration-300 p-2 shadow-2xl  w-36 rounded-lg text-white">
                  ver mas
                </button>
              </div>
              <div className="w-full md:w-1/4 rounded-lg bg-white p-4 text-center text-gray-200">
                <img
                  className="rounded-lg"
                  src="/assets/placeholder.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg bg-white mx-4 mb-4 shadow ">
            <div className="flex md:flex-row-reverse flex-wrap">
              <div className="w-full md:w-3/4 rounded-lg bg-white p-4 text-center sm:text-left text-gray-700">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                    Titulo
                  </h5>
                  <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                    00/00/00
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Esse, beatae aliquid! Labore, unde corrupti quae ratione
                    perferendis nam vitae tempora recusandae quasi saepe iste
                    voluptates quis natus facere sapiente! Qui?
                  </p>
                </div>
                <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-[#00A1FF] hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 hover:text-[#00A1FF] hover:border-blue-600 hover:shadow-lg duration-300 p-2 shadow-2xl  w-36 rounded-lg text-white">
                  ver mas
                </button>
              </div>
              <div className="w-full md:w-1/4 rounded-lg bg-white p-4 text-center text-gray-200">
                <img
                  className="rounded-lg"
                  src="/assets/placeholder.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg bg-white mx-4 mb-12 shadow ">
            <div className="flex md:flex-row-reverse flex-wrap">
              <div className="w-full md:w-3/4 rounded-lg bg-white p-4 text-center sm:text-left text-gray-700">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
                    Titulo
                  </h5>
                  <h5 className="mb-2   text-left tracking-tight text-gray-900 dark:text-white">
                    00/00/00
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Esse, beatae aliquid! Labore, unde corrupti quae ratione
                    perferendis nam vitae tempora recusandae quasi saepe iste
                    voluptates quis natus facere sapiente! Qui?
                  </p>
                </div>
                <button className="subpixel-antialiased text-center transition ease-in-out delay-150 bg-[#00A1FF] hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 hover:text-[#00A1FF] hover:border-blue-600 hover:shadow-lg duration-300 p-2 shadow-2xl  w-36 rounded-lg text-white">
                  ver mas
                </button>
              </div>
              <div className="w-full md:w-1/4 rounded-lg bg-white p-4 text-center text-gray-200">
                <img
                  className="rounded-lg"
                  src="/assets/placeholder.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

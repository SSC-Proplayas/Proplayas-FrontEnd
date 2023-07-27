"use client";

export function Nodos() {
  return (
    <>
      <div className="relative overflow-hidden mb-24 bg-cover bg-no-repeat bg-center h-[350px] md:h-[550px] lg:h-[650px] xl:h-[760px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/playa3.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex h-full items-center justify-center relative">
          <h1 className="text-4xl font-bold text-teal-100 tracking-wider">
            NODOS
          </h1>
        </div>
      </div>
      <div className="w-56 md:w-96 ml-2 mb-8 md:ml-6 md:mb-16">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Search
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <div className="relative overflow-x-auto mx-4 mb-4 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Codigo
              </th>
              <th scope="col" className="px-6 py-3">
                Coordinador
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Sede
              </th>
              <th scope="col" className="px-6 py-3">
                Ciudad
              </th>
              <th scope="col" className="px-6 py-3">
                Ficha
              </th>
              <th scope="col" className="px-6 py-3">
                KMZ-KML
              </th>
              <th scope="col" className="px-6 py-3">
                Video
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Funcion Publica
              </th>
              <td className="px-6 py-4">F52</td>
              <td className="px-6 py-4">Raul Sastoque Franco</td>
              <td className="px-6 py-4">Necochea</td>
              <td className="px-6 py-4">Argentina</td>
              <td className="px-6 py-4">Pedernera</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Funcion Publica
              </th>
              <td className="px-6 py-4">F52</td>
              <td className="px-6 py-4">Ana María Cadavido</td>
              <td className="px-6 py-4">Axisima</td>
              <td className="px-6 py-4">México</td>
              <td className="px-6 py-4">Manzanillo</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 dar">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Cientifico
              </th>
              <td className="px-6 py-4">C31</td>
              <td className="px-6 py-4">Alfredo Jaramillo Vélez</td>
              <td className="px-6 py-4">Urabá</td>
              <td className="px-6 py-4">Colombia</td>
              <td className="px-6 py-4">Santa Marta</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 dar">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Funcion Publica
              </th>
              <td className="px-6 py-4">F52</td>
              <td className="px-6 py-4">Raul Sastoque Franco</td>
              <td className="px-6 py-4">Necochea</td>
              <td className="px-6 py-4">Argentina</td>
              <td className="px-6 py-4">Pedernera</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 dar">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Funcion Publica
              </th>
              <td className="px-6 py-4">F52</td>
              <td className="px-6 py-4">Ana María Cadavido</td>
              <td className="px-6 py-4">Axisima</td>
              <td className="px-6 py-4">México</td>
              <td className="px-6 py-4">Manzanillo</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 dar">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Cientifico
              </th>
              <td className="px-6 py-4">C31</td>
              <td className="px-6 py-4">Alfredo Jaramillo Vélez</td>
              <td className="px-6 py-4">Urabá</td>
              <td className="px-6 py-4">Colombia</td>
              <td className="px-6 py-4">Santa Marta</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 dar">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Funcion Publica
              </th>
              <td className="px-6 py-4">F52</td>
              <td className="px-6 py-4">Raul Sastoque Franco</td>
              <td className="px-6 py-4">Necochea</td>
              <td className="px-6 py-4">Argentina</td>
              <td className="px-6 py-4">Pedernera</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 dar">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Funcion Publica
              </th>
              <td className="px-6 py-4">F52</td>
              <td className="px-6 py-4">Ana María Cadavido</td>
              <td className="px-6 py-4">Axisima</td>
              <td className="px-6 py-4">México</td>
              <td className="px-6 py-4">Manzanillo</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
            <tr className="bg-white  border-b  hover:bg-gray-50 dar">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Cientifico
              </th>
              <td className="px-6 py-4">C31</td>
              <td className="px-6 py-4">Alfredo Jaramillo Vélez</td>
              <td className="px-6 py-4">Urabá</td>
              <td className="px-6 py-4">Colombia</td>
              <td className="px-6 py-4">Santa Marta</td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/fichas.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4 ">
                <img
                  className="w-8  object-cover"
                  src="/assets/video.png"
                  alt="ficha"
                />
              </td>
              <td className="px-6 py-4">
                <img
                  className="w-8  object-cover"
                  src="/assets/ojo.png"
                  alt="ficha"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          className="flex items-center mx-24 mb-6 justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 ">
            Showing{" "}
            <span className="font-semibold text-gray-900 ">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 ">
              1000
            </span>
          </span>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700   "
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   "
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   "
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700  "
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   "
              >
                ...
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   "
              >
                100
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700   "
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
      </div>
    </>
  );
}

export default Nodos;
/*
 */

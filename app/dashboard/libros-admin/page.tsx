"use client";
import React from "react";
import { TbBook } from "react-icons/tb";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
const Page = () => {
  return (
    <>
      <div className="flex mt-5  ml-8 ">
        <TbBook className="text-2xl mr-3 text-gray-600 group-hover:text-white " />
        <h2>&gt;</h2>
        <h2 className="ml-3">Libros</h2>
      </div>
      <div>
        <Link href="./libros-admin/agregar-libros">
          <button className="rounded-md mt-3 ml-8 py-1 px-2 text-white bg-black">
            + Agregar Libros
          </button>
        </Link>

        <div className="relative overflow-x-auto bg-white mt-2 pt-2 mx-5">
          <div className="flex justify-between">
            <h1 className="ml-3  text-xl">Libros</h1>
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Buscar
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Buscar..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Buscar</span>
              </button>
            </form>
          </div>
          <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400 border-t border-gray-300 mt-4">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-1">
                  ID
                </th>
                <th scope="col" className="px-6 py-1">
                  Titulo
                </th>
                <th scope="col" className="px-10 py-1">
                  Descripción
                </th>
                <th scope="col" className="px-6 py-1">
                  Archivo
                </th>
                <th scope="col" className="px-6 py-1">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-t border-gray-300">
                <th
                  scope="row"
                  className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-2">El mar y el oceano</td>
                <td className="px-10 py-2 ">
                  <p className="h-24 w-32 md:w-auto md:h-auto overflow-y-auto">
                    El océano es quizás el elemento más perjudicado por las
                    acciones del ser humano y también el menos conocido. Vivimos
                    ignorantes del verdadero diamante del planeta porque solo
                    nos preocupamos por la vida sobre tierra. Lo que no sabemos
                    es que bajo nuestros pies hay un mundo muy complejo, tanto,
                    que solo ha llegado a explorarse el 5%. Imagina lo que queda
                    aún por descubrir.
                  </p>
                </td>
                <td className="px-6 py-2">
                  <img src="/public/assets/pdf.png" alt="PDF" />
                </td>
                <td>
                  <div className="ml-2">
                    <Dropdown label="...">
                      <Dropdown.Item>Editar</Dropdown.Item>
                      <Dropdown.Item>Borrar</Dropdown.Item>
                    </Dropdown>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-t border-gray-300">
                <th
                  scope="row"
                  className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-2">El mar y el oceano</td>
                <td className="px-10 py-2 ">
                  <p className="h-24 w-32 md:w-auto md:h-auto overflow-y-auto">
                    El océano es quizás el elemento más perjudicado por las
                    acciones del ser humano y también el menos conocido. Vivimos
                    ignorantes del verdadero diamante del planeta porque solo
                    nos preocupamos por la vida sobre tierra. Lo que no sabemos
                    es que bajo nuestros pies hay un mundo muy complejo, tanto,
                    que solo ha llegado a explorarse el 5%. Imagina lo que queda
                    aún por descubrir.
                  </p>
                </td>
                <td className="px-6 py-2">
                  <img src="/public/assets/pdf.png" alt="PDF" />
                </td>
                <td>
                  <div className="ml-2">
                    <Dropdown label="...">
                      <Dropdown.Item>Editar</Dropdown.Item>
                      <Dropdown.Item>Borrar</Dropdown.Item>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Page;

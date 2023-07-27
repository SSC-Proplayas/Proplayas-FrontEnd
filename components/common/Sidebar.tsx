"use client";
import React from "react";
import Link from "next/link";
import {
  MdOutlineSpaceDashboard,
  MdNewspaper,
  MdOutlineSettings,
  MdOutlineLogout,
  MdPeopleOutline,
} from "react-icons/md";
import { FaRegComments, FaRegNewspaper } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { TbBook } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      })
      .finally(() => {
        router.push("/auth/login");
      });
  };

  return (
    <div className="grid grid-rows-3 h-screen bg-white border">
      <div className="row-span-1 border-b">
        <div className="flex items-center justify-center h-14">
          <div className="font-bold text-[#00A1FF]">PANEL ADMINISTRATIVO</div>
        </div>
        <div className="row-span-2 overflow-y-auto overflow-x-hidden">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <MdOutlineSpaceDashboard className="inline-flex justify-center items-center ml-4 text-2xl text-gray-600 group-hover:text-white " />
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/libros-admin"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <TbBook className="inline-flex justify-center items-center ml-4 text-2xl text-gray-600 group-hover:text-white " />
                <span className="ml-2 text-sm tracking-wide truncate">
                  Libros
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <MdNewspaper className="inline-flex justify-center items-center ml-4 text-2xl text-gray-600 group-hover:text-white " />
                <span className="ml-2 text-sm tracking-wide truncate">
                  Publicacion
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <MdPeopleOutline className="inline-flex justify-center items-center ml-4 text-2xl text-gray-600 group-hover:text-white " />
                <span className="ml-2 text-sm tracking-wide truncate">
                  Nodos
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <BiMessageSquareDots className="inline-flex justify-center items-center ml-4 text-2xl text-gray-600 group-hover:text-white " />
                <span className="ml-2 text-sm tracking-wide truncate">
                  Webinar
                </span>
              </a>
            </li>

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </a>
            </li>
            <li>
              <NavLink
                onClick={handleLogout}
                className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 px-0 hover:text-gray-800 border-l-4 border-transparent hover:border-[#00A1FF] pr-6"
              >
                <MdOutlineLogout className="inline-flex justify-center items-center ml-4  text-2xl text-gray-600 group-hover:text-white " />
                <span className="ml-2 text-sm font-italic text-black tracking-wide truncate">
                  Cerrar Sesion
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

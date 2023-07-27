"use client"
import React from "react";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#343A40]">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-20 mb-3 ">
        <div className="flex flex-col gap-4 mt-10 text-center">
          <h2 className="text-white">Redes Sociales</h2>
          <div className="flex items-center justify-center gap-6">
              <Image src="/assets/facebook.png" width="24" height="24" alt=""/>
              <Image src="/assets/instagram.png" width="24" height="24" alt=""/>
              <Image src="/assets/linkind.png" width="30" height="28" alt=""/>
              <Image src="/assets/twitter.png" width="30" height="28" alt=""/>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 mt-10 text-center ">
          <h2 className="text-white">Redes Sociales</h2>
          <div className="flex items-center justify-center gap-6">
              <Image src="/assets/portugal.png" width="24" height="24" alt=""/>
              <Image src="/assets/estados_unidos.png" width="24" height="24" alt=""/>
              <Image src="/assets/mexico.png" width="24" height="28" alt=""/>
          </div>
        </div>
        
        <div className="flex flex-col mt-10 gap-2">
          <Link href="/auth/login/" className="text-white ">Inicio de Sesion</Link>
          <Link  href="#" className="text-white">Aviso de Privacidad y seguridad</Link>
          <Link  href="#" className="text-white">Terminos de Uso</Link>
        </div>

      </div>

      <div className="text-center pb-3 mx-2">
      <p className="text-white text-xs ">© 2022 RedIberoamericana de Gestion y Certificacion de Playas (PROPLAYAS)</p>
      </div>
    </div>
  );
};

export default Footer;

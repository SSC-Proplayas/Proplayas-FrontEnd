import type { Metadata } from 'next';
import Image from "next/image";
import Carousel from "../components/common/Carousel";
import CardsHome from "../components/common/CardsHome";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Proplayas | Home',
	description: 'Proplayas home page',
};



export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-center h-[350px] md:h-[550px] lg:h-[650px] xl:h-[760px]">
        <Carousel />
      </div>
      <div>
        <h1 className="text-center font-bold text-[#00A1FF] text-4xl mt-20 mb-20">
          NOSOTROS
        </h1>
        <CardsHome />
      </div>
      <div >
        <h1 className="text-center font-bold text-[#00A1FF] text-4xl mt-20 mb-10">
          NODOS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-24 gap-8 mb-24">
          <div className="order-2 lg:order-1 mt-16 px-2 lg:px-10">
            <p className="font-normal text-xl text-justify text-gray-700 lg:mt-10">
              Se constituyen por grupos de profesores, estudiantes e
              investigadores reunidos en espacios de trabajo científico. Su
              misión principal es la de generar conocimiento en forma de
              conceptos, metodologías y casos de estudio, para innovar la
              gestión integrada de las playas de Iberoamérica.
            </p>
            <p className="font-normal text-xl text-justify text-[#00A1FF] mt-12 lg:mt-24">
              Los Nodos Científicos están siempre investigando, en proyectos que
              van desde el ámbito local de una playa hasta análisis de playas en
              varios países simultáneamente.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <Image src="/assets/nodos.png" width="2000" height="200" alt=''/>
          </div>
        </div>
      </div>
      <div className="bg-[#00A1FF]">
        <h1 className="text-center font-bold text-white text-4xl py-10">
          MAS DE NOSOTROS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center ">
          {/** Card */}
          <div className="max-w-sm  mb-4 rounded-lg ">
            <img className="rounded-t-lg" src="/assets/img3.png" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                Nodos empresariales
              </h5>

             <div className="flex justify-center">
             <Link
                href="/nodos"
                className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-[#00A1FF] bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Ver Mas
               
              </Link>
             </div>
            </div>
          </div>
          {/** Card */}
          <div className="max-w-sm  mb-4 rounded-lg ">
            <img className="rounded-t-lg" src="/assets/img1.png" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                Sociedad y Activismo
              </h5>
              <div className="flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-[#00A1FF] bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Ver Mas
                
              </Link>
              </div>
            </div>
          </div>
          {/** Card */}
          <div className="max-w-sm  mb-4 rounded-lg ">
            <img className="rounded-t-lg" src="/assets/img2.png" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
              Reglamentacion
              </h5>
              <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-[#00A1FF] bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Ver Mas
                
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}


"use client"
import React from "react";

const CardsHome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center ">
      {/** Card */}
      <div className="max-w-sm bg-white border border-gray-200 mb-4 rounded-lg shadow ">
        <img className="rounded-t-lg" src="/assets/placeholder.png" alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 ">
            ORGANIZACION EN RED
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            La Red PROPLAYAS es una plataforma de intercambio colaborativo en
            gestión y certificación de playas, con espectro de acción en 17
            países de América Latina y la Península Ibérica. Somos científicos,
            activistas y empresarios integrados para un objetivo común: la
            Gestión de Playas.{" "}
          </p>
        </div>
      </div>
      {/** Card */}
      <div className="max-w-sm bg-white border border-gray-200 mb-4 rounded-lg shadow ">
        <img className="rounded-t-lg" src="/assets/placeholder.png" alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 ">
            ACTIVIDADES
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            La Red PROPLAYAS abarca todas las actividades que puedan
            relacionarse con mantener playas saludables y atractivas. Desde
            proyectos de investigación y campañas de concientización ciudadana,
            hasta servicios de consultoría y eventos académicos. Cualquier
            actividad que hace uno de nuestros Nodos Locales, es automáticamente
            una actividad de la Red..{" "}
          </p>
        </div>
      </div>
      {/** Card */}
      <div className="max-w-sm bg-white border border-gray-200 mb-4 rounded-lg shadow ">
        <img className="rounded-t-lg" src="/assets/placeholder.png" alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 ">
            ALIANZA
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Son primordiales para el crecimiento institucional. La alianza más
            reciente que poseemos es el Memorando de Entendimiento entre la
            Asociación Argentina de Geología Aplicada a la Ingeniería (ASAGAI) y
            la Red Iberoamericana de Gestión y Certificación de Playas
            (PROPLAYAS). Para más información sobre el memorando dar clic en el
            botón de abajo.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsHome;

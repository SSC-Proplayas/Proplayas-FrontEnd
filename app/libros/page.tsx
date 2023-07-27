import React from "react";

import Link from "next/link";

const libros = [
  {
    id: 1,
    name: "Veinte mil leguas de viaje submarino",
    href: "#",
    imgSrc:
      "https://www.planetadelibros.com.mx/usuaris/libros/fotos/338/m_libros/337056_portada_veinte-mil-leguas-de-viaje-submarino_jules-verne_202105251825.jpg",
    imgAlt:
      "Portada del libro 'Veinte mil leguas de viaje submarino' de Julio Verne",
  },
  {
    id: 2,
    name: "La vida secreta de los peces",
    href: "#",
    imgSrc:
      "https://m.media-amazon.com/images/I/41oNdg+q8IL._SY344_BO1,204,203,200_.jpg%22:[230,346],%22https://m.media-amazon.com/images/I/41oNdg+q8IL._SX329_BO1,204,203,200_.jpg",
    imgAlt:
      "Portada del libro 'La vida secreta de los peces' de Jonathan Balcombe",
  },
  {
    id: 3,
    name: "El mundo azul: Aventura en los cinco océanos",
    href: "#",
    imgSrc:
      "https://m.media-amazon.com/images/I/71burvUyDfL._AC_UF1000,1000_QL80_.jpg",
    imgAlt:
      "Portada del libro 'El mundo azul: Aventura en los cinco océanos' de Alberto Vázquez-Figueroa",
  },
  {
    id: 4,
    name: "El océano al final del camino",
    href: "#",
    imgSrc: "https://www.rocalibros.com/archivos/imagenes/mayores/588.jpg",
    imgAlt: "Portada del libro 'El océano al final del camino' de Neil Gaiman",
  },
  {
    id: 5,
    name: "La playa de los ahogados",
    href: "#",
    imgSrc: "https://m.media-amazon.com/images/I/71+y1BzM3kL.jpg",
    imgAlt: "Portada del libro 'La playa de los ahogados' de Domingo Villar",
  },
  {
    id: 6,
    name: "El lago",
    href: "#",
    imgSrc:
      "https://1.bp.blogspot.com/-kpaCEqDZy2w/VaUEIge2v5I/AAAAAAAAHok/vWIgTNhMrJE/s1600/En%2Bel%2Blago%252C%2Bel%2Blago%2BYasunari%2BKawabata.JPG",
    imgAlt: "Portada del libro 'El lago' de Yasunari Kawabata",
  },
  {
    id: 7,
    name: "Río sagrado",
    href: "#",
    imgSrc: "https://m.media-amazon.com/images/I/51ps6wapmdL.jpg",
    imgAlt: "Portada del libro 'Río sagrado' de Wilbur Smith",
  },
  {
    id: 8,
    name: "Oceanografía y vida marina",
    href: "#",
    imgSrc: "https://m.media-amazon.com/images/I/41202sk4UWL.jpg",
    imgAlt: "Portada del libro 'Oceanografía y vida marina' de Sylvia A. Earle",
  },
];

const page = () => {
  return (
    <div>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <form className="flex items-center">
            <label for="simple-search" className="sr-only">
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
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Buscar libros..."
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-[#00A1FF] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-6">
            Libros
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {libros.map((libro) => (
              <a key={libro.id} href={libro.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={libro.imgSrc}
                    alt={libro.imgAlt}
                    className="h-[400px] w-full object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{libro.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client"
import React, { useState } from "react";
import axios from "axios";

function UploadBookForm() {
  const [title, setTitle] = useState("");
  const [bookFile, setBookFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bookFile || !coverImage) {
      console.error("Please provide a book file and cover image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("book_file", bookFile);
    formData.append("cover_image", coverImage);

    try {
      const response = await axios.post("/api/books/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Book uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading book:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl mt-2 font-bold">Agregar Libros</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="px-6 py-6 lg:px-8 border border-gray-400 rounded bg-white md:w-6/12  md:h-3/5">
          <form
            className="space-y-4 lg:grid-cols-2 grid gap-5 grid-cols-1 "
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="titulo"
                className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Titulo
              </label>
              <input
                type="text"
                name="titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="titulo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="El Oceano"
                required
              />
            </div>

            <div>
              <label
                htmlFor="bookFile"
                className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Subir Libro:
              </label>
              <input
                id="bookFileInput"
                type="file"
                className=""
                accept=".pdf"
                required
              />
            </div>
            <div>
              <label
                htmlFor="coverInput"
                className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Subir Portada:
              </label>
              <input
                id="coverImageFileInput"
                type="file"
                className=""
                accept="image/*"
                onChange={(e) => setCoverImage(e.target.files[0])}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadBookForm;

import React from 'react'
const Page = () => {
  return (

      <div className=''>
        <div className='flex justify-center'><h1 className='text-4xl mt-4 font-bold'>Agregar Libros</h1></div>
        <div className='h-screen flex items-center justify-center'>
          <div className="px-6 py-6 lg:px-8 border border-gray-400 rounded bg-white md:w-6/12  md:h-3/5">
              <form className="space-y-6" action="#">
                      <div>
                          <label htmlFor="for" className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white">Titulo</label>
                          <input type="text" name="titulo" id="titulo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="El Oceano" required/>
                      </div>
                      <div>
                          <label htmlFor="descripcion"  className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white">Descripcíon</label>
                          <textarea type="text" rows="5" cols="33" name="descripcion" id="descripcion" placeholder="El océano es quizás el elemento más perjudicado por las acciones..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                      </div>
                      <div>  
                            <input
                              id="fileInput"
                              type="file"
                              className=""
                              accept="application/pdf"
                            />
                      </div>
                      <div className='flex justify-center'><button type="submit" className="w-40  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button></div>
                      
              </form>
          </div>
          
        </div>
      </div>
      
    
  )
}

export default Page

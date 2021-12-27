import Layout from 'components/Layout'
import Image from 'next/image'
import React from "react";
import {SearchIcon, CameraIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import useUser from 'lib/useUser';
// import '@headlessui/react'

export default function Home() {
  const { user } = useUser({
    redirectTo: '/login',
  })
  return (
    <Layout>







    





      <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
    <h1 className="text-3xl font-bold leading-normal mb-6">Welkom{user && <span className='font-light'>, {user.login}</span>}</h1>








    <div className="   mx-auto">
      
      <nav className="space-y-4" aria-label="Sidebar">
        
          
            {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:bg-gray-50 hover:text-gray-900" */}
            <a href="/scan" className="border border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-600 shadow-sm hover:border-red-600 transition duration-300 ease-in-out" aria-current="page">
              {/* Current: "text-gray-600", Default: "text-gray-400" */}
              <svg className="group-hover:text-white transition duration-300 ease-in-out text-gray-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <CameraIcon/>
    </svg>
              <span className="truncate group-hover:text-white transition duration-300 ease-in-out">
                Scannen
              </span>
              
                {/* Current: "bg-gray-50", Default: "bg-gray-200 text-gray-700" */}
                {/* <span className="bg-gray-50 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
                  5
                </span> */}
              </a>



              <a href="/search" className="border border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-600 shadow-sm hover:border-red-600 transition duration-300 ease-in-out" aria-current="page">
              {/* Current: "text-gray-600", Default: "text-gray-400" */}
              <svg className="group-hover:text-white transition duration-300 ease-in-out text-gray-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <SearchIcon/>
    </svg>
              <span className="truncate group-hover:text-white transition duration-300 ease-in-out">
                Zoeken
              </span>
              
                {/* Current: "bg-gray-50", Default: "bg-gray-200 text-gray-700" */}
                {/* <span className="bg-gray-50 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
                  5
                </span> */}
              </a>
          
          
            
          
      </nav>
    
        </div>




{/* 

    <div className="grid grid-cols-2 space-x-4">



         <Link href="/scan">
        <div className="max-w-sm rounded-sm border border-gray-200 bg-white group hover:bg-red-600 shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
            <div className="px-8 pb-4 ">
                <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
                    <CameraIcon
                        className="text-center w-12 text-red-600 group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
                </i>
                <h2 className="text-gray-800 pt-4 text-md text-center font-bold group-hover:text-white transition duration-300 ease-in-out">Scannen</h2>
            </div>
        </div>
         </Link>

        <Link href="/search">
        <div className="max-w-sm  rounded-sm border border-gray-200 bg-white group hover:bg-red-600 shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
            <div className="px-8 pb-4 ">
                <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
                    <SearchIcon
                        className="text-center w-12 text-red-600 group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
                </i>
                <h2 className="text-gray-800 pt-4 text-md text-center font-bold group-hover:text-white transition duration-300 ease-in-out">Zoeken</h2>
            </div>
        </div>
        </Link>


    </div> */}


    </div>
    </Layout>
  )
}

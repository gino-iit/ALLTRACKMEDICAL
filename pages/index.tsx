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

    <div className="grid grid-cols-2 space-x-4">



         <Link href="/scan">
        <div className="max-w-sm rounded-sm border border-gray-200 bg-white group hover:bg-red-500 shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
            <div className="px-8 pb-4 ">
                <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
                    <CameraIcon
                        className="text-center w-12 text-red-500 group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
                </i>
                <h2 className="text-gray-800 pt-4 text-md text-center font-bold group-hover:text-white transition duration-300 ease-in-out">Scannen</h2>
            </div>
        </div>
         </Link>

        <Link href="/search">
        <div className="max-w-sm  rounded-sm border border-gray-200 bg-white group hover:bg-red-500 shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
            <div className="px-8 pb-4 ">
                <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
                    <SearchIcon
                        className="text-center w-12 text-red-500 group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
                </i>
                <h2 className="text-gray-800 pt-4 text-md text-center font-bold group-hover:text-white transition duration-300 ease-in-out">Zoeken</h2>
            </div>
        </div>
        </Link>


    </div>


    </div>
    </Layout>
  )
}

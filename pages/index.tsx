import Layout from 'components/Layout'
import Image from 'next/image'
import React from "react";
import {SearchIcon, CameraIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import useUser from 'lib/useUser';
import * as cookie from 'cookie'
import redis from '../lib/connections/redis';

// import '@headlessui/react'

export default function Home({User} : { User: any}) {
  const { user } = useUser({
    redirectTo: '/login',
  })
  return (
    <Layout>

      <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">




    <div className="   mx-auto">
      
      <nav className="space-y-4" aria-label="Sidebar">
        
      <h1 className="text-3xl font-bold leading-normal mb-6">Welkom{User && <a className="text-3xl font-light leading-normal mb-6">, {User.Username}</a>}</h1>
            {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:bg-gray-50 hover:text-gray-900" */}
            <a href="/scan" className="border bg-white px-6 py-4 border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page">
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



              <a href="/search" className="border bg-white px-6 py-4 border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page">
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
        <div className="max-w-sm rounded-sm border border-gray-200 bg-white group hover:bg-primary shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
            <div className="px-8 pb-4 ">
                <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
                    <CameraIcon
                        className="text-center w-12 text-primary group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
                </i>
                <h2 className="text-gray-800 pt-4 text-md text-center font-bold group-hover:text-white transition duration-300 ease-in-out">Scannen</h2>
            </div>
        </div>
         </Link>

        <Link href="/search">
        <div className="max-w-sm  rounded-sm border border-gray-200 bg-white group hover:bg-primary shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
            <div className="px-8 pb-4 ">
                <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
                    <SearchIcon
                        className="text-center w-12 text-primary group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
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




// This gets called on every request
export async function getServerSideProps(context: { req: { headers: { cookie: string; }; }; res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; }; }) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = 'await res.json'
  // console.log(context);


    try {
      const cookies = cookie.parse(context.req.headers.cookie);
      // console.log(cookies.User);
      const loggedIn =  cookies.userSession ? true : false;
  
      // console.log(loggedIn);
  
      if (!loggedIn){
        context.res.statusCode = 302
        context.res.setHeader('Location', `/logout`) // Replace <link> with your url link
        return {props: {}}
      }
    
    // var data = JSON.parse(await redis.get('AA'))
    // r.set('int', 1)
    const User = JSON.parse(cookies.User);
    
    // redis.incr('int');
    // console.log(await redis.get('int'))
    // console.log(await r.get('AA'))
    // console.log(cookie.parse(context.req.headers.cookie))
    //['iron-session/examples/next.js']
      // Pass data to the page via propsspo
      return { props: { User } }
    } catch (error) {
      // console.log(error.message)
      context.res.statusCode = 302
      context.res.setHeader('Location', `/login`) // Replace <link> with your url link
      return {props: {}}
    }


  }
 





import Layout from 'components/Layout'
import Image from 'next/image'
import {React, useState, useEffect} from "react";
import {SearchIcon, CameraIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import useUser from 'lib/useUser';
import { useRouter } from 'next/router'
import * as cookie from 'cookie'
import fetchJson, { FetchError } from 'lib/fetchJson'
import Overview from '../../components/Overview'

// import '@headlessui/react'

export default function Home({res}) {
  const { user } = useUser({
    redirectTo: '/login',
  })


  const router = useRouter()
  const { id } = router.query;




  const [materialTypes, setmaterialTypes] = useState(null);
  const [name, setName] = useState(null);

      useEffect(() => {
          if (typeof window !== "undefined") {

              // setmaterialTypes(localStorage.getItem("MaterialTypes"));

              // setName(res.filter(obj => obj.MaterialTypeID == materialTypeID)[0].Name);

              }           
              
              
            });




  // {MaterialTypes.filter(obj => obj.MaterialTypeID == this.props.MaterialTypeID)[0].Name}
  return (
    <Layout>


      <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
    <h1 className="text-3xl font-bold leading-normal mb-6">{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].MaterialTypeName} <br/><span className='font-light'>{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].LocationName}</span></h1>






{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].Name}
{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].LocationName}

{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].MaterialTypeID}
{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].LastSeen}




    <div className="   mx-auto">
      
      <nav className="space-y-4" aria-label="Sidebar">
        
          
            {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:bg-gray-50 hover:text-gray-900" */}
            <a href="/scan" className="border bg-white px-6 py-4 border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-600 shadow-sm hover:border-red-600 transition duration-300 ease-in-out" aria-current="page">
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



              <a href="/search" className="border bg-white px-6 py-4 border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-600 shadow-sm hover:border-red-600 transition duration-300 ease-in-out" aria-current="page">
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


  export async function getServerSideProps(context: { req: { session: { user: any; }; }; }) {
    const user = context.req.session.user;
    console.log(user);
    // Fetch data from external API
    var session = "session=" + user.sessionID; //+ cookie.parse(context.req.headers.cookie.userSession);
    // var res = await fetchJson('http://asz-assets.test.improvement-it.nl/material-items/get', {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json', "Cookie": session }
    //   })

    // console.log(res);
    // // Pass data to the page via props
    // return { props: { res } }
    return { props: {  } }

  }
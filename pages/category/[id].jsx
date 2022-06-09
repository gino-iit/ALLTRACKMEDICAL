import React, { useEffect } from 'react'
import Layout from 'components/Layout'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { User } from 'pages/api/user'

import { InferGetServerSidePropsType } from 'next'
import fetchJson from 'lib/fetchJson'
import moment from "moment";
import 'moment/locale/nl';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function SsrProfile({
  user, data
}) {

  const router = useRouter();
   
  // console.log({ basePath: router.basePath}); 

  return (
      <>
    <Layout>


<div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
<link rel="stylesheet" href="https://tailwindui.com/css/components-v2.css"/>

    <h1 className="text-3xl font-bold leading-normal">{data && data[0]?.MaterialTypeName}</h1>
    {data[0]?.MaterialTypeName ? 
    <h3 className="text-xl font-light leading-normal mb-6">Welke heb je precies nodig{user?.isLoggedIn && (
        <>
          <b className="font-bold">, {user.login}
             
            </b>
            
        </>
      )}?</h3>
      : (<>
      <h1 className="text-3xl font-bold leading-normal">Dit is een lege categorie...</h1><h3 className="text-xl font-light leading-normal mb-6">Neem contact op met het systeembeheer op assets toe te voegen.</h3></>)
      
      }



  <ul className="divide-y divide-gray-200">
    {data && data.map((item, index) => (
        
<Link href={"/item/" + item.MaterialItemID}>


{/* <a href={"/category/" + item.MaterialTypeID + "/" + item.MaterialItemID} className="flex border mb-2 bg-white px-6  border-gray-200 group text-gray-900 flex items-center px-3  text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page"> */}
<div  className="flex cursor-pointer border mb-2 bg-white px-6  border-gray-200 group text-gray-900 flex items-center px-3  text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page">

<li className="py-4 flex">
{/* <img src="https://www.svgrepo.com/show/20306/hospital.svg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"/> */}

<img className="h-8 w-8 m-auto my-auto" src="https://www.svgrepo.com/show/20306/hospital.svg" alt=""/>
<div className="ml-3">
<p className="text-sm group-hover:text-white font-medium text-gray-900">{item.MaterialTypeName} # {item.Name}, </p>
<p className="text-sm group-hover:text-white font-light text-gray-500"> Laatst gezien op adeling {item.LocationName}, {moment(item.KLstSeen).locale('nl').startOf('day').fromNow()}</p>
</div>
</li>        </div>

</Link>

))}
  </ul>

 
  </div>




    </Layout>

    </>
  )
}


export const getServerSideProps = withIronSessionSsr(async function ({
    req,
    res,
    query
  }) {
    const user = req.session.user
  
    if (user === undefined) {
      res.setHeader('location', '/login')
      res.statusCode = 302
      res.end()
      return {
        props: {
          user: { isLoggedIn: false, login: '', sessionID: '' } ,
        },
      }
    }
  
  
    console.log(query.id)
  
  
  
      var session = "session=" + req.session.user?.sessionID; //+ cookie.parse(context.req.headers.cookie.userSession);
          var data = await fetchJson(process.env.BASE_URL + 'api/material_types', {
            method: 'POST',
            headers: {         'Content-Type': 'application/json;charset=UTF-8', "Cookie": session, "User-Agent": "PDA"        },
            body: JSON.stringify({"session": req.session.user?.sessionID, "Name": String(query.id)}),
          })
  
  
  
          data = data.data.map(x => x) .filter(data => data.MaterialTypeID == query.id)
  
          
  
    return {
      props: { user: req.session.user, data: data },
    }
  },
  sessionOptions)
  





// import Layout from 'components/Layout'
// import Image from 'next/image'
// import React, { useState, useEffect} from "react";
// import {SearchIcon, CameraIcon} from '@heroicons/react/outline'
// import Link from 'next/link'
// import useUser from 'lib/useUser';
// import { useRouter } from 'next/router'
// import * as cookie from 'cookie'
// import fetchJson, { FetchError } from 'lib/fetchJson'
// import Overview from '../../components/Overview'
// import axios from 'axios';
// import { withIronSessionSsr } from 'iron-session/next/dist';
// import { sessionOptions } from 'lib/session';
// import { User } from 'pages/api/user';
// import { InferGetServerSidePropsType } from 'next'


// // import '@headlessui/react'

// export default function Home({
//   user,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   // const { user } = useUser({
//   //   redirectTo: '/login',
//   // })


//   const router = useRouter()
//   const { id } = router.query;




//   const [materialTypes, setmaterialTypes] = useState(null);
//   const [name, setName] = useState(null);

//       useEffect(() => {
//           if (typeof window !== "undefined") {

//               // setmaterialTypes(localStorage.getItem("MaterialTypes"));

//               // setName(res.filter(obj => obj.MaterialTypeID == materialTypeID)[0].Name);

//               }           
              
              
//             });




//   // {MaterialTypes.filter(obj => obj.MaterialTypeID == this.props.MaterialTypeID)[0].Name}
//   return (
//     <Layout>


//       <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
//     <h1 className="text-3xl font-bold leading-normal mb-6">{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].MaterialTypeName} <br/><span className='font-light'>{res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].LocationName}</span></h1>






// {res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].Name}
// {res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].LocationName}

// {res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].MaterialTypeID}
// {res.data.filter((obj: { MaterialTypeID: string | string[] | undefined; }) => obj.MaterialTypeID == id)[0].LastSeen}




//     <div className="   mx-auto">
      
//       <nav className="space-y-4" aria-label="Sidebar">
        
          
//             {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:bg-gray-50 hover:text-gray-900" */}
//             <a href="/scan" className="border bg-white px-6 py-4 border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-600 shadow-sm hover:border-red-600 transition duration-300 ease-in-out" aria-current="page">
//               {/* Current: "text-gray-600", Default: "text-gray-400" */}
//               <svg className="group-hover:text-white transition duration-300 ease-in-out text-gray-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <CameraIcon/>
//     </svg>
//               <span className="truncate group-hover:text-white transition duration-300 ease-in-out">
//                 Scannen
//               </span>
              
//                 {/* Current: "bg-gray-50", Default: "bg-gray-200 text-gray-700" */}
//                 {/* <span className="bg-gray-50 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
//                   5
//                 </span> */}
//               </a>



//               <a href="/search" className="border bg-white px-6 py-4 border-gray-200 group text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-600 shadow-sm hover:border-red-600 transition duration-300 ease-in-out" aria-current="page">
//               {/* Current: "text-gray-600", Default: "text-gray-400" */}
//               <svg className="group-hover:text-white transition duration-300 ease-in-out text-gray-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6" data-todo-x-description="Heroicon name: home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <SearchIcon/>
//     </svg>
//               <span className="truncate group-hover:text-white transition duration-300 ease-in-out">
//                 Zoeken
//               </span>
              
//                 {/* Current: "bg-gray-50", Default: "bg-gray-200 text-gray-700" */}
//                 {/* <span className="bg-gray-50 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
//                   5
//                 </span> */}
//               </a>
          
          
            
          
//       </nav>
    
//         </div>




// {/* 

//     <div className="grid grid-cols-2 space-x-4">



//          <Link href="/scan">
//         <div className="max-w-sm rounded-sm border border-gray-200 bg-white group hover:bg-red-600 shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
//             <div className="px-8 pb-4 ">
//                 <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
//                     <CameraIcon
//                         className="text-center w-12 text-red-600 group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
//                 </i>
//                 <h2 className="text-gray-800 pt-4 text-md text-center font-bold group-hover:text-white transition duration-300 ease-in-out">Scannen</h2>
//             </div>
//         </div>
//          </Link>

//         <Link href="/search">
//         <div className="max-w-sm  rounded-sm border border-gray-200 bg-white group hover:bg-red-600 shadow-lg rounded-xl pt-6 pb-2 transition duration-300 ease-in-out">
//             <div className="px-8 pb-4 ">
//                 <i className="text-gray-800 pt-6 mt-2  text-xl text-center font-bold group-hover:text-white transition duration-300 ease-in-out">
//                     <SearchIcon
//                         className="text-center w-12 text-red-600 group-hover:text-white transition duration-300 ease-in-out mx-auhref"/>
//                 </i>
//                 <h2 className="text-gray-800 pt-4 text-md text-center font-bold group-hover:text-white transition duration-300 ease-in-out">Zoeken</h2>
//             </div>
//         </div>
//         </Link>


//     </div> */}


//     </div>
//     </Layout>
//   )
// }


//   // export async function getServerSideProps(context: any) {
//   //   console.log(context);




//   //   // const data = await axios.post("localhost:3000/api/material_types", {
//   //   //   // id: context.params.id,
//   //   // });
//   //   // console.log("Posted to API");
//   //   // console.log(JSON.stringify(data));
  




//   //   // const user = context.req.session.user;
//   //   // console.log(user);
//   //   // Fetch data from external API
//   //   console.log(context.req.headers.cookie);
//   //   var session = "session=" + context.req.headers.cookie.userSession; //+ cookie.parse(context.req.headers.cookie.userSession);
//   //   var data = await fetchJson('http://localhost:3000/api/material_types', {
//   //       method: 'GET',
//   //       headers: { 'Content-Type': 'application/json', "Cookie": session }
//   //     })

//   //   console.log(data);
//   //   // // Pass data to the page via props
//   //   // return { props: { res } }
//   //   return { props: { data } }

//   // }






//   export const getServerSideProps = withIronSessionSsr(async function ({
//     req,
//     res,
//   }) {
//     const user = req.session.user
  
//     if (user === undefined) {
//       res.setHeader('location', '/login')
//       res.statusCode = 302
//       res.end()
//       return {
//         props: {
//           user: { isLoggedIn: false, login: '', sessionID: '' } as User,
//         },
//       }
//     }



//     var session = "session=" + req.session.user?.sessionID; //+ cookie.parse(context.req.headers.cookie.userSession);
//     var data = await fetchJson('http://localhost:3000/api/material_types', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json', "Cookie": session }
//     })
  
//     return {
//       props: { user: req.session.user },
//     }
//   },
//   sessionOptions)
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/empty.json";
import Alert from "../components/Alert";
import { Offline } from "react-detect-offline";
import { useRouter } from "next/router";
import "@heroicons/react/outline";
import Layout from "components/Layout";
import useUser from "lib/useUser";
import Overview from "../components/Overview";
import axios from "axios";
import Result from "components/Result"
import fetchJson, { FetchError } from 'lib/fetchJson'
import * as cookie from 'cookie'


export default function Test() {
    
        

return(
    <ul class="absolute transition ease-in-out z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
    <a>Ghi</a>

{ materialTypes && JSON.parse(materialTypes).map(x=>x.Name)}
{/* {materialTypes && materialTypes.map(x=>
    
    <a>{x.Name}</a>
    
    )} */}


    </ul>
)
  
  }


  


//   export async function getServerSideProps() {

//     // Fetch data from external API
//     var session = "session=" + cookie.parse(context.req.headers.cookie.userSession);
//     var res = await fetchJson('http://asz-assets.test.improvement-it.nl/material-types/get', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json', "Cookie": session }
//       })

//     console.log(res);
//     // Pass data to the page via props
//     return { props: { res } }

//   }
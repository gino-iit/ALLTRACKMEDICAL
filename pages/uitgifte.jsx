import React, { useEffect, useState, Fragment } from 'react'
import Layout from 'components/Layout'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { User } from 'pages/api/user'
import { Dialog, Transition, Menu, ChevronDownIcon } from "@headlessui/react";

import { InferGetServerSidePropsType } from 'next'
import fetchJson from 'lib/fetchJson'
import moment from "moment";
import 'moment/locale/nl';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Example from '../components/Example'



export default function SsrProfile({
  user, data, locations, url, session
}) {
  let [item, setItem] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [qrValue, setQrValue] = useState(null);
  let [locationV, setLoca] = useState(null);
  let [itemValue, setItemValue] = useState(null);
  const router = useRouter();
   

  function setLocationValue(event){
    setLoca(event.target.value);  
  }

  function setLocation(id, location) {

    if (confirm('Weet je het zeker?')) {




      fetch(`/api/assign`, {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json;charset=UTF-8', "Cookie": String(session), "User-Agent": "PDA"
    },
        body: JSON.stringify(
            {"MaterialItemID": id, "LocationID": location, "sessionId": String(session)})
    })
    .then((response) => {

      alert("Gelukt!")
      setIsOpen(false);
      router.reload();
      router.push('/uitgifte')
    })
    .catch(error => {
      alert('Error:', JSON.stringify(error));
    });







      
      // fetchJson(`/api/assign`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      //   , body: JSON.stringify({
      //     "MaterialItemID": id,
      //     "LocationID": location})
      // }).then(() => {
      //   alert("Gelukt!")
      //   setIsOpen(false);
      //   router.reload();
      //   router.push('/uitgifte')
      // })

    }


  }





  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


  function modalUitgifte(item) {
    // setItem(item);
    console.log(name);
    setItem(item);
    setIsOpen(true);

  }

  // console.log({ basePath: router.basePath}); 

  return (
      <>
    <Layout>




    <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 "
            onClose={closeModal}
          >
            {" "}
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8  text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                     {item.Name} 
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {/* {showCamera && (
                        <div className="mt-12 rounded-lg">
                          <Scan />
                        </div>
                      )}{" "} */}Kies een locatie voor
                    </p>

            

{/* {JSON.stringify(locations.data)} */}

        {locations  &&     
<div class="relative inline-flex mt-5 ">
  <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select onChange={setLocationValue} class="border border-gray-300 rounded-md active:primary text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
{locations?.map(location => (
      <option selected value={location.LocationID}>{location.Name}</option>
)    )} 
  </select>
</div>
}  







            
                  </div>

                  <div className="mt-4">
                  <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-primary bg-primary-lightest border border-transparent rounded-md hover:primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:primary"
                      onClick={closeModal}
                    >
                      Terug
                    </button>
                    <button
                      type="button"
                      className="ml-5 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:primary"
                      onClick={() => setLocation(item.MaterialItemID, locationV)}
                    >
               
                      Bevestigen
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>







<div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
<link rel="stylesheet" href="https://tailwindui.com/css/components-v2.css"/>

    <h1 className="text-3xl font-bold leading-normal">Uitgifte</h1>
    {data[0]?.MaterialTypeName ? 
    <h3 className="text-xl font-light leading-normal mb-6">Welke heb je precies nodig{user?.isLoggedIn && (
        <>
          <b className="font-bold">, {user.login}
             
            </b>
            
        </>
      )}?</h3>
      : (<>
<h3 className="text-xl font-light leading-normal mb-6">Alle uit te geven assets op een rij.</h3></>)

      }



  <ul className="divide-y divide-gray-200">
    {data && data.map((item, index) => (
        

        
<div onClick={() => modalUitgifte(item)} >


{/* <a href={"/category/" + item.MaterialTypeID + "/" + item.MaterialItemID} className="flex border mb-2 bg-white px-6  border-gray-200 group text-gray-900 flex items-center px-3  text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page"> */}
<div  className="flex cursor-pointer border mb-2 bg-white px-6  border-gray-200 group text-gray-900 flex items-center px-3  text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page">

<li className="py-4 flex">
{/* <img src="https://www.svgrepo.com/show/20306/hospital.svg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"/> */}

<img className="h-8 w-8 m-auto my-auto" src="https://www.svgrepo.com/show/20306/hospital.svg" alt=""/>
<div className="ml-3">
<p className="text-sm group-hover:text-white font-medium text-gray-900">{item.MaterialTypeName} # {item.Name}, </p>
{/* <p className="text-sm group-hover:text-white font-light text-gray-500"> Laatst gezien op adeling {item.LocationName}, {moment(item.KLstSeen).locale('nl').startOf('day').fromNow()}</p> */}
<p className="text-sm group-hover:text-white font-light text-gray-500">Klaar voor uitgifte</p>
</div>
</li>        </div>

</div>

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
  

    var session = user.sessionID;
    
  

    // var session = "session=" + req.session.user?.sessionID; //+ cookie.parse(context.req.headers.cookie.userSession);
    var data = await fetchJson(process.env.BASE_URL + 'api/assignables', {
      method: 'POST',
      headers: {         'Content-Type': 'application/json;charset=UTF-8', "Cookie": session, "User-Agent": "PDA"        },
      body: JSON.stringify({"sessionId": session}),
    })

    data = data.data.map(x => x) //.filter(data => data.MaterialTypeID == query.id)


    var locations = await fetchJson(process.env.BASE_URL + 'api/locations', {
      method: 'POST',
      headers: {         'Content-Type': 'application/json;charset=UTF-8', "Cookie": session, "User-Agent": "PDA"        },
      body: JSON.stringify({"sessionId": session}),
    })


  
          const url = process.env.API_URL

    return {
      props: { user: req.session.user, data: data, locations: locations.data, url: url, session: session },
    }
  },
  sessionOptions)
  








  // export async function getServerSideProps() {
  //   // Fetch data from external API
  //   var session = "session=" + ""
  //   var res = await fetchJson(process.env.BASE_URL +'/material-types/get', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json', "Cookie": session },
  //       body: JSON.stringify({}),
  //     })

  //     // const data = await axios.post("/api/search_bed", {
  //     //   ultimo: ultimo,
  //     //   sessionid: sessionid,
  //     // });



  //   // Pass data to the page via props
  //   return { props: { res } }

  // }
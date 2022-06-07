
///////////////////


import React, { useState } from 'react'
import useUser from 'lib/useUser'
import Layout from 'components/Layout'
import Form from 'components/Form'
import fetchJson, { FetchError } from 'lib/fetchJson'
import {useFormik} from 'formik';
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie"
import { LockClosedIcon } from '@heroicons/react/solid'

export default function Login() {
  const router = useRouter()
  const [cookie, setCookie] = useCookies(["user"]);

  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')
  const formik = useFormik({
    initialValues: {
        Username: '',
        password: '',
    },
    onSubmit: async values => {

        const body = {
          username: formik.values.Username, 
          password: formik.values.password,
        }

        try {
          var code = await fetchJson('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
          console.log(69);
          console.log(code.response.Locations);
          localStorage.setItem('Locations', JSON.stringify(code.response.Locations));
          localStorage.setItem('MaterialTypes', JSON.stringify(code.response.MaterialTypes));
          localStorage.setItem('IdentifierTypes', JSON.stringify(code.response.IdentifierTypes));
          localStorage.setItem('Processes', JSON.stringify(code.response.Processes));
          // localStorage.setItem('User', JSON.stringify({"Username": code.response.user.Username}));
          mutateUser(code.response.user);

// {isLoggedIn: true, login: "gino", sessionID: "4hq0iel8bv70hvt7t1dcdhojpb5k0i73"}
        } catch (error) {
          if (error instanceof FetchError) {
            setErrorMsg(error.data.message)
          } else {
            console.error('An unexpected error happened:', error)
          }
        }
    
      // var JsonData = await fetchData();
      // const responseCode = JsonData["___system___"].code;
  
      // if (responseCode === 0){
      //   localStorage.setItem("sessionID", JsonData.SessionId)
      //   // of cookies
      //   setCookie("sessionID", JsonData.SessionId, {
      //     // path: "/login",
      //     maxAge: 3600, // Expires after 1hr
      //     sameSite: true,
      //   });
      //   setCookie("Username", JsonData.Username, {
      //     // path: "/login",
      //     maxAge: 3600, // Expires after 1hr
      //     sameSite: true,
      //   });
  
        
      //   router.replace("/")
      // } else {
      //   console.log("Daar ging iets niet goed...");
  
      // }
      }
    });

    
  return (
    <Layout>
  <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
  <h1 className="text-3xl text-center font-bold leading-normal mb-6">Login</h1>

  <img className="mx-auto max-h-24 mix-blend-multiply" src="https://www.wzuveluwe.nl/wp-content/themes/woonzorg-unie-veluwe/images/logo-wzuveluwe.png" />
       <form onSubmit={formik.handleSubmit}>
           <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">




             
              <div className="max-w-md w-full space-y-8">
<div>
  {/* <b>Kies je instantie</b><div className="pt-2"><Dropdown />
</div> */}
</div>

                  <div className="rounded-md shadow-sm -space-y-px"><b>Vul je gegevens in</b>
                      <div className="pt-2">
                          <label htmlFor="Username-address" className="sr-only">
                              Username
                          </label>
                          <input
                              id="Username-address"
                              name="Username"
                              type="text"
                              autoComplete="email"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                              placeholder="E-mailadres"
                              onChange={formik.handleChange}
                              value={formik.values.Username}/>


                      </div>
                      <div>
                          <label htmlFor="password" className="sr-only">
                              Wachtwoord
                          </label>
                          <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                              placeholder="Wachtwoord"
                              onChange={formik.handleChange}
                              value={formik.values.password}/>
                      </div>
                  </div>
                  <div>
                      <button
                          type="submit"
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-secondary group-hover:text-white" aria-hidden="true"/>
                           </span>
                          Inloggen
                      </button>
                  </div>
                  {errorMsg && <span className='text-primary-light'>{errorMsg}</span>}

              </div>
           </div>


           {/* {formik.values.Username}
           {formik.values.password} */}
{/* {JSON.stringify(resultData)}
Resultaat: {JSON.stringify(JsonData)} */}

       </form>

</div>
    </Layout>
  )
}



function alertUser(errorMsg) {
  alert(errorMsg);
}









//         async function go("/api/post_data", requestOptions) {
//           const data = await axios.post(baseUrl, requestOptions)
//           .then(response => alert(response));
//   }
//         go(baseUrl, requestOptions);

//         // axios.post(baseUrl, requestOptions)
//         //     .then(response => alert(response));


//         // const response = await fetch(baseUrl, requestOptions);
//         // const data = await response.json();
//         // console.log(data);
//         // alert(JSON.stringify(data, null, 2));


//     },
// });



// const fetchData = async () => {
// const req = await fetch("/api/post_data");
// const newData = await req.json();


// console.log(newData);


// alles = newData;
// return newData;
// // return setData(newData);
// };

// const handlePost = (event) => {
// // event.preventDefault();
// return JSON.stringify(fetchData());
// };



// return (
//   <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
//   <h1 className="text-3xl text-center font-bold leading-normal mb-6">Login</h1>
//        <form onSubmit={formik.handleSubmit}>
//            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//               <div className="max-w-md w-full space-y-8">


//                   <div className="rounded-md shadow-sm -space-y-px">
//                       <div>
//                           <label htmlFor="email-address" className="sr-only">
//                               Email address
//                           </label>
//                           <input
//                               id="email-address"
//                               name="email"
//                               type="email"
//                               autoComplete="email"
//                               required
//                               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                               placeholder="E-mailadres"
//                               onChange={formik.handleChange}
//                               value={formik.values.email}/>


//                       </div>
//                       <div>
//                           <label htmlFor="password" className="sr-only">
//                               Wachtwoord
//                           </label>
//                           <input
//                               id="password"
//                               name="password"
//                               type="text"
//                               autoComplete="current-password"
//                               required
//                               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                               placeholder="Wachtwoord"
//                               onChange={formik.handleChange}
//                               value={formik.values.password}/>
//                       </div>
//                   </div>
//                   <div>
//                       <button
//                           type="submit"
//                           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//                       >
//                           <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                                 <LockClosedIcon className="h-5 w-5 text-primary group-hover:text-primary" aria-hidden="true"/>
//                            </span>
//                           Inloggen
//                       </button>
//                   </div>
//               </div>
//            </div>



//            {formik.values.email}
//            {formik.values.password}
// {JSON.stringify(resultData)}
// Resultaat: {JSON.stringify(JsonData)}

//        </form>

// </div>

// )
// }



/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'





const instances = [
{
  id: 1,
  name: 'Albert Schweitzer',
  avatar:
    'https://www.asz.nl/assets/asz_2018-1.0.121/images/default/2019/logo-asz.svg',
},
{
  id: 2,
  name: 'WZU Veluwe',
  avatar:
    'https://www.wzuveluwe.nl/wp-content/themes/woonzorg-unie-veluwe/images/logo-wzuveluwe.png',
},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// export function Dropdown() {
//   const [selected, setSelected] = useState(instances[1])

//   return (
//     <Listbox value={selected} onChange={setSelected}>
//       {({ open }) => (
//         <>
//           <div className="mt-1 relative">
//             <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-light focus:border-primary-light sm:text-sm">
//               <span className="flex items-center">
//                 <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
//                 <span className="ml-3 block truncate">{selected.name}</span>
//               </span>
//               <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                 <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </span>
//             </Listbox.Button>

//             <Transition
//               show={open}
//               as={Fragment}
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
//                 {instances.map((person) => (
//                   <Listbox.Option
//                     key={person.id}
//                     className={({ active }) =>
//                       classNames(
//                         active ? 'text-white bg-primary' : 'text-gray-900',
//                         'cursor-default select-none relative py-2 pl-3 pr-9'
//                       )
//                     }
//                     value={person}
//                   >
//                     {({ selected, active }) => (
//                       <>
//                         <div className="flex items-center">
//                           <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
//                           <span
//                             className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
//                           >
//                             {person.name}
//                           </span>
//                         </div>

//                         {selected ? (
//                           <span
//                             className={classNames(
//                               active ? 'text-white' : 'text-primary',
//                               'absolute inset-y-0 right-0 flex items-center pr-4'
//                             )}
//                           >
//                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                         ) : null}
//                       </>
//                     )}
//                   </Listbox.Option>
//                 ))}
//               </Listbox.Options>
//             </Transition>
//           </div>
//         </>
//       )}
//     </Listbox>
//   )
// }














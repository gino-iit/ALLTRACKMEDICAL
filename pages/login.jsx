
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

          mutateUser(code)

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
       <form onSubmit={formik.handleSubmit}>
           <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">


                  <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                          <label htmlFor="Username-address" className="sr-only">
                              Username
                          </label>
                          <input
                              id="Username-address"
                              name="Username"
                              type="text"
                              autoComplete="email"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-400 focus:border-red-400 focus:z-10 sm:text-sm"
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
                              type="text"
                              autoComplete="current-password"
                              required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-400 focus:border-red-400 focus:z-10 sm:text-sm"
                              placeholder="Wachtwoord"
                              onChange={formik.handleChange}
                              value={formik.values.password}/>
                      </div>
                  </div>
                  <div>
                      <button
                          type="submit"
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                      >
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-red-400 group-hover:text-red-400" aria-hidden="true"/>
                           </span>
                          Inloggen
                      </button>
                  </div>
                  {errorMsg && <span className='text-red-500'>{errorMsg}</span>}

              </div>
           </div>


           {formik.values.Username}
           {formik.values.password}
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
//                               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-400 focus:border-red-400 focus:z-10 sm:text-sm"
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
//                               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-400 focus:border-red-400 focus:z-10 sm:text-sm"
//                               placeholder="Wachtwoord"
//                               onChange={formik.handleChange}
//                               value={formik.values.password}/>
//                       </div>
//                   </div>
//                   <div>
//                       <button
//                           type="submit"
//                           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
//                       >
//                           <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                                 <LockClosedIcon className="h-5 w-5 text-red-400 group-hover:text-red-400" aria-hidden="true"/>
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

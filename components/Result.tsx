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
import fetchJson from "lib/fetchJson";
import Link from "next/link";





function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  
  async function Bed(ultimo: number, sessionid: string) {
    const data = await axios.post("/api/search_bed", {
      ultimo: ultimo,
      sessionid: sessionid,
    });
    console.log("Posted to API");
    return JSON.stringify(data);
  }
  

export default function Results({}) {
  const [searchResult, setSearchResult] = useState(false);
    const [emptyResult, setEmptyResult] = useState(null);
    const [resultDetails, setResultDetails] = useState(null);
    const [searchField, setSearchField] = useState("");
    const [InputValue, setInputValue] = useState("");
    const [materialTypes, setmaterialTypes] = useState(null);
    const [materialTypesShow, setmaterialTypesShow] = useState(false);

        useEffect(() => {
            if (typeof window !== "undefined") {

                setmaterialTypes(localStorage.getItem("MaterialTypes"));
                
                }       
              
              });



    // useEffect(() => {
    //   // Perform localStorage action
    //   if (typeof window !== 'undefined') {
    //     setmaterialTypes(localStorage.getItem("MaterialTypes"));
    //   };
    //   console.log('materialTypes');
    //   console.log(materialTypes);
    //   console.log('localStorage');

    //   console.log(localStorage.getItem("MaterialTypes"));
    
    // }, [])

    // console.log('materialTypes2');

    // console.log(materialTypes);


// [{"Name":"kip"}]
    const [searchShow, setSearchShow] = useState(false);
    
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const router = useRouter();
  

    const getInputValue = (event)=>{
      // show the user input value to console
      const userValue = event.target.value;

      if (InputValue != "") {
        setInputValue(true)
      } else {
        setInputValue(false)
      }
      setInputValue(event.target.value);


  };
  
    // Redirect
    const { user } = useUser({
      redirectTo: "/login",
    });
  



// useEffect(() => {

//   console.log(y);
  
//   var data = localStorage.getItem("MaterialTypes");
//   if (data === undefined){
//     console.log("undefined!!!")
//   } else {
//     console.log(data)
//     // setmaterialTypes(data);
//     // console.log(materialTypes)
//     console.log('y');
//     y = data;

// console.log(y);


//   }



// setmaterialTypesShow(true);

// return () => { y = data };
// }, [y]);

    function searchList() {

      if (emptyResult) {
        return (
          <div className="my-12">
            <h1 className="text-center  font-bold text-gray-600">
              Er zijn geen bedden beschikbaar voor je criteria...
            </h1>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        );
      }
      if (searchResult) {
        if (resultDetails != undefined) {
          // alert("Aihnoo");
          // alert(resultDetails);


          var parsed = JSON.parse(resultDetails);
          // alert(parsed.Name)
          // alert(parsed.MaterialTypeID);
  
          // resultDetails = JSON.parse(resultDetails);
          return (
            <Overview
              Name={parsed.Name}
              LocationID={parsed.LocationID}
              tag={parsed.tag}
              MaterialTypeID={parsed.MaterialTypeID}
              LastSeen={parsed.LastSeen}
            />
          );
        }
      } else {
        return null;
      }
    }
  
    const submitContact = async (event) => {
      setEmptyResult(false);
  
      event.preventDefault();

      var result = JSON.parse(
        await Bed(event.target.ultimo.value, user.sessionID)
      ).data;
      // alert(JSON.stringify(result));
      if (result["___system___"].code === 0) {
        if (result.data === null) {
          setEmptyResult(true);
          // alert('Er is helaas niets gevonden...');
        } else {
          // deleteAllCookies();
          // router.push("/login");
  
          //    alert(JSON.stringify(result.data))
          const resultJson = result.data;
          // alert(JSON.stringify(resultJson.LastSeen))
          // alert(resultJson.MaterialTypeID);
          // alert(JSON.stringify(resultJson));
  
          var details = {
            id: resultJson.Name != null ? resultJson.Name : "Onbekend",
            Name: resultJson.Name != null ? resultJson.Name : "Onbekend",
            LocationID:
              resultJson.LocationID != null ? resultJson.LocationID : "Onbekend",
            MaterialTypeID:
              resultJson.MaterialTypeID != null
                ? resultJson.MaterialTypeID
                : "Onbekend",
                LastSeen: resultJson.LastSeen != null ? resultJson.LastSeen : "Onbekend",

          };
  
          if (resultJson.Identifiers != null) {
            details.tag = resultJson.Identifiers[0].Name;
          } else {
            details.tag = "Onbekend";
          }
  
          // alert("Je hebt gezocht en iets gevonden! Namelijk:");
  
          setSearchResult(details);
          setResultDetails(JSON.stringify(details));
  
          // alert(result.Name)
          // alert(JSON.stringify(details));
          // alert("details")
        }
      } else if (result["___system___"].code === -1) {
        alert("Je bent uitgelogd, log opnieuw in.");
        deleteAllCookies();
        router.reload(window.location.pathname);
        router.push("/");
      } else {
        setEmptyResult(true);
        alert("Er is helaas niets gevonden...");
      }
      // alert(`So your name is ${event.target.ultimo.value}?`);
    };
    // var materialTypes = [{"name": "Abi"}, {"name": "Kip"}, {"name": "Kalf"}];


    // const getFromStorage = (key) => {
    //   if(typeof window !== 'undefined'){
    //        window.localstorage.getItem(key)
    //   }
    //   }

    // var materialTypes = getFromStorage("MaterialTypes");


    // setmaterialTypes(y);
    return (
      <form onSubmit={submitContact}>
        {/*className="px-4 py-4"*/}
        <section>
          <Offline>
            <Alert
              message="Oh nee, je bent offline sinds: "
              since={Date().toLocaleString()}
            />
          </Offline>
          <div>
            {/*<label htmlFor="department" className="block text-sm font-medium text-gray-700">Bedden</label>*/}
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Bijv. tillift, infuuspomp"
                name="ultimo"
                required
                onChange={getInputValue}
                className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              />


{InputValue &&
<ul class="absolute transition ease-in-out z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">

{/* { materialTypes && JSON.parse(materialTypes).map(x=>x.Name)} */}


{materialTypes ? JSON.parse(materialTypes).filter((z) => z.Name.toLowerCase().includes(InputValue.toLowerCase())).map(x => 



<li class="transition ease-in-out text-gray-900 hover:bg-primary hover:text-white hover:font-extrabold cursor-pointer select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
<div class="flex items-center">
  {/* <img src="https://www.svgrepo.com/show/20306/hospital.svg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"/> */}
  <Link href={"/category/" + x.MaterialTypeID}><span  class="font-normal ml-3 block truncate"> {x.Name} </span></Link>
</div>




<span class="text-white absolute inset-y-0 right-0 flex items-center pr-4">
  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
</span>
</li>
)
:
<>

{materialTypes.length == 0 && <a>test!</a>}

</>

  
  }
  </ul>
}
{/* {materialTypes && materialTypes.map((item, index) => (<a>{item.name}</a>))} */}
{/* {materialTypes && materialTypes.map(x => x.name)} */}

{/* {materialTypes !== "undefined" && } */}





















            </div>
          </div>
          <button
            type="submit"
            className="font-bold mt-5 w-full h-12 px-4 text-lg text-white transition-colors duration-150 bg-primary rounded-lg focus:shadow-outline hover:bg-primary-hover"
            // onClick={() => setOpen(true)}
          >
            Zoeken
          </button>
  























   
      





          <div className="mt-8">{searchList()}</div>
        </section>
      </form>





























    );
  }
  



  export async function getServerSideProps() {
    // Fetch data from external API
    var session = "session=" + ""
    var res = await fetchJson('http://asz-assets.test.improvement-it.nl/material-types/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Cookie": session },
        body: JSON.stringify({}),
      })




      console.log(res);
    // Pass data to the page via props
    return { props: { res } }

  }
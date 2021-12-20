

import React, {useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/empty.json';
import Alert from "../components/Alert";
import { Offline } from "react-detect-offline";

import '@heroicons/react/outline';
import InfoIcon from '../components/InfoIcon';
import { PaperClipIcon } from '@heroicons/react/solid'
import Layout from 'components/Layout';
import useUser from 'lib/useUser';
import {useFormik} from 'formik';
import Overview from '../components/Overview'
import axios from 'axios'
import fetchJson, { FetchError } from 'lib/fetchJson';
import user from './api/user';
// import Table from "./table";



async function Bed(ultimo, sessionid) {

        const data = await axios.post("/api/search_bed", { ultimo: ultimo, sessionid: sessionid });

        console.log('ghi');
        return JSON.stringify(data);

}

  



export default function Search() {
    const [searchResult, setSearchResult] = useState(false);
    const [emptyResult, setEmptyResult] = useState(null);
    const [resultDetails, setResultDetails] = useState(null);

    // var details: { name: string; title: string; department: string; role: string; tag: string; }[];

    const { user } = useUser({
        redirectTo: '/login',
      })
 

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);





    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }}



    // const filteredPersons = details.filter(
    //     person => {
    //         return (
    //             person
    //                 .name
    //                 .toLowerCase()
    //                 .includes(searchField.toLowerCase()) ||
    //             person
    //                 .department
    //                 .toLowerCase()
    //                 .includes(searchField.toLowerCase())
    //         );
    //     }
    // );

    const handleChange = e => {
        setSearchField(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false);
        } else {
            setSearchShow(true);
        }
    };

    function searchList() {
        if (emptyResult) {

            // return <a class="mt-5">Er zijn geen bedden beschikbaar voor je criteria</a>
            return(
                <div className="my-12"><h1 className="text-center  font-bold text-gray-500">Er zijn geen bedden beschikbaar voor je criteria...</h1>
                    <Lottie
                        options={defaultOptions}
                        height={200}
                        width={200}
                    /></div>
            )
        }

        if (searchResult) {
            
            // return <Table beds={filteredPersons}/>
            if (resultDetails != undefined){
                resultDetails = JSON.parse(resultDetails);
                return <Overview Name={resultDetails.Name} LocationID={resultDetails.LocationID} tag={resultDetails.tag} MaterialTypeID={resultDetails.MaterialTypeID}/>

            }

        } 
        else {

            return null

            // return <Table beds={details}/>


        }
    }



    


    
     

     
    //  function searchBed(event) {
    //     event.preventDefault();
    //     console.log('ewaja');
    //     Bed(event.target.name.value);
        
    // }

    const submitContact = async (event) => {
        event.preventDefault();
        var result = JSON.parse(await Bed(event.target.ultimo.value, user.sessionID)).data

        if (result["___system___"].code === 0){
            const resultJson = result.data;
            var details = {
                id: resultJson.Name,
                Name: resultJson.Name,
                LocationID: resultJson.LocationID,
                MaterialTypeID: resultJson.MaterialTypeID,
                tag: resultJson.Identifiers[0].Name
                }
                // alert(result.Name)              
                // alert(JSON.stringify(result))              
                // alert("details")              
                setSearchResult(result)
            setResultDetails(JSON.stringify(details))
        } else {
            setEmptyResult(true);
            alert('Er is helaas niets gevonden...');
        }
        // alert(`So your name is ${event.target.ultimo.value}?`);
    };
    
    return (
        <Layout>
            <form onSubmit={submitContact}>
            <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
            <h1 className="text-3xl font-bold leading-normal mb-6">Zoeken</h1>

            {/*className="px-4 py-4"*/}
        <section >
<Offline>

    <Alert message="Oh nee, je bent offline sinds: " since={Date().toLocaleString()} />
</Offline>
            <div>
                {/*<label htmlFor="department" className="block text-sm font-medium text-gray-700">Bedden</label>*/}
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>


                    </div>
                    <input
                        type="number"
                        placeholder="Bijv. 88366..."
                        name="ultimo"
                        required
                        className="focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                />



                </div>

            </div>
            <button
            type="submit"
                className="font-bold mt-5 w-full h-12 px-4 text-lg text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-600"
                // onClick={() => setOpen(true)}
            >
                Zoeken

            </button>

            <div className="mt-8">
                {searchList()}
            </div>


        </section>

        </div>
        </form>
        </Layout>

    );
}


// class Table extends React.Component {
//     render() {
//         var beds = this.props.beds;
//         return (
//             <div className="flex flex-col mt-5">
//                 <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//                         <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                             <table className="min-w-full divide-y divide-gray-200">
//                                 <thead className="bg-gray-50">
//                                 <tr>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                                     >
//                                         Bed #

//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                                     >
//                                         Bezetting
//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                                     >
//                                         Verdieping
//                                     </th>
//                                     <th scope="col" className="relative px-6 py-3">
//                                         <a href="" ><span className="sr-only">Bekijken</span></a>
//                                     </th>
//                                 </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200">
//                                 {beds.map((bed) => (
//                                     <tr key={bed.department}>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             <div className="text-sm text-gray-900">{bed.title}</div>
//                                             <div className="text-sm text-gray-500">{bed.department}</div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                           className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                           {bed.role}
//                       </span>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bed.department}</td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                             <a href="#" className="text-red-600 hover:text-red-900">
//                                                 Bekijken
//                                             </a>
//                                         </td>
//                                     </tr>
//                                 ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


// class Table extends React.Component {
//     render() {
//         var beds = this.props.beds;
//         return (
//             <div className="flex flex-col mt-5 z-0">
//                 <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//                         <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                             <table className="min-w-full divide-y divide-gray-200">
//                                 <thead className="bg-gray-50">
//                                 <tr>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                                     >
//                                         Bed

//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                                     >
//                                         Bezetting
//                                     </th>
//                                     <th scope="col" className="relative px-6 py-3">
//                                         <a href="" ><span className="sr-only"></span></a>
//                                     </th>
//                                 </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200">
//                                 {beds.map((bed) => (
//                                     <tr key={bed.department}>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             <div className="text-sm text-gray-900">{bed.title}</div>
//                                             <div className="text-sm text-gray-500">{bed.department}</div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap">




// {(bed.role === "Beschikbaar" ?
//     <span
//     className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//     {bed.role}
//     </span>    : (
//         <span
//         className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//         {bed.role}
//         </span>)
//  )}

//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                            <InfoIcon id={bed.name} location={bed.department} role={bed.role}/>
//                                         </td>
//                                     </tr>
//                                 ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }








function setErrorMsg(message) {
    throw new Error('Function not implemented.');
}


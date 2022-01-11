import dynamic from 'next/dynamic'
import React, {useState, Component, useEffect, Fragment} from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/empty.json';
import Alert from "../components/Alert";
import { Offline } from "react-detect-offline";
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'

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
import { Html5QrcodeScanner } from "html5-qrcode";
// import Blob from 'blob'

import Result from "components/Result"



function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}



async function Bed(ultimo, sessionid) {
    const data = await axios.post("/api/search_bed", {
        "ultimo": ultimo,
        "sessionid": sessionid,
    });
    console.log("Posted to API");
    return JSON.stringify(data);
}


  








export default function Scanpage() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  
    const [showCamera, setShowCamera] = useState(false);

        const qrcodeRegionId = "html5qr-code-full-region";


    // const qrScanner = new QrScanner("#video", result => console.log('decoded qr code:', result));
    // qrScanner.start();

    // var onNewScanResult = onNewScanResult.bind(this);

    var resultContainer = () => document.getElementById('qr-reader-results');
    var lastResult, countResults = 0;
    
    function onScanSuccess(decodedText, decodedResult) {
        if (decodedText !== lastResult) {
            ++countResults;
            lastResult = decodedText;
            // Handle on success condition with the decoded message.
            console.log(`Scan result ${decodedText}`, decodedResult);
        }
    }
    function switchCamera(){
        openModal();
        setShowCamera(true);
    }
    var html5QrcodeScanner = () => new Html5QrcodeScanner(
        "qr-reader", { fps: 250, qrbox: 150 });
        () => html5QrcodeScanner.render(onScanSuccess);

    return (

        <Layout>

<div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
        <h1 className="text-3xl font-bold leading-normal mb-6">Zoeken op nummer</h1>
            <Result />

            <h1 className="text-3xl font-bold leading-normal mb-6">Camera gebruiken</h1>

            <button onClick={switchCamera} className="border border-2 hover:border-gray-300 font-bold mt-5 w-full h-12 px-4 text-lg text-black  transition-colors duration-150 bg-gray-200 rounded-lg focus:shadow-outline hover:bg-gray-300">
                Scannen
            </button>


            <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Scan de QR-code
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                  { showCamera &&             
<div className="mt-12 rounded-lg">
    <Scan />
    </div>}                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    Terug
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      </div>
            

           





{/* { showCamera &&             
<div className="mt-12 rounded-lg">
    <Scan />
    </div>} */}


            



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
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
//                                     >
//                                         Bed #

//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
//                                     >
//                                         Bezetting
//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
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
//                                             <div className="text-sm text-gray-600">{bed.department}</div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                           className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                           {bed.role}
//                       </span>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{bed.department}</td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                             <a href="#" className="text-red-700 hover:text-red-900">
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
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
//                                     >
//                                         Bed

//                                     </th>
//                                     <th
//                                         scope="col"
//                                         className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
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
//                                             <div className="text-sm text-gray-600">{bed.department}</div>
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









class Html5QrcodePlugin extends React.Component {
    render() {
        return <div id={qrcodeRegionId} />;
    }

    componentWillUnmount() {
        // TODO(mebjas): See if there is a better way to handle
        //  promise in `componentWillUnmount`.
        this.html5QrcodeScanner.clear().catch(error => {
            console.error("Failed to clear html5QrcodeScanner. ", error);
        });
    }

    componentDidMount() {
        // Creates the configuration object for Html5QrcodeScanner.
        function createConfig(props) {
            var config = {};
            if (props.fps) {
            config.fps = props.fps;
            }
            if (props.qrbox) {
            config.qrbox = props.qrbox;
            }
            if (props.aspectRatio) {
            config.aspectRatio = props.aspectRatio;
            }
            if (props.disableFlip !== undefined) {
            config.disableFlip = props.disableFlip;
            }
            return config;
        }

        var config = createConfig(this.props);
        var verbose = this.props.verbose === true;

        // Suceess callback is required.
        if (!(this.props.qrCodeSuccessCallback )) {
            throw "qrCodeSuccessCallback is required callback.";
        }

        this.html5QrcodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId, config, verbose);
        this.html5QrcodeScanner.render(
            this.props.qrCodeSuccessCallback,
            this.props.qrCodeErrorCallback);
    }
};






const QrReader = dynamic(() => import('react-qr-reader'), {
    ssr: false
})

class Scan extends Component {
    state = {
      result: "",
    };
  
    handleScan = (data) => {
      if (data) {
        this.setState({
          result: data,
        });
        alert(JSON.stringify(data))
        const ultimoNumber = JSON.stringify(data);
      }
    };
    handleError = (err) => {
      console.error(err);
    };
    render() {
      return (
        <div>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <p>{this.state.result}</p>
        </div>
      );
    }
  }
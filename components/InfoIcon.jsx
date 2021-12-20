import React from "react";

import ReactDOM from 'react-dom';

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, LocationMarkerIcon, MapIcon } from '@heroicons/react/outline'

export default function InfoIcon(props) {

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (

       <div>
<a onClick={() => setOpen(true)} href="#" className="text-red-600 hover:text-red-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                                            </a>

           <Transition.Root show={open} as={Fragment}>
               <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
                   <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                       <Transition.Child
                           as={Fragment}
                           enter="ease-out duration-300"
                           enterFrom="opacity-0"
                           enterTo="opacity-100"
                           leave="ease-in duration-200"
                           leaveFrom="opacity-100"
                           leaveTo="opacity-0"
                       >
                           <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                       </Transition.Child>

                       {/* This element is to trick the browser into centering the modal contents. */}
                       <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                       <Transition.Child
                           as={Fragment}
                           enter="ease-out duration-300"
                           enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enterTo="opacity-100 translate-y-0 sm:scale-100"
                           leave="ease-in duration-200"
                           leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                           leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                       >
                           <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                   <div className="sm:flex sm:items-start">
                                       <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                           <LocationMarkerIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                       </div>
                                       <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                           <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                               Locatie: {props.location}
                                           </Dialog.Title>
                                           <div className="mt-2">
                                               <p className="text-sm text-gray-500">
                                               Bed nummer {props.id} ligt op de afdeling {props.location} en heeft materiaaltype {props.role}.
                                               </p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <a onClick={()=>{ alert('Dit is een functie voor in de toekomst!'); }}>
                                        <button
                                       type="button"
                                       className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                       onClick={() => setOpen(false)}
                                   >
                                       <MapIcon className="h-6 w-5 " aria-hidden="true"/>&nbsp;&nbsp; Kaart bekijken
                                   </button></a>
                                   <button
                                       type="button"
                                       className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                       onClick={() => setOpen(false)}
                                       ref={cancelButtonRef}
                                   >
                                       Terug
                                   </button>
                               </div>
                           </div>
                       </Transition.Child>
                   </div>
               </Dialog>
           </Transition.Root>
       </div>



)
}

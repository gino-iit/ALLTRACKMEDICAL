import Head from 'next/head'
import Header from 'components/Header'
import Link from 'next/link'
import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
    HomeIcon
} from '@heroicons/react/outline'

let links = [
    {
        name: 'Homepagina',
        to: '/'
    },
    {
        name: 'Info',
        to: '/info'
    }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const LOGO_URL = process.env.PUBLIC_URL + '/Logo.jpg';

  return (
    <div>
                   <Header />
 {/*
     <Head>
      <Popover className="relative bg-white z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/"><img
                        className="h-8 w-auto sm:h-10"
                        src={LOGO_URL}
                        alt=""/></a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
                <a href="/" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
<div>                    <span className="sr-only">Open menu</span>
                    <HomeIcon className="h-6 w-6" aria-hidden="true" />
</div>                </a>

            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              

                {links.map((item) =>{
                    return <a href={item.to} className="text-base font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                    </a>
                })}

            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              
            </div>
        </div>
    </div>

    <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
    >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <img
                                className="h-8 w-auto"
                                src={LOGO_URL}
                                alt="Workflow"
                            />
                        </div>
                        <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                                <span className="sr-only">Sluit menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                 
                </div>
                <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                        {links.map((item) => (
                            <a
                                href={item.to}
                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
         
                </div>
            </div>
        </Popover.Panel>
    </Transition>
</Popover>
    </Head>  */}
    {children}
    </div>
  )
}









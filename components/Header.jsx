import Link from 'next/link'
import useUser from 'lib/useUser'
import { useRouter } from 'next/router'
import Image from 'next/image'
import fetchJson from 'lib/fetchJson'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Head from 'next/head'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function HeaderNav() {
  const { user, mutateUser } = useUser()
  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Scannen', href: '/scan', current: false },
    { name: 'Zoeken', href: '/search', current: false },
    { name: 'Uitgifte', href: '/uitgifte', current: false },
  ] 
  // ? user?.isLoggedIn === false : 

  // const client = process.env.CLIENT_NAME;
  const client = "WZU Veluwe";
  const clientUrl = "https://www.wzuveluwe.nl/wp-content/themes/woonzorg-unie-veluwe/images/logo-wzuveluwe.png";
  return (
    <Disclosure as="nav" className="bg-primary md:px-40 s px-0 ">
      {({ open }) => (
        <>
             <Head>

             <link rel="manifest" href="./manifest.json" />

</Head>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
             
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center ">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                  {/* <a className="text-xl text-white">FindMyAssets</a> */}
                  {/* <img className="max-h-8" src={clientUrl}/> */}
                  <Link href="/" className="text-xl font-bold text-white"><a className="text-white font-bold mx-auto my-auto text-xl">{client}</a></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href}>
                        <span                  className={classNames(
                        item.current ? ' cursor-pointer bg-secondary text-white' : 'text-white cursor-pointer hover:bg-primary-hover transition hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}>
          
                        {item.name}

                      </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                                  href="/api/logout"
                                  onClick={async (e) => {
                                    e.preventDefault()
                                    mutateUser(
                                      await fetchJson('/api/logout', { method: 'POST' }),
                                      false
                                    )
                                    router.push('/login')
                                  }}
                  className=" p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <LogoutIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-primary text-white' : 'text-white hover:bg-primary-hover hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default function Header() {
  const { user, mutateUser } = useUser()
  const router = useRouter()

  return (
    <header>
      <HeaderNav/>
      </header>
      
  )
}




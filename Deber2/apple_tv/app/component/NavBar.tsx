'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBar from './search.component'
import {Button} from '@material-tailwind/react'
import PersonIcon from '@mui/icons-material/Person';

const navigation = [
  { name: 'Apple TV+', href: '#', current: true },
  { name: 'MLS Season', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function NavBar() {
  return (
    <Disclosure >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center w-full">
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className=" justify-items-center px-72">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white w-full' : 'text-gray-300 hover:text-white w-full',
                          'rounded-md  w-full px-3 py-2 text-l font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <SearchBar/>
              <Button style={{backgroundColor: '#0087A8', width: '80px', borderRadius:  '8px'}}>Sing in</Button>
              </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

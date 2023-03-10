import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Main', href: '/website/#/home', current: false },
  { name: 'Blog', href: '/website/#/blog', current: false },
  { name: 'Calendar', href: '/website/#/calendar', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


import React, { Component } from 'react'

export default class index extends Component {
  state = {
    location: "",
  }

  navigation = [
    { name: 'Main', href: '/website/#/home', current: false },
    { name: 'Blog', href: '/website/#/blog', current: false },
    { name: 'Calendar', href: '/website/#/calendar', current: false },
  ]

  handleClick = (event) => {
    let name = event.target.id;

    this.navigation.map(item => {

      console.log(item)
      if ( name == item.name ) {
        console.log(name, item.name)
        item.current = true
      } else {
        item.current = false
      }
    })
    this.setState({location : name})
  }

  render() {
    return (
      <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto ">
            <div className="relative flex h-16 items-center justify-between">
              <div className=" flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-center">
                <div className="hidden sm:block">
                  <div className="flex justify-end space-x-4">
                    {this.navigation.map((item) => (
                      <a
                        id={item.name}
                        onClick={this.handleClick}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-pink-400 text-white' : 'text-gray-300 hover:bg-pink-400  hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
}

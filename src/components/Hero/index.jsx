/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import Navbar from "../Navbar/index"

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="bg-[url('./assets/img/study.jpg')] bg-fixed bg-cover bg-no-repeat bg-center pb-32">
        <Navbar/>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
                  交大統計 Study Group
                </h1>
                <p className="mt-6 text-lg leading-8 text-neutral-100">
                  One team, one vision, endless possibilities
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            </div>
          </div>
        </main>
      </div>
  )
}

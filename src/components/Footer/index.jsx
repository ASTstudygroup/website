import React, { Component } from 'react'
import FooterList from "../FooterList/index"
import {nanoid} from "nanoid"

import logo from "../../assets/img/logo.png"

export default class Footer extends Component {

  titles = [
    {name: "DEPENDICES", values: [{name:"Tailwind", link: "https://tailwindcss.com/"}, {name:"Material UI", link: "https://mui.com/"}, {name:"React", link: "https://reactjs.org/"}]},
    {name: "PRODUCTS", values: [{name:"Pricing", link: "#"}, {name:"Setting", link: "#"}, {name:"Orders", link: "#"}]},
    {name: "CONTACTS", values: [{name:"Email", link: "#"}, {name:"Github", link: "#"}, {name:"Instutition", link: "#"}]},
  ]

  render() {
    const titles = this.titles
    return (
        <div className="grid grid-row-5 gap-4 px-32 bg-neutral-100 pt-16 pb-16">
          <div className='grid row-span-2 border-b-neutral-200 border-b-2 pb-4'>
            <div className="flex flex-row items-center gap-8">
              <img className='h-16 w-16'  src={logo} />
              <p className=''>AST Study Group</p>
            </div>
          </div>
          <div className='grid row-span-3 grid-cols-3'>
            {titles.map(title => {
              return <FooterList key={nanoid()} {...title}/>
            })}
          </div>
        </div>
    
    )
  }
}
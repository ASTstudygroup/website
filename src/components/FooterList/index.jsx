import React, { Component } from 'react'
import { nanoid } from "nanoid"



export default class FooterList extends Component {
  render() {
    const { name, values } = this.props;
    return (
      <div className='lg:flex-none lg:w-1/2'>
          <h2 className='font-semibold text-slate-900 dark:text-slate-100'>{name}</h2>
          <ul className='mt-3 space-y-2'>
              {values.map(v => {
                return <li key={nanoid()}>
                  <a className='hover:text-slate-900 dark:hover:text-slate-300' href={v.link} target="_blank">{v.name}</a>
                </li>
              })}
          </ul>
      </div>
    )
  }
}

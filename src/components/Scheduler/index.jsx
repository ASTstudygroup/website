import React, { Component } from 'react'
import SchedulerTable from "../SchedulerTable/index"

export default class Scheduler extends Component {
  render() {
    return (
      <div className='grid m-32 gap-16'>
        <h1 className='text-center text-5xl font-bold align-middle'>讀書會時程表</h1>
        <SchedulerTable/>
      </div>
    )
  }
}

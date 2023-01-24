import React, { useState } from 'react'
import Calendar from 'react-calendar'
import '../styles/Calender.css';

const CalenderComp = ({date,setDate}) => {
    
    return (
      <div className='app'>
      <h1 className='text-center'></h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <p className='ml-4 mt-2'>
        <span  className='font-bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}
    </div>
  )
}

export default CalenderComp
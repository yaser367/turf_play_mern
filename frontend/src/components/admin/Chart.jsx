import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data=[
    {name:'January',Total:1500},
    {name:'February', Total:2400},
    {name:'March', Total:900},
    {name:'April', Total:3400},
    {name:'May', Total:2000},
    {name:'June', Total:1400},
]

const Chart = () => {
  return (
    <div className=' flex-initial w-[800px] h-[400px] shadow-2xl pl-12 '>
        <div className='m-6 font-bold'>Last 6 months</div>
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="name" />
  {/* <YAxis /> */}
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="gray" fillOpacity={1} fill="url(#Total)" />
</AreaChart>
        
    </div>
  )
}

export default Chart
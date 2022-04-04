import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
const [data, setData]=useState([]);
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setData(data));

},[]);
console.log(data);

    return (
        <div className='dasbord'>
     <div className="">
     <h1 className='dashheading'>Investment vs Revenue</h1>
     <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="4 4" />
         <XAxis dataKey="month" />
         <YAxis />
         <Tooltip />
          <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
       <Bar dataKey="sell" fill="#82ca9d" />
       <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
     </div>
     <div className="">
     <h1 className='dashheading'>Investment vs Revenue</h1>
     <LineChart width={500} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="investment" stroke="#8884d8" />
  <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
</LineChart>
     </div>
     <div className="">
     <h1 className='dashheading'>Investment vs Revenue</h1>
     <RadarChart outerRadius={90} width={600} height={250} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="month" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
     </div>
     <div className="">
     <h1 className='dashheading'>Investment vs Revenue</h1>
     <PieChart width={500} height={250}>
  <Pie data={data} dataKey="month" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="sell" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
     </div>
        </div>
    );
};

export default Dashboard;
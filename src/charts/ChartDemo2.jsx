import React, { useEffect, useState } from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement } from 'chart.js';
import { Box } from '@mui/material';
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);

export const ChartDemo2 = () => {

    const [users, setusers] = useState([])
    const getUserDaata = async() => {

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res.data.data)
        setusers(res.data.data)
    }
    useEffect(() => {
      
        getUserDaata()
    
    }, [])
    

    const data= {
        labels:users?.map((item)=>item.name),
        datasets:[{
            label: 'Age...',
            data:users?.map((item)=>item.age),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderWidth: 1
        }]
    }

  return (
    <div>
        <Box sx={{height:"400px",width:"400px"}}>
        <Bar data={data} />
        </Box>
    </div>
  )
}

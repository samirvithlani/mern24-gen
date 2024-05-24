import React, { useState } from 'react'

export const DepedentDropdown = () => {

    const data = [
        {
            name: 'India',
            cities: ['Delhi', 'Mumbai', 'Kolkata']
        },
        {
            name: 'USA',
            cities: ['New York', 'Los Angeles', 'Chicago']
        }
    ]

    const [selectedCounty, setselectedCounty] = useState("")
  return (
    <div>
        {selectedCounty}
        <select onChange={(e)=>{setselectedCounty(e.target.value)}}>
            <option>Select Country</option>
            {
                data.map((d)=>{
                    return <option value={d.name}>{d.name}</option>
                })
            }
        </select>
        <select>
            <option>Select City</option>
            {
                data.map((d)=>{
                    if(d.name ==selectedCounty){
                        return d.cities.map((city)=>{
                            return <option value={city}>{city}</option>
                        })
                    }
                })
            }
        </select>
    </div>
  )
}

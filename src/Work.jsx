import React from 'react'
import WorkItem from './WorkItem'
const data=[
    {
        year:2020,
        title:'Hong Kong Baptist University',
        duration:'4 years',
        details:'Became a University Student. Study Computer Science, Major in Computing and Software Technology',
    },
    {
        year:2022,
        title:'Prophecy Marketing International',
        duration:'3 months',
        details:'Junior Programmer Summer Internship. Mainly focus on front-end development, and handle restful api',
    },
    {
        year:2023,
        title:'Midland Realty Service Limited (a wholly-owned subsidary of Midland Holding Limited)',
        duration:'3 months',
        details:'Summer Internship in Information Technology Department (Project Management Office, PMO)',
    },
    {
        year:2024,
        title:'Expected grudation year',
        duration:'',
        details:'to be continue...',
    }
]
const Work = () => {
  return (
    <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
            data.map((item, idx)=>(
                <WorkItem 
                key={idx}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}/>
            ))
        }
    </div>
  )
}

export default Work
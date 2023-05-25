import React from 'react'
import ProjectItems from './ProjectItems.jsx'
import jjImg from "./assets/java_jdbc.png"
import oosImg from "./assets/ordering_system.png"
import vwImg from "./assets/VueWebs.png"
import waImg from "./assets/WebApps.jpeg"

function Project() {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p></p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={jjImg} title="Database Manager" language="Java" link='https://github.com/Jonathan001121/library_database_manager'/>
            <ProjectItems img={oosImg} title="Ordering System" language="Python" link='https://github.com/Jonathan001121/online_ordering_syste'/>
            <ProjectItems img={vwImg} title="Inventory Webs" language="Vue.js and Express.js" link='https://github.com/Jonathan001121/Vue_Web'/>
            <ProjectItems img={waImg} title="Android Application" language="Kotlin" link='https://github.com/Jonathan001121/InventoryApps'/>
        </div>
    </div>

  )
}

export default Project
import { useState } from 'react'
import SideNav from './sideNav'
import MainCmp from './MainCmp'
import Work from './Work'
import Project from './Project'
import Contact from './Contact'
import Introduction from './Introduction'
const App=()=> {

  return (
    <>

    <SideNav/>
    <MainCmp/>
    <Introduction/>
    <Work/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App

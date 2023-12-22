import React from 'react'
import "../styles/home_styles.css"
import Navbar from "../components/Navbar"
import { Hero} from "../Imports/imports"
import {Location} from "../Imports/imports"

function Home() {
  return (
    <>
    <Location/>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default Home
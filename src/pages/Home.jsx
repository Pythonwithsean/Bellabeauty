import React from 'react'
import "../styles/home_styles.css"
import Navbar from "../components/Navbar"
import { Hero} from "../Imports/imports"

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default Home
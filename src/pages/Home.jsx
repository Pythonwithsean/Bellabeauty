import React from "react";
import "../styles/home_styles.css";
import Navbar from "../components/Navbar";
import { Location } from "../Imports/imports";

function Home() {
  return (
    <>
      <Location />
      <Navbar />
      <div className="Hero">
        <img
          className="Hero_Img"
          src="../../public/Untitled design (1).png"
          alt=""
        />

        <div className="Item-2">
          <h1>Bella beauty</h1>
          <h2>Be Bold Be Beautiful</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptates, voluptatem, quibusdam, quas voluptatum voluptate
            consequatur quod voluptatibus quae natus dolorum! Quisquam
            voluptates, voluptatem, quibusdam, quas voluptatum voluptate
            consequatur quod voluptatibus quae natus dolorum! Quisquam
          </p>
          <button type="button" className="Button">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

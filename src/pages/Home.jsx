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

        <div class="snowflakes"></div>
        <div className="Item-2">
          <h1>Bella Beauty</h1>
          <h2>Be Bold Be Beautiful</h2>
          <p>
            Transform your style with our exceptional range of products designed
            to give you a fresh and trendy look. Discover the perfect solutions
            to enhance your appearance and express your unique personality. We
            take pride in offering the finest selection of beauty and fashion
            essentials that cater to your individual preferences.
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

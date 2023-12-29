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
      <section className="section-1">
        <h1>Our Elegant Products</h1>
      </section>
      <section className="grid-1">
        {" "}
        <div>
          {" "}
          <img
            src="../../public/66ea8662-93e8-40c8-85e9-749b465453ca.jpg"
            alt=""
          />
          <div className="product-price">£1000</div>
        </div>
        <div>
          {" "}
          <img
            src="../../public/e82e2bb5-3106-4a7f-890d-cf9d212a5535.jpg"
            alt=""
          />
          <div className="product-price">£1000</div>
        </div>
        <div>
          {" "}
          <img src="  " alt="" />
        </div>
      </section>
    </>
  );
}

export default Home;

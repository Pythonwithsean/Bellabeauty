import "../styles/home_styles.css";
import Navbar from "../components/Navbar";
import { Location } from "../Imports/imports";
import { hairProducts, makeupProducts } from "../data/Products";
import { Container } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Location />
      <Navbar />
      <Container maxW="1300px" centerContent>
        <div className="Hero">
          <img
            className="Hero_Img"
            src="../../public/Untitled design (1).png"
            alt=""
          />

          <div className="snowflakes"></div>
          <div className="Item-2">
            <h1>Bella Beauty</h1>
            <h2>Be Bold Be Beautiful</h2>
            <p>
              Transform your style with our exceptional range of products
              designed to give you a fresh and trendy look. Discover the perfect
              solutions to enhance your appearance and express your unique
              personality. We take pride in offering the finest selection of
              beauty and fashion essentials that cater to your individual
              preferences.
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
          {hairProducts.map((product, i) => {
            return (
              <div className="card" key={i}>
                <img src={product.image} alt="" />
                <h2>{product.name}</h2>
                {/* <p>{product.description}</p> */}
                <p>{product.price}</p>
                <button className="Button">Add to Cart</button>
              </div>
            );
          })}
        </section>
        <br />
        <section className="grid-2">
          {makeupProducts.map((product) => {
            return (
              <div className="card">
                <img src={product.image} alt="" />
                <h2>{product.name}</h2>
                {/* <p>{product.description}</p> */}
                <p>{product.price}</p>
                <button className="Button">Add to Cart</button>
              </div>
            );
          })}
        </section>
        <br />
        <section className="Shop-Now-Section">
          <p>View More of our Elegant Products</p>
          <button type="button" className="Btn">
            View More Products
          </button>
        </section>
        <br />
        {/* <section>Hello world</section>
        <section>Hello world</section>
        <section>Hello world</section> */}
      </Container>
    </>
  );
}

export default Home;

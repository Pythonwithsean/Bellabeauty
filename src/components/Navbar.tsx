import React from "react";
import { ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <nav className="NavBar">
      <ul>
        <li class="nav-item">
          Shop
          <ChevronDown className="Chevron" />
          <ul class="sub-menu">
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>Products</li>
            <li>Exclusive Collections</li>
            <li>New Arrivals</li>
            <li>Special Offers</li>
          </ul>
        </li>
        <li class="nav-item">
          About Us
          <ChevronDown className="Chevron" />
          <ul class="sub-menu">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Team</li>
          </ul>
        </li>
        {/* <!-- Add more main navigation items with their respective sub-menus --> */}
      </ul>
    </nav>
  );
}

export default Navbar;

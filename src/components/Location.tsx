import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import { User } from "lucide-react";

function Location() {
  return (
    <div class="location-container">
      Bella Beauty UK
      <Mail className="phone-logo" />
      07399134957
      <Phone className="phone-logo" src="/img/contact-png-03.png" alt="" />
      <ShoppingCart className="cart-logo" />
      <span className="cart-amount">0</span>
      <User className="User" />
      <button className="Btn">Login</button>
      <button className="Btn">Register</button>
    </div>
  );
}

export default Location;

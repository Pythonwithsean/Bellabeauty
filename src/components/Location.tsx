import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { User } from "lucide-react";

function Location() {
  return (
    <div className="location-container">
      Bella Beauty UK
      <Mail className="phone-logo" />
      07399134957
      <Phone className="phone-logo" />
      <ShoppingCart className="cart-logo" />
      <User className="User" />
      <Link to="/login">
        <button className="Btn">Login</button>
      </Link>
      <Link to="/sign-up">
        <button className="Btn"> Register</button>
      </Link>
    </div>
  );
}

export default Location;

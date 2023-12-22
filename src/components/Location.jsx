import React from 'react'
import { Mail } from "lucide-react";
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';

function Location() {
  return (
    <div class="location-container">
        Bella Beauty UK
    <Mail className="phone-logo"/>
    07399134957
    <Phone className="phone-logo" src="/img/contact-png-03.png" alt="" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit
    <MapPin src="/img/contact-png-01.png" alt="Location" className="Location-logo"/>

  </div>
  )
}

export default Location
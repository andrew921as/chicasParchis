import React from "react";

import "./Footer.css"; 

export default function Footer({social, email}) {
  return (
    <div className="footer">
        <div className="social">
            <a href="https://github.com/">Github</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
        </div>

        <div className="email">
            <p>nicolleno08@gmail.com</p>
            <p>3004829413</p>
        </div>
        
    </div>
  )
}
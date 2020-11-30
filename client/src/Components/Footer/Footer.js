import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">

      <section className="footerSection1">
            <h6 className="bye title">Fund The Change</h6>
            <ul className="">
              <li className="under bye"><a href="#">FAQs</a></li>
              <li className="under bye"><a href="#">Volunteer</a></li>
              <li className="under bye"><a href="#">About</a></li>
              <li className="under bye"><a href="#">Org Sign-Up</a></li>
            </ul>
     </section>

        <section className="footerSection2">
            <ul className="">
            <li className="b"><i class="fas fa-map-marker-alt"></i></li>
              <li>1 Resilient st.</li>
              <li>Boston, MA</li>
              <li>01234</li>

            </ul>
            </section>


        <section>
            <ul className="footerSection3">
              <li className="under">Contact us</li>
              <li className="under"><a className="under" href="#"><i class="fab fa-instagram"></i></a></li>
              <li className="under"><a className="under" href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li className="under"><a className="under" href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
            </section>

        <section className="footerSection4">
            <ul className="">
              <li className="under bye"><a className="under" href="#">Legal Stuff</a></li>
              <li className="under bye"><a className="under" href="#">Privacy Policy  </a></li>
              <li><a className="under bye" href="#">Terms Of Use</a></li>
            </ul>
            </section>



      <section className="footerSection5">
      <p className="">
        &copy;{new Date().getFullYear()} FundTheChange - ResilientLabs - All Rights Reserved
      </p>
    </section>

    </div>









  )
}

export default Footer;

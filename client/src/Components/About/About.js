import React from 'react'
import './About.css'
import { Button, Image } from 'react-bootstrap';


const About = () => {
  return (
<div className="AboutContainer">

<span className="aboutH1">About Us</span>

<section className="aboutLeft">
<Image className="AboutImage" src="https://i.imgur.com/luOJhI9.png" fluid />
</section>

<section className="aboutRight">
<h4>Our Mission</h4>
<p className="aboutParagraph"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit<span className="bye">, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span></p>
</section>

<section className="aboutBottom">
  <h2>Donate</h2>
  <h4>Choose to make a difference</h4>
  <a href="/Signup"><Button className="button2">Give Now </Button><br/></a>
  <img className="donationImage"src="https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2020/03/donate_getty.jpg" />
  </section>
</div>

  )
}

export default About;

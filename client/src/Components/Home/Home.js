import React, {Component} from 'react'
import { Carousel, Button,Row,Container,Col} from 'react-bootstrap';
import "./Home.css";
// Test comment
//Testtttt
 class Home extends Component{
     render(){
        return (
            <div className="HomeContainer">
              <div className="carousel">
                <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 bgImage"
      src="https://i.imgur.com/fOaVk62.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Donate to Grassroots Organizations</h1>
      <Button href="/signup">Sign Up Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 bgImage"
      src="https://i.imgur.com/l8v2szc.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Help those in need.</h3>
      <Button href='/signup'>Sign Up Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bgImage"
      src="https://i.imgur.com/qssRXCr.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Help students in your community</h3>
      <Button href='/signup'>Sign Up Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            {/* <Image className="image"src="https://i.imgur.com/qUt8EPp.png" fluid /> */}
            </div>

          <div className="topSection gray">
          <div className="topLeft">
            <h2 className="sectionParagraph">Make a change in your community</h2>
            <p className="sectionParagraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <span className="bye">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span> </p>

            </div>
            <div className="topRight">
            <img className="LeftImage" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80" alt="Make a change"/>
          </div>
          </div>

          <div className="topSection">

            <div className="topRight">
            <img className="LeftImage mobile" src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2583&q=80" alt="Donate"/>
          </div>

          <div className="topLeft">
            <h2 className="sectionParagraph">Don't know how to contribute?</h2>
            <p className="sectionParagraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <span className="bye">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span> </p>

            </div>


            <div className="topRightMobile">
            <img className="LeftImage" src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2583&q=80" alt="Donate"/>
          </div>
          </div>

          <div className="topSection black">
          <div className="topLeft">
            <h2 className="sectionParagraph white">We make it simple</h2>
            <p className="sectionParagraph white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <span className="bye">totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span> </p>

            </div>
            <div className="topRight">
            <img className="LeftImage" src="https://cdn.asiatatler.com/asiatatler/i/ph/2020/09/09185511-perry-grone-lblgffladry-unsplash_cover_2000x1333.jpg" alt="Make a change"/>
          </div>
          </div>



          <div className="testimonial">
          <Container>
        <Row>
        <Col>
        <h1>Testimonial</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
        <img className="delImg" src="https://miro.medium.com/max/400/1*1tCrm_Cgga3_UMB4vhyylg.jpeg" alt="del"/>
        <p>David Delmar - Resilient Coders' Founder</p>
        </Col>
        </Row>
        </Container>
          </div>

          <div className="bottomSection">
          <Container>
        <Row>
        <Col>
        <h1>Ready to get started</h1>
        <p> <span className="bye"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span> </p>
        <Button href= "/about">Learn More</Button>
        </Col>
        </Row>
        </Container>
          </div>



</div>
        )
     }

}

export default Home;

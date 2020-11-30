import React, {Component} from 'react'
import './IndividualOrg.css'


 class IndividualOrg extends Component{
     render(){

      // fetch/data retrieval



        return (
          <div className="App">
            {/* <Header/> */}
            <div className="container-fluid">
              <div className="row centerChildren">
                <div className="col-md-5">
                    {/* add a {name} below*/}
                    <h1 className="organizationName">Org Name</h1>
                    {/* add a {imageLink} below in src*/}
                    <img src="" alt="Oranization Image" className="organizationImage"/>
                </div>
                <div className="col-md-5 outerShadow">
                    {/* add {description} */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nihil cupiditate doloremque totam omnis deserunt nostrum unde impedit modi? Recusandae qui iusto aspernatur voluptatem quidem ea placeat error hic, enim ducimus impedit repellendus maxime, ipsam incidunt id tenetur sit? Est odio, exercitationem laudantium sint illum, optio expedita magni vel totam explicabo dicta libero adipisci commodi incidunt voluptates eveniet, quos iure enim repellat! Asperiores cumque delectus minus repellat doloribus, voluptatibus facilis, a rerum deserunt officiis modi accusamus repellendus. Nam excepturi similique officiis veritatis quam deserunt temporibus eaque quibusdam, molestias totam esse facilis eum facere quas cupiditate quos inventore doloribus sed provident cumque qui eveniet repellat. Reprehenderit vero voluptate asperiores, eos laudantium adipisci doloribus iure cupiditate neque non culpa, reiciendis, dignissimos commodi?</p>
                </div>
              </div>
            </div>
            {/* <Footer/> */}
          </div>
        );
      }
  }
export default IndividualOrg;

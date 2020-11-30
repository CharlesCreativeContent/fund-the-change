import React, {Component} from 'react'
import { Figure, Button } from 'react-bootstrap';
import './HighlightedOrg.css'
import grassroots from './grassroots.jpg'
import OrganizationCardContainer from '../OrganizationCard/OrganizationCardContainer'

 class HighlightedOrg extends Component{
     render(){
        return (
          <div className="test" style={{width:'100vw', backgroundColor:'#c4e2b2'}}>
            <div className='highlighted'>
              <a className='highlighted-img' href='/'>
              <h2>Highlighted Title</h2>
              {/* BACKEND ROUTE FOR EACH ORGANIZATION ; LOOP? MAP?*/}
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              {/*<Figure className='highlighted-figure'>
                <Figure.Caption>
                  Highlighted org description
                </Figure.Caption>
              </Figure> */}
            </div>
              <OrganizationCardContainer className='highlighted-cards'/>
          </div>
        )
     }
}

export default HighlightedOrg;

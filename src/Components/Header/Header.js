import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default class Header extends Component {
  render() {
    
    return (
        <div className="navbar" >
          
          <div className="homeButton">
            <Link to={'/'} >
            <svg width="70" height="60" viewBox="0 0 283 245" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M89.5 226.5C80.1667 227 61.2 208.5 60 130.5H1C16 93.3333 63 15.6 131 2C199 -11.6 259.667 82 281.5 130.5H221C230.833 149 240.6 194.1 201 226.5C161.4 258.9 110.167 240 89.5 226.5Z" 
              shadowBlur={5}
              shadowOpacity={0.6}
              stroke="black"
              strokeWidth="8"
              fill="purple"
              />
            </svg>
            </Link>
          </div>
          <div className="profile">
          <Link to={'/profile/'} >
          <svg width="70" height="60" viewBox="0 0 190 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 160.5C-10.4 116.1 6.16662 53 18 27C120.5 -13.5 53.5 83 86 27C112 -17.8 153.833 8.33334 171.5 27C185.333 48.6667 203.1 97 163.5 117C123.9 137 95.3333 120 86 109V160.5C75.1666 179 46.4 204.9 18 160.5Z" fill="#7715F4"/>
            <path d="M129.5 50.5V84.5M18 27C6.16662 53 -10.4 116.1 18 160.5C46.4 204.9 75.1667 179 86 160.5V109C95.3333 120 123.9 137 163.5 117C203.1 97 185.333 48.6667 171.5 27C153.833 8.33334 112 -17.8 86 27C53.5 83 120.5 -13.5 18 27Z" stroke="black" stroke-width="4"/>
          </svg>
          </Link>
          </div>
        </div>
          
   
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default class Header extends Component {
  render() {
    
    return (
        <div className="navbar" >
        
          <Link to={'/'} >
            <svg width="98" height="60" viewBox="0 0 196 161" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bdif)">
            <path d="M7.66874 70.6395C3.73613 74.5172 3.69161 80.8487 7.56929 84.7813L70.7598 148.867C74.6375 152.799 80.969 152.844 84.9016 148.966C88.8342 145.089 88.8787 138.757 85.001 134.825L28.8317 77.8596L85.7966 21.6902C89.7292 17.8125 89.7738 11.4811 85.8961 7.54845C82.0184 3.61584 75.6869 3.57131 71.7543 7.449L7.66874 70.6395ZM191.07 69.0002L14.7602 67.7604L14.6196 87.7599L190.93 88.9998L191.07 69.0002Z" fill="#7781A6"/>
            </g>
            <defs>
            <filter id="filter0_bdif" x="0.172302" y="0.0520172" width="195.346" height="160.586" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect3_innerShadow"/>
            <feGaussianBlur stdDeviation="2" result="effect4_foregroundBlur"/>
            </filter>
            </defs>
            </svg>
          </Link>
          </div>
          
   
    )
  }
}

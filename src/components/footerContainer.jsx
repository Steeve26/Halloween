import React from 'react'
import '../App.css'

export default function footerContainer({title, links}) {
  return (    
    <div className='footer__container'>
      <h3 className="footer__title">{title}</h3>

      <ul className="footer__links">
        { links.map((link, index) => {
          return (
            <li key={index}><a href="#" className="footer__link">{link}</a></li>
          )})
        }
      </ul>
    </div>
  )
}

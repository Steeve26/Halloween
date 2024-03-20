import React from 'react'
import '../App.css'

export default function navLinks({route, setNavOpen, title}) {
  return (
    <li className="nav__item">
      <a href={`#${route}`} onClick={() => setNavOpen(false)} className="nav__link">{title}</a>
    </li>
  )
}

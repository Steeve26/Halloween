import React from 'react'
import '../App.css'

import { stars } from '../exports'

export default function categoryCard({src, title, description}) {
  return (
    <div className="category__card">
      <img src={src} alt="category image" className='category__img'/>
      <h3 className="category__title">{title}</h3>
      <p className="category__description">{description}</p>
      <img src={stars} alt="category image" className='category__star' />
  </div>
  )
}

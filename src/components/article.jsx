import React from 'react'
import '../App.css'

export default function article({src, title, price}) {
  return (
    <article className="items__card">
      <img src={src} alt="items image" className="items__img" />
      <h3 className="items__name">{title}</h3>
      <span className="items__price">${price}</span>
      <button className="items__button">
        <i className="fa-regular fa-heart"></i>
      </button>
    </article>  
  )
}

import React from 'react'

export default function socialLinks({link, iconClasses}) {
  return (
    <a href={link} className="footer__social-link" target='_blank'>
      <i className={iconClasses}></i>
    </a>
  )
}

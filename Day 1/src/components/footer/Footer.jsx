import React from 'react'
import FooterLink from './links/FooterLink'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_content">
           <FooterLink />
        </div>
      </div>
    </div>
  )
}

export default Footer

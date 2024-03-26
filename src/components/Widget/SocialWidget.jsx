import React from 'react'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
       <a href="https://www.instagram.com/ma2comms/" target="_blank" className="cs-center" rel="noreferrer">
        <Icon icon="fa6-brands:instagram" />
      </a>
      <a href="https://www.linkedin.com/company/ma2comms/about/" target="_blank" className="cs-center" rel="noreferrer">
        <Icon icon="fa6-brands:linkedin" />
      </a>     
      <a href="https://www.facebook.com/ma2comms" target="_blank" className="cs-center" rel="noreferrer">
        <Icon icon="fa6-brands:square-facebook" />
      </a>
      <a href="https://wa.me/5511930871873" target="_blank" className="cs-center" rel="noreferrer">
        <Icon icon="fa6-brands:whatsapp" />
      </a>
    </Div>
  )
}

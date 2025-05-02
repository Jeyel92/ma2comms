import React from 'react'
import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next";
export default function ContactInfoWidget({withIcon, title}) {
  const { t } = useTranslation();
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
      <li>
          {withIcon?<span className='cs-ternary2_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +55 11 930871873 <br /> +49 176 64793142 
        </li>      
        <li>
          {withIcon?<span className='cs-ternary2_color'><Icon icon="mdi:envelope" /></span>:''}
          contato@ma2comms.com
        </li>
        <li>
          {withIcon?<span className='cs-ternary2_color'><Icon icon="mdi:map-marker" /></span>:''}
          São Paulo ({t('brasil')}) <br/> Lübeck ({t('alemanha')}) 
        </li>
      </ul>
    </>
  )
}

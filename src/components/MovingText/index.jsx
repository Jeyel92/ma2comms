import React from 'react'
import Div from '../Div'
import './movingtext.scss'
import parse from 'html-react-parser';
export default function MovingText({text}) {
  return (
    <Div className="cs-moving_text_wrap cs-bold cs-primary_font">
      <Div className="cs-moving_text_in">
        <Div className="cs-moving_text">{parse(text)}</Div>
        <Div className="cs-moving_text">{parse(text)}</Div>
      </Div>
    </Div>
  )
}

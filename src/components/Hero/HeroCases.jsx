import React from 'react';
import Div from '../Div';
import FullScreenVerticalSlider from '../Slider/FullScreenVerticalSlider';
export default function HeroCases({  
  showcaseData,
}) {
  return (
    <Div className="cs-hero_7_wrap">
      
      <FullScreenVerticalSlider data={showcaseData} />
    </Div>
  );
}

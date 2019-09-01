import React from 'react'
import { navigate } from 'gatsby'
import { Fade } from 'react-slideshow-image'

import { Button } from '../../utils/styles'
import { 
  SlideshowImage, 
  Caption,
  H1,
  H2
} from './styles'


const Slideshow = props => {
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    arrows: false,
  }

  const Slides = props.slides 
    ? props.slides.map(({
        id,
        image, 
        firstText, 
        secondText, 
        buttonLink,
        buttonText,
        color,
      }) => (
        <React.Fragment key={id}>
          <SlideshowImage src={image} />
          <Caption color={color}>
            <H2>{secondText}</H2>
            <H1>{firstText}</H1>
            <Button 
              onClick={() => navigate(buttonLink)}
              color='black'
              backgroundColor='white'
            >
              {buttonText}
            </Button>
          </Caption>
        </React.Fragment>
      ))
    : null

  return (
    <Fade {...fadeProperties}>
      {Slides}
    </Fade>
  )
}

export default Slideshow
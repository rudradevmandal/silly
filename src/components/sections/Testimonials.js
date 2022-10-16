import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Carousel from '../testimonials/Carousel'

const Section = styled.section`
// min-height: 60vh;
width: 100%;
background-color: ${props => props.theme.lightBody};
// display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
height:40vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 40em) {
height:50vh;
margin-bottom: 2rem auto;
}
`
const TextContainer = styled.div`
width: 100%;
height:20vh;
margin-top: 20rem auto;
// background-color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em) {
height:15vh;
}
@media (max-width: 48em) {
height:10vh;
}
@media (max-width: 40em) {
height:10vh;
}
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em) {
    width: 90%;
font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 48em) {
font-size: ${(props) => props.theme.fontlg};
align-self: center;
text-align: center;
}
@media (max-width: 40em) {
    width: 90%;
}
`

const Testimonials = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
    let element = ref.current;
    ScrollTrigger.create({
        id: 'slideID',
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true,
    })

  return () => {
    ScrollTrigger.getById('slideID').kill();
  };
}, [])

  return (
    <Section ref={ref}>
        <TextContainer>
            <Title>What users say about Silly Science</Title>
        </TextContainer>
        <Container><Carousel /></Container>
    </Section>
  )
}

export default Testimonials
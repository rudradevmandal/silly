import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'


const Section = styled.div`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

@media (max-width: 70em) {
  height: 25rem;
}
@media (max-width: 48em) {
  height: 15rem;
  flex-direction: column;
justify-content: center;
}
`
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxxl};
text-transform: capitalize;
color: ${(props) => props.theme.body};
padding: 1rem 2rem;
z-index: 10;
width: 35%;
// display: flex;
// justify-content: center;
// align-items: center;

@media (max-width: 70em) {
  text-align: center;
width: 40%;
font-size: ${(props) => props.theme.fontxxl};
}
@media (max-width: 48em) {
width: 100%;
padding: 2rem 0;
font-size: ${(props) => props.theme.fontxl};
justify-content: center;
}
@media (max-width: 40em) {
justify-content: center;
font-size: ${(props) => props.theme.fontlg};
}
`

const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end; 
font-size: ${(props) => props.theme.fontxl};

@media (max-width: 70em) {
font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 48em) {
  width: 100%;
font-size: ${(props) => props.theme.fontxl};
justify-content: center; 
}
@media (max-width: 40em) {
  width: 100%;
font-size: ${(props) => props.theme.fontlg};
justify-content: center; 
}
`
export const Banner = () => {
  return (
    <Section id="banner">
      <Title>Explore for more amazing content</Title>
      <BtnContainer>
        <Link to="/lessons"><Button text="Explore" /></Link>
      </BtnContainer>
    </Section>
  )
}

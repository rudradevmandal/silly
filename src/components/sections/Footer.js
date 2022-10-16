import React from 'react'
import styled from 'styled-components'
import { Banner } from '../Banner'
import {Link} from 'react-router-dom'

import Facebook from '../../Icons/Facebook'
import Instagram from '../../Icons/Instagram'
import Twitter from '../../Icons/Twitter'
import LinkedIn from '../../Icons/LinkedIn'
import Youtube from '../../Icons/Youtube'

const Section = styled.section`
min-height: 100vh;
height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;

color: ${props => props.theme.text};
// display: flex;
// justify-content: center;
// align-items: center;
flex-direction: coloumn;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1.5px solid ${props => props.theme.text};

@media (max-width: 48em) {
width: 90%;
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 1rem auto;
&>*{
  padding-right: 0.5rem;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.2);
  }
}

`
const LogoText = styled.h1`
 font-family: 'Poppins', bold;
 font-size: ${props => props.theme.fontxl};
 color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
transition: all 0.3s ease;
 &:hover{
    transform: scale(1.1)
 }

`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
display: none;
}
`

const Item = styled.li`
width: fit-content;
cursor: pointer;


&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 3px;
  background: ${props => props.theme.logoColor};
  transition: width 0.3s ease;
}

&:hover::after{
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 48em) {
flex-direction: column;
width: 100%;

span{
  margin-bottom: 1rem;
}
}
`

const Footer = () => {
  

const scrollTo = (id) => {
  let element = document.getElementById(id);

  element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
  })
}
  return (
  <Section>
    <Banner />
    <Container>
      <Left>

        <LogoText>
          <Link to="/">
            Silly Science
          </Link>

        </LogoText>
        <IconList>
          <a href="http://facebook.com" target='_blank' rel="noopener noreferrer"><Facebook /></a>
          <a href="http://instagram.com" target='_blank' rel="noopener noreferrer"><Instagram /></a>
          <a href="http://twitter.com" target='_blank' rel="noopener noreferrer"><Twitter /></a>
          <a href="http://linkedin.com" target='_blank' rel="noopener noreferrer"><LinkedIn /></a>
          <a href="http://youtube.com" target='_blank' rel="noopener noreferrer"><Youtube /></a>
        </IconList>

      </Left>
      <MenuItems>
      <Item onClick={() => scrollTo('home')}><Link to="/">Home</Link></Item>
      <Item><Link to='/lessons'>Lessons</Link></Item>
      <Item><Link to='/resources'>Resources</Link></Item>
      <Item><Link to='/about'>About Us</Link></Item>
      </MenuItems>
    </Container>
    <Bottom>
      <span>
        &copy; {new Date().getFullYear()} Silly Science. All rights reserved.
      </span>
      <span>
        Made with 🧡 by Silly Science Team.
      </span>
    </Bottom>
  </Section>
  )
  }

export default Footer
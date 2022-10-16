import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const LogoText = styled.h1`
 font-family: 'Poppins', bold;
 font-size: ${props => props.theme.fontxl};
 color: ${props => props.theme.logoColor};
transition: all 0.3s ease;
 &:hover{
    transform: scale(1.1)
 }

 @media (max-width: 64em) {
 font-size: ${props => props.theme.fontlg};
 }
 @media (max-width: 40em) {
 font-size: ${props => props.theme.fontmd};
 }
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
        Silly Science
        </Link>
        
    </LogoText>
  )
}

export default Logo
import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
display: inline-block;
background-color: ${props => props.theme.logoColor};
color: ${props => props.theme.lightText};
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 0.6rem 1.5rem;
border-radius: 33px;
cursor: pointer;
transition: all 0.3s ease; 

&:hover{
    transform: scale(0.9);
}
`

const Button = ({text, link}) => {
  return (
    <Btn>
        <a href={link} aria-label={text} target="blank">
            {text}
        </a>
    </Btn>
  )
}

export default Button
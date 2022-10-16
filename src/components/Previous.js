import React from 'react'
import { useWindowScroll } from 'react-use';
import styled from 'styled-components'
import { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom';

const Left = styled.div`
width: 60px;
height: 60px;
line-height: 55px;

box-sizing: border-box;
margin: 0;
padding: 0;
color: ${props => props.theme.body};
background-color: ${props => props.theme.logoColor};

font-size: ${props => props.theme.fontxl};
position: fixed;
left: 10%;
bottom: 50%;

cursor: pointer;

display: none;
justify-content:center;

border-radius: 50%;
transition: all 0.3s ease;
&:hover{
    transform: scale(1.2);
}
&:active{
    transform: scale(0.9);
}
@media (max-width: 70em) {
width: 40px;
height: 40px;
line-height: 35px;
}
`
const Previous = ({link}) => {

  const ref = useRef(null);
  const { y } = useWindowScroll();

  useLayoutEffect(() => {
    if (y > document.getElementById("myTopic").scrollHeight + document.getElementById("mySection").scrollHeight - document.getElementById("banner").scrollHeight) {
      ref.current.style.display = "none"
    } else {
      ref.current.style.display = "flex"
    }
  }, [y])
  return (
    <Link underline='none' to={link}>
      <Left ref={ref}>
        &#x2190;
      </Left>
    </Link>
  )
}

export default Previous
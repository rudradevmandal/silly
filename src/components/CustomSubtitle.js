import React from 'react'
import styled from 'styled-components';

const SubTitle = styled.h3`
font-size:  ${(props) => props.theme.fontlg};
text-transform: capitalize;
font-weight: 600;
margin-bottom: 1rem;
width: 100%;
align-self: center;
text-align: center;
@media (max-width: 48em) {
font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 40em) {
font-size: ${(props) => props.theme.fontsm};
}
`;

const CustomSubtitle = ({text}) => {
  return (
    <SubTitle>{text}</SubTitle>
  )
}

export default CustomSubtitle
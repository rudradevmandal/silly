import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
width: 100%;
 display: flex;
justify-content: center;
align-items: center;
// position: relative;
`
const TextContainer = styled.div`
width: 80%;
// display: flex;
justify-content: center;
align-items: center;
margin-top:    3rem;
margin-bottom: 3rem;

@media (max-width: 70em) {
margin-top:   3rem;
margin-bottom: 3rem;
}
@media (max-width: 48em) {
margin-top:   2.5rem;
margin-bottom: 2.5rem;
}
@media (max-width: 40em) {
margin-top:   1.5rem;
margin-bottom: 1.5rem;
}
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
width: 100%;
color: ${(props) => props.theme.text};
text-align: center;
 position: relative;

@media (max-width: 1200px) {
    width: 100%;
font-size: ${(props) => props.theme.fontxxl};
}
@media (max-width: 900px) {
font-size: ${(props) => props.theme.fontxl};
align-self: center;
text-align: center;
}
@media (max-width: 600px) {
    width: 100%;
font-size: ${(props) => props.theme.fontlg};
}
`;

const Topic = ({text}) => {
  return (
    <Section id="myTopic">
      <TextContainer>
        <Title>{text}</Title>
      </TextContainer>
    </Section>
  )
}

export default Topic
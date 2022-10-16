import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
width: 80%;
// display: flex;
justify-content: center;
align-items: center;
// position: relative;
`
const CircleContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 3rem;
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

const Circle = styled.span`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: ${props => props.theme.logoColor};
color: ${props => props.theme.lightText};
font-size:  ${(props) => props.theme.fontxxl};

@media (max-width: 70em) {
width: 3rem;
height: 3rem;
}
@media (max-width: 48em) {
width: 2.5rem;
height: 2.5rem;
}
@media (max-width: 40em) {
width: 1.5rem;
height: 1.5rem;
}
`
const TextContainer = styled.div`
width: 100%;
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

const Title = styled.h2`
font-size: ${(props) => props.theme.fontlg};
text-transform: capitalize;
width: 100%;
color: ${(props) => props.theme.text};
text-align: center;
// position: relative;

@media (max-width: 70em) {
    width: 90%;
font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 48em) {
font-size: ${(props) => props.theme.fontsm};
align-self: center;
text-align: center;
}
@media (max-width: 40em) {
    width: 90%;
font-size: ${(props) => props.theme.fontxs};
}
`;

const SubTitle = styled.h3`
font-size:  ${(props) => props.theme.fontmd};
font-style:  italic;
// text-transform: capitalize;
color:  ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-top: 1rem;
margin-bottom: 1rem;
width: 100%;
// align-self: flex-start;
text-align: center;
// text-align: justify;
// position: relative;

@media (max-width: 70em) {
    width: 90%;
font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 48em) {
font-size: ${(props) => props.theme.fontsm};
align-self: center;
text-align: center;
}
@media (max-width: 40em) {
    width: 90%;
font-size: ${(props) => props.theme.fontxs};
}
`;

const Quote = ({text, author}) => (
  <Section>
    <CircleContainer>
      <Circle>
        <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
      </Circle>
    </CircleContainer>
    <TextContainer>
      <Title>{text}</Title>
      <SubTitle>{author}</SubTitle>
    </TextContainer>
  </Section>
)

export default Quote
import React from 'react'
import styled from 'styled-components'
import DEMO from '../../assets/LenticularDemo/out.mp4'

const Section = styled.section`
// min-height: 80vh;
width: 100%;
background-color: ${props => props.theme.body};
// display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const TextContainer = styled.div`
width: 100%;
height:20vh;
background-color: ${props => props.theme.body};
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
const VideoContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

video{
    width: 100;
    height: auto;
    margin-bottom: 3rem;

@media (max-width: 70em) {
    width: 80%;
align-self: center;
text-align: center;
}
}
`

const Lenticular = () => {
  return (
    <Section>
        <TextContainer>
            <Title>Experience Animations Offline</Title>
        </TextContainer>
        <VideoContainer>
            <video src={DEMO} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    </Section>
  )
}

export default Lenticular
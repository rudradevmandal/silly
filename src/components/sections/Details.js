import React from 'react'
import styled from 'styled-components'
import Detail1 from '../details/Detail1'
import Detail2 from '../details/Detail2'
import Detail3 from '../details/Detail3'
import Detail4 from '../details/Detail4'

const Section = styled.section`
// min-height: 80vh;
width: 100%;
background-color: ${props => props.theme.lightBody};
// display: flex;
justify-content: center;
align-items: center;
position: relative;
height:70vh;
@media (max-width: 70em) {
height:50vh;
}
@media (max-width: 48em) {
height:45vh;
}
@media (max-width: 40em) {
height:30vh;
}
`
const Container = styled.div`
width: 75%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em) {
height:60vh;
}
@media (max-width: 48em) {
height:50vh;
}
@media (max-width: 40em) {
height:40vh;
}
`

const Box = styled.div`
width: 25%;
height: 100%;
max-height: 75vh;
display: flex-start;
flex-direction: coloumn;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 70em) {
height:60vh;
}
@media (max-width: 48em) {
height:50vh;
}
@media (max-width: 40em) {
height:40vh;
}
`
const TextContainer = styled.div`
width: 100%;
height:20vh;
background-color: ${props => props.theme.lightBody};
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

const Details = () => {
  return (
    <>
    <Section>
      <TextContainer>
        <Title>Silly Science offers</Title>
      </TextContainer>
      <Container>
        <Box> <Detail1 /> </Box>
        <Box> <Detail2 /> </Box>
        <Box> <Detail3 /> </Box>
        <Box> <Detail4 /> </Box>
        
        
      </Container>
      
    </Section>
    
    </>
  )
}

export default Details
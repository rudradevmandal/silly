import React from 'react'
import styled from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import CoverVideo from '../CoverVideo'

const Section = styled.section`
/* min-height: ${props => `calc(90vh - ${props.theme.navHeight})`}; */
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
  width: 85%;
min-height: 60vh;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;

  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
  }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
// max-height: 75vh;
display: flex-start;
flex-direction: coloumn;
justify-content: center;
align-items: center;
position: relative;
`

const Landing = () => {
  return (
    <Section id="landing">
      <Container>
        <Box><TypeWriterText /></Box>
        <Box><CoverVideo /></Box>
      </Container>
    </Section>
  )
}

export default Landing
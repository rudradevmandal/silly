import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Section = styled.section`
// min-height: 80vh;
width: 100%;
background-color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;
`
const TextContainer = styled.div`
width: 80%;
/* height:10vh; */
background-color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
position: relative;

/* @media (max-width: 70em) {
height:10vh;
}
@media (max-width: 48em) {
height:15vh;
}
@media (max-width: 40em) {
height:15vh;
}
@media (max-width: 30em) {
height:15vh;
} */
`

const TitleSection = styled.section`
// min-height: 80vh;
width: 100%;
/* height:50vh; */
background-color: ${props => props.theme.body};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
padding: 1vh;
/* padding: 15px; */

/* @media (max-width: 70em) {
height:100vh;
}
@media (max-width: 48em) {
height:100vh;
}
@media (max-width: 40em) {
height:40vh;
} */
`
const SubTitleSection = styled.section`
// min-height: 80vh;
width: 100%;
/* height:50vh; */
background-color: ${props => props.theme.body};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
padding: 1vh;
/* padding: 15px; */

/* @media (max-width: 70em) {
height:100vh;
}
@media (max-width: 48em) {
height:100vh;
}
@media (max-width: 40em) {
height:40vh;
} */
`
const ContentSection = styled.section`
// min-height: 80vh;
width: 100%;
/* height:50vh; */
background-color: ${props => props.theme.body};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
padding: 3vh;

/* @media (max-width: 70em) {
height:100vh;
}
@media (max-width: 48em) {
height:100vh;
}
@media (max-width: 40em) {
height:40vh;
} */
`
const ContentContainer = styled.div`
width: 80%;
/* height:30vh; */
background-color: ${props => props.theme.body};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
/* padding: 33px; */
`
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
text-align: center;

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
font-size: ${(props) => props.theme.fontmd};
    width: 90%;
}
@media (max-width: 30em) {
font-size: ${(props) => props.theme.fontsm};
}
`

const Content = styled.h2`
font-size: ${(props) => props.theme.fontlg};
color: ${(props) => props.theme.text};
/* display: flex;
justify-content: center;
align-items: center; */
text-align: center;
text-align: justify;
span{
    width: 100%;
    color: ${(props) => props.theme.logoColor};;
}

@media (max-width: 70em) {
    width: 90%;
font-size: ${(props) => props.theme.fontlg};
}
@media (max-width: 48em) {
font-size: ${(props) => props.theme.fontmd};
/* align-self: center; */
/* text-align: center; */
}
@media (max-width: 40em) {
font-size: ${(props) => props.theme.fontsm};
    width: 90%;
}
@media (max-width: 30em) {
font-size: ${(props) => props.theme.fontxs};
}
`

const AboutText = () => {

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {

        let element = ref.current;
        ScrollTrigger.create({
            id: 'slideID',
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        })

        return () => {
            ScrollTrigger.getById('slideID').kill();
        };
    }, [])

    return (
        <>
            <Section ref={ref}>
                <TitleSection>
                    <TextContainer>
                        <Title>About Us</Title>
                    </TextContainer>
                </TitleSection>
                <SubTitleSection>
                    <TextContainer>
                        <Title>Learning doesn't have to be excruciating, it can also be fun.</Title>
                    </TextContainer>
                </SubTitleSection>
                <ContentSection>

                    <ContentContainer>
                        <Content>Here at <span>Silly Science</span>, we try to bring back the fun in learning. We make maths and physics content using clear explanatory texts. Every line is curated by us, aiming to provide quality content. Our texts are backed up with colourful and lively animated videos. These videos stimulate learning by visualisation.</Content>
                        <br />
                        <Content>Research shows that the percentage of knowledge retention is 5% for attending lectures, 10% for reading, 20% for visualisation, 75% by practising and 90% by teaching others and applying in real life. In addition to the animated content, we strive to add as many questions as possible to enhance active learning by problem-solving. Furthermore, we also encourage peer-to-peer learning through community-based teaching. Along with this, many innovative experiments are included to further strengthen the concepts and thereby increase knowledge retention. </Content>
                        <br />
                        {/* <br /> */}
                        <Content>Our mission is to strengthen learning with a more exemplary and active approach.</Content>
                        <br />
                        {/* <br /> */}
                        <Content>Our vision is to imbibe a culture where learning sparks curiosity.</Content>
                    </ContentContainer>

                    {/* <ContentContainerLeft>
            <Content>Our mission is to strengthen learning with a more exemplary and active approach.</Content>
            <br />
            <br />
            <Content>Our vision is to imbibe a culture where learning sparks curiosity.</Content>
            </ContentContainerLeft> */}

                </ContentSection>

            </Section>
        </>
    )
}

export default AboutText
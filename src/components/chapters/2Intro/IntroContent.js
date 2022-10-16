import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/2Intro.json'
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import Note from '../../Note';
import Conclusion from '../../Conclusion';
import QnA from '../../QnA';
import QuestionsSubtitle from '../../QuestionsSubtitle';
import WorksheetSubtitle from '../../WorksheetSubtitle';

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const VideoContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AnimatedContainer = styled.div`
width: 60%;

@media (max-width: 900px) {
    width:80%;
}
@media (max-width: 600px) {
    width:100%;
}
`

const TextContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;
font-size: ${props => props.theme.fontmd};

@media (max-width: 900px) {
    width:80%;
font-size: ${props => props.theme.fontsm};
}
@media (max-width: 600px) {
    width:80%;
font-size: ${props => props.theme.fontxs};
}
`
const NoteContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;

@media (max-width: 900px) {
    width:80%;
}
`
const ConclusionContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;

@media (max-width: 900px) {
    width:80%;
}
`
const QnASection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;
`
const WorksheetSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;
`
const NoteSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;
`
const QnAContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;

@media (max-width: 900px) {
    width:80%;
}
`
const SubtitleContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;

@media (max-width: 900px) {
    width:80%;
}
`

const content = `
**Gravitational force** is one of the four major forces (the other forces are Electromagnetic force, weak nuclear force, and strong nuclear force). **It is particularly responsible for the invisible attraction among entities that have a property called mass.** 
  \n &nbsp;
  \n
  A brief description of the other three forces:
  \n &nbsp;
  \n
  <ul>
  <li><b>Electromagnetic force:</b> This force explains the world of electricity and magnetism. Even though the formula for gravity and electromagnetism is similar, the force of attraction/repulsion under simlar physical conditions is about 10<sup>36</sup> times stronger than that of gravity.</li>
  \n &nbsp;
  \n
  <li><b>Strong force:</b> It is the incredible force that holds the protons inside a nucleus. It is enormous in magnitude but acts over a minimal distance (about 10<sup>-15</sup> m). It's strength is approximately 10<sup>38</sup> times stronger than the force of gravity under similar circumstances. <i>Yeah!</i> It's that "strong".</li>
  \n &nbsp;
  \n
  <li><b>Weak force:</b> This force is responsible for radioactive decay. While the effective range for this force is the least among all (about 10<sup>-18</sup> m), it is about 10<sup>25</sup> times stronger than the force of gravity under similar circumstances.</li>
</ul>

\n &nbsp;
\n
Although gravity is the weakest force among all, it manages to keep massive planets revolving in orbit. How? How does this mysterious force enable the formation of orbits? To understand the formation of orbits, we need to understand the independence of horizontal and vertical velocity.
`;

const note = `
The text is intended to give students a feel for all the forces in nature. As gravitational force is the focus, the text compares all the other forces to the gravitational force. The lesson also aims to introduce a few significant questions to pique the reader's curiosity.
`;

const conclusion = `
Gravitational force is the force that pulls together massive entities. It is also the weakest force among the four fundamental forces.
`;


const IntroContent = () => {

    return (
        <Section>
        <VideoContainer>
            <AnimatedContainer>
                <LottieAnimation animationData={animationData} id="Intro"></LottieAnimation>
            </AnimatedContainer>
        </VideoContainer>
            <TextContainer>
                <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content}</Markdown>
            </TextContainer>
            <QnASection>
            <SubtitleContainer><QuestionsSubtitle /></SubtitleContainer>
            
            <QnAContainer>
                <QnA srno={"1"} question={"Is gravitational force attractive or repulsive?"} answer={"Attractive"} />
                <QnA srno={"2"} question={"Define gravitational force?"} answer={"Gravitational force is the force which is particularly responsible for the invisible attraction among entities that have a property called mass."} />
                <QnA srno={"3"} question={"What particular property should an object have so that gravitational force can act upon it?"} answer={"Mass (or Energy)"} />
            </QnAContainer>
            </QnASection>

            <NoteSection><ConclusionContainer><Conclusion text={conclusion} /></ConclusionContainer></NoteSection>

            <NoteSection><NoteContainer><Note text={note} /></NoteContainer></NoteSection>
            

            
            

            <WorksheetSection>
            <SubtitleContainer><WorksheetSubtitle /></SubtitleContainer>
            
            <QnAContainer>
                <QnA srno={"1"} question={"Can gravitational force be repulsive?"} answer={"No (Probably)"} />
                <QnA srno={"2"} question={"List all the fundamental forces present in nature?"} answer={"Gravitational force, Electromagnetic force, Weak force and strong force."} />
                <QnA srno={"3"} question={"Which is the strongest force in nature?"} answer={"Strong force"} />
            </QnAContainer>
            </WorksheetSection>

        </Section>

    )
}

export default IntroContent
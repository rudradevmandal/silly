import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/10GravConst.json'
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
margin-top: -15%;
margin-bottom: -10%;
z-index: -1;

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
Sir Henry Cavendish first discovered the Gravitational constant in a famous experiment named *“Weighing the world”* in 1797, more than 100 years later than Newton’s law of gravitation. In this experiment, he stuck two steel balls of equal mass to a rigid rod and hung the centre of the rod. He connected the other end of the rod to a torsional spring, measured the rotational force experienced by the two balls, and then fixed two massive lead balls at a distance from the steel balls. The lead balls attracted the steel balls, and the rigid rod rotated. Hence, the reading of the force was measured. In this experiment, he measured F, and both the masses and the distance between them were known. The only unknown was the Gravitational constant, calculated using the above values. This experiment was named “Weighing the world” because by knowing the gravitational constant, one could measure the mass of the earth.
`;

const Q1 = `
Who discovered the value for the universal gravitational constant?
`;
const QA1 = `
Sir Henry Cavendish
`;

const Q2 = `
Calculate the universal gravitational constant, G, from the experimental results as given below:
\n &nbsp;
\n
Mass of the lead ball, $M = 160\\ kg$,
Mass of the steel ball, $m = 1\\ kg$,
Distance between the lead and the steel ball, $r = 0.225\\ m$,
Force experienced by the lead ball, $F = 2.1 \\times 10^{-7}\\ N$
`;
const QA2 = `
Given,
$$
\\begin{aligned}\\text{Mass of lead ball, }M &= 160\\ kg\\\\ \\text{Mass of steel ball, }m &= 1\\ kg\\\\ \\text{Distance, }r &= 0.225\\ m\\\\ \\text{Force experienced, }F &= 2.1 \\times 10^{-7}\\ N\\end{aligned} 
$$
The gravitational force between two objects is given by,
$$
\\begin{aligned}F &= G\\ \\frac{Mm}{r^2}\\\\ 2.1 \\times 10^{-7} &= G\\ \\frac{160 \\times 1}{0.225^2}\\\\ \\implies G &= \\frac{(2.1 \\times 10^{-7}) \\times 0.225^2}{160 \\times 1}\\\\ G &= 6.64 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}\\end{aligned}
$$
`;

const conclusion = `
Universal Gravitational Constant was measured in 1797 by Sir Henry Cavendish using an apparatus which could measure the force between two solid lead and steel balls kept at a distance.
`;

const note = `
The goal of the text is to introduce Sir Henry Cavendish and his famous experiment. This lesson tries to illustrate different parts of the experiment that led to the discovery.
`;

const W1 = `
How was the force measured in the above experiment?
`;
const WA1 = `
By using a torsional spring meter
`;

const W2 = `
Why was the experiment named "Weighing the world"?
`;
const WA2 = `
Because by knowing the gravitational constant, one could measure the mass of the earth.
`;

const GravConstContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="GravConst"></LottieAnimation>
        </AnimatedContainer>
    </VideoContainer>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content}</Markdown>
        </TextContainer>

        <QnASection>
        <SubtitleContainer><QuestionsSubtitle /></SubtitleContainer>
        
        <QnAContainer>
            <QnA srno={"1"} question={Q1} answer={QA1} />
            <QnA srno={"2"} question={Q2} answer={QA2} />
        </QnAContainer>
        </QnASection>

        <NoteSection><ConclusionContainer><Conclusion text={conclusion} /></ConclusionContainer></NoteSection>

        <NoteSection><NoteContainer><Note text={note} /></NoteContainer></NoteSection>

        <WorksheetSection>
        <SubtitleContainer><WorksheetSubtitle /></SubtitleContainer>
        
        <QnAContainer>
            <QnA srno={"1"} question={W1} answer={WA1} />
            <QnA srno={"2"} question={W2} answer={WA2} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default GravConstContent
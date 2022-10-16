import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/4FormOrbit.json'
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
Let's put our thinking hats on and think that we have infinite energy and can throw it at any distance we want. Let's go up on the terrace of a multi-storey building and start throwing stones (imaginary ones, or else it will get dangerous!). So whenever we throw a stone, remember that it will fall about a constant in 1 second. So when we throw a stone horizontally, it covers some horizontal distance (depending on the strength of the throw) but covers the same vertical distance (i.e., the building's height) vertically every time. Therefore, when you start increasing the strength of the throw, the stone goes farther and farther from you but falls the same amount, the height of the building, every time. But, as soon as we reach the realms of superman's throwing capacities, we need to keep in mind that the earth is round, and at some point, we will throw the stone with such strength that it will fall greater than the height of the building as the earth's surface curves. So, the stone is trying to fall to the surface from the stone's perspective, but the earth's surface keeps on curving, and the stone takes longer to fall. And, in fact, we will find a sweet point, when the earth curves the same amount, the stone falls, and in this bizarre case, the stone never touches the ground but is continuously "falling". Man, it would be damn difficult being this stone, it's like trying to reach a delicious fruit, but it is just out of our reach.
`;

const Q1 = `
What would happen if we did the same activity as above, but the earth was flat?
`;
const QA1 = `
If the earth was flat, the stone will fall the same amount of distance in every scenario. (Although the physics is very weird and different, under some assumptions, this will be the answer).
`;

const Q2 = `
In the fourth animation, why does the stone take longer time to fall?
`;
const QA2 = `
Because the earth's surface starts to curve, hence the stone travels more than the building's height.
`;

const Q3 = `
Would we observe the same for any object like a paper ball or a table tennis ball? Does this experiment hold true for all types of objects? Give it a thought.
`;
const QA3 = `
Yes, this is true for all objects which has mass.
`;

const conclusion = `
Orbits are formed when an object attains a perfect velocity such that the amount by which the earth curves is the same amount by which the object "falls".
`;

const note = `
The text aims to give a visual narrative for gravitation and the formation of orbits. Along with the animation, it provides an experimental insight into the formation of orbits. It tries to relate the simple concept of falling with the formation of orbits, even though falling is not scientifically correct. The goal is to understand the consequences of gravitation before jumping into the mathematical modelling for the same. Just as falling is a consequence of gravity, so is the formation of orbits, but the relation between them is not straightforward. Here the text tries to connect the two.
`;

const W1 = `
How much distance is the stone falling during the initial phase of the imaginary activity?
`;
const WA1 = `
The building's height.
`;

const W2 = `
Is there any scenario where the stone travels more than the building's height?
`;
const WA2 = `
Yes
`;

const W3 = `
Under what condition does the stone travels more than the building's height?
`;
const WA3 = `
Once the earth's surface starts to curve, the stone travels more than the building's height
`;


const FormOrbitContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="FormOrbit"></LottieAnimation>
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
            <QnA srno={"3"} question={Q3} answer={QA3} />
        </QnAContainer>
        </QnASection>

        <NoteSection><ConclusionContainer><Conclusion text={conclusion} /></ConclusionContainer></NoteSection>

        <NoteSection><NoteContainer><Note text={note} /></NoteContainer></NoteSection>
        

        
        

        <WorksheetSection>
        <SubtitleContainer><WorksheetSubtitle /></SubtitleContainer>
        
        <QnAContainer>
            <QnA srno={"1"} question={W1} answer={WA1} />
            <QnA srno={"2"} question={W2} answer={WA2} />
            <QnA srno={"3"} question={W3} answer={WA3} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default FormOrbitContent
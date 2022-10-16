import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/5CentripetalForce.json'
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
margin-bottom: -15%;
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
So, if we think about it, the moon is continuously *“falling”* towards the earth. The earth, along with other planets, is continuously *“falling”* towards the Sun and this so-called *“fall”*, is due to the gravitational force. *“Falling”* is not scientifically accurate. In reality, things are pulled towards the centre. **A force that keeps an object in a circular motion by pulling it towards the centre is known as centripetal force.** This is why the moon orbits the earth. The earth, along with other planets, orbits the Sun and this very force is also responsible for the falling of objects on the ground when thrown up. This force is provided by the earth to the moon, making it constantly revolve around the earth and not fly off on a tangent! The same is true for the Sun and Earth systems.
\n &nbsp;
\n
What happens if there is no centripetal force?
`;

const Q1 = `
What is centripetal force?
`;
const QA1 = `
A force that keeps an object in a circular motion by pulling it towards the centre is known as centripetal force.
`;

const Q2 = `
Is it the same force that we experience when a vehicle takes a turn?
`;
const QA2 = `
Yes
`;

const Q3 = `
Give some real-world examples where we see centripetal force in action?
`;
const QA3 = `
<ol type="a">
Below are few real-world examples where we see centripetal force in action:
\n &nbsp;
\n
<li>When a train, aeroplane or any vehicle takes a turn while moving.</li>
\n &nbsp;
\n
<li>In mixer grinder and blender.</li>
\n &nbsp;
\n
<li>While whirring a stoone on a thread.</li>
\n &nbsp;
\n
<li>When fan is rotating.</li>
</ol>
`;

const Q4 = `
Is gravitational force a type of centripetal force?
`;
const QA4 = `
Yes
`;

const conclusion = `
Centripetal force is a centre-pulling force that acts on objects when moving in a circular motion. Gravitational force is a type of centripetal force.
`;

const note = `
The goal of the text is to introduce centripetal force and its importance. It is important to realise that gravitational force is a centripetal force and subsequntly the word "falling" is a consequense of this centripetal force.
`;

const W1 = `
The force that acts towards a point (central) is also known as _____________.
`;
const WA1 = `
Centripetal Force
`;

const W2 = `
What force causes an apple to fall?
`;
const WA2 = `
Gravitational Force
`;

const W3 = `
Is the moon also orbiting the earth due to the same force?
`;
const WA3 = `
Yes
`;

const W4 = `
What is the name of the centripetal force exerted by all objects which has mass?
`;
const WA4 = `
Gravitational Force
`;


const CentripetalForceContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="CentripetalForce"></LottieAnimation>
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
            <QnA srno={"4"} question={Q4} answer={QA4} />
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
            <QnA srno={"4"} question={W4} answer={WA4} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default CentripetalForceContent
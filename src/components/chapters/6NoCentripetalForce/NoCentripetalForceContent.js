import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/6NoCentripetalForce.json'
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
In the absence of this centripetal force, which we call gravitational force, planets will not conform to orbits, nor will matter form spherical blobs called planets. If we switch off gravity, the earth will continue moving in a straight line. It is the same effect when we tie a string to a stone and rotate it above our head, like a helicopter. If the string breaks, it will set off in a straight line which is the tangent to the circle of revolution. This happens because the force applied is suddenly removed, and there is no force to bend the stone towards the centre. This force is essential for the occurrence of nature as we see and observe it.
\n &nbsp;
\n
Apart from this, there are various phenomena that occur due to gravity, such as the occurrence of high and low tides and the fact that we are always stuck to the earth's surface.
`;

const Q1 = `
In the absence of centripetal force, if an object goes off in the tangential direction. What is the angle between the line showing the direction of centripetal force and the line showing the direction of motion?
`;
const QA1 = `
The tangent to a circle is always 90° or perpendicular to the line joining the point to the centre of the circle.
`;

const Q2 = `
What if instead of switching of the gravitational force, we gradually increase it. How would the motion look?
`;
const QA2 = `
If we try to increase the gravitational force gradually, the object's motion in question will look like a spiral. As the force increases, the object will experience more force than the previous instance, and the orbit will start to shrink. As it shrinks gradually, the object will follow a spiral path.
`;

const conclusion = `
In the absence of centripetal force, the object in a circular motion will fly off in a straight line which is the tangent at that point.
`;

const note = `
Having introduced centripetal force in the previous lesson, the purpose of the lesson is to give the reader an understanding about the absence of centripetal force. It enforces the importance of it as well. The text relates the whirling of stone to centripetal force, a critical comparison. The goal here is to understand that any object under the influence of centripetal force will travel in a straight line when the centripetal force is switched off suddenly.
`;

const W1 = `
<ol type="a">
Absence of centripetal force will enable the object to move in a
\n &nbsp;
\n
<li>spiral</li>
<li>circle</li>
<li>straight line</li>
<li>zigzag path</li>
</ol>
`;
const WA1 = `
As there is no centripetal force, the object shall move in a straight line. Hence, the answer is **c. straight line**.
`;

const W2 = `
The above path also forms a _____________ to the circle.
`;
const WA2 = `
Tangent
`;

const W3 = `
Why is the above path a stratight line?
`;
const WA3 = `
Because there is no force to bend the object towards the centre.
`;



const NoCentripetalForceContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="NoCentripetalForce"></LottieAnimation>
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
            <QnA srno={"3"} question={W3} answer={WA3} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default NoCentripetalForceContent
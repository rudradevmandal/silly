import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/17PressureFluids.json'
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
margin-top: -3%;
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
It should be clear that a solid body, when kept on a surface, exerts thrusts downwards due to its weight and the bottom surface area is accounted for distributing the pressure. But what about fluids? How do they exert pressure? Is it the same way as solids? It cannot be if it was true that a fluid exerts thrust only at the bottom surface, then while inflating a balloon, we would have seen the balloon stretch only from the bottom. But while inflating a balloon, it inflates from all sides. This leads us to the fantastic fact that fluids, including liquids and gases, exert thrusts and pressure undiminished in all directions. But another astonishing fact is that their weight, as for all matter, always acts towards the ground, and the surface of the liquid will always align itself in such a manner that the weight is acting perpendicular to it. For example, if you fill water in a glass, the water’s surface at the top will always remain parallel to the surface of the earth, no matter how you tilt or deform the glass. It’s an amazing fact to try!
`;

const Q1 = `
How is the pressure distributed in fluids?
`;
const QA1 = `
Undiminished in all directions
`;

const Q2 = `
While inflating a balloon, why doesn’t it inflate in a single direction?
`;
const QA2 = `
Because air is a fluid and fluids apply pressure in all directions
`;

const Q3 = `
Why is the surface of water flat no matter on what surface it is kept?
`;
const QA3 = `
Because the force on the surface of the water is always perpendicular, as gravity acts towards the earth's centre, therefore the surface of the water is always perpendicular to that.
`;

const conclusion = `
Fluids exert equal pressure in all directions perpendicular to the surface.
`;

const note = `
The lesson's objective is to elucidate that water, or all fluids in general, react a bit differently under gravity. Unlike solids, they exert equal pressure on all sides. The text also draws attention to the fact that the water's surface always aligns in a specific way. This lesson is an excellent prelude to buoyancy.
`;

const W1 = `
Which of the following is a fluid at room temperature:
<ol type="a">
\n &nbsp;
\n
<li>Mercury</li>
\n &nbsp;
\n
<li>Air</li>
\n &nbsp;
\n
<li>Water</li>
\n &nbsp;
\n
<li>Wood</li>
</ol>
`;
const WA1 = `
a,b and c
`;

const W2 = `
Is it true that a fluid exerts thrust only at the bottom of the vessel that it is stored? Why?
`;
const WA2 = `
No. Because fluids exerts thrust and pressure undiminished in all directions.
`;

const W3 = `
Fuilds exert thrust and pressure undiminished in all directions. But will an object experience the same amount of pressure when immersed at different levels inside of that fluid?
`;
const WA3 = `
No. The fluid level above the object will determine the downward force, and the amount of fluid below the object will determine the upward force. The new force will change as the object changes its position. At the top, the object will experience a net upward force, and as it is immersed deeper and deeper, it will experience more and more downward force.
`;

const PressureFluidsContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="PressureFluids"></LottieAnimation>
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

export default PressureFluidsContent
import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/19Buoyancy.json'
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
At some point in our lives, we all must have wondered how a ship which is made of metal, remains afloat on the water, whereas a spoon, which is also made up of metal, sinks. There must be some force that pushes the ship out of the water. What is this force? To remain afloat on any fluid (water, air, liquid nitrogen, concentrated $H_2SO_4$), we need to keep only one thing in mind, the upward force experienced by the object must be equal to the object’s weight. When this is balanced, the object remains still at a point where no external forces act upon it, and the object is at equilibrium. **This upward force is called the buoyant force, and the phenomenon of experiencing this is called buoyancy.** Buoyant force always acts opposite to gravity. But, what is the upward force, and how do we know if it is enough to push an object on the surface of the water?
`;

const Q1 = `
Define buoyancy?
`;
const QA1 = `
When an object is immersed in a fluid, it experiences a buoyant force that always acts opposite to gravity, and the phenomenon of experiencing this is called buoyancy.
`;

const Q2 = `
What is the condition under which a body will float when immersed in fluid?
`;
const QA2 = `
When an object is immersed in a fluid, if the upward or buoyant force experienced by the object is equal to or greater than the object’s weight, the object will float.
`;

const conclusion = `
When an object is immersed in a fluid, it experiences a buoyant force that always acts opposite to gravity.
`;

const note = `
The lesson aims to establish the concept of buoyancy. The text states facts about buoyancy to instigate thought and enquiry into the reader. It does not describe the "Why?". The text concludes that the buoyant force always acts opposite to gravity.
`;

const W1 = `
What is the force experienced by an object when immersed under water?
`;
const WA1 = `
Force of buoyancy
`;

const W2 = `
Force of buoyancy always acts:
<ol type="a">
\n &nbsp;
\n
<li>opposing the motion of the object</li>
\n &nbsp;
\n
<li>opposing gravity</li>
\n &nbsp;
\n
<li>towards gravity</li>
\n &nbsp;
\n
<li>None of the above</li>
</ol>
`;
const WA2 = `
Force of buoyancy always acts **b. opposing gravity**.
`;

const W3 = `
Force of buoyancy is also known as _____________.
`;
const WA3 = `
Buoyant force
`;

const BuoyancyContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="Buoyancy"></LottieAnimation>
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

export default BuoyancyContent
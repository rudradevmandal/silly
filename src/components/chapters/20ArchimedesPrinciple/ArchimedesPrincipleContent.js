import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData1 from '../../../assets/LottieJson/20ArchimedesPrinciple1.json'
import animationData2 from '../../../assets/LottieJson/20ArchimedesPrinciple2.json'
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

const VideoContainer1 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AnimatedContainer1 = styled.div`
width: 60%;
margin-top: -10%;
margin-bottom: -6%;
z-index: -1;

@media (max-width: 900px) {
    width:80%;
}
@media (max-width: 600px) {
    width:100%;
}
`

const VideoContainer2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AnimatedContainer2 = styled.div`
width: 60%;
margin-top: -20%;
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

const content1 = `
The only parameter to consider for buoyancy is the weight of the water/liquid displaced by the fluid. If the weight of the fluid displaced by the object is equal to the weight of the object, then the object will remain afloat. **Therefore, the force experienced by an object when immersed in a liquid is equal to the weight of the fluid displaced.** This was the principle stated by Archimedes, often known as the *EUREKA* moment.

`;
const content2 = `
He came across this principle while pondering about a problem given by the king of his state, Syracuse. The problem was ensuring his crown was made from pure gold. During his extensive mental exercise of finding the solution, he thought the water displaced or the change in the water level by the gold crowns would equal the crown’s volume. One can weigh the crowns and determine their density if the volume is known. He knew that the density of pure and impure crowns would be different as adding impurity would change the density. This happened when he was bathing and lying in his bathtub, which made the water spill out of the bathtub and made him think along the above lines. Legend has it that at this moment, Archimedes ran through the streets of Syracuse, naked, shouting *EUREKA (I’ve got it)!*
\n &nbsp;
\n
This is also why we feel lighter when inside a swimming pool. We displace some volume of water, and its corresponding weight is the opposing force experienced by us, which is always acting opposite to gravity, and hence, we feel lighter. The spoon sinks because it cannot displace enough water to be afloat. This is the reason why ships have a humungous bottom surface area. The same fact is valid for a hot air balloon. A hot air balloon essentially works because it has a huge volume of hot air, hence, is lighter. So the same volume of hot air weighs less than the cold, surrounding air. And thus, the buoyant force experienced by the hot air balloon is more than its weight, so it rises and rises until the forces cancel each other out or the hot air inside the balloon becomes cold.
\n &nbsp;
\n
This principle is used in various ways. It is used to design hot air balloons, submarines, and ships of all sizes. It is also used to detect the impurity of milk by lactometers. Hydrometers use the same principle to determine the density of a fluid.
`;

const Q1 = `
State Archimedis' princple?
`;
const QA1 = `
When a body is immersed fully or partially in a fluid, it experiences an upward force equal to the weight of the fluid displaced by it.
`;

const Q2 = `
How can you measure the exact volume of an irregularly shaped object?
`;
const QA2 = `
By completely immersing the object in a fluid and measuring the change in the fluid level.
`;

const Q3 = `
Explain the conditions under which an object remains afloat on a fluid?
`;
const QA3 = `
When an object is immersed fully or partially in a fluid, if the weight of the fluid displaced is more than the object's weight, the object will remain afloat.
`;

const conclusion = `
When immersed in a fluid, an object displaces the fluid according to its volume, and the weight of this displaced fluid is the upward buoyant force experienced by the object.
`;

const note = `
The text introduces Archimedes' principle by delving into the history and stating the chain of events that might have led Archimedes to the concept of buoyancy. The text describes the parameter considered to calculate buoyant force. The goal is to understand why an object floats or sinks, ultimately leading to density.
`;

const W1 = `
How does a ship float on water even though the ship is so heavy?
`;
const WA1 = `
The weight of water displaced by the ship is greater than the weight of the ship.
`;

const W2 = `
Why you have to beat your hands and legs in water to swim?
`;
const WA2 = `
Our body’s volume is not enough to displace enough amount of water. Beating hands and legs displaces extra water in order for us to remain afloat.
`;

const W3 = `
When measuring our weight on a weighing scale, are we really measuring our complete weight? If no, explain why?
`;
const WA3 = `
No. In reality, we displace a certain volume of air which exerts a force equal to the weight of the air displaced. This decreases the reading on the weighing machine. Hence, our weight is slightly greater than shown on the weighing scale.
`;

const W4 = `
What are lactometers used for?
`;
const WA4 = `
To determine the purity of a sample of milk.
`;

const W5 = `
What are hydrometers used for?
`;
const WA5 = `
For determining density of fluids.
`;

const ArchimedesPrincipleContent = () => {
  return (
    <Section>
    <VideoContainer1>
        <AnimatedContainer1>
            <LottieAnimation animationData={animationData1} id="ThrustPressure1"></LottieAnimation>
        </AnimatedContainer1>
    </VideoContainer1>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content1}</Markdown>
        </TextContainer>
    <VideoContainer2>
        <AnimatedContainer2>
            <LottieAnimation animationData={animationData2} id="ThrustPressure2"></LottieAnimation>
        </AnimatedContainer2>
    </VideoContainer2>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content2}</Markdown>
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
            <QnA srno={"4"} question={W4} answer={WA4} />
            <QnA srno={"5"} question={W5} answer={WA5} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default ArchimedesPrincipleContent
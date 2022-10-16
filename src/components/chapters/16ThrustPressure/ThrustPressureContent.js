import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData1 from '../../../assets/LottieJson/16ThrustPressure1.json'
import animationData2 from '../../../assets/LottieJson/16ThrustPressure2.json'
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import Note from '../../Note';
import Conclusion from '../../Conclusion';
import QnA from '../../QnA';
import QuestionsSubtitle from '../../QuestionsSubtitle';
import WorksheetSubtitle from '../../WorksheetSubtitle';
import ExampleSubtitle from '../../ExampleSubtitle';

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
margin-top: -6%;
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
margin-top: -6%;
margin-bottom: -6%;
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
const ExampleSection = styled.section`
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
Consider this scenario. You are trying to fix a nail on your wall with a hammer. You hit the nail with some amount of force, let’s say, and the nail is fixed. What if you tried to hit the nail and missed and directly hit the wall with the hammer with the same force? What would happen in that case? Will the hammer also go inside the wall as the nail went in? No, it will not. But why? If the force applied is the same, then what is the difference?
\n &nbsp;
\n
The above scenario shows us that we cannot describe every physical event happening around us just by knowing the amount of force. This is what physics is; we try to explain the physical events around us. Apart from the force, we need to know how much area the force is acting. If a force acts on a teeny-tiny bit area, like in the case of the nail, it will impact that part of the wall. Suppose the area is larger, as the force is spread across a region when a hammer directly hits the wall. This will allow the wall to withstand the force, and the hammer does not go inside the wall. This happens due to something called pressure. But before we formally define pressure, we need to understand another bit of data we overlooked.
\n &nbsp;
\n
What if you hit the nail at an angle? What would happen? The nail would bend and go inside the wall in a crooked manner. But will it pierce the wall as quickly as in the case when you were hitting it head-on? No, it will not. Something’s changed in the second case. Not only does the area matter, but we also need to know the component of force hitting directly perpendicular to the wall. This component (perpendicular) of force will push the nail in, and the rest is used to bend the nail. This perpendicular component is called the thrust, and the thrust acting per unit area is known as the pressure. Thrust is a component of force; thus, it has units of force, i.e., Newtons, but the pressure is thrust divided by area,
$$
Pressure = \\frac{Thrust}{Area}
$$
this will have units of $\\frac{N}{m^2}$, which is also called $Pa$ (Pascal), in honor of the 17th-century French Scientist *Blaise Pascal*.
`;
const content2 = `
This concept can also explain why we have a hard time standing for long hours but can sleep for the same time without any problem. This is because when we are standing, the weight is concentrated on the legs, and the bones inside our legs are under enormous pressure, so after some time, the bones and muscles in our legs get tired and exhausted. While sleeping, our weight is distributed about the whole back of our body, making it easier to sleep for long hours. This is why we are comfortable sitting or sleeping rather than standing.
`;
const E1 = `
How much is the thrust applied by a person having a mass of $40\\ kg$, considering the person is standing perpendicular to the surface?
`;
const EA1 = `
Thrust is the force which is perpendicular to the surface, in this case the weight is that force. Hence,
\n &nbsp;
\n
Thrust = weight = $m \\times g$ = $40 \\times 9.8$ = $382\\ Nm$
`;

const E2 = `
We have about $51,615\\ kg$ of air per $5\\ m^2$ above our heads due to the atmosphere. What is the pressure exerted?
`;
const EA2 = `
$$
\\begin{aligned} Thrust = F &= m \\times g\\\\ &= 51,615\\ kg \\times 9.8\\ m\\ s^{-2}\\\\ &= 5,05,827\\ N \\end{aligned}
$$
$$
\\begin{aligned} Pressure &= \\frac{Thrust}{Area}\\\\ &= \\frac{5,05,827\\ N}{5\\ m^2}\\\\ &= 101165.4\\ N\\ m^{-2}, or\\\\ &= 1.01 \\times 10^5\\ Pa \\end{aligned}
$$
`;
const E3 = `
A block of wood is kept on a tabletop. The mass of wooden block is $5\\ kg$ and its dimensions are $40\\ cm \\times 20\\ cm \\times 10\\ cm$. Find the pressure exerted by the wooden block on the table top if it is made to lie on the table top with its sides of dimensions (a) $20\\ cm \\times 10\\ cm$ and (b) $40\\ cm \\times 20\\ cm$.*
`;
const EA3 = `
The mass of the wooden block $= 5\\ kg$
\n &nbsp;
\n
The dimensions $= 40\\ cm \\times 20\\ cm \\times 10\\ cm$
\n &nbsp;
\n
Here, the weight of the wooden block applies a thrust on the table top. That is,
$$
\\begin{aligned} Thrust = F &= m \\times g\\\\ &= 5\\ kg \\times 9.8\\ m\\ s^{–2}\\\\ &= 49\\ N\\\\ \\text{Area of a side} &= \\text{length} \\times \\text{breadth}\\\\ &= 20\\ cm \\times 10\\ cm\\\\ &= 200\\ cm^2 = 0.02\\ m^2\\\\ \\text{Pressure} &= \\frac{49\\ N}{0.02\\ m^2}\\\\ &= 2450\\ N\\ m^{-2} \\end{aligned}
$$
When the block lies on its side of dimensions $40\\ cm \\times 20\\ cm$, it exerts the same thrust.
$$
\\begin{aligned} \\text{Area} &= \\text{length} \\times \\text{breadth}\\\\ &= 40\\ cm \\times 20\\ cm\\\\ &= 800\\ cm^2 = 0.08\\ m^2\\\\ \\text{Pressure} &= \\frac{49\\ N}{0.08\\ m^2}\\\\ &= 612.5\\ N\\ m^{-2} \\end{aligned}
$$
The pressure exerted by the side $20\\ cm \\times 10\\ cm$ is $2450\\ N\\ m^{–2}$ and by the side $40\\ cm \\times 20\\ cm$ is $612.5\\ N\\ m^{–2}$.
`;

const Q1 = `
What is the difference between Force, Thrust and Pressure? Also, mention their respective SI units.
`;
const QA1 = `
**Force** is a push or pull. It acts in the direction it is applied. It's SI units is Newtons or $N$.
\n &nbsp;
\n
**Thrust** is the force acting perpendicular to a surface. It is also measured in $N$.
\n &nbsp;
\n
**Pressure** is thrust acting per unit area. It is measured in $N\\ m^{-2}$ or $Pa$.
`;

const Q2 = `
Why it is advised to lay flat when stuck in wet sand?
`;
const QA2 = `
Laying flat will increase the body's surface area and hence distribute the force, stopping the person from drowning further.
`;

const Q3 = `
In which case the pressure is maximum?
<ol type="a">
\n &nbsp;
\n
<li>Standing up</li>
\n &nbsp;
\n
<li>Lying flat</li>
</ol>
`;
const QA3 = `
Pressure is maximum while **a. Standing up** as the surface area while standing is less.
`;

const conclusion = `
Thrust is the perpendicular component of the force applied on a surface, and Pressure is the thrust acting per unit area.
`;

const note = `
The purpose of the text is to describe Force, thrust, and pressure in a comparative but distinctive manner. Even though they all seem to be similar and relative, they are quite different. These are not independent concepts. They are introduced to address different situations in real-life. But for some scenarios, Force might be an apt description for other thrusts or pressure. The text also illustrates the importance of these concepts through different examples.
`;

const W1 = `
What are the SI units of thrust?
`;
const WA1 = `
Newtons
`;

const W2 = `
What are the SI units of pressure?
`;
const WA2 = `
$N\\ m^{-2}\\ or\\ Pascals$
`;

const W3 = `
How much is the thrust applied by a person weighing $40\\ Kg$, assuming standing upright?
`;
const WA3 = `
Thrust is the perpendicular component of the force. As the person stands upright, all the weight is perpendicular to the surface. Hence,
$$
\\begin{aligned}Thrust = weight &= m \\times g\\\\ &=40 \\times 9.8\\\\ &=392\\ N\\end{aligned}
$$
`;

const W4 = `
If the thrust applied by a person is $500\\ N$, what is the person’s mass? Assume that the person is standing upright.
`;
const WA4 = `
As the person is standing upright, thrust = weight. Hence,
$$
\\begin{aligned}Thrust = weight &= m \\times g\\\\ &=500\\ N\\\\ \\implies m&=\\frac{500}{9.8}\\\\ &= 51.02\\ kg\\end{aligned}
$$
`;

const W5 = `
A person is pushing a block of wood weighing $20\\ kg$ with $100\\ N$ of force along the surface. What is the thrust applied by the block on the floor?
`;
const WA5 = `
Thrust is the force perpendicular to the surface. Therefore net thrust is only the box’s weight $= m \\times g = 20 \\times 9.8 = 196\\ N$
`;

const W6 = `
Why are concrete slabs laid down beneath the railway tracks?
`;
const WA6 = `
To distribute the force of the passing train evenly
`;

const ThrustPressureContent = () => {
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
        <ExampleSection><ExampleSubtitle /> 
        
        <QnAContainer>
            <QnA srno={"1"} question={E1} answer={EA1} />
            <QnA srno={"2"} question={E2} answer={EA2} />
            <QnA srno={"3"} question={E3} answer={EA3} />
        </QnAContainer>
        
        </ExampleSection>
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
            <QnA srno={"6"} question={W6} answer={WA6} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default ThrustPressureContent
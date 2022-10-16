import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/15WeightDiffPlanets.json'
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

const VideoContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AnimatedContainer = styled.div`
width: 60%;
/* margin-top: -6%;
margin-bottom: -6%; */
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

const content = `
Like us, different planets have different masses and, therefore, different $ 'g’$. $ 'g’$ on earth is higher than that of the moon, *why?* Because the moon weighs way less than the earth (about 81.25 times less), it's much smaller than the earth (about 3.6 times smaller). This results in a smaller gravitational pull, about six times less than the earth's. This also means that if you measure weight on the moon, you would weigh six times less, i.e., a person weighing $60\\ N$ on Earth will weigh only $10\\ N$. Another consequence is that you can jump much higher than on earth. But this is not the case on all planets. If you happen to visit Jupiter, a massive planet, the same person will weigh about $150\\ N$, which is much more than your body might be used to carry, about 2.5 times that of the earth. Even crazier would be visiting the Sun (Good luck coming back without burning to ashes), and you will weigh $1680\\ N$, 28 times your weight (assuming you weigh $60\\ N$). This will surely crush your bones if you somehow manage to evade the scorching heat on the surface of the Sun. To find out the acceleration due to gravity on a planet, we just need to know the mass of the planet and its radius, as $g$ is given by,
$$
g_{planet} = G \\frac{M}{r^2}
$$
To compare it to the earth’s gravitational acceleration, just divide it by 9.8.
$$
g_{relative} = \\frac{g_{planet}}{g_{earth}}
$$
As mass remains the same, we can use relative acceleration to find the weight of an object on other planets. First, let us calculate the acceleration due to gravity on the moon.
\n &nbsp;
\n
Mass of the moon, $M_m = 7.36 \\times 10^{22}\\ kg$
\n &nbsp;
\n
Radius of the moon, $R_m = 1.74 \\times 10^6\\ m$
\n &nbsp;
\n
Universal gravitational constant, $G = 6.67 \\times 10^{-11} N\\ m^2\\ kg^{-2}$
\n &nbsp;
\n
Acceleration due to gravity is given by,
$$
\\begin{aligned} g_{moon} &= G \\frac{M_m}{R_m}\\\\ g_{moon} &= (6.67 \\times 10^{-11} N\\ m^2\\ kg^{-2}) \\times \\frac{7.36 \\times 10^{22}\\ kg}{(1.74 \\times 10^6\\ m)^2}\\\\ g_{moon} &= 1.621\\ m\\ s^{-2} \\end{aligned}
$$
Comparing Moon’s acceleration due to gravity to earth’s,
$$
\\begin{aligned} g_{relative} &= \\frac{g_{moon}}{g_{earth}}\\\\ g_{relative} &= \\frac{1.621}{9.8}\\\\ g_{relative} &= \\frac{1}{6} \\end{aligned}
$$
This means that the object will weigh 6 times less than it weighs on earth. For example, if an object weighs $600\\ N$ on earth, it will weigh just $100\\ N$ on the moon.
`;
const E1 = `
How far will you jump on the moon, if you can jump $1\\ m$ on earth, given that you are jumping with the same initial vertical velocity?
`;
const EA1 = `
We know that acceleration due to gravity on the moon $(a_m)$ is about $\\frac{1}{6}$ times that of the earth $(g)$. It is intuitive to conclude that you would jump $6\\ m$ on the moon, which is correct. Let’s prove the same. The ratio of acceleration due to gravity on earth and the moon is,
$$
\\frac{g}{a_m} = \\frac{6}{1}
$$
Final velocity will be $0\\ m\\ s^{-1}$ on earth as well as on moon, because when you jump, at the highest point, you will stop momentarily. Using the equation, $v^2 = u^2 + 2asv$
\n &nbsp;
\n
Final velocity on earth,
$$
\\begin{aligned} v_e^2 &= u_e^2 + 2gs_e = 0\\\\ \\implies u_e^2 &= -2gs_e \\end{aligned}
$$
Final velocity on moon,
$$
\\begin{aligned} v_m^2 &= u_m^2 + 2a_ms_m = 0\\\\ \\implies u_m^2 &= -2a_ms_m \\end{aligned}
$$
As initial velocities is same, we can write,
$$
\\begin{aligned} -2 a_ms_m &= -2gs_e \\\\ \\implies s_m &= \\frac{g}{a_m}s_m\\\\ \\implies s_m &= \\frac{6}{1}\\times 1\\\\ \\implies s_m &= 6\\ m \\end{aligned}
$$ 
`;

const E2 = `
Mass of an object is $50\\ kg$. What is its weight on the moon?
`;
const EA2 = `
Mass, $m = 50\\ kg$
\n &nbsp;
\n
Acceleration due to gravity, $a_m = 1.621\\ m\\ s^{–2}$
$$
\\begin{aligned} W &= m \\times a_m\\\\ W &= 50\\ kg \\times 1.621\\ m\\ s^{-2} = 81.05\\ N\\end{aligned}
$$
Thus, the weight of the object is $81.05\\ N$.


`;
const E3 = `
An object weighs $10\\ N$ when measured on the surface of the earth. What would be its weight when measured on the surface of the moon?*
`;
const EA3 = `
We know,
\n &nbsp;
\n
Weight of object on the moon $= \\frac{1}{6} \\times$ its weight on the earth.
\n &nbsp;
\n
That is,
$$
\\begin{aligned} W_m &= \\frac{W_e}{6} = \\frac{10}{6}\\ N\\\\ &= 1.67\\ N \\end{aligned}
$$
Thus, the weight of object on the surface of the moon would be $1.67\\ N$.
`;

const Q1 = `
The mass of an object on earth is $20\\ kg$. What will be its mass on the moon?
`;
const QA1 = `
The will be $20\\ kg$ as the mass of an object is constant everywhere.
`;

const Q2 = `
Calculate your weight. Now calculate your weight if you were on the moon?
`;
const QA2 = `
Weight of an object on earth can be calculated as follows (supposing $m = 10\\ kg$),
$$
\\begin{aligned}\\text{Weight on earth} &= \\text{Mass} \\times \\text{Acceleration on earth}\\\\ &= 10 \\times 9.8\\\\ &= 98\\ N\\end{aligned}
$$
As the gravitational force on the surface of the moon is only $\\frac{1}{6}^{th}$ as strong as the gravitational force on the earth, it implies that the acceleration due to gravity on the moon will also be $\\frac{1}{6}^{th}$ times the acceleration due to gravity on earth. Hence, the object’s weight on moon can be calculated as,
$$
\\begin{aligned}\\text{Weight on moon} &= \\text{Mass} \\times \\text{Acceleration on moon}\\\\ &= \\text{Mass} \\times \\frac{\\text{Acceleration on earth}}{6}\\\\ &= 10 \\times \\frac{9.8}{6}\\\\ &= 16.3\\ N\\end{aligned}
$$
`;

const Q3 = `
How far will you jump on the Jupiter, if you can jump $1\\ m$ on earth? The acceleration due to gravity on jupiter is about $2.36$ times that of the earth.
`;
const QA3 = `
As the acceleration due to gravity is $2.36$ times more than that of the earth, the height jumped will be $2.36$ times as less as on earth.
$$
\\text{Height jumped, }h = \\frac{1}{2.36} = 0.423\\ m
$$
`;

const Q4 = `
Inertia is the direct measure of ______________?
`;
const QA4 = `
Mass
`;

const conclusion = `
Mass is a property of an object which is directly proportional to inertia, whereas weight is the force experienced by an object due to gravity. It varies with a change in acceleration due to gravity.
`;

const note = `
The goal of the text is to state the clear distinction between the mass of an object versus its weight. One is the fundamental property of matter, and the other is gravity's consequence. Although these words are colloquially interchanged, the text tries to draw a clear distinction between them.
`;

const W1 = `
What is the force experienced by any object under the influence of the earth’s gravity?
`;
const WA1 = `
$F = mg$
`;

const W2 = `
What is the other name for this?
`;
const WA2 = `
Weight
`;

const W3 = `
Can the mass of an object change (assuming nothing is done to the object physically)?
`;
const WA3 = `
No
`;

const W4 = `
What is the SI unit of mass?
`;
const WA4 = `
Kilograms or $kg$
`;

const W5 = `
What is the SI unit of weight?
`;
const WA5 = `
Newtons or $N$
`;

const W6 = `
How do you calculate the weight of an object on earth?
`;
const WA6 = `
$weight=mass \\times 9.8$
`;

const W7 = `
Calculate your weight?
`;

const WA7 = `
Considering your mass as $40\\ kg$
$$
weight = 40 kg \\times 9.8 = 392\\ N
$$
`;

const W8 = `
Will you weigh the same if you were at the north pole?
`;
const WA8 = `
No
`;

const WeightDiffPlanetsContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="weightdiffplanets"></LottieAnimation>
        </AnimatedContainer>
    </VideoContainer>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content}</Markdown>
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
            <QnA srno={"5"} question={W5} answer={WA5} />
            <QnA srno={"6"} question={W6} answer={WA6} />
            <QnA srno={"7"} question={W7} answer={WA7} />
            <QnA srno={"8"} question={W8} answer={WA8} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default WeightDiffPlanetsContent
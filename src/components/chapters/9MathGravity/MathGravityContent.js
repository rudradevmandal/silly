import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/9MathGravity.json'
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
In the summer of 1687, Newton published “Principia Mathematica”, which also described the mathematics of gravity among many other groundbreakings and astonishing mathematical works. He describes the **Universal law of gravitation** as follows:
\n &nbsp;
\n
Every object in the universe attracts every other object with a force that is:
\n &nbsp;
\n
<ol>
<li>Directly proportional to the product of their masses, and</li>
\n &nbsp;
\n
<li>Inversely proportional to the square of the distance between them.</li>
</ol>
\n &nbsp;
\n
This statement can be divided into two parts to make it easier to write the mathematical form. Consider two bodies, A and B, of mass M and m, respectively, then by the first part of the law, the force of gravity.
$$ 
\\begin{align}
F \\propto Mm
\\end{align}
$$
And assuming that they are separated by a distance, $r$, then

$$
\\begin{align} F \\propto \\frac{1}{r^2} \\end{align}
$$

Combining both the bits gives,

$$
\\begin{align} F \\propto \\frac{Mm}{r^2} \\end{align}
$$
A constant is introduced to remove the proportionality. It's called the **“Universal Gravitational Constant”**, $G$, whose SI Units is $N m^2 kg^{-2}$. The value of $G$ is $6.673 \\times 10^{-11} N m^2 kg^{-2}$. So the final equation is,
$$
\\begin{align} F = G \\frac{Mm}{r^2} \\end{align}
$$
`;
const E1 = `
At some point of the year, Jupiter is about $5.8 \\times 10^{11}\\ m$ away from earth. Calculate the gravitational force between the two. Given that the mass of Jupiter is $1.9 \\times 10^{27}\\ kg$, the mass of the Earth is $6 \\times 10^{24}\\ kg$, and the universal gravitational constant is $6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{ -2}$.
`;
const EA1 = `
The mass of the earth, $M = 6 \\times 10^{24}\\ kg$,
\n &nbsp;
\n
The mass of Jupiter, $m = 1.9 \\times 10^{27}\\ kg$,
\n &nbsp;
\n
The distance between the earth and Jupiter, $r = 5.8 \\times 10^{11}\\ m$
\n &nbsp;
\n
From Eq. (4), the gravitational force between the two is,
$$
\\begin{aligned} F &= G\\ \\frac{Mm}{d^2}\\\\ &= \\frac{(6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{ -2}) \\times (6 \\times 10^{24}\\ kg) \\times (1.9 \\times 10^{27}\\ kg)}{(5.8 \\times 10^{11}\\ m)^2}\\\\ &= 2.26 \\times 10^{18}\\ N \\end{aligned}
$$
Thus, the gravitational force between Earth and Jupiter is $2.26 \\times 10^{18}\\ N$.
`;

const E2 = `
The mass of the earth is $6 \\times 10^{24}\\ kg$ and that of the moon is $7.4 \\times 10^{22}\\ kg$. If the distance between the earth and the moon is $3.84 \\times 10^{5}\\ km$, calculate the force exerted by the earth on the moon. (Take $G = 6.7 \\times 10^{-11}$)*
`;
const EA2 = `
The mass of the earth, $M = 6 \\times 10^{24}\\ kg$,
\n &nbsp;
\n
The mass of the moon, $m = 7.4 \\times 10^{22}\\ kg$,
\n &nbsp;
\n
The distance between the earth and the moon,
$$
\\begin{aligned} d &= 3.84 \\times 10^5\\ km\\ = 3.84 \\times 10^5 \\times 1000\\ m\\ = 3.84 \\times 10^8\\ m\\\\ G &= 6.7 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2} \\end{aligned}
$$

From Eq. (4), the force exerted by the earth on the moon is,
$$
\\begin{aligned} F &= G\\frac{Mm}{d^2}\\\\ &= \\frac{(6.7 \\times 10^{-11} N\\ m^2\\ kg^{-2}) \\times (6 \\times 10^{24}\\ kg) \\times (7.4\\times 10^{22}\\ \\ kg)}{(3.84 \\times 10^8\\ \\ m)^2}\\\\ &= 2.02 \\times 10^{20}\\ \\ N \\end{aligned}
$$
Thus, the force exerted by the earth on the moon is $2.02 \\times 10^{20}\\ N$.
`;

const Q1 = `
What is the universal law of Gravitation?
`;
const QA1 = `
Every object in the universe attracts every other object with a force that is:
\n &nbsp;
\n
<ol>
<li>Directly proportional to the product of their masses, and</li>
\n &nbsp;
\n
<li>Inversely proportional to the square of the distance between them.</li>
</ol>
`;

const Q2 = `
Write down the formula for the force of gravitation between two objects?
`;
const QA2 = `
Consider two bodies, A and B, of mass $M$ and $m$ respectively, which are separated by a distance of $r\\ m$. Then by the Universal law of Gravitation, the force of gravity is,
$$
F = G\\ \\frac{Mm}{r^2}
$$
where $G$ is the universal contant of gravitation which is equal to $6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$.
`;

const Q3 = `
Consider the gravitational force between two objects of the same mass to be $F$. If the mass of one object is reduced by half, the gravitational force between them is
<ol type="a">
\n &nbsp;
\n
<li>Halved</li>
\n &nbsp;
\n
<li>Doubled</li>
\n &nbsp;
\n
<li>Tripled</li>
\n &nbsp;
\n
<li>Quadrupled</li>
</ol>
`;
const QA3 = `
The universal law of gravitation says that the force of gravitation between two objects of mass $M$ and $m$ respectively, separated by a distance $r$ is:
<ol type="a">
\n &nbsp;
\n
<li>directly proportional to the product of their masses</li>
\n &nbsp;
\n
$$
F \\propto Mm
$$
<li>inversely proportional to the square of the distance between them,</li>
\n &nbsp;
\n
$$
F \\propto \\frac{1}{r^2}
$$
</ol>
\n &nbsp;
\n
If the mass of one object is reduced by half without changing distance between them, then the gravitational force would become
$$
F^{'} \\propto M \\times \\frac{m}{2} = \\frac{Mm}{2}
$$
The answer is **a. Halved**.
`;

const Q4 = `
<ol type="a">
If the distance between them is reduced by half, keeping their masses equal, the gravitational force between them is
\n &nbsp;
\n
<li>Halved</li>
\n &nbsp;
\n
<li>Doubled</li>
\n &nbsp;
\n
<li>Tripled</li>
\n &nbsp;
\n
<li>Quadrupled</li>
</ol>
`;
const QA4 = `
The universal law of gravitation says that the force of gravitation between two objects of mass $M$ and mm respectively, separated by a distance $r$ is:
<ol type="a">
\n &nbsp;
\n
<li>directly proportional to the product of their masses</li>
\n &nbsp;
\n
$$
F \\propto Mm
$$
<li>inversely proportional to the square of the distance between them,</li>
\n &nbsp;
\n
$$
F \\propto \\frac{1}{r^2}
$$
</ol>
\n &nbsp;
\n
If the distance between them is reduced by half, keeping their masses equal, the gravitational force between them would become
$$
F^{'} \\propto \\frac{1}{(\\frac{r}{2})^2} = \\frac{4}{r^2}
$$
The answer is **d. Quadrupled**.
`;

const conclusion = `
Universal Law of Gravitation states that every object in the universe attracts every other object with a force that is directly proportional to the product of their masses, and inversely proportional to the square of the distance between them.
`;

const note = `
The text intends to state Newton's law of gravitation clearly and precisely. The goal is to understand the mathematical formulation and solve a few numerical using the same.
`;

const W1 = `
Gravitational force always acts along the _____________.
`;
const WA1 = `
Line joining the center of masses
`;

const W2 = `
Gravitational force is directly proportional to _____________.
`;
const WA2 = `
Product of the masses
`;

const W3 = `
Gravitational force is inversely proportional to _____________.
`;
const WA3 = `
Square of the distance between the centre of masses
`;

const W4 = `
What is the SI units of the universal gravitational constant?
`;
const WA4 = `
$N\\ m^2\\ kg^{-2}$
`;

const W5 = `
What is the value of the universal gravitational constant?
`;
const WA5 = `
$6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$
`;

const MathGravityContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="MathGravity"></LottieAnimation>
        </AnimatedContainer>
    </VideoContainer>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content}</Markdown>
        </TextContainer>
        <ExampleSection><ExampleSubtitle /> 
        
        <QnAContainer>
            <QnA srno={"1"} question={E1} answer={EA1} />
            <QnA srno={"2"} question={E2} answer={EA2} />
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
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default MathGravityContent
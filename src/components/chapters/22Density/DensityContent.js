import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/22Density.json'
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
margin-top: -20%;
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
The previous experiment leads us to an important fact, density. We can compare the density of different objects using a fluid. Density is a parameter that tells the object’s mass per unit volume, which has units of $kg/m^2$.
$$
D = \\frac{M}{V}
$$
For example, the same amount of sugar and salt weighs differently. Why? Because their density is different. If we mix two immiscible fluids, we can tell which fluid has less density, the one with the less density will always be on top. Take the case of water and oil. Whenever we try to mix water and oil, the oil always remains on top, no matter what, as its density is less than that of water, hence the buoyant force experienced by oil is greater than its weight, and therefore it floats on water. Here, we can introduce a new comparative parameter called relative density, which will tell you whether the substance is denser than water.
$$
\\text{Relative density} = \\frac{\\text{Density of the Substance}}{\\text{Density of water}}
$$
It has no units, as it is a comparative parameter. $\\frac{Density}{Density}$ will have no units.
`;
const E1 = `
Density of mercury is $13.6\\ g\\ mL^{-1}$. Calculate the relative density of mercury?
`;
const EA1 = `
Density of mercury $= 13.6\\ g\\ mL^{-1} = 13.6\\ kg\\ L^{-1}$
\n &nbsp;
\n
Density of water $= 1\\ kg\\ L^{-1}$
$$
\\begin{aligned} \\text{Relative Density} &= \\frac{\\text{Density of mercury}}{\\text{Density of water}}\\\\ &= \\frac{13.6\\ kg\\ L^{-1}}{1\\ kg\\ L^{-1}}\\\\ &= 13.6 \\end{aligned}
$$
`;

const E2 = `
Relative density of silver is $10.8$. The density of water is $10^3\\ kg\\ m^{–3}$. What is the density of silver in SI unit?*
`;
const EA2 = `
Relative density of silver $= 10.8$
$$
\\begin{aligned} \\text{Relative Density} &= \\frac{\\text{Density of silver}}{\\text{Density of water}}\\\\ \\text{Density of silver} &= \\text{Relative Density} \\times \\text{Density of water}\\\\ &= 10.8 \\times 10^3\\ kg\\ m^{–3} \\end{aligned}
$$
`;

const Q1 = `
What is the SI unit of density?
`;
const QA1 = `
$kg\\ m^{-3}$
`;

const Q2 = `
Define relative density?
`;
const QA2 = `
$$
\\text{Relative Density} = \\frac{\\text{Density of the substance}}{\\text{Density of water}}
$$
`;

const Q3 = `
What should be the value of the relative density such that the object floats on water?
`;
const QA3 = `
$\\leq 1$
`;

const conclusion = `
The density of an object is its mass per unit volume, and the relative density of an object is its original density with respect to the density of water.
`;

const note = `
The aim of the text is to continue Archimedes' principle of density. The text intends to state that a single parameter called density is enough to determine if an object will float or sink. The text also introduces relative density, which is useful for telling if an object will float on water.
`;

const W1 = `
Buoyant force depends on the:
<ol type="a">
\n &nbsp;
\n
<li>Density of the object</li>
\n &nbsp;
\n
<li>Density of the fluid</li>
\n &nbsp;
\n
<li>Density of both</li>
\n &nbsp;
\n
<li>None of the above</li>
</ol>
`;
const WA1 = `
Buoyant force depends on the **b. Density of the fluid**.
`;

const W2 = `
An iron nail sinks in water because ____________.
`;
const WA2 = `
Density of iron $\\geq$ Density of water
`;

const W3 = `
A hollow plastic ball floats on water because ____________.
`;
const WA3 = `
Density of the hollow plastic ball $\\leq$ Density of water
`;

const W4 = `
What can be done to the water so that the iron nail does not sink (Altering the nail is not allowed)?
`;
const WA4 = `
Increase the density of water by mixing sugar or salt of any kind.
`;

const W5 = `
A $10\\ kg$ object when immersed in water displaces $7\\ L$ of water. How much upward force is experienced by the object? $(1\\ L = 1\\ kg)$
`;
const WA5 = `
Upward force experinced is equal to the weight f the water displaced, which is given by,
$$
\\begin{aligned}Volume \\times Density &= 7 \\times 1 = 1\\ kg\\\\ Weight &= 7 \\times 9.8 = 68.6\\ N\\end{aligned}
$$
`;

const W6 = `
Calculate the relative density of mercury? (Density of mercury $= 13.6\\ g\\ mL^{-1}$)
`;
const WA6 = `
$$
\\begin{aligned}1\\ mL &= 1\\ cm^{-3}\\\\ \\implies 13.6\\ g\\ mL^{-1} &= 13.6\\ g\\ cm^{-3}\\\\ \\text{Density of water} &= 1\\ g\\ cm^{-3}\\\\ \\text{Relative Density} &= \\frac{\\text{Density of the substance}}{\\text{Density of water}} \\\\ &= \\frac{13.6\\ g\\ cm^{-3}}{1\\ g\\ cm^{-3}} = 13.6\\end{aligned}
$$
`;

const DensityContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="Density1"></LottieAnimation>
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

export default DensityContent
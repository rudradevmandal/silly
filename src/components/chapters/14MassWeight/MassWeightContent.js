import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/14MassWeight.json'
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

const content = `
**Mass** *is an intrinsic property of an object which is a constant, whereas* **weight** *is the force experienced by the object under a gravitational field.* Weight is proportional to the mass of the object. The mass of an object remains the same everywhere, but its weight changes as g changes. But, in real life, we interchange these words as if they mean the same. But that is not correct. Mass is something that resists the change in position or velocity of an object, meaning the greater the mass, the greater the force required to move a body. We call this property inertia. But weight is just the force experienced by an object due to gravity. Incidentally, as acceleration due to gravity is not constant on earth, the force experienced by a body is also not constant. It changes with location. That is why we interchange these, but in reality, weight is a force measured in Newtons $(N)$, not Kgs or grams. We can calculate the weight of an object as,
$$
W = m \\times g\\; \\text{Newtons}
$$
We can read it as, $W \\propto m$, and hence we use it as an indicator for the mass of the object.
\n &nbsp;
\n
**Sidenote:** There is no method available to measure mass as it is an intrinsic property. We can only measure its effect. One of its effects is the weight experienced by the object. Therefore we use different methods to find the weight and then divide the weight by 9.8 to get the mass in Kgs or grams.
`;
const E1 = `
Weight of an object on earth is $980\\ N$. What is its mass?
`;
const EA1 = `
Weight, $W = 980\\ N$
\n &nbsp;
\n
Acceleration due to gravity, $g = 9.8\\ m\\ s^{–2}$
$$
\\begin{aligned}W &= m \\times g\\\\ m &= \\frac{W}{g}\\\\ m &= \\frac{980}{9.8} = 100\\ kg\\end{aligned}
$$
Thus, the mass of the object is $100\\ kg$.
`;

const E2 = `
Mass of an object is $50\\ kg$. What is its weight on the earth?
`;
const EA2 = `
Mass, $m = 50\\ kg$
\n &nbsp;
\n
Acceleration due to gravity, $g = 9.8\\ m\\ s^{–2}$
$$
\\begin{aligned}W &= m \\times g\\\\ W &= 50\\ kg \\times 9.8\\ m\\ s^{-2} = 490\\ N\\end{aligned}
$$
Thus, the weight of the object is $490\\ N$.
`;
const E3 = `
Mass of an object is $10\\ kg$. What is its weight on the earth?*
`;
const EA3 = `
Mass, $m = 10\\ kg$
\n &nbsp;
\n
Acceleration due to gravity, $g = 9.8\\ m\\ s^{–2}$
$$
\\begin{aligned}W &= m \\times g\\\\ W &= 10\\ kg \\times 9.8\\ m\\ s^{-2} = 98\\ N\\end{aligned}
$$
Thus, the weight of the object is $98\\ N$.
`;

const Q1 = `
Does mass of an object depend on location?
`;
const QA1 = `
No
`;

const Q2 = `
Does weight of an object depend on location?
`;
const QA2 = `
Yes
`;

const Q3 = `
Calculate your weight. Will you weigh the same on the north pole?
`;
const QA3 = `
______________ $kg$. No, the weight will be more on north pole as acceleration due to gravity is more at the north pole.
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

const MassWeightContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer>
            <LottieAnimation animationData={animationData} id="massweight"></LottieAnimation>
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

export default MassWeightContent
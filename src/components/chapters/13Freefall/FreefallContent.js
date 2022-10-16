import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData1 from '../../../assets/LottieJson/13Freefall1.json'
import animationData2 from '../../../assets/LottieJson/13Freefall2.json'
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

const VideoContainer2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AnimatedContainer2 = styled.div`
width: 60%;
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
What happens when you let go of a stone from a multi-storey building? It just falls. Why does it fall? Simple, because the earth’s gravity pulls the object towards the centre. More precisely, due to the earth’s gravitational force, the object is pulled. But a simple consequence of force acting on an object is to change its velocity (either magnitude or direction). And therefore, the object does accelerate, and this acceleration is called acceleration due to gravity, g. An interesting fact about this effect is that It does not depend on mass, as the force of gravity is proportional to the mass of the object. Still, the reaction of any object under the influence of a force is also proportional to its mass. Hence, the acceleration under gravity is independent of the mass of the object. Mathematically speaking,
$$
Force = m \\times a
$$
$$
Force(gravity) = G \\frac{Mm}{r^2}
$$
When an object falls, the objects experiences an accelration given by,
$$
ma= G \\frac{Mm}{r^2}
$$
$$
a = \\frac{GM}{r^2} = g
$$
This has units of $m\\ s^{-2}m$.
\n &nbsp;
\n
The above also shows that the acceleration due to gravity is independent of the mass and constant (but not quite!). This fact was tested by Galileo Galilei, as stated earlier in the chapter. This means that any two objects will fall at the same time when dropped from the same height (in the absence of air resistance). We can find the value of $‘g’$ by using the data already available,
\n &nbsp;
\n
Universal Gravitation Constant, $G = 6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$,
\n &nbsp;
\n
Mass of the Earth, $M = 6 \\times 10^{24}\\ kg$, and
\n &nbsp;
\n
The radius of the earth, $r = 6.4 \\times 10^6\\ m$
\n &nbsp;
\n
Substituing this in the above equation,
$$
g = 6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2} \\times \\frac{6 \\times 10^{24}\\ kg}{(6.4 \\times 10^6\\ m)^2} = 9.8\\ m\\ s^{-2}
$$
`;
const content2 = `
**Sidenote:** If we closely look at the above equation $(g=.../r^2)$, it is an inverse function of the radius from the centre. Therefore, $g$ reduces as altitude increases, and it is also greater at the equator than at the poles, as the earth is not a perfect sphere and instead a sphere with a flattened top and bottom. But for the most part, this deviation is minimal and often neglected. For simplicity, we assume that the acceleration due to gravity is a constant on the earth.
\n &nbsp;
\n
If that’s the case, the trajectory of any object under gravitational acceleration can be figured out by equations of motion in a straight line. These are the set of 3 equations that were derived in the earlier chapters, to refresh,
Final velocity, $v$, of an object starting with an initial velocity, $u$, after a time, $t$, is
$$
v = u + at
$$
If the distance, $s$, is to found after this elapsed time, $t$, then
$$
s = ut +\\frac{1}{2} \\times at^2
$$
Final velocity, $v$, of an object starting with an initial velocity, $u$, after covering a distance, $s$, is
$$
v^2 = u^2 + 2as
$$
**Note:** If acceleration is opposing the trajectory of motion, we will assign a -ve sign to it to show that it decreases the velocity rather than adding to it.
`;
const E1 = `
A ball is thrown upwards with an initial velocity of $2\\ m\\ s^{-1}$. Calculate the maximum height reached. Take $g = 10\\ m\\ s^{-2}$.
`;
const EA1 = `
Initial velocity, $u = 2\\ m\\ s^{-1}$,
\n &nbsp;
\n
At the maximum height, the object will stop. Hence, Final velocity, $v = 0\\ m\\ s^{-1}$,
\n &nbsp;
\n
As acceleration due to gravity is acting opposite to the direction of motion. Hence, $g = -10\\ m\\ s^{-2}$.
\n &nbsp;
\n
Maximum height is the distance travelled by the ball.
\n &nbsp;
\n
We know that,
$$
\\begin{aligned} v^2 &= u^2 + 2\\ a\\ s\\\\ 0 &= (2)^2 + 2 \\times (-10\\ m\\ s^{-2}) \\times s\\\\ -4 &= -20 \\times s\\\\ s &= 0.2\\ m \\end{aligned}
$$
`;

const E2 = `
A ball is dropped from a height of $20\\ m$. Calculate the velocity with which it hits the ground. Take $g = 10\\ m\\ s^{-2}$.
`;
const EA2 = `
Initial velocity, $u = 0\\ m\\ s^{-1}$,
\n &nbsp;
\n
As acceleration due to gravity is acting along to the direction of motion. Hence, $g = 10\\ m\\ s^{-2}$.
\n &nbsp;
\n
We know that,
$$
\\begin{aligned} v^2 &= u^2 + 2\\ a\\ s\\\\ v^2 &= (0)^2 + 2 \\times (10\\ m\\ s^{-2}) \\times 20\\\\ v^2 &= 20 \\times 20\\\\ v &= \\sqrt{400}\\ m\\\\ v &= 20\\ m \\end{aligned}
$$
`;
const E3 = `
A ball is dropped from a certain height takes $5\\ s$ to hit the ground. Calculate the velocity of the ball when it hits the surface. Take $g = 10\\ m\\ s^{-2}$.
`;
const EA3 = `
Initial velocity, $u = 0\\ m\\ s^{-1}$,
\n &nbsp;
\n
As acceleration due to gravity is acting along to the direction of motion. Hence, $g = 10\\ m\\ s^{-2}$.
\n &nbsp;
\n
Time taken, $t = 5\\ s$
\n &nbsp;
\n
We know that,
$$
\\begin{aligned} v &= u + a\\ t\\\\ v &= 0 + (10\\ m\\ s^{-2}) \\times 5\\\\ v &= 50\\ m\\ s^{-1} \\end{aligned}
$$
`;

const E4 = `
A ball is thrown down with an initial velocity of $10\\ m\\ s^{-1}$ and it takes 20 seconds to hit the ground. Calculate the distance travelled by the ball. Take $g = 10\\ m\\ s^{-2}$.
`;
const EA4 = `
Initial velocity, $u = 10\\ m\\ s^{-1}$,
\n &nbsp;
\n
As acceleration due to gravity is acting along to the direction of motion. Hence, $g = 10\\ m\\ s^{-2}$.
\n &nbsp;
\n
Time taken, $t = 20\\ s$
\n &nbsp;
\n
We know that,
$$
\\begin{aligned} s &= ut + \\frac{1}{2}\\ a\\ t^2\\\\ s &= 10\\ m\\ s^{-1} \\times 20\\ s + \\frac{1}{2} \\times 10\\ m\\ s^{-2} \\times (20\\ s)^2\\\\ s &= 2200\\ m \\end{aligned}
$$
`;
const E5 = `
A car falls off a ledge and drops to the ground in $0.5 \\ s$. Let $g = 10\\ m\\ s^{–2}$ (for simplifying the calculations).*
<ol>
\n &nbsp;
\n
<li>What is its speed on striking the ground?</li>
\n &nbsp;
\n
<li>What is its average speed during the 0.5 s?</li>
\n &nbsp;
\n
<li>How high is the ledge from the ground?</li>
</ol>
`;
const EA5 = `
Time, $t = \\frac{1}{2}$ second
\n &nbsp;
\n
Initial velocity, $u = 0\\ m\\ s^{–1}$
\n &nbsp;
\n
Acceleration due to gravity, $g = 10\\ m\\ s^{–2}$
\n &nbsp;
\n
Acceleration of the car, $a = + 10\\ m\\ s^{–2}$ (downward)

<ol>
\n &nbsp;
\n
<li>speed,</li>
\n &nbsp;
\n
$$
\\begin{aligned} v &= a t\\\\ &= 10\\ m\\ s^{–2} \\times 0.5\\ s\\\\ &= 5\\ m\\ s^{–1} \\end{aligned}
$$
\n &nbsp;
\n
<li>average speed</li>
\n &nbsp;
\n
$$
\\begin{aligned} &= \\frac{u+v}{2}\\\\ &= \\frac{ (0\\ m\\ s^{–1} + 5\\ m\\ s^{–1})}{2}\\\\ &= 2.5\\ m\\ s^{–1} \\end{aligned}
$$
\n &nbsp;
\n
<li>distance travelled,</li>
\n &nbsp;
\n
$$
\\begin{aligned} s &= \\frac{1}{2}\\ a\\ t^2\\\\ &= \\frac{1}{2}\\times 10\\ m\\ s^{–2} \\times (0.5\\ s)^2\\\\ &= \\frac{1}{2}\times 10\\ m\\ s^{–2} \\times 0.25\\ s\\\\ &= 1.25\\ m \\end{aligned}
$$
</ol>
\n &nbsp;
\n
Thus,
<ol>
\n &nbsp;
\n
<li>its speed on striking the ground,</li>
\n &nbsp;
\n
$$
= 5\\ m\\ s^{–1}
$$
\n &nbsp;
\n
<li>its average speed during the 0.5 s,</li>
\n &nbsp;
\n
$$
= 2.5\\ m\\ s^{–1}
$$
\n &nbsp;
\n
<li>height of the ledge from the ground,</li>
\n &nbsp;
\n
$$
= 1.25\\ m
$$
</ol>
`;

const E6 = `
An object is thrown vertically upwards and rises to a height of $10\\ m$. Calculate (i) the velocity with which the object was thrown upwards and (ii) the time taken by the object to reach the highest point.*
`;
const EA6 = `
Distance travelled, $s = 10\\ m$
\n &nbsp;
\n
Final velocity, $v = 0\\ m\\ s^{–1}$
\n &nbsp;
\n
Acceleration due to gravity, $g = 9.8\\ m\\ s^{–2}$
\n &nbsp;
\n
Acceleration of the object, $a = –9.8\\ m\\ s^{–2}$ (upward motion)
\n &nbsp;
\n
<ol>
<li></li>
\n &nbsp;
\n
$$
\\begin{aligned} v^2 &= u^2 + 2\\ a\\ s\\\\ 0 &= u^2 + 2 \\times (–9.8\\ m\\ s^{–2}) \\times 10\\ m\\\\ –u^2 &= –2 \\times 9.8 \\times 10\\ m^2\\ s^{–2}\\\\ u &= \\sqrt{196}\\ m\\ s^{-1}\\\\ u &= 14\\ m\\ s^{-1}\\\\ \\end{aligned}
$$
\n &nbsp;
\n
<li></li>
\n &nbsp;
\n
$$
\\begin{aligned} v &= u + a\\ t\\\\ 0 &= 14\\ m\\ s^{–1} u^2 – 9.8\\ m\\ s^{–2} \\times t\\\\ –u^2 &= –2 \\times 9.8 \\times 10\\ m^2\\ s^{–2}\\\\ t &= 1.43\\ s\\\\ \\end{aligned}
$$
\n &nbsp;
\n
</ol>

Thus,
<ol>
<li>Initial velocity, </li>
\n &nbsp;
\n
$$
u = 14\\ m\\ s^{–1}
$$
\n &nbsp;
\n
<li>Time taken, </li>
\n &nbsp;
\n
$$
t = 1.43\\ s
$$
\n &nbsp;
\n
</ol>
`;

const Q1 = `
Does a freefalling object accelerate? If yes, what is the value of the acceleration?
`;
const QA1 = `
Yes. It's value is $9.8\\ m\\ s^{-2}$
`;

const Q2 = `
Why is the acceleration under freefall independent of the object's mass?
`;
const QA2 = `
While freefalling, gravitational force acts on all objects, directly proportional to their masses. To move any object, we need to overcome inertia which is also directly proportional to the mass. Hence, the mass term cancels out, and we see all objects, heavy or light, fall at the same rate under gravity, given that no other forces, such as air drag, affect them.
`;

const Q3 = `
Does the value of the acceleraion under gravity vary on the surface of the earth? If yes, at what point on the surface of the earth is it the highest and what point is it the lowest?
`;
const QA3 = `
Yes. As the distance from the centre of the earth to the surface is lowest at the poles and is highest at the equator. Therefore, the value of acceleration due to gravity is highest at the poles and lowest at the equator.
`;

const Q4 = `
Two objects, one weighing $2\\ kg$ and another $200\\ kg$, are dropped from a height of $10\\ m$. Will they hit the ground at the same moment with the same velocity?
`;
const QA4 = `
Yes, as acceleration due to gravity is independent of the object's mass, both of them will experience the same acceleration and hence fall at the same rate.
`;

const conclusion = `
A freefalling object (under gravity) experiences an acceleration independent of its mass on any planet.
`;

const note = `
The goal of the lesson is to introduce the important concept of freefall with all the mathematical tools required to solve problems related to it. It relates to different consequences of freefall, such as acceleration, position, time and velocity. The lesson also explains the dependency of the value of acceleration on the location on the earth. Sufficient time must be given to understand this lesson and solve many numerical to get the required familiarity with the topic.
`;

const W1 = `
Does a small object falling towards the earth makes it accelerate?
`;
const WA1 = `
Yes
`;

const W2 = `
If yes, calculate the acceleration experienced by the earth?
\n &nbsp;
\n
Hint: $g = 10\\ m\\ s^{-2}$ , $m = 0.2\\ kg$, $r = 6371 \\times 10^{3}\\ m$
`;
const WA2 = `
The acceleration experienced by earth,
$$
\\begin{aligned}Ma &= G\\frac{mM}{r^2}\\\\ a &= G\\ \\frac{m}{r^2}\\\\ a &= 6.67 \\times 10^{-11} \\times \\frac{0.2}{(6371 \\times 10^3)^2}\\\\ a &= 3.28 \\times 10^{-28}\\ m\\ s^{-2}\\end{aligned}
$$
`;

const W3 = `
Does the motion of an object depends on its mass under freefall?
`;
const WA3 = `
No
`;

const W4 = `
If not, why does a nail fall faster than a feather?
`;
const WA4 = `
Because of air drag
`;

const W5 = `
Is the value of $g$ constant on the earth?
`;
const WA5 = `
No
`;

const W6 = `
Why is it not constant?
`;
const WA6 = `
Because the earth is not a perfect sphere and hence the distance from the center is not constant.
`;

const W7 = `
How much distance does an object of mass $10\\ kg$ fall in $1\\ s$? (Take $g$ as $10\\ m\\ s^{-2}$).
`;

const WA7 = `
As the mass of object has no effect on an object under freefall, the distance covered in 1 second can be calculated as follows:
$$
\\text{Initial velocity, }u = 0\\ m\\ s^{-2}\\\\ \\text{Time taken, }t =1\\ s\\\\ \\text{acceleration, }g = 10\\ m\\ s^{-2}\\\\ \\begin{aligned} \\text{Distance travelled, }s &= ut\\ +\\ \\frac{1}{2}at^2\\\\ &= 0\\ + \\frac{1}{2}\\times 10 \\times 1^2 \\\\ s &= 5\\ m\\end{aligned}
$$
`;

const W8 = `
How much distance does an object of mass $100\\ kg$ fall in $2\\ s$? (Take $g$ as $10\\ m\\ s^{-2}$).
`;
const WA8 = `
As the mass of object has no effect on an object under freefall, the distance covered in 2 seconds can be calculated as follows:
$$
\\text{Initial velocity, }u = 0\\ m\\ s^{-2}\\\\ \\text{Time taken, }t =2\\ s\\\\ \\text{acceleration, }g = 10\\ m\\ s^{-2}\\\\ \\begin{aligned} \\text{Distance travelled, }s &= ut\\ +\\ \\frac{1}{2}at^2\\\\ &= 0\\ + \\frac{1}{2}\\times 10 \\times 2^2 \\\\ s &= 20\\ m\\end{aligned}
$$
`;

const W9 = `
Will a ball point pen work in space? If yes, why? If no, why?
`;
const WA9 = `
No, as there is no gravity to pull the ink downwards.
`;

const W10 = `
Take a matchbox and keep a small piece of paper on top such that no part of the paper is protruding from the sides. With this setup, drop this from a height. Which will hit the ground first?

<ol type="a">
\n &nbsp;
\n
<li>Matchbox</li>
\n &nbsp;
\n
<li>Paper</li>
\n &nbsp;
\n
<li>Both</li>
\n &nbsp;
\n
<li>None of the above</li>
</ol>
`;
const WA10 = `
As air drag is not affecting the paper on top of the matchbox. Hence, both of them would hit the ground at the same time. The answer is **c. Both**
`;

const FreefallContent = () => {
  return (
    <Section>
    <VideoContainer1>
        <AnimatedContainer1>
            <LottieAnimation animationData={animationData1} id="Freefall1"></LottieAnimation>
        </AnimatedContainer1>
    </VideoContainer1>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content1}</Markdown>
        </TextContainer>
    <VideoContainer2>
        <AnimatedContainer2>
            <LottieAnimation animationData={animationData2} id="Freefall2"></LottieAnimation>
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
            <QnA srno={"4"} question={E4} answer={EA4} />
            <QnA srno={"5"} question={E5} answer={EA5} />
            <QnA srno={"6"} question={E6} answer={EA6} />
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
            <QnA srno={"9"} question={W9} answer={WA9} />
            <QnA srno={"10"} question={W10} answer={WA10} />
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default FreefallContent
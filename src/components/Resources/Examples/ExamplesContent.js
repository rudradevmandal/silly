import React from 'react'

import styled from 'styled-components';
import QnA from '../../QnA';

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ExampleSection = styled.section`
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

const Q1 = `
Page 134 - Example 10.1:
\n
The mass of the earth is $6 \\times 10^{24}\\ kg$ and that of the moon is $7.4 \\times 10^{22}\\ kg$. If the distance between the earth and the moon is $3.84 \\times 10^{5}\\ km$, calculate the force exerted by the earth on the moon. (Take $G = 6.7 \\times 10^{-11}$)
`;
const QA1 = `
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

const Q2 = `
Page 136 - Example 10.2:
\n
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
const QA2 = `

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

const Q3 = `
Page 136 - Example 10.3:
\n
An object is thrown vertically upwards and rises to a height of $10\\ m$. Calculate (i) the velocity with which the object was thrown upwards and (ii) the time taken by the object to reach the highest point.
`;
const QA3 = `
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

const Q4 = `
Page 138 - Example 10.4:
\n
Mass of an object is $10\\ kg$. What is its weight on the earth?
`;
const QA4 = `
Mass, $m = 10\\ kg$
\n &nbsp;
\n
Acceleration due to gravity, $g = 9.8\\ m\\ s^{–2}$
$$
\\begin{aligned}W &= m \\times g\\\\ W &= 10\\ kg \\times 9.8\\ m\\ s^{-2} = 98\\ N\\end{aligned}
$$
Thus, the weight of the object is $98\\ N$.
`;

const Q5 = `
Page 138 - Example 10.5:
\n
An object weighs $10\\ N$ when measured on the surface of the earth. What would be its weight when measured on the surface of the moon?
`;
const QA5 = `
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

const Q6 = `
Page 139 - Example 10.6:
\n
A block of wood is kept on a tabletop. The mass of wooden block is $5\\ kg$ and its dimensions are $40\\ cm \\times 20\\ cm \\times 10\\ cm$. Find the pressure exerted by the wooden block on the table top if it is made to lie on the table top with its sides of dimensions (a) $20\\ cm \\times 10\\ cm$ and (b) $40\\ cm \\times 20\\ cm$.
`;
const QA6 = `
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

const Q7 = `
Page 142 - Example 10.7:
\n
Relative density of silver is $10.8$. The density of water is $10^3\\ kg\\ m^{–3}$. What is the density of silver in SI unit?
`;
const QA7 = `
Relative density of silver $= 10.8$
$$
\\begin{aligned} \\text{Relative Density} &= \\frac{\\text{Density of silver}}{\\text{Density of water}}\\\\ \\text{Density of silver} &= \\text{Relative Density} \\times \\text{Density of water}\\\\ &= 10.8 \\times 10^3\\ kg\\ m^{–3} \\end{aligned}
$$
`;

const ExamplesContent = () => {
  return (
    <Section>
        <ExampleSection>
            <QnAContainer>
                <QnA srno={"1"} question={Q1} answer={QA1} />
                <QnA srno={"2"} question={Q2} answer={QA2} />
                <QnA srno={"3"} question={Q3} answer={QA3} />
                <QnA srno={"4"} question={Q4} answer={QA4} />
                <QnA srno={"5"} question={Q5} answer={QA5} />
                <QnA srno={"6"} question={Q6} answer={QA6} />
                <QnA srno={"7"} question={Q7} answer={QA7} />
            </QnAContainer>
        </ExampleSection>
    </Section>
  )
}

export default ExamplesContent
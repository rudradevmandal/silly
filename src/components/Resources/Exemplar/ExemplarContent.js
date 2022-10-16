import React from 'react'

import styled from 'styled-components';
import QnA from '../../QnA';
import LongAnsSubtitle from '../../LongAnsSubtitle';
import CustomSubtitle from '../../CustomSubtitle';

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const MultipleAnsSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;
`
const ShortAnsSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;
`
const LongAnsSection = styled.section`
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

const MQ1 = `
Two objects of different masses falling freely near the surface of moon would
<ol type="a">
\n &nbsp;
\n
<li>have same velocities at any instant</li>
\n &nbsp;
\n
<li>have different accelerations</li>
\n &nbsp;
\n
<li>experience forces of same magnitude</li>
\n &nbsp;
\n
<li>undergo a change in their inertia</li>
</ol>
`;
const MQA1 = `
**a. have same velocities at any instant.**
\n &nbsp;
\n
Gravitational force acts on all objects in proportion to their masses, but to move any object, we need to overcome inertia which is also proportional to the mass. Hence, the mass term cancels out, and we see all objects, heavy or light, fall at the same rate under the influence of gravity, given that no other forces, such as air drag, are affecting them.
`;

const MQ2 = `
The value of acceleration due to gravity
<ol type="a">
\n &nbsp;
\n
<li>is same on equator and poles
</li>
\n &nbsp;
\n
<li>is least on poles
</li>
\n &nbsp;
\n
<li>is least on equator
</li>
\n &nbsp;
\n
<li>increases from pole to equator
</li>
</ol>
`;
const MQA2 = `
**c. is least on equator.**
\n &nbsp;
\n

Acceleration due to gravity is not constant on earth (as the earth is not a perfect sphere), and the force experienced by a body is also not constant. It changes with location. The distance from the earth's centre to the surface is lowest at the poles and highest at the equator. As $g$ is inversely proportional to the square of the distance, its value is the least at the equator.
`;

const MQ3 = `
The gravitational force between two objects is FF. If masses of both objects are halved without changing distance between them, then the gravitational force would become
<ol type="a">
\n &nbsp;
\n
<li>F/4</li>
\n &nbsp;
\n
<li>F/2</li>
\n &nbsp;
\n
<li>F</li>
\n &nbsp;
\n
<li>2F</li>
</ol>
`;
const MQA3 = `
**a. F/4**
\n &nbsp;
\n
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
If masses of both objects are halved without changing distance between them, then the gravitational force would become
$$
F^{'} \\propto \\frac{M}{2} \\times \\frac{m}{2} = \\frac{Mm}{4}
$$
`;

const MQ4 = `
A boy is whirling a stone tied with a string in an horizontal circular path. If the string breaks, the stone
<ol type="a">
\n &nbsp;
\n
<li>will continue to move in the circular path
</li>
\n &nbsp;
\n
<li>will move along a straight line towards the centre of the circular path
</li>
\n &nbsp;
\n
<li>will move along a straight line tangential to the circular path
</li>
\n &nbsp;
\n
<li>will move along a straight line perpendicular to the circular path away from the boy
</li>
</ol>
`;
const MQA4 = `
**c. will move along a straight line tangential to the circular path.**
\n &nbsp;
\n
During circular motion, there is always a force which is pushing the stone towards the centre. This is called the centripetal force. If the string breaks, it will set off in a straight line which is the tangent to the circle of revolution. This happens because the force applied is suddenly removed, and there is no force to bend the stone towards the centre.
`;

const MQ5 = `
An object is put one by one in three liquids having different densities. The object floats with $\\frac{1}{9}$, $\\frac{2}{11}$ and $\\frac{3}{7}$ parts of their volumes outside the liquid surface in liquids of densities $d_1$, $d_2$ and $d_3$ respectively. Which of the following statement is correct?
<ol type="a">
\n &nbsp;
\n
<li>d<sub>1</sub> > d<sub>2</sub> > d<sub>3</sub></li>
\n &nbsp;
\n
<li>d<sub>1</sub> > d<sub>2</sub> < d<sub>3</sub></li>
\n &nbsp;
\n
<li>d<sub>1</sub> < d<sub>2</sub> > d<sub>3</sub></li>
\n &nbsp;
\n
<li>d<sub>1</sub> < d<sub>2</sub> < d<sub>3</sub></li>
</ol>
`;
const MQA5 = `
**d. d<sub>1</sub> < d<sub>2</sub> < d<sub>3</sub>**
\n &nbsp;
\n
The buoyant force is directly proportional to the volume of fluid displaced. Hence, if more volume of the object is outside the liquid surface, it means that the object is experiencing more upward force and that liquid has a higher density. With that in mind, we can guess the fractional value for the given volumes, $\\frac{1}{9}$ should be close to $0.$ (as $\\frac{1}{10}$ is $0.1$) but slightly greater, $\\frac{2}{11}$ should be close to $0.2$ (as $\\frac{2}{10}$ is $0.2$) but slightly lower and $\\frac{3}{7}$ should be close to $0.5$ (as $\\frac{3}{6}$ is $0.5$) but slightly lower. It can, now, be easily deduced that $d_1\\ <\\ d_2\\ <\\ d_3$.
`;

const MQ6 = `
In the relation $F = G\\ \\frac{Mm}{d^2}$, the quantity $G$
<ol type="a">
\n &nbsp;
\n
<li>depends on the value of g at the place of observation</li>
\n &nbsp;
\n
<li>is used only when the earth is one of the two masses
</li>
\n &nbsp;
\n
<li>is greatest at the surface of the earth
</li>
\n &nbsp;
\n
<li>is universal constant of nature
</li>
</ol>
`;
const MQA6 = `
**d. is universal constant of nature.**
\n &nbsp;
\n
To remove the proportionality from the universal law of gravitation, a constant is introduced, which is universal in nature. It’s called the “Universal Gravitational Constant”, GG, whose SI Units is $N\\ m^2\\ kg^{-2}$. The value of $G$ is $6.673 \\times 10^{-11}$.
`;

const MQ7 = `
Law of gravitation gives the gravitational force between
<ol type="a">
\n &nbsp;
\n
<li>the earth and a point mass only
</li>
\n &nbsp;
\n
<li>the earth and Sun only
</li>
\n &nbsp;
\n
<li>any two bodies having some mass
</li>
\n &nbsp;
\n
<li>two charged bodies only
</li>
</ol>
`;
const MQA7 = `
**c. any two bodies having some mass**
\n &nbsp;
\n
According to universal law of gravitation, every object in the universe attracts every other object with a force proportional to the product of their mass.

`;

const MQ8 = `
The value of quantity $G$ in the law of gravitation
<ol type="a">
\n &nbsp;
\n
<li>depends on mass of earth only
</li>
\n &nbsp;
\n
<li>depends on radius of earth only
</li>
\n &nbsp;
\n
<li>depends on both mass and radius of earth
</li>
\n &nbsp;
\n
<li>is independent of mass and radius of the earth
</li>
</ol>
`;
const MQA8 = `
**d. is independent of mass and radius of the earth.**
\n &nbsp;
\n
In the law of gravitation, $G$ is universal in nature and is regarded as one of the fundamental constants present in nature, its value does not depend on mass or radius of the earth or anything for that matter.
`;

const MQ9 = `
Two particles are placed at some distance. If the mass of each of the two particles is doubled, keeping the distance between them unchanged, the value of gravitational force between them will be
<ol type="a">
\n &nbsp;
\n
<li>1/4 times</li>
\n &nbsp;
\n
<li>4 times</li>
\n &nbsp;
\n
<li>1/2 times</li>
\n &nbsp;
\n
<li>Unchanged</li>
</ol>
`;
const MQA9 = `
**b. 4 times**
\n &nbsp;
\n
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
If masses of both objects are doubled without changing distance between them, then the gravitational force would become
$$
F^{'} \\propto 2M \\times 2m = 4Mm
$$
`;

const MQ10 = `
The atmosphere is held to the earth by
<ol type="a">
\n &nbsp;
\n
<li>gravity</li>
\n &nbsp;
\n
<li>wind</li>
\n &nbsp;
\n
<li>clouds</li>
\n &nbsp;
\n
<li>earth’s magnetic field</li>
</ol>
`;
const MQA10 = `
**a. gravity**
\n &nbsp;
\n
The atmosphere on earth is a massive cluster of gases held together by the force of gravity.
`;

const MQ11 = `
The force of attraction between two unit point masses separated by a unit distance is called
<ol type="a">
\n &nbsp;
\n
<li>gravitational potential</li>
\n &nbsp;
\n
<li>acceleration due to gravity
</li>
\n &nbsp;
\n
<li>gravitational field
</li>
\n &nbsp;
\n
<li>universal gravitational constant
</li>
</ol>
`;
const MQA11 = `
**d. universal gravitational constant**
\n &nbsp;
\n
According to universal law of gravitation,
$$
F = G\\ \\frac{Mm}{d^2}
$$
If we subtitute $M = m = 1$ and $d = 1$. We get,
$$
\\begin{aligned}F &= G\\ \\frac{1 \\times 1}{1^2}\\\\ &= G\\end{aligned}
$$
`;

const MQ12 = `
The weight of an object at the centre of the earth of radius $R$ is
<ol type="a">
\n &nbsp;
\n
<li>zero</li>
\n &nbsp;
\n
<li>infinite</li>
\n &nbsp;
\n
<li>R times the weight at the surface of the earth</li>
\n &nbsp;
\n
<li>1/R<sup>2</sup> times the weight at surface of the earth</li>
</ol>
`;
const MQA12 = `
**a. zero**
\n &nbsp;
\n
One might think that at the earth's centre, the force of gravitation will be infinite as $r = 0$. But that is wrong. If we carefully think about ourselves being at the centre of the earth, we can feel the same amount of matter present all around us. If we look up, we see some amount of matter. This is exactly equal to the amount of matter if we look down. This means that the force exerted on us by the matter above us is exactly equal to the force exerted by the matter present below us. Hence, these two cancels each other. If we carry this argument in all directions, we can see that no force actually acts on us.
`;

const MQ13 = `
An object weighs $10\\ N$ in air. When immersed fully in water, it weighs only $8\\ N$. The weight of the liquid displaced by the object will be
<ol type="a">
\n &nbsp;
\n
<li>2 N</li>
\n &nbsp;
\n
<li>8 N</li>
\n &nbsp;
\n
<li>10 N</li>
\n &nbsp;
\n
<li>12 N</li>
</ol>
`;
const MQA13 = `
**a. 2 N**
\n &nbsp;
\n
As the buoyant force always acts opposite to gravity, when an object is immersed in liquid, the difference in weight is the exact buoyant force experienced by the object. In this case, the difference in weights is $10 - 8 = 2\\ N$.
`;

const MQ14 = `
A girl stands on a box having $60\\ cm$ length, $40\\ cm$ breadth and $20\\ cm$ width in three ways. In which of the following cases, pressure exerted by the brick will be
<ol type="a">
\n &nbsp;
\n
<li>maximum when length and breadth form the base
</li>
\n &nbsp;
\n
<li>maximum when breadth and width form the base
</li>
\n &nbsp;
\n
<li>maximum when width and length form the base
</li>
\n &nbsp;
\n
<li>the same in all the above three cases
</li>
</ol>
`;
const MQA14 = `
**b. maximum when breadth and width form the base.**
\n &nbsp;
\n
Pressure is inversely proportional to area,
$$
\\text{Pressure} = \\frac{\\text{Thrust}}{\\text{Area}}
$$
This means that the lower the area, the more pressure. Out of the three areas $60 \\times 40\\ cm^2$ (length-breadth), $40 \\times 20\\ cm^2$ (breadth-width) and $60 \\times 20\\ cm^2$ (length-width), the lowest is breadth-width and in this case, the pressure exerted will be maximum.
`;

const MQ15 = `
An apple falls from a tree because of gravitational attraction between the earth and apple. If $F_1$ is the magnitude of force exerted by the earth on the apple and $F_2$ is the magnitude of force exerted by apple on earth, then
<ol type="a">
\n &nbsp;
\n
<li>F<sub>1</sub> is very much greater than F<sub>2</sub></li>
\n &nbsp;
\n
<li>F<sub>2</sub> is very much greater than F<sub>1</sub></li>
\n &nbsp;
\n
<li>F<sub>1</sub> is only a little greater than F<sub>2</sub></li>
\n &nbsp;
\n
<li>F<sub>1</sub> and F<sub>2</sub> are equal</li>
</ol>
`;
const MQA15 = `
**F<sub>1</sub> and F<sub>2</sub> are equal**
\n &nbsp;
\n
The earth attracts the apple with force equal to the force with which the apple attracts the earth. The only difference is that these two forces act in opposite directions as a virtue of Newton’s third law of motion.
`;




const SQ16 = `
What is the source of centripetal force that a planet requires to revolve around the Sun? On what factors does that force depend?
`;
const SQA16 = `
A force that keeps an object, such as a planet, in a circular motion by pulling it towards the centre is known as centripetal force. This is the Gravitational force. This force depends on the product of the planet's masses and the sun and the distance between them.
`;

const SQ17 = `
On the earth, a stone is thrown from a height in a direction parallel to the earth’s surface while another stone is simultaneously dropped from the same height. Which stone would reach the ground first and why?
`;
const SQA17 = `
Both stones will take the same time to reach the ground because the two stones fall from the same height.
`;

const SQ18 = `
Suppose gravity of earth suddenly becomes zero, then in which direction will the moon begin to move if no other celestial body affects it?
`;
const SQA18 = `
The moon will begin to move in a straight line in the direction in which it was moving at that instant because the circular motion of the moon is due to the centripetal force provided by the earth's gravitational force.
`;

const SQ19 = `
Identical packets are dropped from two aeroplanes, one above the equator and the other above the north pole, both at height $h$. Assuming all conditions are identical, will those packets take same time to reach the surface of earth. Justify your answer.
`;
const SQA19 = `
The value of $ ‘g’$ at the earth’s equator is less than that at the poles. Therefore, the packet falls slowly at the equator compared to the poles. Thus, the packet will remain in the air for longer when it is dropped at the equator.
`;

const SQ20 = `
The weight of any person on the moon is about $\\frac{1}{6}$ times that on the earth. He can lift a mass of $15\\ kg$ on the earth. What will be the maximum mass, which can be lifted by the same force applied by the person on the moon?
`;
const SQA20 = `
As the acceleration due to gravity on the moon is six times less than that on the earth, it is reasonable to say that a person can lift six times more massive objects. If a person on earth can lift a mass of $15\\ kg$ on earth, the same person can lift $15 \\times 6 = 90\\ kg$ on the moon with the same amount of force.
`;

const SQ21 = `
Calculate the average density of the earth in terms of $g$, $G$ and $R$.
`;
const SQA21 = `
Density of an object is given by,
$$
\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}
$$
Mass of earth, $M$, can be calculated in terms of $g$, $G$ and $R$ as follows,
$$
\\begin{aligned}g &= G\\ \\frac{M}{R^2}\\\\ \\implies M &= \\frac{gR^2}{G}\\end{aligned}
$$
By consdering the earth to be a perfect sphere, volume of the earth is given as,
$$
V = \\frac{4}{3}\\pi\\ R^3
$$
Therefore, density of earth is given by,
$$
\\begin{aligned}\\text{Density} &= \\frac{gR^2}{G \\times \\frac{4}{3}\\pi\\ R^3}\\\\ &= \\frac{3g}{4\\pi\\ GR}\\end{aligned}
$$
`;

const SQ22 = `
The earth is acted upon by gravitation of Sun, even though it does not fall into the Sun. Why?
`;
const SQA22 = `
The gravitational force is responsible for providing the necessary centripetal force. “Falling” is actually a misnomer here. All objects under the influence of gravitational force tend to be pulled with a force that is acting towards the centre of mass of each object. That is known as the centripetal force.
`;

const LQ23 = `
How does the weight of an object vary with respect to mass and radius of the earth. In a hypothetical case, if the diameter of the earth becomes half of its present value and its mass becomes four times of its present value, then how would the weight of any object on the surface of the earth be affected?
`;
const LQA23 = `
Weight of an object is directly proportional to gg which is directly proportional to the mass of the earth and inversely proportional to the square of the radius of the earth. i.e.,
\n &nbsp;
\n
Weight of a body $\\propto \\frac{M}{R^2}$
\n &nbsp;
\n
Using this we can find the original weight of the body,
$$
W_o = mg = m\\ G\\ \\frac{M}{R^2}
$$
In the hypothetical case,
\n &nbsp;
\n
The new mass $M' = 4M$
\n &nbsp;
\n
The new radius, $R' = \\frac{R}{2}$
\n &nbsp;
\n
This changes the weight of the body as follows,
$$
\\begin{aligned}W' &= m\\ G\\ \\frac{M'}{R'^2}\\\\ &= m\\ G\\ \\frac{4M}{(\\frac{R}{4})^2}\\\\ &= 16m\\ G\\ \\frac{M}{R^2}\\\\ &= 16 \\times W_o\\end{aligned}
$$
The weight will become 16 times.
`;

const LQ24 = `
How does the force of attraction between the two bodies depend upon their masses and distance between them? A student thought that two bricks tied together would fall faster than a single one under the action of gravity. Do you agree with his hypothesis or not? Comment.
`;
const LQA24 = `
This hypothesis is not correct. Gravitational force acts on all objects in proportion to their masses, but to move any object, we need to overcome inertia which is also proportional to the mass. Hence, the mass term cancels out, and we see all objects, heavy or light, fall at the same rate under the influence of gravity, given that no other forces, such as air drag, are affecting them. Like a single body, the two bricks fall at the same speed to reach the ground simultaneously in case of free-fall. This is because the acceleration due to gravity is independent of the mass of the falling body.
`;

const LQ25 = `
Two objects of masses $m_1$ and $m_2$ having the same size are dropped simultaneously from heights $h_1$ and $h_2$ respectively. Find out the ratio of time they would take in reaching the ground. Will this ratio remain the same if (i) one of the objects is hollow and the other one is solid and (ii) both of them are hollow, size remaining the same in each case. Give reason.
`;
const LQA25 = `
When an object is dropped from a height, the initial velocity, $u = 0\\ m\\ s^{-1}$
\n &nbsp;
\n
We know that,
$$
s = ut + \\frac{1}{2}at^2
$$ 
For both objects we can write,
$$
\\begin{aligned}h_1 &= \\frac{1}{2}gt_1^2\\\\h_2 &= \\frac{1}{2}gt_2^2\\end{aligned}
$$
Taking the ratio of the above gives,
$$
\\begin{aligned}\\frac{h_1}{h_2} &= \\frac{t_1^2}{t_2^2}\\\\ \\implies \\frac{t_1}{t_2} &= \\sqrt{\\frac{h_1}{h_2}} \\end{aligned}
$$
Ratio will not change in either case because acceleration remains the same. In case of free-fall acceleration does not depend upon mass and size (when ignoring air resistance).
`;

const LQ26 = `
<ol type="a">
\n &nbsp;
\n
<li>A cube of side 5 cm is immersed in water and then in saturated salt solution. In which case will it experience a greater buoyant force. If each side of the cube is reduced to 4 cm and then immersed in water, what will be the effect on the buoyant force experienced by the cube as compared to the first case for water. Give reason for each case.</li>
\n &nbsp;
\n
<li>A ball weighing 4 kg of density 4000 kg m<sup>–3</sup> is completely immersed in water of density 10<sup>3</sup> kg m<sup>–3</sup>. Find the force of buoyancy on it. (Given g = 10 m s<sup>–2</sup>).</li>
</ol>
`;
const LQA26 = `
<ol type="a">
\n &nbsp;
\n
<li>&nbsp;
<ol type="i">
<li>The cube will experience a greater buoyant force in the saturated salt solution because the density of the salt solution is greater than that of water.</li>
\n &nbsp;
\n
<li>The smaller cube will experience lesser buoyant force as its volume is lesser than the initial cube.</li>
</ol>
</li>
\n &nbsp;
\n
<li>According to Archimedes’ principle,</li>
\n &nbsp;
\n
$$
\\begin{aligned}\\text{Buoyant force} &= \\text{weight of the liquid displaced}\\\\ &= \\text{density of water} \\times \\\\ &\\text{volume of water displaced} \\times g\\\\ &= 1000 \\times \\frac{4}{1000} \\times 10\\\\ &= 10\\ N\\end{aligned}
$$
</ol>
`;


const ExemplarContent = () => {
  return (
    <Section>
        <MultipleAnsSection>
            <SubtitleContainer><CustomSubtitle text={"Multiple Choice Questions"} /></SubtitleContainer>
            <QnAContainer>
                <QnA srno={"1"} question={MQ1} answer={MQA1} />
                <QnA srno={"2"} question={MQ2} answer={MQA2} />
                <QnA srno={"3"} question={MQ3} answer={MQA3} />
                <QnA srno={"4"} question={MQ4} answer={MQA4} />
                <QnA srno={"5"} question={MQ5} answer={MQA5} />
                <QnA srno={"6"} question={MQ6} answer={MQA6} />
                <QnA srno={"7"} question={MQ7} answer={MQA7} />
                <QnA srno={"8"} question={MQ8} answer={MQA8} />
                <QnA srno={"9"} question={MQ9} answer={MQA9} />
                <QnA srno={"10"} question={MQ10} answer={MQA10} />
                <QnA srno={"11"} question={MQ11} answer={MQA11} />
                <QnA srno={"12"} question={MQ12} answer={MQA12} />
                <QnA srno={"13"} question={MQ13} answer={MQA13} />
                <QnA srno={"14"} question={MQ14} answer={MQA14} />
                <QnA srno={"15"} question={MQ15} answer={MQA15} />
            </QnAContainer>
        </MultipleAnsSection>

        <ShortAnsSection>
            <SubtitleContainer><CustomSubtitle text={"Short Answer Questions"} /></SubtitleContainer>
            <QnAContainer>
                <QnA srno={"16"} question={SQ16} answer={SQA16} />
                <QnA srno={"17"} question={SQ17} answer={SQA17} />
                <QnA srno={"18"} question={SQ18} answer={SQA18} />
                <QnA srno={"19"} question={SQ19} answer={SQA19} />
                <QnA srno={"20"} question={SQ20} answer={SQA20} />
                <QnA srno={"21"} question={SQ21} answer={SQA21} />
                <QnA srno={"22"} question={SQ22} answer={SQA22} />
            </QnAContainer>
        </ShortAnsSection>

        <LongAnsSection>
            <SubtitleContainer><LongAnsSubtitle /></SubtitleContainer>
            <QnAContainer>
                <QnA srno={"23"} question={LQ23} answer={LQA23} />
                <QnA srno={"24"} question={LQ24} answer={LQA24} />
                <QnA srno={"25"} question={LQ25} answer={LQA25} />
                <QnA srno={"26"} question={LQ26} answer={LQA26} />
            </QnAContainer>
        </LongAnsSection>
    </Section>
  )
}

export default ExemplarContent
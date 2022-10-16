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
How does the force of gravitation between two objects change when the distance between them is reduced to half?
`;
const QA1 = `
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
Therefore, when the distance between the objects is reduced to half, the force of gravitation increases by four times.
`;

const Q2 = `
Gravitational force acts on all objects in proportion to their masses. Why then, a heavy object does not fall faster than a light object?
`;
const QA2 = `
Gravitational force acts on all objects in proportion to their masses, but to move any object, we need to overcome inertia which is also proportional to the mass. Hence, the mass term cancels out, and we see all objects, heavy or light, fall at the same rate under gravity, given that no other forces, such as air drag, are affecting them.
`;

const Q3 = `
What is the magnitude of the gravitational force between the earth and a $1\\ kg$ object on its surface? (Mass of the earth is $6 \\times 10^{24}\\ kg$ and radius of the earth is $6.4 \\times 10^6\\ m$)
`;
const QA3 = `
Given that,
\n &nbsp;
\n
Mass of earth, $M = 6 \\times 10^{24}\\ kg$
\n &nbsp;
\n
Mass of object, $m = 1\\ kg$
\n &nbsp;
\n
Distance between them, $r = 6.4 \\times 10^6\\ m$
\n &nbsp;
\n
Universal gravitational constant, $G = 6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$
\n &nbsp;
\n
The force of gravitation between two objects of mass $M$ and mm respectively, separated by a distance $r$ is given by,
\n &nbsp;
\n
$$
\\begin{aligned}F &= G\\ \\frac{Mm}{r^2}\\\\ &= 6.67 \\times 10^{-11} \\times \\frac{6 \\times 10^{24} \\times 1}{(6.4 \\times 10^6)^2}\\\\ &= 9.8\\ N\\end{aligned}
$$
`;

const Q4 = `
The earth and the moon are attracted to each other by gravitational force. Does the earth attract the moon with a force that is greater or smaller or the same as the force with which the moon attracts the earth? Why?
`;
const QA4 = `
The earth attracts the moon with a force that is equal to the for with which moon attracts the earth. The only difference is that these two forces act in opposite directions as a virtue of Newton’s third law of motion.
`;

const Q5 = `
If the moon attracts the earth, why does the earth not move towards the moon?
`;
const QA5 = `
The moon attracts the earth with the same force as the earth does. As the force of gravitation is directly proportional to the mass, and the earth weighs $81.25$ times as much as the moon weighs, the acceleration experienced by earth is very small about $81.25$ times smaller. That is why the earth does not move towards the moon (Or does it? Revisit lesson 6).
`;

const Q6 = `
What happens to the force between two objects, if
<ol type="i">
If the distance between them is reduced by half, keeping their masses equal, the gravitational force between them is
\n &nbsp;
\n
<li>the mass of one object is doubled?</li>
\n &nbsp;
\n
<li>the distance between the objects is doubled and tripled?</li>
\n &nbsp;
\n
<li>the masses of both objects are doubled?</li>
</ol>
`;
const QA6 = `
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
Using this fact we can answer the above questions:
\n &nbsp;
\n
<ol type="i">
<li>If the mass of one object is doubled, the force of gravitation also doubles.</li>
\n &nbsp;
\n
<li>If the distance between the objects is doubled, from the second statement, the force of gravitation will decrease by 4 times. If the distance is tripled, the force of gravitation reduces nine-fold.</li>
\n &nbsp;
\n
<li>If the masses of both objects are doubled, then by the first statement, the force of gravitation becomes four times the original value.</li>
</ol>
`;

const Q7 = `
What is the importance of universal law of gravitation?
`;
const QA7 = `
Importance of universal law of gravitation:
\n &nbsp;
<ol type="i">
<li>the force that binds us to the earth.</li>
\n &nbsp;
<li>the motion of the moon around the earth.</li>
\n &nbsp;
<li>the motion of planets around the Sun, and</li>
\n &nbsp;
<li>the tides due to the moon and the Sun.</li>
</ol>
`;

const Q8 = `
What is the acceleration of free fall?
`;
const QA8 = `
The earth attracts objects towards it due to the gravitational force. Whenever objects fall towards the earth under this force alone, we say that the objects are in free fall. While falling, there is no change in the direction of motion of the objects. But due to the earth’s attraction, there will be a change in the magnitude of the velocity. Any change in velocity involves acceleration. Whenever an object falls towards the earth, acceleration is involved. This acceleration is due to the earth’s gravitational force. Therefore, this acceleration is called acceleration due to the gravitational force of the earth (or acceleration due to gravity). It is denoted by $g$. The unit of $g$ is the same as that of acceleration, that is,$ m\\ s^{–2}$, and its value is $9.8\\ m\\ s^{–2}$. The acceleration is also independent of the mass of the object.
`;

const Q9 = `
What do we call the gravitational force between the earth and an object?
`;
const QA9 = `
Weight
`;

const Q10 = `
Amit buys few grams of gold at the poles as per the instruction of one of his friends. He hands over the same when he meets him at the equator. Will the friend agree with the weight of gold bought? If not, why? [*Hint:* The value of $g$ is greater at the poles than at the equator.]
`;
const QA10 = `
Weight is just the force experienced by an object due to gravity.
$$
F = mg
$$
As acceleration due to gravity is not constant on earth (as the earth is not a perfect sphere), the force experienced by a body is also not constant. It changes with location. The distance from the earth's centre to the surface is lowest at the poles and highest at the equator. Therefore, when Amit buys a few grams of gold at the poles, the weight of the gold will be higher, and at the equator, it will be lower. Hence, the friend will not agree with the weight of the gold bought.
`;

const Q11 = `
Why will a sheet of paper fall slower than one that is crumpled into a ball?
`;
const QA11 = `
From the day-to-day observation of nature, we can agree that the air resistance must be directly proportional to the object's surface area. A crumpled paper has a lower surface area than a sheet of paper. Hence, the crumpled paper will face lower air resistance than the sheet of paper. Hence, the crumpled paper will fall faster, and the sheet of paper slower.
`;

const Q12 = `
Gravitational force on the surface of the moon is only $\\frac{1}{6}^{th}$ as strong as gravitational force on the earth. What is the weight in newtons of a $10\\ kg$ object on the moon and on the earth?
`;
const QA12 = `
As the gravitational force on the surface of the moon is only $\\frac{1}{6}^{th} $ as strong as the gravitational force on the earth, it implies that the acceleration due to gravity on the moon will also be $\\frac{1}{6}^{th}$ times the acceleration due to gravity on earth. Hence, the object’s weight on the moon can be calculated as,
$$
\\begin{aligned}\\text{Weight on moon} &= \\text{Mass} \\times \\text{Acceleration on moon}\\\\ &= \\text{Mass} \\times \\frac{\\text{Acceleration on earth}}{6}\\\\ &= 10 \\times \\frac{9.8}{6}\\\\ &= 16.3\\ N\\end{aligned}
$$ 
Weight of the same object on earth will be six times as much or can be calculated as follows,
$$
\\begin{aligned}\\text{Weight on earth} &= \\text{Mass} \\times \\text{Acceleration on earth}\\\\ &= 10 \\times 9.8\\\\ &= 98\\ N\\end{aligned}
$$
`;

const Q13 = `
A ball is thrown vertically upwards with a velocity of $49\\ m\\ s^{-1}$.
\n &nbsp;
\n
Calculate
\n &nbsp;
\n
<ol type="i">
<li>the maximum height to which it rises,</li>
\n &nbsp;
\n
<li>the total time it takes to return to the surface of the earth.</li>
</ol>
`;
const QA13 = `
Given,
\n &nbsp;
\n
Initial velocity, $u = 49\\ m\\ s^{-1}$
\n &nbsp;
\n
At the maximum height, the object will stop.Hence,
\n &nbsp;
\n
Final velocity, $v = 0\\ m\\ s^{-1}$
\n &nbsp;
\n
As acceleration due to gravity is acting opposite to the direction of motion, the acceleration due to gravity, $g = -9.8\\ m\\ s^{-2}$
\n &nbsp;
\n
<ol type="i">
<li>Maximum height is the distance travelled by the ball. We know that,</li>
\n &nbsp;
$$
\\begin{aligned}v^2 &= u^2 + 2as\\\\ 0 &= (49)^2 + 2 \\times (-9.8) \\times s\\\\ \\implies s &= \\frac{- 49 \\times 49}{-2 \\times 9.8}\\\\ &= 122.5\\ m\\end{aligned}
$$
<li>Total time to return to the surface is equal to twice the time it takes to reach (or drop from) the maximum height. We know that,</li>
\n &nbsp;
\n
$$
\\begin{aligned}v &= u + at\\\\ 0 &= 49 + (-9.8)t\\\\ \\implies t &= \\frac{-49}{-9.8}\\\\ &= 5\\ s\\end{aligned}
$$
</ol>
\n &nbsp;
\n
Therefore, total time to it takes to return to the surface of the earth is $2 \\times 5\\ s = 10\\ s$.
`;

const Q14 = `
A stone is released from the top of a tower of height $19.6\\ m$. Calculate its final velocity just before touching the ground.
`;
const QA14 = `
Given,
\n &nbsp;
\n
Initial velocity, $u = 0\\ m\\ s^{-1}$
\n &nbsp;
\n
As acceleration due to gravity is acting along to the direction of motion, the acceleration due to gravity, $g = 9.8\\ m\\ s^{-2}$
\n &nbsp;
\n
We know that,
$$
\\begin{aligned}v^2 &= u^2 + 2as\\\\ v^2 &= (0)^2 + 2 \\times (9.8) \\times 19.6\\\\ \\implies v &= \\sqrt{19.6^2}\\\\ &= 19.6\\ m\\ s^{-1}\\end{aligned}
$$
`;

const Q15 = `
A stone is thrown vertically upward with an initial velocity of $40\\ m\\ s^{-1}$. Taking $g = 10\\ m\\ s^{-2}$, find the maximum height reached by the stone. What is the net displacement and the total distance covered by the stone?
`;
const QA15 = `
Given,
\n &nbsp;
\n
Initial velocity, $u = 40\\ m\\ s^{-1}$
\n &nbsp;
\n
At the maximum height, the object will stop. Hence,
Final velocity, $v = 0\\ m\\ s^{-1}$
\n &nbsp;
\n
As acceleration due to gravity is acting opposite to the direction of motion, the acceleration due to gravity, $g = -10\\ m\\ s^{-2}$
\n &nbsp;
\n
Maximum height is the distance travelled by the ball. We know that,
$$
\\begin{aligned}v^2 &= u^2 + 2as\\\\ 0 &= (40)^2 + 2 \\times (-10) \\times s\\\\ \\implies s &= \\frac{- 40 \\times 40}{-2 \\times 10}\\\\ &= 80\\ m\\end{aligned}
$$
\n &nbsp;
\n
As the stone is vertically thrown upwards, it will come back to its original or starting position. Hence, the net displacement is $0\\ m$.
\n &nbsp;
\n
The total distance covered is twice the maximum height. Hence, total distance covered by the stone is $2 \\times 80\\ m = 160\\ m$.
`;

const Q16 = `
Calculate the force of gravitation between the earth and the Sun, given that the mass of the earth $= 6 \\times 10^{24}\\ kg$ and of the Sun $= 2 \\times 10^{30}\\ kg$. The average distance between the two is $1.5 \\times 10^{11}\\ m$.
`;
const QA16 = `
Given that,
\n &nbsp;
\n
Mass of earth, $M = 6 \\times 10^{24}\\ k$
\n &nbsp;
\n
Mass of sun, $m = 2 \\times 10^{30}\\ kg$
\n &nbsp;
\n
Distance between them, $r = 1.5 \\times 10^{11}\\ m$
\n &nbsp;
\n
Universal gravitational constant, $G = 6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$
\n &nbsp;
\n
The force of gravitation between two objects of mass $M$ and $m$ respectively, separated by a distance $r$ is given by,
$$
\\begin{aligned}F &= G\\ \\frac{Mm}{r^2}\\\\ &= 6.67 \\times 10^{-11} \\times \\frac{6 \\times 10^{24} \\times 2 \\times 10^{30}}{(1.5 \\times 10^{11})^2}\\\\ &= 3.57 \\times 10^{22}\\ N\\end{aligned}
$$
`;

const Q17 = `
A stone is allowed to fall from the top of a tower $100\\ m$ high and at the same time another stone is projected vertically upwards from the ground with a velocity of $25\\ m\\ s^{-1}$. Calculate when and where the two stones will meet.
`;
const QA17 = `
Assume that the stones meet after travelling for a time of $t$ seconds.
\n &nbsp;
\n
<ol type="a">
<li>For the stone which is allowed to fall from the top of a tower</li>
\n &nbsp;
\n
Initial velocity, $u = 0\\ m\\ s^{-1}$
\n &nbsp;
\n
As acceleration due to gravity is acting along to the direction of motion, the acceleration due to gravity, $g = 9.8\\ m\\ s^{-2}$
\n &nbsp;
\n
Distance travelled,
$$
\\begin{aligned}s_1 &= ut + \\frac{1}{2}at^2\\\\ s_1 &= 0 + \\frac{1}{2} \\times (9.8) \\times t^2\\\\ &= 4.9t^2\\end{aligned}
$$
<li>For the stone that is projected vertically upwards from the ground:</li>
\n &nbsp;
\n
Initial velocity, $u = 25\\ m\\ s^{-1}$
\n &nbsp;
\n
As acceleration due to gravity is acting opposite to the direction of motion, the acceleration due to gravity, $g = -9.8\\ m\\ s^{-2}$
\n &nbsp;
\n
Distance travelled,
$$
\\begin{aligned}s_2 &= ut + \\frac{1}{2}at^2\\\\ s_2 &= 25t + \\frac{1}{2} \\times 9.8 \\times t^2\\\\ &= 25t + 4.9t^2\\\\ \\implies s_2 &= 25t - s_1\\ (\\because s_1 = 4.9t^2)\\\\ \\implies s_1 + s_2 &= 25t\\end{aligned}
$$ 
As the height of the tower is $100\\ m$,
$$
s_1 + s_2 = 100
$$
By comparing the above two equations, we get
$$
\\begin{aligned}25t &= 100\\\\ \\implies t &= \\frac{100}{25} = 4\\ s\\end{aligned}
$$
</ol>
`;

const Q18 = `
A ball thrown up vertically returns to the thrower after $6\\ s$. Find
\n &nbsp;
\n
<ol type="a">
<li>the velocity with which it was thrown up,</li>
\n &nbsp;
\n
<li>the maximum height it reaches, and</li>
\n &nbsp;
\n
<li>its position after 4 s.</li>
</ol>
`;
const QA18 = `
If the ball takes $6\\ s$ to travel up and down, it means it took only $3\\ s$ to cover the distance till the maximum height. Hence,
\n &nbsp;
\n
Time taken, $t = 3\\ s$
\n &nbsp;
\n
At the maximum height, the object will stop. Hence,
\n &nbsp;
\n
Final velocity, $v = 0\\ m\\ s^{-1}$
\n &nbsp;
\n
As acceleration due to gravity is acting opposite to the direction of motion, the acceleration due to gravity, $g = -9.8\\ m\\ s^{-2}$
\n &nbsp;
\n
<ol type="a">
<li>We know that,</li>
\n &nbsp;
\n
$$
\\begin{aligned}v &= u + at\\\\ 0 &= u + (-9.8) \\times 3\\\\ \\implies u &= 29.4\\ m\\ s^{-1}\\end{aligned}
$$
<li>To calculate the maximum height, we use the initial velocity calculated above.</li>
\n &nbsp;
\n
Initial velocity, $u = 29.4\\ m\\ s^{-1}$
\n &nbsp;
\n
We know that,
$$
\\begin{aligned}v^2 &= u^2 + 2as\\\\ 0 &= (29.4)^2 + 2 \\times (-9.8) \\times s\\\\ \\implies s &= \\frac{- 29.4 \\times 29.4}{-2 \\times 9.8}\\\\ &= 44.1\\ m\\end{aligned}
$$
<li>As it takes</li>
\n &nbsp;
\n
$3\\ s$ to reach the maximum height, at $4\\ s$ - the ball will be descending. We can think of this as if the ball was dropped from a height of $44.1\\ m$ and we have to calculate its position after $1\\ s$. To calculate the position after $1\\ s$, we are given,
\n &nbsp;
\n
Initial velocity, $u = 0\\ m\\ s^{-1}
\n &nbsp;
\n
Time taken, $t = 1\\ s$
\n &nbsp;
\n
As acceleration due to gravity is acting along to the direction of motion, the acceleration due to gravity, $g = 9.8\\ m\\ s^{-2}$
\n &nbsp;
\n
We know that,
$$
\\begin{aligned}s &= ut + \\frac{1}{2}at^2\\\\ s &= 0 + \\frac{1}{2} \\times (9.8) \\times 1^2\\\\ &= 4.9\\ m\\end{aligned}
$$
The ball travelled $4.9\\ m$ downwards, it means that, after $4\\ s$, the ball is at the height of
$$
44.1 - 4.9 = 39.2\\ m
$$
above the ground.
</ol>
`;

const Q19 = `
In what direction does the buoyant force on an object immersed in a liquid act?
`;
const QA19 = `
The buoyant force on an object immersed in a liquid always acts opposite to the direction of the gravitational pull.
`;

const Q20 = `
Why does a block of plastic released under water come up to the surface of water?
`;
const QA20 = `
From Archimedes’ principle, the buoyant force experienced by an object when partially or fully immersed in a liquid equals the weight of the liquid displaced. As the weight of water displaced is more than the weight of the plastic block - mainly due to the fact that the density of plastic is very low, hence if we have the same volume of plastic and water, plastic weighs less - the plastic block floats.
`;

const Q21 = `
The volume of $50\\ g$ of a substance is $20\\ cm^3$. If the density of water is $1\\ g\\ cm^{–3}$, will the substance float or sink?
`;
const QA21 = `
From the Archimedes’ principle, the buoyant force experienced by an object, when partially or fully immersed in a liquid, is equal to the weight of the liquid displaced. The substance when immersed in water will displace $20\\ cm^3$ of water. The mass of $20\\ cm^3$ of water is,
$$
\\begin{aligned}\\text{Density} &= \\frac{Mass}{Volume}\\\\1 &= \\frac{Mass}{20}\\\\ \\implies \\text{Mass} &= 20\\ g\\end{aligned}
$$ 
As weight is directly proportional to the acceleration due to gravity, the weight of the water displaced will be less than the weight of the substance. Hence, it will experience a lower buoyant force than its weight and sink.
`;

const Q22 = `
The volume of a $500\\ g$ sealed packet is $350\\ cm^3$. Will the packet float or sink in water if the density of water is $1\\ g\\ cm^{–3}$? What will be the mass of the water displaced by this packet?
`;
const QA22 = `
From the Archimedes’ principle, the buoyant force experienced by an object, when partially or fully immersed in a liquid, is equal to the weight of the liquid displaced. The substance when immersed in water will displace $350\\ cm^3$ of water. The mass of $350\\ cm^3$ of water is,
$$
\\begin{aligned}\\text{Density} &= \\frac{Mass}{Volume}\\\\1 &= \\frac{Mass}{350}\\\\ \\implies \\text{Mass} &= 350\\ g\\end{aligned}
$$
As weight is directly proportional to the acceleration due to gravity, the weight of the water displaced will be less than the weight of the sealed packet. Hence, it will experience a lower buoyant force than its weight and will sink.
`;

const ExercisesContent = () => {
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
          <QnA srno={"8"} question={Q8} answer={QA8} />
          <QnA srno={"9"} question={Q9} answer={QA9} />
          <QnA srno={"10"} question={Q10} answer={QA10} />
          <QnA srno={"11"} question={Q11} answer={QA11} />
          <QnA srno={"12"} question={Q12} answer={QA12} />
          <QnA srno={"13"} question={Q13} answer={QA13} />
          <QnA srno={"14"} question={Q14} answer={QA14} />
          <QnA srno={"15"} question={Q15} answer={QA15} />
          <QnA srno={"16"} question={Q16} answer={QA16} />
          <QnA srno={"17"} question={Q17} answer={QA17} />
          <QnA srno={"18"} question={Q18} answer={QA18} />
          <QnA srno={"19"} question={Q19} answer={QA19} />
          <QnA srno={"20"} question={Q20} answer={QA20} />
          <QnA srno={"21"} question={Q21} answer={QA21} />
          <QnA srno={"22"} question={Q22} answer={QA22} />
        </QnAContainer>
      </ExampleSection>
    </Section>
  )
}

export default ExercisesContent
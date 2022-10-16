import React from 'react'

import styled from 'styled-components';
import QnA from '../../QnA';
import LongAnsSubtitle from '../../LongAnsSubtitle';
import ShortAnsSubtitle from '../../ShortAnsSubtitle';

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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

const Q1 = `
A change in the speed of a moving object can be obtained by applying a _____________.
`;
const QA1 = `
Force
`;

const Q2 = `
A change in the direction of a moving object can be obtained by applying a _____________.
`;
const QA2 = `
Force
`;

const Q3 = `
Gravity acts on objects pertaining the property of _____________.
`;
const QA3 = `
Mass or Energy
`;

const Q4 = `
Are horizontal and vertical velocity dependent on each other?
`;
const QA4 = `
No
`;

const Q5 = `
Is "falling" scientifically correct?
`;
const QA5 = `
No
`;

const Q6 = `
Define centripetal Force?
`;
const QA6 = `
A force that keeps an object in a circular motion by pulling it towards the centre is known as centripetal force.
`;

const Q7 = `
How does an object under circular motion will react if the centripetal force is suddenly removed?
`;
const QA7 = `
If the centripetal force is suddenly removed, the object will start to move but in a straight line in the direction of motion which will be tangential to the circle of revolution.
`;

const Q8 = `
What is barycentre?
`;
const QA8 = `
Barycentre is the central point around which two or more bodies revolve.
`;

const Q9 = `
Write down two clauses of the newton's law of gravitation with their mathematical couterparts.
`;
const QA9 = `
The universal law of gravitation says that the force of gravitation between two objects of mass $M$ and $m$ respectively, separated by a distance $$ is:
<ol type="a">
\n &nbsp;
\n
<li>directly proportional to the product of their masses</li>
\n &nbsp;
\n
$$
F \\propto Mm
$$
\n &nbsp;
\n
<li>inversely proportional to the square of the distance between them,</li>
\n &nbsp;
\n
$$
F \\propto \\frac{1}{r^2}
$$
</ol>
`;

const Q10 = `
Who is credited with discovering the value for the universal gravitational constant?
`;
const QA10 = `
Sir Henry Cavendish
`;

const Q11 = `
List down Kepler's law of planetary motion.
`;
const QA11 = `
Kepler's laws of planetary motion:
<ol>
\n &nbsp;
\n
<li>Planets move in ellipses with the Sun at one focus.</li>
\n &nbsp;
\n
<li>The radius vector describes equal areas in equal times.</li>
\n &nbsp;
\n
<li>The squares of the periodic times are to each other as the cubes of the mean distances.</li>
</ol>
`;

const Q12 = `
Why is the earth round?
`;
const QA12 = `
Because the gravitational force pulls everything towards the center
`;

const Q13 = `
At what point on the earth’s surface would you feel the highest amount of pull?
`;
const QA13 = `
At north and south poles, where the surface is closer to the centre of the earth
`;

const Q14 = `
At what point on the earth’s surface would you feel the least amount of pull?
`;
const QA14 = `
At the equator
`;

const Q15 = `
Why is the earth not a perfect sphere?
`;
const QA15 = `
Because it is spinning and hence, tends to throw the surface along the equator which flattens the poles
`;

const Q16 = `
If a stone of $1\\ kg$ is dropped from a distance of $10\\ m$, what is its velocity when it hits the ground? (Take $g$ as $10\\ m\\ s^{-2}$).
`;
const QA16 = `
As the mass of object has no effect on an object under freefall, the final velocity can be calculated as follows:
$$
\\text{Initial velocity, }u = 0\\ m\\ s^{-2}\\\\ \\text{Distance, }t =10\\ m\\\\ \\text{acceleration, }g = 10\\ m\\ s^{-2}\\\\ \\begin{aligned} \\text{Final velocity, }v^2 &= u^2\\ +\\ 2as\\\\ &= 0^2\\ + 2\\times 10 \\times 10 \\\\ v &= \\sqrt{200}\\ m\\ s^{-1}\\\\ v &=14.14\\ m\\ s^{-1}\\end{aligned}
$$
`;

const Q17 = `
Mass is a
<ol type="a">
\n &nbsp;
\n
<li>Scalar</li>
\n &nbsp;
\n
<li>Vector</li>
\n &nbsp;
\n
<li>Tensor</li>
\n &nbsp;
\n
<li>None of the above</li>
</ol>
`;
const QA17 = `
Mass is a **a. Scalar**.
`;

const Q18 = `
To what point is your weight acting?
`;
const QA18 = `
Towards the centre of the earth
`;

const Q19 = `
If a stone of $100\\ kg$ is dropped from a distance of $10\\ m$ on the sun, what is its speed when it hits the ground?
`;
const QA19 = `
As the mass of object has no effect on an object under freefall, the final velocity can be calculated as follows:
$$
\\text{Initial velocity, }u = 0\\ m\\ s^{-2}\\\\ \\text{Distance, }t =10\\ m\\\\ \\text{acceleration, }g = 28.02 \\times 9.8 = 274.6\\ m\\ s^{-2}\\\\ \\begin{aligned} \\text{Final velocity, }v^2 &= u^2\\ +\\ 2as\\\\ &= 0^2\\ + 2\\times 274.6 \\times 10 \\\\ v &= \\sqrt{5492}\\ m\\ s^{-1}\\\\ v &=74.1\\ m\\ s^{-1}\\end{aligned}
$$
`;

const Q20 = `
 How much time will a stone of $10\\ kg$ take to touch the ground of the moon, if dropped from a height of $10\\ m$?
`;
const QA20 = `
As the mass of object has no effect on an object under freefall, the time taken can be calculated as follows:
$$
\\text{Initial velocity, }u = 0\\ m\\ s^{-2}\\\\ \\text{Distance, }t =10\\ m\\\\ \\text{acceleration, }g = 1.625\\ m\\ s^{-2}\\\\ \\begin{aligned} \\text{Distance travelled, }s &= ut\\ +\\ \\frac{1}{2}at^2\\\\ 10 &= 0\\ + \\frac{1}{2}\\times 1.625 \\times t^2 \\\\ \\implies t^2 &= 12.3 \\\\ \\implies t &= \\sqrt{12.3} = 3.5\\ s\\end{aligned}
$$
`;

const Q21 = `
 The other name of the units $N\\ m^{-2}$ is also known as _______________.
`;
const QA21 = `
Pascals
`;

const Q22 = `
 Why do sports-persons wear studs (shoes with pointy protrusions)?
`;
const QA22 = `
 Studs concentrate the thrust of the body’s weight and make the shoe’s sole go inside the surface, increasing the person’s grip.
`;

const Q23 = `
 It would be a nightmare to sleep on a bed with a single nail, but it can be comfortable (relatively) when there are thousands of nails kept at the same level to make a nice bed of nails. Why?
`;
const QA23 = `
Pressure is less on each nail as the force is distributed.
`;

const Q24 = `
 Is there a force above our heads due to the atmosphere?
`;
const QA24 = `
Yes
`;

const Q25 = `
 We have about $6.66\\ kg$ of air $per\\ inch^2$ above our heads due to the atmosphere. What is the pressure? $(1\\ inch^2 = 0.00064516 m^2)$
`;
const QA25 = `
$$
\\begin{aligned}Thrust &= 6.66 \\times 9.8 = 65.27\\ N\\ inch^{-2} \\\\ Area &= 0.00064516 m^2\\\\ \\end{aligned}\\\\ \\begin{aligned}Pressure &= \\frac{Thrust}{Area} \\\\&= \\frac{65.37}{ 0.00064516}\\\\ &=1,01,168.70\\ N\\ m^{-2}\\\\ &= 1.01 \\times 10^5\\ N\\ m^{-2} \\\\ \\end{aligned}
$$
`;

const Q26 = `
 Why are tires inflated?
`;
const QA26 = `
To reduce the wire and tear of the wheel and the rim as the force is distributed.
`;

const Q27 = `
 What special property fluids posses with respect to pressure which differs from solids?
`;
const QA27 = `
Fluids exert thrust and pressure undiminished in all directions, whereas solids exert thrust and pressure in only one direction: towards the earth's centre.
`;

const Q28 = `
 What is buoyant force?
`;
const QA28 = `
When an object is immersed in a fluid, it experiences an upward force that always acts opposite to gravity. This force is known as buoyant force.
`;

const Q29 = `
 Buoyant force can be balanced by applying an ___________.
`;
const QA29 = `
Downthrust
`;

const Q30 = `
 Define density.
`;
const QA30 = `
Density is defined as an objects mass per unit volume.
`;

const Q31 = `
 Calculate the density of an object of mass $2\\ kg$ and a volume of $20\\ m^3$.
`;
const QA31 = `
Density is defined as an objects mass per unit volume. Hence,
$$
\\begin{aligned}\\text{Density} &= \\frac{\\text{Mass}}{\\text{Volume}}\\\\ &=\\frac{2}{20}\\\\ &=0.2\\ kg\\ m^{-3}\\end{aligned}
$$
`;

const Q32 = `
 Ice floats on water even though it is essentially made up of water, why?
`;
const QA32 = `
When Ice is formed, it expands which creates tiny air pockets which decreases its density.
`;

const Q33 = `
 Density of an object is directly proportional to the _____________.
`;
const QA33 = `
Mass
`;

const W1 = `
At some point of the year, Jupiter is about $5.8 \\times 10^{11}\\ m$ away from earth. Calculate the gravitational force between the two. $(M_j = 1.9 \\times 10^{27}\\ kg;\\ M_e = 6 \\times 10^{24}\\ kg;\\ G = 6.67 \\times 10^{−11}\\ N\\ m^2\\ kg^{−2})$
`;
const WA1 = `
The gravitational force berween any two bodies is given by,
$$
F = G\\ \\frac{Mm}{r^2}
$$
$$
\\begin{aligned}\\text{Mass of Jupiter, } M &= 1.9 \\times 10^{27}\\ kg\\\\ \\text{Mass of Earth, } m &= 6 \\times 10^{24}\\ kg\\\\ \\text{Distance, } r &= 5.8 \\times 10^{11}\\ m\\\\ F &= (6.67 \\times 10^{−11}\\ N\\ m^2\\ kg^{−2}) \\\\ &\\times \\frac{1.9 \\times 10^{27}\\ kg \\times 6 \\times 10^{24}\\ kg}{(5.8 \\times 10^{11}\\ m)^2}\\\\ &= 2.26 \\times 10^{18}\\ N\\end{aligned}
$$
`;

const W2 = `
Calculate the gravitational force between the sun and the earth and hence, calculate the acceleration experienced by the earth. $(M_s = 2 \\times 10^{30}\\ kg;\\ M_e = 6 \\times 10^{24}\\ kg;\\ r = 1.5 \\times 10^{11}\\ m;\\ G = 6.67 \\times 10^{−11}\\ N\\ m^2\\ kg^{−2})$
`;
const WA2 = `
The gravitational force berween any two bodies is given by,
$$
F = G\\ \\frac{Mm}{r^2}
$$
$$ 
\\begin{aligned}\\text{Mass of Sun, } M &= 2 \\times 10^{30}\\ kg\\\\ \\text{Mass of Earth, } m &= 6 \\times 10^{24}\\ kg\\\\ \\text{Distance, } r &= 1.5 \\times 10^{11}\\ m\\\\ F &= (6.67 \\times 10^{−11}\\ N\\ m^2\\ kg^{−2}) \\\\ &\\times \\frac{2 \\times 10^{30}\\ kg \\times 6 \\times 10^{24}\\ kg}{(1.5 \\times 10^{11}\\ m)^2}\\\\ &= 35.57 \\times 10^{21}\\ N\\end{aligned}
$$
The acceleration experienced by earth can be calculated as,
$$
\\begin{aligned}F &= ma\\\\ 35.57 \\times 10^{21}\\ N &= (6 \\times 10^{24}\\ kg) \\times a\\\\ \\implies a &= \\frac{35.57 \\times 10^{21}\\ N}{6 \\times 10^{24}\\ kg}\\\\ &= 5.93 \\times 10^{-3}\\ m\\ s^{2}\\end{aligned}
$$
`;

const W3 = `
Using Kepler’s laws of gravitation, deduce the inverse square law incorporated in the universal law of gravitation given by Newton.
`;
const WA3 = `
By Kepler’s first law, **“The orbit of a planet is an ellipse with the Sun at one of the foci”**, we can assume that the orbit is circular as a circle is a special type of ellipse with both its foci coinciding at the centre. In this exceptional case, the planet of mass $M$ is going around the Sun at velocity $v$, and the radius is $r$. The centripetal force experienced by the planet is
$$
F_c = \\frac{mv^2}{r}
$$
As mass is a constant, we can write the above as
$$
F_c \\propto \\frac{v^2}{r}
$$
As the motion of the planet is periodic, let us assume the period to be $T$, which means the planet takes $T$ amount of time to complete one revolution around the Sun. Then the velocity of the planet is given by
$$
velocity = \\frac{Distance}{Time}
$$
In $T$ amount of time, the distance covered by the planet is the circumference of the circle of revolution which is $2\\pi r$. Therefore,
$$
v = \\frac{2\\pi r}{T}
$$
Substituting this in $F_c$ gives,
$$
F_c \\propto \\frac{r}{T^2}
$$
which can also be written as,
$$
F_c \\propto \\frac{ r^3}{T^2} \\times \\frac{1}{r^2}
$$
By Kepler’s III law,
$$
\\frac{r^3}{T^2} = constant
$$
which implies,
$$
F_c \\propto \\frac{1}{r^2}
$$
This is how Newton arrived at the famous inverse square relationship for the universal law of gravitation.
`;

const W4 = `
We all have heard that the earth revolves around the Sun or the moon revolves around the earth. Is it really the case? Do they really revolve around the Sun or the earth? If No, explain. Think along the lines that if we have 2 planets of the same mass pulling each other, how would they respond?
`;
const WA4 = `
No, the earth and the other planets do not revolve around the Sun. In fact, the moon also does not revolve around the earth. Even though the pull by the small planets or the moon is very small, it does have an effect, and the effect is that they revolve around a common centre called the barycenter. The whole solar system revolves around a common point, including the Sun. For the earth and the moon, the barycenter is inside the earth, about $1700\\ km$ inside the earth’s surface. As for the solar system, the barycenter changes its location, which depends upon the instantaneous location of all the planets. Coming to planets with equal masses, they would revolve around the centre of the line joining their centre of masses. This is most commonly seen in stars, and this type of star system is called binary stars.
`;

const W5 = `
State Kepler’s 3 laws for the motion of celestial objects and explain the variation of the speed of the earth at different seasons. Is it fast in summer and slow in winter or vice versa.
*Hint:* The earth is farthest from the sun in July and closest in January.
`;
const WA5 = `
The 3 Kepler’s laws for the motion of celestial objects is as follows:
<ol type="a">
\n &nbsp;
\n
<li>The orbit of a planet is an ellipse with the Sun at one of the foci.</li>
\n &nbsp;
\n
<li>The line joining the planet and the Sun sweep equal areas in equal intervals of time.</li>
\n &nbsp;
\n
<li>The cube of the mean distance of a planet from the Sun is proportional to the square of its orbital period TT. Or,</li>
</ol>
\n &nbsp;
\n
$$
\\frac{r^3}{T^2} = constant
$$
The variation of the speed of any planet along its orbit depends upon the distance from the massive object around which it is rotating. From Kepler’s II law, the area swept by the line joining the planet and the Sun is equal. This implies that the speed needs to be larger when it is closer to the Sun and slower if the planet is farther from it. Therefore, the speed of the earth is highest in January and slowest in July. This also tells us that the distance from the Sun is not responsible for the occurrence of seasons on earth.
`;

const W6 = `
A rocket is propelled at the start with a constant acceleration of $30\\ m\\ s^2$. At an altitude of $5000\\ m$, the first part of the rocket is shed. Calculate
<ol type="a">
\n &nbsp;
\n
<li>The time at which the part is shed.</li>
\n &nbsp;
\n
<li>The time taken by the part to hit the ground.</li>
\n &nbsp;
\n
<li>The final velocity at which the part hits the ground.</li>
</ol>
`;
const WA6 = `
$$
\\text{Acceleration of the rocket, }a_r = 30\\ m\\ s^{-2} \\\\
\\text{Acceleration due to gravity, }g = 10\\ m\\ s^{-2} \\\\
\\text{Effective acceleration, }a = (30 - 10) = 20\\ m\\ s^{-2} \\\\
\\text{Distance, }s = 5000\\ m \\\\
\\text{Initial velocity, }u = 0\\ m\\ s^{-1}
$$
<ol type="a">
\n &nbsp;
\n
<li>The time at which the part is shed,</li>
\n &nbsp;
\n
$$
\\begin{aligned}\\text{Distance travelled, } s &= ut + \\frac{1}{2}at^2\\\\ 5000 &= 0 + \\frac{1}{2} \\times 20 \\times t^2\\\\ \\implies t &= \\sqrt{500} = 22.36\\ s\\end{aligned}
$$
\n &nbsp;
\n
<li>Time taken by the part to hit the ground has to be calculated in two parts. In the first part, we calculate the time it takes to reach the top after the part was shed because the part will not start falling the moment it is shed. The part will travel upwards till its velocity becomes zero and then start falling back to the ground, which is the second part. For the first part, we need the initial velocity once the part is shed,</li>
\n &nbsp;
\n
$$
\\begin{aligned}v &= u + at\\\\ v &= 0 + at\\\\ v &= 20 \\times 22.36\\\\ v &= 447.2\\ m\\ s^{-1}\\end{aligned}
$$
Take the current distance as ground zero and the time to be zero seconds as well. At the maximum distance, the final velocity will be zero. As the part is already shed, it will experience only acceleration due to gravity downwards.Time taken to reach the maximum height,
$$
\\begin{aligned}v &= u + at\\\\ 0 &= 447.2\\ m\\ s^{-1} - 10\\times t_{up} \\\\ \\implies t_{up} &= 44.72\\ s\\end{aligned}
$$
Distance covered to reach the maximum height,
$$
\\begin{aligned}v^2 &= u^2 + 2as\\\\ 0^2 &= 447.2^2 - 2 \\times 10 \\times s_{up}\\\\ \\implies s_{up} &= 9999.4\\ m\\end{aligned}
$$
The part was shed at $5000\\ m$ and it has travelled an additional $9999.4\\ m$ so that its velocity becomes zero. Total distance to be covered to reach the surface,
$$
s_t = 5000 + 9999.4 = 14999.4\\ m
$$
Time taken to cover this distance,
$$
\\begin{aligned}\\text{Distance travelled, } s_t &= ut + \\frac{1}{2}at^2\\\\ 14999.4 &= 0 + \\frac{1}{2} \\times 10 \\times t_{down}^2\\\\ \\implies t_{down} &= \\sqrt{2,999.88} = 54.77\\ s\\end{aligned}
$$
Total time to hit the ground is,
$$
\\begin{aligned}t &= t_{up} + t_{down}\\\\ t &= 44.72 + 54.77\\\\ t &= 99.5\\ s\\end{aligned}
$$
\n &nbsp;
\n
<li>Final velocity when the part hits the ground,</li>
\n &nbsp;
\n
$$
\\begin{aligned}v &= u + at\\\\ v &= 0 + 10 \\times 99.5\\\\ v &= 547.7\\ m\\ s^{-1}\\end{aligned}
$$
</ol>

`;

const W7 = `
In the above problem, we have neglected air drag. Usually, the force experienced by an object due to air drag is directly proportional to its square of velocity. Take the proportionality constant to be $0.1$, the mass of the part to be $500\\ kg$ and find the speed at which the part hits the ground. Also, find the time and distance it takes to attain this speed from the maximum distance, i.e., at the top.
`;
const WA7 = `
If the air drag force is directly propotional to square of the velocity, then
$$
F_{drag} \\propto v^2
$$
As the constant of proportionality is $0.1$, we can write the drag force as,
$$
F_{drag} = 0.1\\ v^2
$$
The maximum velocity, $v_{max}$ will be attained by the object when the drag force is balanced by the weight of the object,
$$
\\begin{aligned} F_{drag} &= mg\\\\ 0.1 \\times v_{max}^2 &= 500 \\times 10 \\\\ v_{max} &= 223.6\\ m\\ s^{-1}\\end{aligned}
$$
Time take to reach this velocity,
$$
\\begin{aligned} v &= u + at\\\\ 223.6 &= 0 + 10 \\times t\\\\ \\implies t &= 22.36\\ s \\end{aligned}
$$
Distance travelled to reach this velocity,
$$
\\begin{aligned} s &= ut + \\frac{1}{2}at^2\\\\ s &= 0 + \\frac{1}{2}\\times 10 \\times (22.36)^2\\\\ s &= 2499.85\\ m \\end{aligned}
$$
`;

const W8 = `
Assume that the path of a stone, under gravity, thrown at an angle is a parabola. Using just this assumption, argue that the orbit of the planets is elliptical.
`;
const WA8 = `
A stone follows a parabolic path when thrown upwards at an angle. The more force we apply, i.e., more acceleration and hence with a more initial velocity, the parabola starts to stretch, and the stone covers a larger distance. The stone moves just the right amount of horizontal and vertical distance at a particular initial velocity as the earth’s surface curves. This enables the orbit to be circular or elliptical.
`;

const W9 = `
Assume that the earth is a hollow sphere with all the mass concentrated at the circumference. Prove that an object placed inside the shell does not experience any gravitational force.
`;
const WA9 = `
Consider an arbitrary point inside the hollow sphere. Let this point be $r_1$ and $r_2$ meters away from each of the walls. Imagine a torchlight being shone from this point towards the walls. Note that the angle, theta($\\theta$), at both ends is very small (this can be ensured using a very good quality torch light). The illuminated region one of the parts that applies a gravitational force at this point. Also, the illuminated region contains the mass that affects this force. The more the area implies more mass. Therefore, the mass depends on the area. The area is proportional to the radius $(πr^2)$, and $r$ is given by the arc length $r_1\\theta$ and $r_2\\theta$. Therefore we can write,
$$
\\frac{m_1}{m_2} = \\frac{π(r_1θ)^2}{π(r_2θ)^2} = \\frac{r_1^2}{r_2^2}
$$ 
The total force experience at this point by an object of mass, $M$, is,
$$
F_{total} = \\frac{GMm_1}{r_1^2} - \\frac{GMm_2}{r_2^2}\\\\ F_{total} = GMm_1 \\times (\\frac{1}{r_1^2} - \\frac{m_2}{m_1 \\times r_2^2})
$$
But,
$$
\\frac{m_1}{m_2} = \\frac{r_1^2}{r_2^2}
$$
Therefore,
$$
F_{total} = GMm_1 \\times (\\frac{1}{r_1^2} - \\frac{r_2^2}{r_1^2 \\times r_2^2})\\\\ F_{total} = 0
$$
If we carry this same argument for all the different angles at which the light can be shown, by the symmetry of the sphere, the total force at this arbitrary point and, subsequently, all the points inside the hollow sphere is zero.
`;

const W10 = `
Determine the different physical factors by which $g$ varies on a planet.
`;
const WA10 = `
The different physical factors by which g varies on a planet:
<ol type="a">
\n &nbsp;
\n
<li>The mass density of the planet: The distribution of the mass determines the center of mass of the planet and hence the distance to the surface changes with this.</li>
\n &nbsp;
\n
<li>The speed of rotation of the planet: The speed of rotation determines how much centripetal force is experienced at the equator and the planet bulges at the equator. This changes the distance of every point on the planet to the center of mass.</li>
\n &nbsp;
\n
<li>The shape of the planet: The shape of the planet determines the actual distance between the center of mass and the surface.</li>
</ol>
`;

const W11 = `
Assume that we do not know the mass of the moon. You are tasked with calculating the moon's mass using some data about the moon. If a light beam can circle the moon, it will circle $27.48$ times around it in $11$ second. It is also given that a $10\\ kg$ stone, when dropped from a $10\\ m$ height on the moon, takes about 3.53.5 seconds to reach the ground. Using these data, find the mass of the moon. Given that the speed of light, $c = 3 \\times 10^8\\ m\\ s^{-1}$.
`;
const WA11 = `
Let the radius of the moon be $r$. The radius can be calculated as,
$$
\\begin{aligned}speed &= \\frac{Distance}{time}\\\\3 \\times 10^8 &= \\frac{27.48 \\times 2\\pi r}{1}\\\\ \\implies r &= 1737499.37\\ m\\end{aligned}
$$
We can calculate the acceleration on moon as,
Distance travelled, $s = 10\\ m$
\n &nbsp;
\n
Time taken, $t = 3.5\\ s$
\n &nbsp;
\n
Initial velocity, $u = 0\\ m\\ s^{-2}$
$$
\\begin{aligned}s &= ut + \\frac{1}{2}at^2\\\\ 10 &= 0 + \\frac{1}{2}\\times a \\times (3.5)^2 \\\\ a &= 1.63 m\\ s^{-2}\\end{aligned}
$$
We know that,
$$
\\begin{aligned}F &= G\\ \\frac{Mm}{r^2}\\\\ ma &= G\\ \\frac{Mm}{r^2} \\\\ 1.63 &= 6.67 \\times 10^{-11}\\ \\frac{M}{(1737499.37)^2}\\\\ \\implies M &= 7.37 \\times 10^{22}\\ kg\\end{aligned}
$$
`;

const W12 = `
If we doubled the moon's mass, Calculate the amount, in meters, by which the orbit will shrink.
`;
const WA12 = `
Changing the mass affects the force of gravity between the objects but does not change the orbit size. The force of gravitation between the earth and the moon will double, but the reaction $(F = ma)$ to this force by the moon will also double due to inertia. Hence, the effect of mass cancels out, and we have the same orbit as before. This is the same reason why objects in freefall do not react to their masses. They will all fall at the same speed regardless of their mass.
`;

const W13 = `
Imagine you are standing on a weighing scale, and it is showing $50\\ kg$. You push the scale to jump, and the reading starts to increase. You jump to a height of $2\\ m$ and fall back on the scale, and the scale reading again increases drastically before settling back at $50\\ kg$. If it took $0.5\\ s$ to come to a stop from the time your feet touched the floor of the scale, answer the following questions:
<ol type="a">
\n &nbsp;
\n
<li>Will the maximum reading at the start of the jump be equal to the maximum reading at the end of the jump.</li>
\n &nbsp;
\n
<li>Find the maximum reading of the scale.</li>
</ol>
`;
const WA13 = `
<ol type="a">
<li>Yes, as the energy is always conserved, the reading will be equal.</li>
\n &nbsp;
\n
<li>Initial velocity while jumping is same as final velocity while landing. This is given by,</li>
\n &nbsp;
\n
$$
\\begin{aligned}v^2 &= u^2 + 2as\\\\ v^2 &= 0 +2 \\times 10 \\times 2 \\\\ \\implies v &= \\sqrt{40} = 6.32\\ m\\ s^{-1}\\end{aligned}
$$
The aceeleration experienced y the person while landing can be calculated as,
$$
\\begin{aligned}v &= u + at\\\\ 0 &= 6.32 +a \\times 0.5 \\\\ \\implies a &= -12.64\\ m\\ s^{-2}\\end{aligned}
$$
Net downward acceleration, $a_{net} = g + a = 22.64\\ m\\ s^{-2}$ For this acceleration, the force is,
$$
\\begin{aligned}F &= ma = 50 \\times 22.64\\\\ F &= 632\\ N\\end{aligned}
$$
</ol>
\n &nbsp;
\n
As the weighing scale divides the force by the acceleration due to gravity, which is $10$, the reading will be, $63.2\\ kg$.
`;

const W14 = `
Explain the different states in which you would feel weightlessness.
`;
const WA14 = `
Different states in which you would feel weightlessness:
<ol type="a">
\n &nbsp;
\n
<li>At the centre of the earth: We would feel no gravity as the mass is symmetrically divided along all directions and the pull from all the sides are equal. All forces cancel out, and we feel no gravity at that point.</li>
\n &nbsp;
\n
<li>During freefall: During freefall, gravity pulls the objects in proportion to their respective masses, and the objects react to that force in proportion to their respective masses. Hence, everything falls at the same rate and no gravity is felt by any of the objects.</li>
\n &nbsp;
\n
<li>At an infinite distance: At an infinite distance, the r<sup>2</sup> term in the denominator is too large, and the force due to gravity is zero.</li>
</ol>
`;

const W15 = `
You are in deep space along with your crew inside a space craft of $25$ meters. You are given a task to create artificial gravity so that your weight is equal to the weight as measured on the earth. How would you achieve this task and what should be the speed of rotation?
`;
const WA15 = `
To find the acceleration due to the centripetal force, the acceleration due to gravity should be equal to the acceleration due to rotation of the spaceship.
$$
\\begin{aligned}F &= \\frac{mv^2}{r}\\\\ ma &= \\frac{mv^2}{r^2}\\\\ 10 &= \\frac{mv^2}{25}\\\\ \\implies v &= \\sqrt{250} = 15.8\\ m\\ s^{-1}\\end{aligned}
$$
`;

const W16 = `
What is the difference between force, weight and thrust?
`;
const WA16 = `
<ol type="a">
<li><b>Force</b> is a push or a pull. It is way of expending energy.</li>
\n &nbsp;
\n
<li><b>Weight</b> is the force experienced by an object under gravity. This always acts towards the center of the earth.</li>
\n &nbsp;
\n
<li><b>Thrust</b> is the Force experienced by an object perpendicular to its surface.</li>
</ol>
`;

const W17 = `
A person weighs $70\\ kg$. In summer, he wears a shoe with a sole area of $7\\ cm^2$ and in winter, due to snow, he wears a shoe with a sole area of $15\\ cm^2$. Find the different applied pressure on the ground by the person.
`;
const WA17 = `
$$
\\begin{aligned}\\text{Thrust, }F &= mg\\\\ &= 70 \\times 10\\\\ &= 700\\ N\\end{aligned}
$$ 
Pressure is thrust per unit area. Pressure in summer,
$$
\\begin{aligned}P_s &= \\frac{thrust}{area}\\\\ &= \\frac{700}{7 \\times 10^{-4}}\\\\ P_s &= 100 \\times 10^4\\ Pa\\ or\\ N\\ m^{-2}\\end{aligned}
$$
Pressure in winter,
$$
\\begin{aligned}P_s &= \\frac{thrust}{area}\\\\ &= \\frac{700}{15 \\times 10^{-4}}\\\\ P_s &= 46.67 \\times 10^4\\ Pa\\ or\\ N\\ m^{-2}\\end{aligned}
$$
`;

const W18 = `
The dimensions of a block of wood is $60 \\times 60 \\times 60\\ cm$. A person is applying force of $30\\ N$ at an angle of $30\\degree$ with respect to the floor. Find the pressure experienced by the floor.
`;
const WA18 = `
As pressure is always perpendicular to the surface. The component of force acting perpendicular is,
$$
\\begin{aligned}F &= mgsin(\\theta)\\\\ F &= mgsin(30)\\\\ &= 30 \\times \\frac{1}{2} = 15\\ N\\end{aligned}
$$
Pressure,
$$
\\begin{aligned}P &= \\frac{\\text{Perpendicular Force}}{Area}\\\\ &= \\frac{15}{60 \\times 60 \\times 10^{-4}}\\\\ P &= 41.67\\ Pa\\ or\\ N\\ m^{-2}\\end{aligned}
$$
`;

const W19 = `
The leaning tower of Pisa leans about $4 \\degree$ about the vertical axis. It weighs $14500$ metric tons, and the area of the base diameter is $15.5\\ m$. Find the pressure applied by the tower.
`;
const WA19 = `
As pressure is always perpendicular to the surface. The component of weight acting perpendicular to the ground is,
$$
\\begin{aligned}F &= mgcos(\\theta)\\\\ F &= 14500 \\times 10 \\times cos(4)\\\\ &= 144.6 \\times 10^6\\ N\\end{aligned}
$$
Area of the base,
$$
\\begin{aligned}a &= \\pi \\times r^2\\\\ &= \\pi \\times 7.5^2 = 176.625\\ m^2\\end{aligned}
$$
Pressure,
$$
\\begin{aligned}P &= \\frac{\\text{Perpendicular Force}}{Area}\\\\ &= \\frac{144.6 \\times 10^6}{176.625}\\\\ P &= = 8,18,533.37\\ Pa\\ or\\ N\\ m^{-2}\\end{aligned}
$$
`;

const W20 = `
Mercury is contained inside a spherical container of radius $5\\ m$. The density of mercury is $13.6\\ g\\ mL^{-1}$. Find the pressure applied by mercury on the walls of the container.
`;
const WA20 = `
Volume of the container,
$$
V = \\frac{4}{3}\\pi \\times r^2 = 523.53 m^3
$$
Base area of the container,
$$
\\begin{aligned} A = 4\\pi \\times r^2 = 314.16\\ m^2 \\end{aligned}
$$
Mass of mercury inside the container,
$$
\\begin{aligned}M &= \\text{Density of Mercury} \\times \\text{Volume}\\\\ M &= 13.6 \\times 10^3 \\times 523.53\\\\ &= 7.12 \\times 10^6\\ kg\\end{aligned}
$$
Force on the base,
$$
\\begin{aligned}F &= mg\\\\ &= 7.12 \\times 10^6 \\times 10\\\\ &= 7.12 \\times 10^7\\ N\\end{aligned}
$$
Pressure,
$$
\\begin{aligned}P &= \\frac{\\text{Perpendicular Force}}{Area}\\\\ &= \\frac{7.12 \\times 10^7}{78.54}\\\\ P &= 906.52 \\times 10^3\\ Pa\\ or\\ N\\ m^{-2}\\end{aligned}
$$
`;

const W21 = `
A bucket weighs $500\\ grams$ and is used to ferry water from a well. Calculate the net change in the force required to pull a full bucket of water if the capacity of the bucket is $2\\ L$. Also, calculate the force required to pull the bucket when submerged and when it is outside the water. $(1\\ L = 1\\ kg)$
`;
const WA21 = `
When the bucket is full, the total weight of the bucket is,
$$
M_b = 0.5\\ kg + 2\\ kg = 2.5\\ kg
$$
Force experienced when outside of the well,
$$
F_o = M_ba = 2.5 \\times 10 = 25\\ N
$$
Volume of water displaced when the bucket is submerged,
$$
V = 2\\ L
$$
This means that the weight of the water displaced will be 2\\ kg2 kg. Hence, the force of buoyancy,
$$
\\begin{aligned}F_b &= \\text{Weight of water displaced}\\times \\text{acceleration}\\\\ &= 2 \\times 10 = 20\\ N\\end{aligned}
$$
As the force of buoyancy acts opposite to gravity, the net difference in force,
$$
F_n = F_o - F_b = 25 - 20 = 5\\ N
$$
Therefore, when the bucket is submerged, the person has to apply $5\\ N$ of force whereas when it is out of the water, the person has to apply $25\\ N$ of force. So, the net change is $20\\ N$.
`;

const W22 = `
A block of gold is immersed in water, which is kept in a cylindrical container of diameter $10\\ cm$. When the block of gold is completely submerged the water level is increased by $2\\ cm$. (Density of gold $=19,300\\ kg\\ m^{-3}$) Find the:
<ol type="a">
\n &nbsp;
\n
<li>Force experienced by the block of gold.</li>
\n &nbsp;
\n
<li>Mass of the gold.</li>
</ol>
`;
const WA22 = `
<ol type="a">
<li>Volume of water displaced,</li>
\n &nbsp;
\n
$$
\\begin{aligned}V &= \\text{Area of the base} \\times \\text{change in height}\\\\ &= \\pi r^2 h\\\\ &= \\pi \\times (5 \\times 10^{-2}\\ m)^2 \\times (2 \\times 10^{-2}\\ m)\\\\ &= 157.08 \\times 10^{−5}\\ m^3\\end{aligned}
$$
Mass of water displaced,
$$
\\begin{aligned}M &= \\text{Volume of water displaced} \\times \\text{density of water}\\\\ &= 157.08 \\times 10^{−5} \\times 1000\\\\ &= 157.08 \\times 10^{−2}\\ kg\\end{aligned}
$$
Force of buoyancy,
$$
\\begin{aligned}F_b &= \\text{mass of water displaced} \\times \\text{acceleration due to gravity}\\\\ &= 157.08 \\times 10^{−2} \\times 10\\\\ &= 15.708\\ N\\end{aligned}
$$
\n &nbsp;
\n
<li>Mass of the gold,</li>
\n &nbsp;
\n
$$
\\begin{aligned}M_g &= \\text{Volume of water displaced} \\times \\text{density of gold}\\\\ &= 157.08 \\times 10^{−5} \\times 19300\\\\ &= = 30.31\\ kg\\end{aligned}
$$
`;

const W23 = `
A plastic cylinder of radius $5\\ cm$ and height $10\\ cm$ floats on water. The weight of the container is $100\\ gm$. How much force you have to apply in order to completely submerge the container.
`;
const WA23 = `
Volume of water displaced,
$$
\\begin{aligned}V &= \\text{Area of the base} \\times \\text{height}\\\\ &= \\pi r^2 h\\\\ &= \\pi \\times (5 \\times 10^{-2}\\ m)^2 \\times (10 \\times 10^{-2}\\ m)\\\\ &= 785.4 \\times 10^{−5}\\ m^3\\end{aligned}
$$
Mass of water displaced,
$$
\\begin{aligned}M &= \\text{Volume of water displaced} \\times \\text{density of water}\\\\ &= 785.4 \\times 10^{−5} \\times 1000\\\\ &=785.4 \\times 10^{−2}\\ kg\\end{aligned}
$$
Force of buoyancy when the cylinder is completely submerged,
$$
\\begin{aligned}F_b &= \\text{mass of water displaced} \\times \\text{acceleration due to gravity}\\\\ &= 785.4 \\times 10^{−2} \\times 10\\\\ &= 78.54\\ N\\end{aligned}
$$
Force due to the weight of the cylinder,
$$
\\begin{aligned}F_w &= \\text{mass of the cylinder} \\times \\text{acceleration due to gravity}\\\\ &= 10 \\times 10^{−3}\\ kg \\times 10\\ m\\ s^{-2}\\\\ &= 0.1\\ N \\end{aligned}
$$
Force to be applied to submerge the cylinder, $F_s = F_b - F_w = 77.54\\ N$ Or just keep a weight of $7.754\\ kg$ on top of the cylinder to completely submerge it.
`;

const W24 = `
A hot air balloon can hold about $150\\ m^3$ of air (density $= 0.1\\ Kg\\ m^{-3}$ at $25\\ \\degree C$). The weight of the balloon is $15\\ KN$. The pressure of the air inside the balloon changes with temperature and is given by the formula $Pressure(T) = Pressure(25) \\times temperature$. Find the temperature at which the balloon will start to lift. Assume the balloon to be spherical.
`;
const WA24 = `
Mass of the air,
$$
\\begin{aligned}M_a &= \\text{Volume of air displaced} \\times \\text{density of air}\\\\ &= 150 \\times (10 \\times 10^{-2})\\\\ &=15\\ kg\\end{aligned}
$$
Force of buoyancy,
$$
\\begin{aligned}F_b &= \\text{mass of air displaced} \\\\ &\\times \\text{acceleration due to gravity}\\\\ &= 15 \\times 10\\\\ &= 150\\ N\\end{aligned}
$$
Net downward force experienced due to weight,
$$
F_n = 15000\\ N
$$
The balloon will start to lift when the net Force becomes zero, and the Force of buoyancy becomes greater than the weight of the balloon. To find the temperature at which the balloon rises, we need to find the Force as the temperature rises. To find the Force at a particular temperature, the given formula can be multiplied by the surface area of the balloon,
$$
Pressure(T) = Pressure(25) \\times T
$$
Multiplying both sides with surface area of the balloon,
$$
\\begin{aligned} Force(T) &= Force(25) \\times Temperature\\\\ &= (\\text{Mass of air} \\times \\text{acceleration due to gravity}) \\\\ &\\times Temperature\\\\ &= (150 \\times 10) \\times T\\\\ &= 150 \\times T\\end{aligned}
$$
This force is the upward force, which should balance the net downward force,
$$
\\begin{aligned} F_n &= Force(T)\\\\ 15000 &= 150 \\times T\\\\ \\implies T &= 100\\degree C\\end{aligned}
$$
`;

const W25 = `
Relative density of a particular substance is $0.5$. If a cylindrical block of mass $100\\ kg$ and height of $5\\ m$ is made out of this substance and is put in water vertically. Find
<ol type="a">
\n &nbsp;
\n
<li>If the block floats or sinks.</li>
\n &nbsp;
\n
<li>Height of the block submerged.</li>
\n &nbsp;
\n
<li>How much mass can be kept on top until the block touches the brim.</li>
</ol>
`;
const WA25 = `
<ol type="a">
<li>As the relative density is less than 1, it means that the density of the block is less than that of water which will make it float.</li>
\n &nbsp;
\n
<li>When an object is placed in a liquid, it will experience a buoyant force. Note that this force will be the same regardless of the fluid in which the said object is placed. The density of the fluid determines the volume of the fluid displaced. Therefore,</li>
\n &nbsp;
\n
$$
\\begin{aligned}&F_{water} = F_{substance}\\\\\\\\ &\\text{Mass of water displaced} \\times a = \\\\ &\\text{Mass of other fluid displaced} \\times a\\\\\\\\ &(\\text{Volume of water displaced} \\times \\text{Density of water}) \\times a = \\\\ &(\\text{Volume of other fluid displaced} \\times \\text{Density of other fluid}) \\times a\\\\\\\\ &\\implies \\frac{\\text{Density of other fluid}}{\\text{Density of water}} = \\\\ &\\frac{\\text{Volume of water displaced}}{\\text{Volume of other fluid displaced}}\\end{aligned}
$$
The LHS is the definition for relative density. Hence,
$$
\\begin{aligned} \\text{Relative Density} &= \\frac{\\text{Volume of water displaced}}{\\text{Volume of other fluid displaced}} \\\\ &= \\frac{\\text{Area of the base} \\times \\text{Height submerged}}{\\text{Area of the base} \\times \\text{Total height}}\\\\ &= \\frac{\\text{Height submerged}}{\\text{Total height}}\\\\ 0.5 &= \\frac{\\text{Height submerged}}{5}\\\\ \\text{Height submerged} &= 2.5\\ m\\end{aligned}
$$
\n &nbsp;
\n
<li>When the block of cylinder is floating, the force of buoyancy is equal to the weight of the block, </li>
\n &nbsp;
\n
$$
= 100 \\times 10 = 1000\\ N
$$
At $1000\\ N$ the submerged height is $2.5\\ m$. To submerge another $2.5\\ m$, so that the complete cylinder is immersed, we need to apply another $1000\\ N$ which equals $100\\ kg$ of mass. Hence, $100\\ kg$ mass should be placed on the cylindrical block to completely submerge it.
</ol>
`;

const QuestionsContent = () => {
    return (
        <Section>
            <ShortAnsSection>
                <SubtitleContainer><ShortAnsSubtitle /></SubtitleContainer>

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
                    <QnA srno={"23"} question={Q23} answer={QA23} />
                    <QnA srno={"24"} question={Q24} answer={QA24} />
                    <QnA srno={"25"} question={Q25} answer={QA25} />
                    <QnA srno={"26"} question={Q26} answer={QA26} />
                    <QnA srno={"27"} question={Q27} answer={QA27} />
                    <QnA srno={"28"} question={Q28} answer={QA28} />
                    <QnA srno={"29"} question={Q29} answer={QA29} />
                    <QnA srno={"30"} question={Q30} answer={QA30} />
                    <QnA srno={"31"} question={Q31} answer={QA31} />
                    <QnA srno={"32"} question={Q32} answer={QA32} />
                    <QnA srno={"33"} question={Q33} answer={QA33} />
                </QnAContainer>
            </ShortAnsSection>

            <LongAnsSection>
                <SubtitleContainer><LongAnsSubtitle /></SubtitleContainer>

                <QnAContainer>
                    <QnA srno={"1"} question={W1} answer={WA1} />
                    <QnA srno={"2"} question={W2} answer={WA2} />
                    <QnA srno={"3"} question={W3} answer={WA3} />
                    <QnA srno={"4"} question={W4} answer={WA4} />
                    <QnA srno={"5"} question={W5} answer={WA5} />
                    <QnA srno={"6"} question={W6} answer={WA6} />
                    <QnA srno={"6"} question={W6} answer={WA6} />
                    <QnA srno={"7"} question={W7} answer={WA7} />
                    <QnA srno={"8"} question={W8} answer={WA8} />
                    <QnA srno={"9"} question={W9} answer={WA9} />
                    <QnA srno={"10"} question={W10} answer={WA10} />
                    <QnA srno={"11"} question={W11} answer={WA11} />
                    <QnA srno={"12"} question={W12} answer={WA12} />
                    <QnA srno={"13"} question={W13} answer={WA13} />
                    <QnA srno={"14"} question={W14} answer={WA14} />
                    <QnA srno={"15"} question={W15} answer={WA15} />
                    <QnA srno={"16"} question={W16} answer={WA16} />
                    <QnA srno={"17"} question={W17} answer={WA17} />
                    <QnA srno={"18"} question={W18} answer={WA18} />
                    <QnA srno={"19"} question={W19} answer={WA19} />
                    <QnA srno={"20"} question={W20} answer={WA20} />
                    <QnA srno={"21"} question={W21} answer={WA21} />
                    <QnA srno={"22"} question={W22} answer={WA22} />
                    <QnA srno={"23"} question={W23} answer={WA23} />
                    <QnA srno={"24"} question={W24} answer={WA24} />
                    <QnA srno={"25"} question={W25} answer={WA25} />
                </QnAContainer>
            </LongAnsSection>

        </Section>
    )
}

export default QuestionsContent
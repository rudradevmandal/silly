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
Page 134: State the universal law of gravitation.
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
Page 134: Write the formula to find the magnitude of the gravitational force between the earth and an object on the surface of the earth.
`;
const QA2 = `
Consider two bodies, A and B, of mass M and m respectively, then by the Universal law of the Gravitation, the force of gravity is:
$$
\\begin{aligned} F = G \\frac{Mm}{r^2} \\end{aligned}
$$
The value of $G$ is $6.673 \\times 10^{-11} N m^2 kg^{-2}$.
`;

const Q3 = `
Page 136: What do you mean by free fall?
`;
const QA3 = `
We have learnt that the earth attracts objects towards it. This is due to the gravitational force. Whenever objects fall towards the earth under this force alone, we say that the objects are in free fall.
`;

const Q4 = `
Page 136: What do you mean by acceleration due to gravity?
`;
const QA4 = `
Whenever an object falls towards the earth, acceleration is involved. This acceleration is due to the earth’s gravitational force. Therefore, this acceleration is called acceleration due to the gravitational force of the earth (or acceleration due to gravity). It is denoted by $g$. The unit of $g$ is the same as that of acceleration, that is, $m\\ s^{–2}$, and its value is $9.8\\ m\\ s^{–2}$.
`;

const Q5 = `
Page 138: What are the differences between the mass of an object and its weight?
`;
const QA5 = `
<table style={{ width: "100%", borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th>Mass</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mass is an intrinsic property of an object which is a constant.</td>
      <td>Weight is the force experienced by the object under a gravitational field.</td>
    </tr>
    <tr>
      <td>The mass of an object remains the same everywhere, that is, on the earth and on any planet.</td>
      <td>Weight depends on its location because g depends on location.</td>
    </tr>
    <tr>
      <td>Mass of an object is a direct measure of its inertia.</td>
      <td>Weight of an object is a measure of the planet’s gravitational attraction or gravity.</td>
    </tr>
    <tr>
      <td>Mass has only magnitude, hence it is an scalar quantity.</td>
      <td>Weight has both magnitude and direction, hence it is a vector quantity.</td>
    </tr>
    <tr>
      <td>The SI unit of mass is kg.</td>
      <td>The SI unit of weight is N.</td>
    </tr>
  </tbody>
</table>
`;

const Q6 = `
Page 138: Why is the weight of an object on the moon $\\frac{1}{6}^{th}$ its weight on the earth?
`;
const QA6 = `
Because the moon weighs way less than the earth (about $81.25$ times less), and it’s much smaller than the earth (about $3.66$ times smaller). This results in a smaller gravitational pull, about six times less than the earth. If we want to calculate, we can simply argue that having mass $81.25$ times less decreases the gravitational pull by $81.25$ times, but having a radius $3.66$ times less increases the gravitational pull by $3.66^2$ times. This means the gravitational pull of the moon, when compared to earth’s, is $\\frac{1}{81.25} \\times 3.66^2 = \\frac{1}{6}$
`;

const Q7 = `
Page 141: Why is it difficult to hold a school bag having a strap made of a thin and strong string?
`;
const QA7 = `
The amount of weight that your shoulder has to support is the weight of the bag, but a thin strap supports the bag. This means that the force will be distributed over the thin but strongly made strap area. As the area of the strip is small, this concentrates the whole heavy weight of the bag on such a small area, making it very difficult to carry.
`;

const Q8 = `
Page 141: What do you mean by buoyancy?
`;
const QA8 = `
When an object is immersed in a fluid, it experiences a force which always opposes gravity. This force is called the buoyant force, and the phenomenon of experiencing this is called buoyancy.
`;

const Q9 = `
Page 141: Why does an object float or sink when placed on the surface of water?
`;
const QA9 = `
If the force of gravity or weight is more than the buoyant force, the object will sink, or else it will float.
`;

const Q10 = `
Page 142: You find your mass to be $42\\ kg$ on a weighing machine. Is your mass more or less than $42\\ kg$?
`;
const QA10 = `
It is more than $42\\ kg$ as we displace a certain volume of air which exerts a force equal to the weight of the air displaced. This decreases the reading on the weighing machine.
`;

const Q11 = `
Page 142: You have a bag of cotton and an iron bar, each indicating a mass of $100\\ kg$ when measured on a weighing machine. In reality, one is heavier than other. Can you say which one is heavier and why?
`;
const QA11 = `
The cotton bag is heavier because it has a larger volume, displacing more air than the iron bar. The displaced air's weight is far greater than the air displaced by the iron bar. This means that the upward force experienced by the cotton bag is more; hence, if we add this to the reading of the weighing machine, we get the actual mass greater than the iron bar.
`;

const InTextQnAContent = () => {
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
        </QnAContainer>
      </ExampleSection>
    </Section>
  )
}

export default InTextQnAContent
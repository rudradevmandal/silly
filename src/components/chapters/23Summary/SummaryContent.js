import React from 'react'

import styled from 'styled-components';
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
const content = `
<ul>
\n &nbsp;
\n
<li><b>Gravitational force</b> is responsible for the invisible attraction among entities that have a property called mass.</li>
\n &nbsp;
\n
<li><b>Universal law of gravity</b>: The force of gravitation between 2 objects is directly proportional to the product of their masses and inversely proportional to the square of the distance between them. This force acts along the line joining the centre of the masses of the two objects.</li>
\n &nbsp;
\n
$$
F = G\\frac{Mm}{r^2}
$$
where,
\n &nbsp;
$G =$ Gravitational constant
\n &nbsp;
$M =$ mass of object 1
\n &nbsp;
$m =$ mass of object 2
\n &nbsp;
$r =$ distance between the objects (Center of mass)
\n &nbsp;
\n
<li><b>Freefall</b>: Any object under the influence of gravity accelerates. Any relatively small object (with respect to the earth) will freefall with an acceleration, g. It does not depend on mass, as the force of gravity is proportional to the object's mass. Still, the reaction of any object under the influence of a force is also proportional to its mass. Hence, the acceleration under gravity is independent of the object's mass—acceleration due to gravity.</li>
\n &nbsp;
\n
$$
g = G\\frac{M}{r^2}
$$
$g$ is an inverse function of the radius from the centre. Therefore, $g$ reduces as altitude increases, and it is also greater at the equator than at the poles, as the earth is not a perfect sphere and rather a sphere with a flattened top and bottom.
\n &nbsp;
\n
<li><b>Mass vs Weight</b>: Mass is an intrinsic property of an object which is a constant, whereas weight is the force experienced by the object under a gravitational field. Weight is proportional to the mass of the object. The mass of an object remains the same everywhere, but its weight changes as g changes.</li>
\n &nbsp;
\n
<li><b>Thrust vs pressure</b>: Thrust is the force acting on an object perpendicular to the surface, whereas pressure is the thrust acting per unit area.</li>
\n &nbsp;
\n
<li><b>Pressure in fluids</b>: Fluids (liquids and gases) exert the same amount of pressure on the container walls.</li>
\n &nbsp;
\n
<li><b>Buoyancy</b>: The upward force, opposing the gravitational force, experienced by an object when immersed in a fluid is called the buoyant force. If this force is enough to balance the gravitational force, then the object will float or else it will sink.</li>
\n &nbsp;
\n
<li><b>Archimedes’ Principle</b>: When immersed in a fluid, the buoyant force experienced by an object is equal to the weight of the fluid displaced by the object.</li>
\n &nbsp;
\n
<li><b>Relative Density</b>: The density of an object is its mass per unit volume, and the relative density of an object is its original density with respect to the density of water.</li>
</ol>
`;

const SummaryContent = () => {
  return (
    <Section>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content}</Markdown>
        </TextContainer>
    </Section>
  )
}

export default SummaryContent
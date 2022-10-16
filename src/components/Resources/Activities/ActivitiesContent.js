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
**Page 132 - Activity 10.1:**
<ul>
\n &nbsp;
\n
<li>Take a piece of thread.</li>
\n &nbsp;
\n
<li>Tie a small stone at one end. Hold the other end of the thread and whirl it round, as shown in Figure.</li>
\n &nbsp;
\n
<li>Note the motion of the stone.</li>
\n &nbsp;
\n
<li>Release the thread.</li>
\n &nbsp;
\n
<li>Again, note the direction of motion of the stone.</li>
</ul>
\n &nbsp;
\n
\n &nbsp;
\n
\n &nbsp;
\n

**Page 134 - Activity 10.2:**
<ul>
\n &nbsp;
\n
<li>Take a stone.</li>
\n &nbsp;
\n
<li>Throw it upwards.</li>
\n &nbsp;
\n
<li>It reaches a certain height, and then it starts falling.</li>
</ul>
\n &nbsp;
\n
\n &nbsp;
\n
\n &nbsp;
\n

**Page 135 - Activity 10.3:**
<ul>
\n &nbsp;
\n
<li>Take a sheet of paper and a stone. Drop them simultaneously from the first floor of a building. Observe whether both of them reach the ground simultaneously.</li>
\n &nbsp;
\n
<li>We see that paper reaches the ground a little later than the stone. This happens because of air resistance. The air offers resistance due to friction to the motion of the falling objects. The resistance offered by air to the paper is more than the resistance offered to the stone. If we do the experiment in a glass jar from which air has been sucked out, the paper and the stone would fall at the same rate.
</li>
</ul>
\n &nbsp;
\n
\n &nbsp;
\n
\n &nbsp;
\n

**Page 140 - Activity 10.4:**
<ul>
\n &nbsp;
\n
<li>Take an empty plastic bottle. Close the mouth of the bottle with an airtight stopper. Put it in a bucket filled with water. You see that the bottle floats.</li>
\n &nbsp;
\n
<li>Push the bottle into the water. You feel an upward push. Try to push it further down. You will find it challenging to push deeper and deeper. This indicates that water exerts a force on the bottle in the upward direction. The water’s upward force increases as the bottle are pushed deeper till it is completely immersed.</li>
\n &nbsp;
\n
<li>Now, release the bottle. It bounces back to the surface.</li>
\n &nbsp;
\n
<li>Does the force due to the gravitational attraction of the earth act on this bottle? If so, why doesn’t the bottle stay immersed in water after it is released? How can you immerse the bottle in water?</li>
\n &nbsp;
\n
<li>Yes, gravitational force does work on the bottle, but the upward force on the bottle by the water is much more than the tiny ‘mg’ of the bottle. To immerse it, just increase the mass of the bottle, but putting some sones in it or filling it with water.</li>
</ul>
\n &nbsp;
\n
\n &nbsp;
\n
\n &nbsp;
\n

**Page 140 - Activity 10.5:**
<ul>
\n &nbsp;
\n
<li>Take a beaker filled with water.</li>
\n &nbsp;
\n
<li>Take an iron nail and place it on the surface of the water.</li>
\n &nbsp;
\n
<li>Observe what happens.</li>
\n &nbsp;
\n
<li>The nail sinks. The force due to the gravitational attraction of the earth on the iron nail pulls it downwards. There is an upthrust of water on the nail, which pushes it upwards. But the downward force acting on the nail is greater than the upthrust of water on the nail. So it sinks (Figure)</li>
</ul>
\n &nbsp;
\n
\n &nbsp;
\n
\n &nbsp;
\n

**Page 141 - Activity 10.6:**
<ul>
\n &nbsp;
\n
<li>Take a beaker filled with water.</li>
\n &nbsp;
\n
<li>Take a piece of cork and an iron nail of equal mass.</li>
\n &nbsp;
\n
<li>Place them on the surface of the water.</li>
\n &nbsp;
\n
<li>Observe what happens.</li>
\n &nbsp;
\n
<li>The cork floats while the nail sinks. This happens because of the difference in their densities. The density of cork is less than the density of water. This means that the upthrust of water on the cork is greater than the weight of the cork. So it floats (Figure). The density of an iron nail is more than the density of water. This means that the upthrust of water on the iron nail is less than the weight of the nail. So it sinks.</li>
</ul>
\n &nbsp;
\n
\n &nbsp;
\n
\n &nbsp;
\n

**Page 141 - Activity 10.7:**
<ul>
\n &nbsp;
\n
<li>Take a piece of stone and tie it to one end of a rubber string or a spring balance.</li>
\n &nbsp;
\n
<li>Suspend the stone by holding the balance or the string, as shown in Figure I.</li>
\n &nbsp;
\n
<li>Note the elongation of the string or the reading on the spring balance due to the weight of the stone.</li>
\n &nbsp;
\n
<li>Now, slowly dip the stone in the water in a container, as shown in Figure II.</li>
\n &nbsp;
\n
<li>Observe what happens to the elongation of the string or the reading on the balance.
You will find that the elongation of the string or the reading of the balance decreases as the stone is gradually lowered in the water.</li>
</ul>
\n &nbsp;
\n
`;

const ActivitiesContent = () => {
  return (
    <Section>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content}</Markdown>
        </TextContainer>

    </Section>
  )
}

export default ActivitiesContent
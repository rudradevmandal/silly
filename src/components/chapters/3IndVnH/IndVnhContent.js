import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/3IndVnh.json'
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import Note from '../../Note';
import Conclusion from '../../Conclusion';
import QnA from '../../QnA';
import QuestionsSubtitle from '../../QuestionsSubtitle';
import WorksheetSubtitle from '../../WorksheetSubtitle';

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
We all played with stones and threw them up in the air for fun. We know that the stone falls back to the surface of the earth. We have also seen how the stone, when thrown forward, falls back after covering some horizontal distance, i.e., the stone goes ahead and also falls. Now, there is a fact hidden in these two scenarios. The amount by which the stone falls is the same in both cases under the condition if you used the same initial conditions (namely, the initial vertical velocity) in throwing both objects, it would hit the surface of the earth simultaneously.
  \n &nbsp;
  \n
  If you throw a stone up vertically, it takes 10 seconds to fall. If you throw the same stone at an angle with the same vertical velocity, it will also take 10 seconds to hit the earth's surface. The only difference is that you can catch the stone wherever you were standing when you threw the stone in the first case, but in the second case, you need to run forward to at least have a chance of catching it. We can reverse this fact and say that a stone will fall a constant distance (we will calculate this later) in a constant amount of time, no matter how it is thrown!
`;

const Q1 = `
Consider a scenario where two marbles hit the ground at the same time, falling from the same height. Also, they started to fall at the same instance. If the first marble started with a vertical velocity of $2\\ m\\ s^{-1}$ and a horizontal velocity of $0\\ m\\ s^{-1}$, what was the vertical velocity of the second marble, given that its horizontal velocity was $2\\ m\\ s^{-1}$?
`;
const QA1 = `
As both the marbles were falling from the same height, their vertical velocities must be for them to hit the ground at the same instance. Hence, the vertical velocity of the second marble was $2\\ m\\ s^{-1}$.
`;

const Q2 = `
In the above scenario, the first marble fell $20\\ m$ in the first $2\\ s$. How much distance did the second marble cover in its first $2\\ s$ of fall?
`;
const QA2 = `
As both the marbles have identical vertical velocity, they will the same amount of distance, i.e., $20\\ m$ in the first $2\\ s$.
`;

const conclusion = `
Objects will fall at the same rate if the initial vertical velocity is kept the same.
`;

const note = `
This lesson highlights the fact that an object's horizontal and vertical velocities are never interrelated. They are always independent. And this is the case in the whole universe. It doesn't, in any way, conform only to earth. Although this is non-trivial and may not be a part of the syllabus, it helps to understand the way components of velocity work. This will set the tone for the upcoming lessons.
`;

const W1 = `
Under what condition will two objects hit the surface at the same time?
`;
const WA1 = `
Under the conditon that their vertical velocity is same.
`;

const W2 = `
If we add a horzontal velocity, i.e., if we throw the object forward, will the above be true?
`;
const WA2 = `
Yes
`;

const W3 = `
What can you say about the vertical distance travelled by them at each instance of time?
`;
const WA3 = `
The objects with same vertical velocity will traverse the same amount of distance in a given time. This means that at every instance, the objects will have covered the same vertical distance.
`;


const IndVnhContent = () => {

    return (
        <Section>
        <VideoContainer>
            <AnimatedContainer>
                <LottieAnimation animationData={animationData} id="IndVnh"></LottieAnimation>
            </AnimatedContainer>
        </VideoContainer>
            <TextContainer>
                <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content}</Markdown>
            </TextContainer>
            <QnASection>
            <SubtitleContainer><QuestionsSubtitle /></SubtitleContainer>
            
            <QnAContainer>
                <QnA srno={"1"} question={Q1} answer={QA1} />
                <QnA srno={"2"} question={Q2} answer={QA2} />
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
            </QnAContainer>
            </WorksheetSection>

        </Section>

    )
}

export default IndVnhContent
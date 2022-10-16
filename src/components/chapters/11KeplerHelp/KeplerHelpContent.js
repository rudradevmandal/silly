import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData1 from '../../../assets/LottieJson/11KeplerHelp1.json'
import animationData2 from '../../../assets/LottieJson/11KeplerHelp2.json'
import animationData3 from '../../../assets/LottieJson/11KeplerHelp3.json'
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

const AnimatedContainer1 = styled.div`
width: 60%;
margin-top: -15%;
margin-bottom: -15%;
z-index: -1;

@media (max-width: 900px) {
    width:80%;
}
@media (max-width: 600px) {
    width:100%;
}
`

const AnimatedContainer2 = styled.div`
width: 60%;
margin-top: -15%;
margin-bottom: -10%;
z-index: -1;

@media (max-width: 900px) {
    width:80%;
}
@media (max-width: 600px) {
    width:100%;
}
`

const AnimatedContainer3 = styled.div`
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
Johannes Kepler was a very talented astronomer and mathematician. He lived in the 17th Century and is regarded as one of the key personalities in bringing the scientific revolution to its peak. In 1602, Kepler was trying to calculate the earth’s position in its orbit and, in turn, stumbled upon the fact that **“The radius vector describes equal areas in equal times.”**, which, incidentally, became his second law.
`;
const content2 = `
In 1605, when sifting through the data collected by Tycho Brahe (another great scientist) on the orbit of Mars, he found that the orbit would perfectly fit an ellipse. Hence, he published the first law as **“Planets move in ellipses with the Sun at one focus”**.
`;
const content3 = `
And in May 1618, he found the third law, which ultimately led Newton to form the Universal law of gravitation, which goes like **“The squares of the periodic times are to each other as the cubes of the mean distances”**.
\n &nbsp;
\n
But how did these help Newton formulate his law? Suppose we step into Newton’s shoes for a moment. In that case, we can think that by Kepler’s first law, **“The orbit of a planet is an ellipse with the Sun at one of the foci”**, we can assume that the orbit is circular as a circle is a special type of ellipse with both its foci coinciding at the centre. In this exceptional case, the planet of mass $M$ is going around the Sun at velocity $v$, and the radius is $r$. The centripetal force experienced by the planet is
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

const Q1 = `
What is the shape of the orbit under the influence of the gravitational force?
`;
const QA1 = `
Elliptical
`;

const Q2 = `
State three Kepler's laws of planetary motion?
`;
const QA2 = `
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

const conclusion = `
Kepler's laws of planetary motion:
<ol type="a">
\n &nbsp;
\n
<li>1. Planets move in ellipses with the Sun at one focus.</li>
\n &nbsp;
\n
<li>2. The radius vector describes equal areas in equal times.</li>
\n &nbsp;
\n
<li>3. The squares of the periodic times are to each other as the cubes of the mean distances.</li>
</ol>
`;

const note = `
The text intends to explain the three laws of planetary motion by Kepler and their importance. It is important to realise that these laws helped Newton discover the universal gravitation law. The text tries to explain the route that Newton might have taken to reach that conclusion. This lesson gives an insight into the great minds of Newton and Kepler.
`;

const W1 = `
State the second law of planetary motion?
`;
const WA1 = `
The radius vector describes equal areas in equal times.
`;

const W2 = `
Describe its consequnece? *Hint: Think about speed*
`;
const WA2 = `
As the area swept by the radius vector needs to be equal. If the object revolving around a massive planet is not tracing a circle. This means that the path is an ellipse. When the object is closest to the massive planet, the object will speed up to cover more area, and when it is farthest, it will slow down such that the area swept is at equal time duration is equal.
`;

const KeplerHelpContent = () => {
  return (
    <Section>
    <VideoContainer>
        <AnimatedContainer1>
            <LottieAnimation animationData={animationData1} id="KeplerHelp1"></LottieAnimation>
        </AnimatedContainer1>
    </VideoContainer>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content1}</Markdown>
        </TextContainer>
    <VideoContainer>
        <AnimatedContainer2>
            <LottieAnimation animationData={animationData2} id="KeplerHelp2"></LottieAnimation>
        </AnimatedContainer2>
    </VideoContainer>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content2}</Markdown>
        </TextContainer>
    <VideoContainer>
        <AnimatedContainer3>
            <LottieAnimation animationData={animationData3} id="KeplerHelp3"></LottieAnimation>
        </AnimatedContainer3>
    </VideoContainer>
        <TextContainer>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{content3}</Markdown>
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
        </QnAContainer>
        </WorksheetSection>

    </Section>
  )
}

export default KeplerHelpContent
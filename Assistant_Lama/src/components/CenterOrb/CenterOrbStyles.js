import styled, { keyframes, css } from "styled-components";



/* ===========================
      Animations
=========================== */

const rotateSlow = keyframes`
from{
transform:translate(-50%,-50%) rotate(0deg);
}
to{
transform:translate(-50%,-50%) rotate(360deg);
}
`;

const rotateReverse = keyframes`
from{
transform:translate(-50%,-50%) rotate(360deg);
}
to{
transform:translate(-50%,-50%) rotate(0deg);
}
`;

const pulse = keyframes`
0%{
transform:scale(1);
box-shadow:0 0 25px cyan;
}
50%{
transform:scale(1.08);
box-shadow:0 0 70px cyan;
}
100%{
transform:scale(1);
box-shadow:0 0 25px cyan;
}
`;

const speaking = keyframes`
0%{
transform:scale(1);
}
50%{
transform:scale(1.15);
}
100%{
transform:scale(1);
}
`;

const listening = keyframes`
0%{
opacity:.4;
}
50%{
opacity:1;
}
100%{
opacity:.4;
}
`;

const glow = keyframes`
0%{
filter:blur(20px);
opacity:.5;
}
50%{
filter:blur(50px);
opacity:1;
}
100%{
filter:blur(20px);
opacity:.5;
}
`;

const particleFloat = keyframes`
0%{
transform:translateY(0px);
opacity:.3;
}
50%{
transform:translateY(-25px);
opacity:1;
}
100%{
transform:translateY(0px);
opacity:.3;
}
`;

/* ===========================
      Layout
=========================== */

export const Container = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
overflow:hidden;
`;

export const OrbWrapper = styled.div`
position:relative;
width:450px;
height:450px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`;

/* ===========================
      Glow
=========================== */

export const Glow = styled.div`
position:absolute;
width:430px;
height:430px;
border-radius:50%;

background:
radial-gradient(circle,
rgba(0,255,255,.35),
transparent 70%);

animation:${glow} 3s infinite;
z-index:0;
`;

/* ===========================
      Rings
=========================== */

const ringStyle = css`
position:absolute;
border-radius:50%;
left:50%;
top:50%;
`;

export const OuterRing = styled.div`
${ringStyle};

width:430px;
height:430px;

border:2px solid rgba(0,255,255,.35);

animation:${rotateSlow} 22s linear infinite;
`;

export const MiddleRing = styled.div`
${ringStyle};

width:340px;
height:340px;

border:2px dashed rgba(140,120,255,.6);

animation:${rotateReverse} 14s linear infinite;
`;

export const InnerRing = styled.div`
${ringStyle};

width:250px;
height:250px;

border:2px solid rgba(0,255,255,.8);

animation:${rotateSlow} 8s linear infinite;
`;

/* ===========================
      Core
=========================== */

export const Core = styled.div`
position:absolute;

width:180px;
height:180px;

border-radius:50%;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background:
radial-gradient(circle,
#4EF4FF,
#4A7DFF,
#5E3BFF);

box-shadow:
0 0 60px cyan,
0 0 120px #00E5FF;

animation:${pulse} 3s infinite;

z-index:5;
`;

export const Title = styled.h1`
font-size:42px;
color:white;
font-weight:700;
letter-spacing:3px;
margin:0;
`;

export const Subtitle = styled.p`
margin-top:8px;
font-size:15px;
color:white;
opacity:.9;
`;

/* ===========================
      Status
=========================== */

export const Status = styled.div`
margin-top:35px;
font-size:20px;
font-weight:600;
letter-spacing:2px;
color:#61FFE3;

animation:${listening} 2s infinite;
`;

/* ===========================
      Floating Particles
=========================== */

export const Particle = styled.div`
position:absolute;
width:6px;
height:6px;
border-radius:50%;
background:#62F7FF;
box-shadow:0 0 12px cyan;

animation:${particleFloat} 3s infinite;
`;


export const ConversationBox = styled.div`
width:100%;
max-width:700px;
margin-top:25px;
display:flex;
flex-direction:column;
gap:15px;
`;

export const UserMessage = styled.div`
padding:14px 18px;
background:#111827;
border-left:4px solid #00E5FF;
border-radius:12px;
color:white;
font-size:15px;
`;

export const AIMessage = styled.div`
padding:14px 18px;
background:#111827;
border-left:4px solid #7C3AED;
border-radius:12px;
color:#7CFFB2;
font-size:15px;
`;
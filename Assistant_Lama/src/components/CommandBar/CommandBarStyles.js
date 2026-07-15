import styled from "styled-components";

export const Wrapper = styled.div`

width:700px;

display:flex;

flex-direction:column;

gap:18px;

`;

export const Input = styled.input`

width:100%;

padding:18px 22px;

font-size:17px;

border:none;

outline:none;

border-radius:18px;

background:#111827;

color:white;

border:1px solid rgba(0,255,255,.20);

box-shadow:

0 0 18px rgba(0,255,255,.10);

`;

export const ButtonGroup = styled.div`

display:flex;

justify-content:center;

gap:20px;

`;

export const VoiceButton = styled.button`

width:65px;

height:65px;

border-radius:50%;

background:#00E5FF;

color:black;

font-size:26px;

font-weight:bold;

transition:.3s;

:hover{

transform:scale(1.08);

box-shadow:

0 0 25px cyan;

}

`;

export const SendButton = styled.button`

padding:16px 40px;

border-radius:50px;

font-size:18px;

font-weight:bold;

background:linear-gradient(

90deg,

#00E5FF,

#8B5CF6

);

color:white;

transition:.3s;

:hover{

transform:translateY(-2px);

box-shadow:

0 0 25px #00E5FF;

}

`;

export const ResponseBox = styled.div`

min-height:80px;

padding:18px;

border-radius:18px;

background:#111827;

color:#6DFFB8;

font-size:16px;

line-height:1.6;

border:1px solid rgba(0,255,255,.15);

box-shadow:

0 0 20px rgba(0,255,255,.08);

`;
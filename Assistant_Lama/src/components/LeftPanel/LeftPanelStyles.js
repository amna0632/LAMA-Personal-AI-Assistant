import styled from "styled-components";

export const Panel = styled.div`
width:100%;
height:100%;
padding:22px;
display:flex;
flex-direction:column;

background:rgba(17,25,40,.55);

backdrop-filter:blur(18px);

border-radius:18px;

border:1px solid rgba(0,255,255,.15);

box-shadow:
0 0 30px rgba(0,255,255,.08);
`;

export const Title = styled.h2`
margin:0;
font-size:15px;
letter-spacing:3px;
color:#66F7FF;
font-weight:700;
`;

export const Divider = styled.div`
width:100%;
height:1px;
margin:18px 0;
background:rgba(255,255,255,.08);
`;

export const Card = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

padding:15px;

margin-bottom:12px;

border-radius:14px;

background:rgba(255,255,255,.03);

border:1px solid rgba(0,255,255,.08);

transition:.35s;

:hover{

transform:translateY(-3px);

border-color:#00FFD5;

box-shadow:
0 0 20px rgba(0,255,255,.12);

}
`;

export const CardTitle = styled.span`
font-size:14px;
color:#B3C7D8;
`;

export const CardValue = styled.div`
display:flex;
align-items:center;
gap:10px;
font-size:14px;
font-weight:600;
color:#6DFFB8;
`;

export const StatusDot = styled.div`

width:10px;
height:10px;

border-radius:50%;

background:${props=>props.online ? "#00FF88" : "#ff3b30"};

box-shadow:0 0 12px ${props=>props.online ? "#00FF88" : "#ff3b30"};

animation:pulse 1.5s infinite;

@keyframes pulse{

0%{

transform:scale(1);

opacity:1;

}

50%{

transform:scale(1.5);

opacity:.5;

}

100%{

transform:scale(1);

opacity:1;

}

}
`;
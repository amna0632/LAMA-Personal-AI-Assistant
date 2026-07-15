import styled from "styled-components";

export const DashboardContainer = styled.div`

width:100vw;
height:100vh;

background:#070B14;

overflow:hidden;

position:relative;

display:flex;
justify-content:center;
align-items:center;

`;

export const DashboardGrid = styled.div`

width:95%;
height:95%;

display:grid;

grid-template-columns:300px 1fr 300px;

gap:25px;

position:relative;

z-index:2;

`;

export const LeftArea = styled.div`

display:flex;

justify-content:center;
align-items:center;

`;

export const CenterArea = styled.div`

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

gap:45px;

`;

export const RightArea = styled.div`

display:flex;

justify-content:center;

align-items:center;

`;

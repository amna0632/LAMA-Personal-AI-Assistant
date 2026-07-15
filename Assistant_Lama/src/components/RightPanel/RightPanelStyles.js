import styled from "styled-components";

export const Panel = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 18px;

  padding: 20px;

  border-radius: 18px;

  backdrop-filter: blur(18px);

  background: rgba(18, 24, 34, .45);

  border: 1px solid rgba(0,255,255,.12);

  box-shadow:
    0 0 20px rgba(0,255,255,.05),
    inset 0 0 15px rgba(255,255,255,.02);
`;

export const PanelTitle = styled.h2`
  margin:0;

  color:#63fff5;

  letter-spacing:3px;

  font-size:15px;

  font-weight:600;
`;

export const Divider = styled.div`
  width:100%;

  height:1px;

  background:rgba(0,255,255,.15);
`;

export const Card = styled.div`
  padding:15px;

  border-radius:14px;

  background:rgba(255,255,255,.03);

  border:1px solid rgba(0,255,255,.08);

  transition:.35s;

  cursor:pointer;

  &:hover{

      transform:translateY(-3px);

      border-color:#00ffe7;

      box-shadow:

      0 0 18px rgba(0,255,200,.20);

  }
`;

export const CardHeader = styled.div`
  display:flex;

  justify-content:space-between;

  align-items:center;
`;

export const CardTitle = styled.h3`
  margin:0;

  color:#ffffff;

  font-size:14px;

  font-weight:500;
`;

export const CardValue = styled.p`
  margin-top:10px;

  color:#78ffd8;

  font-size:15px;

  font-weight:600;
`;

export const Status = styled.div`
  width:10px;

  height:10px;

  border-radius:50%;

  background:${props => props.online ? "#00ff95" : "#ff4040"};

  box-shadow:${props =>
    props.online
      ? "0 0 12px #00ff95"
      : "0 0 12px #ff4040"};
`;
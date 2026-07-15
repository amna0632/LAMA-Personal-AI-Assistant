import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html,
body,
#root{

width:100%;
height:100%;
overflow:hidden;

font-family:
"Poppins",
sans-serif;

background:#070B14;

color:white;

}

body{

background:
radial-gradient(circle at center,#0E1625,#05070D);

}

button{

cursor:pointer;
border:none;
outline:none;

}

input{

outline:none;

}

::-webkit-scrollbar{

width:8px;

}

::-webkit-scrollbar-thumb{

background:#00F5D4;
border-radius:20px;

}

`;

export default GlobalStyles;
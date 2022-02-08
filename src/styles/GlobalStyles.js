import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        
    }
        a {
            text-decoration: none;
        }
    body{
        background: #EDEDED;
        overflow-x: hidden;
       
    }
`;

export default GlobalStyle;

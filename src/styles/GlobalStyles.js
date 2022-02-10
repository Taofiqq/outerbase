import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
      
        
    }
        a {
            text-decoration: none;
        }
    body{
        background: #EDEDED;
        overflow-x: hidden;
        // font-family: "Nunito", sans-serif;
    }
`;

export default GlobalStyle;

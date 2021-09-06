import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 14px;
    }

   html{
    height: 100%;
   }

   body{
    height: 100%;
    line-height: 1.7;
    font-family: 'Roboto', sans-serif;
   
   }

   .container{
       max-width: 80%;
       margin: 0 auto;
       overflow: hidden;
   }




`;

export default GlobalStyle;

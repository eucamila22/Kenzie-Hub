import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button, select, ul, li{
    font-family: 'Inter', sans-serif;
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    --color-primary: #FF577F;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: #3FE864;
    --negative: #E83F5B;

    --tile1: 18px;
    --tile2: 16px;
    --tile3: 14px;
    --text1: 16px;
    --text2: 10px;
    --text3: 12px;
    --textBold: 16px;
    --textItalic: 16px;

    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --radius: 4px;
  }
`;

export const Container = styled.body`
  background-color: var(--grey-4);
  width: 100vw;
  height: 100vh;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(min-width: 768px){
    *{
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;
    }
  }

  @keyframes transition {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`
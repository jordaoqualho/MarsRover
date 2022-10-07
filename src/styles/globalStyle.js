import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
  :root {
    /* Colors */
    --primary: ${(props) => props.theme.color.primary};
    --secundary: ${(props) => props.theme.color.secundary};
    --light: ${(props) => props.theme.color.light};
    --background: ${(props) => props.theme.color.background};
    --error: ${(props) => props.theme.color.error};
    --warning: ${(props) => props.theme.color.warning};
    --complete: ${(props) => props.theme.color.complete};
    --border: ${(props) => props.theme.color.border};
    --wrapper: ${(props) => props.theme.color.wrapper};
    --button: ${(props) => props.theme.color.button};
    --modal: ${(props) => props.theme.color.modal};
    --form: ${(props) => props.theme.color.form};
    --skeleton: ${(props) => props.theme.color.skeleton};

    /* Texts */
    --basic: ${(props) => props.theme.text.basic};
    --contrast: ${(props) => props.theme.text.contrast};
    --bright: ${(props) => props.theme.text.bright};

    /* Fonts */
    --main: ${(props) => props.theme.font.family};
    --micro: ${(props) => props.theme.font.micro};
    --small: ${(props) => props.theme.font.small};
    --medium: ${(props) => props.theme.font.medium};
    --large: ${(props) => props.theme.font.large};
    --big: ${(props) => props.theme.font.big};
    --huge: ${(props) => props.theme.font.huge};
    --subtitle: ${(props) => props.theme.font.subtitle};
    --title: ${(props) => props.theme.font.title};
    --super: ${(props) => props.theme.font.super};

    /* Shadows */
    --basicShadow: ${(props) => props.theme.shadow.basic};
    --darkShadow: ${(props) => props.theme.shadow.dark};
    --normalShadow: ${(props) => props.theme.shadow.normal}; 

    /* Transitions */
    --fast: ${(props) => props.theme.transition.fast};
    --normal: ${(props) => props.theme.transition.normal};
    --slow: ${(props) => props.theme.transition.slow};
  }



  body {
    margin: 0;
  }

  html {
    font-size: 62.5%; 
  }

  button {
    cursor: pointer;
    transition: var(--fast);
  }

  ::-webkit-scrollbar {
    width: 6px;
    margin: 20px;
  }

  ::-webkit-scrollbar-track {
    background: var(--light);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
  }

  * {
    font-family: var(--main);
    outline: none;
    margin: 0;
    border: none;
    box-sizing: border-box; 
    z-index: 10;    
  }

  .flex {
    display: flex;
  }

  .flex_cc {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex_ccc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .flex_ccs {
    display: flex;
    align-items: flex-start;
    justify-content: center;    
    flex-direction: column;
  }

  .flex_cs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .flex_csb {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex_cb {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  .flex_ss {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .flex_cls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .test { 
    border: 1px solid red;
  }
`;

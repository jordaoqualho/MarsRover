import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    font: {
      family: string;
      micro: string;
      small: string;
      medium: string;
      large: string;
      big: string;
      huge: string;
      subtitle: string;
      title: string;
      super: string;
    };

    color: {
      primary: string;
      secundary: string;
      light: string;
      background: string;
      error: string;
      warning: string;
      complete: string;
      border: string;
      wrapper: string;
      button: string;
      modal: string;
      form: string;
      skeleton: string;
    };

    text: {
      basic: string;
      contrast: string;
      bright: string;
    };

    shadow: {
      basic: string;
      dark: string;
      normal: string;
    };

    transition: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}

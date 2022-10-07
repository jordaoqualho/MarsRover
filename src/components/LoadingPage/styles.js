import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  position: fixed;
  overflow: hidden;
  z-index: 20;
  transition: all 0.5s ease;
  top: 0;
  left: 0;

  .logo {
    h1 {
      font-size: var(--super);
    }
    span {
      color: var(--primary);
    }
  }

  .bar {
    width: 300px;
    height: 3px;
    border-radius: 20px;
    background-color: var(--light);
    margin-top: 20px;
    position: relative;

    :after {
      content: "";
      position: absolute;
      transition: all 1s ease;
      width: ${(props) => `${props.width}%`};
      background-color: var(--primary);
      border-radius: 20px;
      height: 3px;
      top: 0;
      left: 0;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
`;

export const Banner = styled.div`
  position: relative;
  flex: 1;
`;

export const Info = styled.div`
  box-shadow: var(--basicShadow);
  border-radius: 10px;
  position: relative;
  padding: 20px 40px;
  width: 450px;

  .title {
    h1 {
      font-size: var(--huge);
    }

    h2 {
      font-size: var(--huge);
      color: var(--primary);
      margin-top: -15px;
    }
  }

  h4 {
    color: var(--bright);
    font-size: var(--small);
    margin-bottom: 32px;
    font-weight: 300;
    width: 300px;
  }

  .refresh {
    color: var(--background);
    background-color: var(--error);
    transition: all 0.3s;
    border-radius: 50px;
    padding: 2px 15px 4px 15px;
    position: absolute;
    right: 20px;
    top: 20px;

    :hover {
      background-color: var(--border);
    }
  }
`;

export const Form = styled.form`
  p {
    color: var(--bright);
    font-size: var(--medium);
    margin: 24px 0 5px 0;
  }

  span {
    color: var(--primary);
    font-size: var(--medium);
    font-weight: 700;
    margin: 15px;
  }

  input,
  select {
    padding: 10px;
    margin-rigth: 10px;
    width: 100px;
    border-radius: 10px;
    background-color: var(--skeleton);
    border: 1px solid var(--skeleton);
    transition: var(--fast);

    :hover {
      border: 1px solid var(--border);
    }

    :focus {
      border: 1px solid var(--primary);
    }
  }

  .instructions {
    width: 100%;
  }

  button {
    background-color: var(--primary);
    font-size: var(--medium);
    color: var(--basic);
    width: 100%;
    padding: 10px 50px;
    border-radius: 10px;
    margin-top: 25px;

    :hover {
      opacity: 0.75;
    }
  }
`;

export const Plateau = styled.div`
  box-shadow: var(--basicShadow);
  border-radius: 10px;
  position: relative;
  margin-left: 10px;
  padding: 20px;

  .grid {
    grid-template-columns: repeat(${(props) => props.columns}, auto);
    border-radius: 10px;
    position: relative;
    display: grid;
    height: 100%;
    width: 100%;

    .block {
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 15px;
    }

    img {
      transform: rotate(${(props) => props.direction}deg);
      bottom: ${(props) => props.y * 32}px;
      left: ${(props) => props.x * 32}px;
      transition: 1s ease;
      border-radius: 55px;
      position: absolute;
      height: 32px;
      width: 32px;
      z-index: 10;
    }
  }
`;

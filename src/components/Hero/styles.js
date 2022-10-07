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
  flex: 1;
  position: relative;

  .doctor {
    margin-right: -110px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .circle {
    position: fixed;
    bottom: -45vw;
    width: 70vw;
    right: -17vw;
    z-index: 1;
  }
`;

export const Info = styled.div`
  width: 650px;
  margin-top: 100px;

  h1 {
    font-size: var(--super);

    span {
      color: var(--primary);
    }
  }

  p {
    color: var(--bright);
    font-size: var(--medium);
    margin: 26px 0;
  }

  button {
    background-color: var(--primary);
    color: var(--basic);
    padding: 10px 35px;
    border-radius: 10px;
    font-size: var(--medium);

    :hover {
      opacity: 0.75;
    }
  }
`;

export const Modal = styled.div`
  background-color: var(--background);
  box-shadow: var(--basicShadow);
  border-radius: 15px;
  position: absolute;
  padding: 15px;
  right: 40%;
  bottom: 50px;

  img {
    border-radius: 50%;
  }

  h4 {
    font-size: var(--medium);
    margin-top: 10px;
  }

  p {
    font-size: var(--small);
    color: var(--bright);
  }

  button {
    background-color: var(--primary);
    color: var(--basic);
    padding: 10px 10px;
    border-radius: 10px;
    font-size: var(--small);
    margin-top: 10px;

    :hover {
      opacity: 0.75;
    }
  }
`;

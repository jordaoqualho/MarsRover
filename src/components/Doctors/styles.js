import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 670px;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  padding: 80px 0;

  .doctor {
    position: absolute;
    margin-top: 1px;
    right: 0;
  }

  .circle {
    position: absolute;
    z-index: 1;
    right: -150px;
    bottom: -490px;
  }
`;

export const Info = styled.div`
  max-width: 500px;

  h4 {
    font-size: var(--medium);
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 10px;
  }

  h1 {
    font-size: var(--huge);
  }

  p {
    color: var(--bright);
    font-size: var(--small);
    margin: 26px 0;
  }

  .item {
    margin-bottom: 14px;

    h3 {
      font-size: var(--small);
    }

    img {
      margin-right: 10px;
      width: 20px;
    }
  }

  button {
    background-color: var(--primary);
    color: var(--basic);
    padding: 10px 30px;
    border-radius: 10px;
    font-size: var(--small);
    margin-top: 10px;

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
  padding: 15px 30px;
  right: 35%;
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
    margin-bottom: 20px;
  }

  .doctors {
    margin-bottom: 20px;

    img {
      width: 40px;
      margin-right: 10px;
    }
  }

  button {
    background-color: var(--light);
    color: var(--primary);
    width: 100%;
    font-weight: 500;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: var(--small);

    :hover {
      opacity: 0.75;
    }
  }
`;

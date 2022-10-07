import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  padding: 100px 0;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: var(--huge);
  }

  p {
    font-size: var(--small);
    color: var(--bright);
  }
`;

export const Depoiment = styled.div`
  position: relative;
  padding-top: 80px;
  display: flex;
  height: 450px;
  width: 100%;

  .background {
    position: absolute;
    background-color: var(--light);
    width: 100vw;
    height: 75%;
    z-index: 1;
    right: 0;
    top: 0px;
  }
`;

export const Coment = styled.div`
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 80px 0 0;
  display: flex;
  height: 100%;

  h1 {
    font-size: var(--big);
    width: 500px;
    font-weight: 300;
  }

  .autor {
    padding: 20px 0;
    width: 100%;

    h2 {
      font-size: var(--large);
      margin-bottom: 5px;
    }

    p {
      font-size: var(--small);
      color: var(--bright);
    }
  }

  .arrows {
    padding: 10px 0;

    img {
      cursor: pointer;
      transition: all 0.3s;

      :hover {
        opacity: 0.15;
      }
    }

    .left {
      transform: rotate(-180deg);
      margin-right: 15px;
      opacity: 0.15;
    }
  }
`;

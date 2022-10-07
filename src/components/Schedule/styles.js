import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  flex-direction: row;
  padding: 150px 0;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
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

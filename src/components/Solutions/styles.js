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
  p {
    font-size: var(--medium);
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 10px;
  }

  h1 {
    font-size: var(--huge);
    margin-bottom: 50px;
  }
`;

export const Options = styled.div`
  gap: 30px;

  .box {
    width: 287px;
    height: 230px;
    padding: 50px 40px;
    background: #ffffff;
    box-shadow: var(--basicShadow);
    border-radius: 0px 0px 10px 10px;
    border-top: 3px solid var(--primary);

    h4 {
      font-size: var(--medium);
      margin: 15px 0;
    }

    p {
      font-size: var(--small);
      color: var(--bright);
    }
  }
`;

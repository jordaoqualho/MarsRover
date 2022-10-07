import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  padding: 100px 0;
  margin: 0 auto;
  display: flex;
  width: 1240px;
  height: 100%;
`;

export const Text = styled.div`
  width: 400px;

  h1 {
    font-size: var(--large);
    margin-bottom: 5px;

    span {
      color: var(--primary);
    }
  }

  p {
    font-size: var(--small);
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 70px;

  .column {
    h1 {
      font-size: var(--large);
      margin-bottom: 10px;
    }

    p {
      font-size: var(--small);
      cursor: pointer;
      margin-bottom: 5px;

      :hover {
        color: var(--primary);
      }
    }

    img {
      margin-right: 10px;
      cursor: pointer;

      :hover {
        opacity: 0.75;
      }
    }
  }
`;

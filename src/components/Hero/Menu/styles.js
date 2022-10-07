import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
`;

export const Box = styled.div`
  height: 100%;
  gap: 40px;

  h1 {
    font-size: var(--big);

    span {
      color: var(--primary);
    }
  }

  p {
    cursor: pointer;
    :hover {
      color: var(--primary);
    }
  }

  p,
  button {
    font-size: var(--medium);
  }

  .signin {
    background-color: transparent;
    padding: 10px 20px;
    margin-right: -20px;
    border-radius: 10px;

    :hover {
      background-color: var(--light);
    }
  }

  .signup {
    background-color: var(--primary);
    color: var(--basic);
    padding: 10px 20px;
    border-radius: 10px;

    :hover {
      opacity: 0.75;
    }
  }
`;

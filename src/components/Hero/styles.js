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
  padding: 20px 40px;
  width: 450px;

  .title {
    h1 {
      font-size: var(--super);
    }

    h2 {
      font-size: var(--super);
      color: var(--primary);
      margin-top: -20px;
    }
  }

  h4 {
    color: var(--bright);
    font-size: var(--medium);
    margin-bottom: 48px;
    font-weight: 300;
    width: 300px;
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

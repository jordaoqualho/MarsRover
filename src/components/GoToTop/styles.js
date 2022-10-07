import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  z-index: 11;
  padding: 15px;
  background: var(--skeleton);
  box-shadow: var(--basicShadow);
  border-radius: 5px;
  transition: var(--fast);
  opacity: 0;

  :hover {
    background: var(--light);
  }

  img {
    transform: rotate(-90deg);
    width: 25px;
  }
`;

import Hero from "components/Hero";
import LoadingPage from "components/LoadingPage";
import { Container } from "./styles";

const HomePage = () => {
  return (
    <>
      <LoadingPage name="loadingPage" />
      <Container name="container">
        <Hero name="hero" />
      </Container>
    </>
  );
};

export default HomePage;

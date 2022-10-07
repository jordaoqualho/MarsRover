import Doctors from "components/Doctors";
import Feedback from "components/Feedback";
import Footer from "components/Footer";
import GoToTop from "components/GoToTop";
import Hero from "components/Hero";
import LoadingPage from "components/LoadingPage";
import Rating from "components/Rating";
import Schedule from "components/Schedule";
import Solutions from "components/Solutions";
import { useRef } from "react";
import { Container } from "./styles";

const HomePage = () => {
  const solutionRef = useRef(null);
  const doctorRef = useRef(null);
  const scheduleRef = useRef(null);
  const feedbackRef = useRef(null);

  const scrollTo = (target) => {
    const scrollConfig = {
      behavior: "smooth",
      block: "start",
    };

    switch (target) {
      case "solution":
        return solutionRef.current.scrollIntoView(scrollConfig);

      case "doctor":
        return doctorRef.current.scrollIntoView(scrollConfig);

      case "schedule":
        return scheduleRef.current.scrollIntoView(scrollConfig);

      case "feedback":
        return feedbackRef.current.scrollIntoView(scrollConfig);
    }
  };

  return (
    <>
      <LoadingPage name="loadingPage" />
      <GoToTop name="goToTop" />
      <Container name="container">
        <Hero name="hero" scrollTo={scrollTo} />
        <Solutions name="solutions" solutionRef={solutionRef} />
        <Doctors name="doctors" doctorRef={doctorRef} />
        <Schedule name="schedule" scheduleRef={scheduleRef} />
        <Rating name="rating" />
        <Feedback name="feedback" feedbackRef={feedbackRef} />
        <Footer name="footer" />
      </Container>
    </>
  );
};

export default HomePage;

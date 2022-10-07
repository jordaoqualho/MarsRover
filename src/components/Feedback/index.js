import { arrow, client } from "imgs";
import { Container, Wrapper, Title, Depoiment, Coment } from "./styles";

const Feedback = ({ feedbackRef }) => {
  return (
    <Container name="container" ref={feedbackRef}>
      <Wrapper name="wrapper" className="flex_ccc">
        <Title name="title" data-aos="fade-up">
          <h1>Our patients feedback about us</h1>
          <p>their impression after using this application</p>
        </Title>
        <Depoiment name="depoiment" className="flex_cb" data-aos="fade-up">
          <img src={client} alt="client" />
          <div className="background" />
          <Coment name="coment">
            <h1>
              “Healthycarely is an website and mobile app for you to feel better
              or get medical help. We offer you a 24/7 doctor service with no
              appointment needed”
            </h1>
            <div className="autor flex_cb ">
              <div>
                <h2>Naufal Hidayat</h2>
                <p>Student at Telkom University</p>
              </div>
              <div className="arrows">
                <img src={arrow} alt="arrow" className="left" />
                <img src={arrow} alt="arrow" className="right" />
              </div>
            </div>
          </Coment>
        </Depoiment>
      </Wrapper>
    </Container>
  );
};

export default Feedback;

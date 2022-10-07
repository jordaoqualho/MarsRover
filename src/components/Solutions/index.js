import { calendar, search, star, user } from "imgs";
import { Container, Wrapper, Title, Options } from "./styles";

const Solutions = ({ solutionRef }) => {
  return (
    <Container name="container" ref={solutionRef}>
      <Wrapper name="wrapper" className="flex_ccc">
        <Title name="title" className="flex_ccc" data-aos="fade-up">
          <p>Fast Solutions</p>
          <h1>step by step to get your solutions</h1>
        </Title>
        <Options name="options" className="flex_cb" data-aos="fade-up">
          <div className="box">
            <img src={search} alt="search" />
            <h4>Check health complaints</h4>
            <p>
              Check the disease so you can easily choose the right specialist
            </p>
          </div>
          <div className="box">
            <img src={user} alt="user" />
            <h4>Choose doctor Specialist</h4>
            <p>Choose a specialist according to your disease complaints </p>
          </div>
          <div className="box">
            <img src={calendar} alt="calendar" />
            <h4>Make a Schedule</h4>
            <p>
              Make a schedule with the doctor concerned so you can start the
              examination{" "}
            </p>
          </div>
          <div className="box">
            <img src={star} alt="star" />
            <h4>Get your Solutions</h4>
            <p>
              After conducting an examination with a specialist we can help find
              the right healing method{" "}
            </p>
          </div>
        </Options>
      </Wrapper>
    </Container>
  );
};

export default Solutions;

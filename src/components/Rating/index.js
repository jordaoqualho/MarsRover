import { Container, Options, Title, Wrapper } from "./styles";

const Rating = ({ ratingRef }) => {
  return (
    <Container name="container" ref={ratingRef}>
      <Wrapper name="wrapper" className="flex_ccc">
        <Title name="title" className="flex_ccc" data-aos="fade-up">
          <p>Our Rating</p>
          <h1>We’re employee benefit at 7500+ hospital </h1>
        </Title>
        <Options name="options" className="flex_cb" data-aos="fade-up">
          <div className="box flex_ccc">
            <h1>900+</h1>
            <h4>Verified Specialist</h4>
            <p>Highly Verified </p>
          </div>
          <div className="box flex_ccc">
            <h1>45000+</h1>
            <h4>Happy Costumers</h4>
            <p>Highly Performance</p>
          </div>
          <div className="box flex_ccc">
            <h1>99,7%</h1>
            <h4>Positive Feedback</h4>
            <p>Costumers Apporove</p>
          </div>
        </Options>
      </Wrapper>
    </Container>
  );
};

export default Rating;

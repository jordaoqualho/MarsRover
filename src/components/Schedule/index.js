import { check, reunion } from "imgs";
import { Container, Wrapper, Info } from "./styles";

const Schedule = ({ scheduleRef }) => {
  return (
    <Container name="container">
      <Wrapper name="wrapper" className="flex_cs" ref={scheduleRef}>
        <img src={reunion} alt="reunion" data-aos="fade-up" />
        <Info name="info" data-aos="fade-up">
          <h4>Make a Shedule</h4>
          <h1>Make a schedule in advance with the available doctor</h1>
          <p>
            Healthcare is a very painful process, especially if you’re not
            taking care of your health and having regular check-ups.
            HealhtyCarely makes it easier for everyone to schedule a doctor’s
            appointment.
          </p>
          <div className="item flex_cs">
            <img src={check} alt="check" />
            <h3>Make a schedule online is easy</h3>
          </div>
          <div className="item flex_cs">
            <img src={check} alt="check" />
            <h3>Easy to connect with doctor</h3>
          </div>
          <button>Make Schedule Now!</button>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Schedule;

import { check, circle2, doctor2, doctor3_min, doctor4_min } from "imgs";
import { Container, Info, Wrapper, Modal } from "./styles";

const Doctors = ({ doctorRef }) => {
  return (
    <>
      <Container name="container" ref={doctorRef}>
        <Wrapper name="wrapper">
          <Info name="info" data-aos="fade-up">
            <h4>Find Doctor</h4>
            <h1>Find the right doctor according to your complaint</h1>
            <p>
              HealthCarely is a free, health app that goes beyond matching you
              with doctors. It actively helps you find the right doctor based on
              your medical and personal needs and connects you with your
              HealthCarely community for ongoing support throughout your journey
              to healthier living.
            </p>
            <div className="item flex_cs">
              <img src={check} alt="check" />
              <h3>
                100% free app designed to help you find the right doctor for
                you.
              </h3>
            </div>
            <div className="item flex_cs">
              <img src={check} alt="check" />
              <h3>Available 900 doctors specialist</h3>
            </div>
            <button>See the Doctors</button>
          </Info>
          <img
            src={doctor2}
            alt="doctor2"
            className="doctor"
            data-aos="fade-up"
          />
          <img src={circle2} alt="circle2" className="circle" />
          <Modal name="modal" data-aos="fade-up">
            <h4>Available Doctors</h4>
            <p>Select Doctors</p>
            <div className="doctors flex_cs">
              <img src={doctor3_min} alt="doctor3_min" />
              <div>
                <h2>Dr. Adinda</h2>
                <span>Eye Specialist</span>
              </div>
            </div>
            <div className="doctors flex_cs">
              <img src={doctor4_min} alt="doctor4_min" />
              <div>
                <h2>Dr. Jackson</h2>
                <span>Ear Specialist</span>
              </div>
            </div>
            <button>Find Doctor</button>
          </Modal>
        </Wrapper>
      </Container>
    </>
  );
};

export default Doctors;

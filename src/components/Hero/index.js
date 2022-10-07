import Menu from "components/Hero/Menu";
import { circle, doctor, doctor_min } from "imgs";
import { Container, Wrapper, Banner, Info, Modal } from "./styles";

const Hero = ({ scrollTo }) => {
  return (
    <Container name="container">
      <Wrapper name="wrapper">
        <Menu name="menu" scrollTo={scrollTo} />
        <Banner name="banner">
          <Info name="info" data-aos="fade-up" data-aos-delay="2200">
            <h1>
              Medical Care Now Simplified For <span>Everyone</span>
            </h1>
            <p>
              Health carely is a new way to get health insurance quotes. We
              offer tools similar to those provided by insurance companies for
              free and prices are based on donations and not restrictive health
              plan networks.
            </p>
            <button>Contact Us</button>
          </Info>
          <img src={doctor} alt="doctor" className="doctor" />
          <img src={circle} alt="circle" className="circle" />
          <Modal
            name="modal"
            className="flex_ccc"
            data-aos="fade-up"
            data-aos-delay="2200"
          >
            <img src={doctor_min} alt="doctor2" />
            <h4>Dr. Shimanta</h4>
            <p>Skin Specialist</p>
            <button>Make Schedule</button>
          </Modal>
        </Banner>
      </Wrapper>
    </Container>
  );
};

export default Hero;

import { facebook, instagram, twitter } from "imgs";
import { Container, Wrapper, Text, Navigation } from "./styles";

const Footer = () => {
  return (
    <Container name="container">
      <Wrapper name="wrapper">
        <Text name="text">
          <h1>
            Healhty<span>Carely</span>
          </h1>
          <p>
            This free App provides a solution to your health needs by offering
            you a one-stop access to complete information about various medical
            checkups. This App carries simple tips and advice to help you
            maintain a healthy lifestyle.
          </p>
        </Text>
        <Navigation name="navigation">
          <div className="column">
            <h1>Overview</h1>
            <p>Checking Health</p>
            <p>Find Docter</p>
            <p>Make a Schedule</p>
          </div>
          <div className="column">
            <h1>Company</h1>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
          </div>
          <div className="column">
            <h1>Explore</h1>
            <p>Terms & Conds</p>
            <p>Privacy Police</p>
            <p>Cookies</p>
          </div>
          <div className="column">
            <h1>Social Media</h1>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Footer;

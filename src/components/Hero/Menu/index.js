import { Container, Box } from "./styles";

const Menu = ({ scrollTo }) => {
  return (
    <Container name="container" className="flex_cb">
      <Box name="box" className="flex_cs">
        <h1>
          Healhty<span>Carely</span>
        </h1>
        <p onClick={() => scrollTo("solution")}>Solutions</p>
        <p onClick={() => scrollTo("doctor")}>Doctors</p>
        <p onClick={() => scrollTo("schedule")}>Schedule</p>
        <p onClick={() => scrollTo("feedback")}>Feedback</p>
      </Box>

      <Box name="box" className="flex_cs">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </Box>
    </Container>
  );
};

export default Menu;

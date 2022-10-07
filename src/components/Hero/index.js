import { useState } from "react";
import { Banner, Container, Info, Wrapper, Form } from "./styles";

const Hero = () => {
  const [plateauData, setPlateauData] = useState({ height: 10, width: 10 });
  const [instructions, setInstructions] = useState("LMLMLMLMM");
  const [initialPosition, setInitialPosition] = useState({
    x: 1,
    y: 2,
    facing: "N",
  });

  const handleChange = (event) => {
    const { value, name, id } = event.target;

    if (name.includes("plateauData")) {
      setPlateauData({ ...plateauData, [id]: value });
    }

    if (name.includes("initialPosition")) {
      setInitialPosition({ ...initialPosition, [id]: value });
    }

    if (name.includes("instructions")) {
      setInstructions(value.toUpperCase());
    }

    console.log(plateauData, initialPosition);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // <Info name="info" data-aos="fade-up" data-aos-delay="2200">

  return (
    <Container name="container">
      <Wrapper name="wrapper">
        <Banner name="banner" className="flex_cs">
          <Info name="info">
            <div className="title">
              <h1>Mars Rover in</h1>
              <h2>JavaScript</h2>
            </div>
            <h4>
              Insert the plateau size, the rover starting position and the
              instructions to the rover to start.
            </h4>
            <Form onSubmit={handleSubmit}>
              <p>Plateau Size</p>
              <input
                min="1"
                max="25"
                id="height"
                type="number"
                name="plateauData"
                value={plateauData.height}
                onChange={handleChange}
              />
              <span>x</span>
              <input
                min="1"
                max="25"
                id="width"
                type="number"
                name="plateauData"
                value={plateauData.width}
                onChange={handleChange}
              />
              <p>Initial Position</p>
              <input
                id="y"
                min="0"
                type="number"
                name="initialPosition"
                max={plateauData.height}
                value={initialPosition.y}
                onChange={handleChange}
              />
              <span>,</span>
              <input
                id="x"
                min="0"
                type="number"
                name="initialPosition"
                max={plateauData.width}
                value={initialPosition.x}
                onChange={handleChange}
              />
              <span>,</span>
              <select
                id="facing"
                name="initialPosition"
                onChange={handleChange}
                value={initialPosition.facing}
              >
                <option value="N">N</option>
                <option value="E">E</option>
                <option value="S">S</option>
                <option value="W">W</option>
              </select>
              <p>Instructions</p>
              <input
                type="string"
                name="instructions"
                value={instructions}
                className="instructions"
                onChange={handleChange}
              />
              <button type="submit">Start</button>
            </Form>
          </Info>
        </Banner>
      </Wrapper>
    </Container>
  );
};

export default Hero;

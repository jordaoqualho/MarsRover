import { useEffect, useState } from "react";
import { Banner, Container, Info, Wrapper, Form, Plateau } from "./styles";

const Hero = () => {
  const [plateauData, setPlateauData] = useState({ height: 10, width: 10 });
  const [instructions, setInstructions] = useState("LMLMLMLMM");
  const [position, setPosition] = useState({
    facing: "N",
    rotation: -90,
    x: 1,
    y: 2,
  });

  const handleChange = (event) => {
    const { value, name, id } = event.target;

    if (name.includes("plateauData")) {
      setPlateauData({ ...plateauData, [id]: value });
    }

    if (name.includes("initialPosition")) {
      setPosition({ ...position, [id]: value });
    }

    if (name.includes("instructions")) {
      setInstructions(value.toUpperCase());
    }

    console.log(plateauData, position);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = Array.from(instructions);

    for (let i = 0; i < array.length; i += 1) {
      setTimeout(() => {
        followInstructions(array[i]);
      }, i * 1050);
    }
  };

  const followInstructions = (letter) => {
    switch (letter) {
      case "L":
        changeDirection("L");
        break;

      case "R":
        changeDirection("R");

        return;

      case "M":
        moveRover();
        return;
    }
  };

  useEffect(() => {
    console.log(position);
  }, [position]);

  const changeDirection = (spinWay) => {
    switch (position.facing) {
      case "N":
        setPosition({
          ...position,
          rotation: spinWay === "L" ? -180 : 0,
          facing: spinWay === "L" ? "W" : "E",
        });
        break;

      case "E":
        setPosition({
          ...position,
          rotation: spinWay === "L" ? -90 : 90,
          facing: spinWay === "L" ? "N" : "S",
        });
        break;

      case "S":
        setPosition({
          ...position,
          rotation: spinWay === "L" ? 0 : -180,
          facing: spinWay === "L" ? "E" : "W",
        });
        break;

      case "W":
        setPosition({
          ...position,
          rotation: spinWay === "L" ? 90 : -90,
          facing: spinWay === "L" ? "S" : "N",
        });
        break;
    }
  };

  const moveRover = () => {
    switch (position.facing) {
      case "N":
        setPosition({
          ...position,
          y: position.y + 1,
        });
        break;

      case "E":
        setPosition({
          ...position,
          x: position.x + 1,
        });
        break;

      case "S":
        setPosition({
          ...position,
          y: position.y - 1,
        });
        break;

      case "W":
        setPosition({
          ...position,
          x: position.x - 1,
        });
        break;
    }
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
                value={position.y}
                onChange={handleChange}
              />
              <span>,</span>
              <input
                id="x"
                min="0"
                type="number"
                name="initialPosition"
                max={plateauData.width}
                value={position.x}
                onChange={handleChange}
              />
              <span>,</span>
              <select
                id="facing"
                name="initialPosition"
                onChange={handleChange}
                value={position.facing}
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
          <Plateau
            columns={plateauData.width}
            direction={position.rotation}
            y={position.y}
            x={position.x}
          >
            <div className="grid">
              {Array(plateauData.height * plateauData.width)
                .fill(plateauData.height * plateauData.width)
                .map((row, i) => {
                  return <div className="block" key={i} />;
                })}
              <img
                src="https://i.imgur.com/oZggVmT.gif"
                alt="img"
                width="320"
              />
            </div>
          </Plateau>
        </Banner>
      </Wrapper>
    </Container>
  );
};

export default Hero;

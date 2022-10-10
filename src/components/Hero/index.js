import popUp from "lib/popUp";
import { animateRover, getRoverRotation } from "lib/rover";
import { useState } from "react";
import { Banner, Container, Form, Info, Plateau, Wrapper } from "./styles";

const initialState = {
  roverData: { facing: "E", rotation: 0, x: 3, y: 3 },
  plateauData: { height: 10, width: 10 },
  instructions: "MRRMMRMRRM",
  isAnimating: false,
};

const Hero = () => {
  const [plateauData, setPlateauData] = useState(initialState.plateauData);
  const [instructions, setInstructions] = useState(initialState.instructions);
  const [isAnimating, setIsAnimating] = useState(initialState.isAnimating);
  const [roverData, setRoverData] = useState(initialState.roverData);

  const handleInputChange = (event) => {
    if (isAnimating == true) return;
    const { value, name, id } = event.target;

    if (name.includes("plateauData")) {
      setPlateauData({ ...plateauData, [id]: value });
      if (id === "width" && value <= roverData.x) {
        setRoverData({ ...roverData, x: plateauData.width - 2 });
      }
      if (id === "height" && value <= roverData.y) {
        setRoverData({ ...roverData, y: plateauData.height - 2 });
      }
    }

    if (name.includes("roverPosition")) {
      setRoverData({ ...roverData, [id]: parseInt(value) });
      if (id === "y" && parseInt(value) > plateauData.height) {
        setTimeout(() => {
          setRoverData({ ...roverData, y: plateauData.height - 1 });
          popUp("Rover position must be inside plateau", true);
        }, 500);
      }
      if (id === "x" && parseInt(value) > plateauData.width) {
        setTimeout(() => {
          setRoverData({ ...roverData, x: plateauData.width - 1 });
          popUp("Rover position must be inside plateau", true);
        }, 500);
      }
    }

    if (name.includes("roverDirection")) {
      setRoverData({
        ...roverData,
        [id]: value,
        rotation: getRoverRotation(value),
      });
    }

    if (name.includes("instructions")) {
      const filterValue = value.toUpperCase().replace(/[^LRM\s]/g, "");
      setInstructions(filterValue);
    }
  };

  const resetStates = () => {
    if (isAnimating === true) return;
    setPlateauData(initialState.plateauData);
    setInstructions(initialState.instructions);
    setIsAnimating(initialState.isAnimating);
    setRoverData({ ...initialState.roverData });
  };

  const handleSubmit = (e) => {
    if (isAnimating === true) return;
    e.preventDefault();

    animateRover(
      instructions,
      roverData,
      plateauData,
      setRoverData,
      setIsAnimating
    );
  };

  return (
    <Container name="container">
      <Wrapper name="wrapper">
        <Banner
          name="banner"
          className="flex_cs"
          data-aos="fade-up"
          data-aos-delay="2200"
        >
          <Info name="info">
            <div className="title">
              <h1>Mars Rover in</h1>
              <h2>JavaScript</h2>
            </div>
            <h4>
              Insert the plateau size, the rover starting position and the
              instructions to the rover to start.
            </h4>
            <button
              type="button"
              className="refresh"
              onClick={() => resetStates()}
              style={{
                opacity: isAnimating ? 0.5 : 1,
                cursor: isAnimating ? "not-allowed" : "pointer",
              }}
            >
              reset
            </button>
            <Form onSubmit={handleSubmit}>
              <p>Plateau Size</p>
              <input
                min="1"
                max="25"
                id="width"
                type="number"
                name="plateauData"
                value={plateauData.width}
                onChange={handleInputChange}
              />
              <span>x</span>
              <input
                min="1"
                max="25"
                id="height"
                type="number"
                name="plateauData"
                value={plateauData.height}
                onChange={handleInputChange}
              />
              <p>Rover Position</p>
              <input
                id="x"
                min="0"
                type="number"
                name="roverPosition"
                max={plateauData.width - 1}
                value={roverData.x}
                onChange={handleInputChange}
              />
              <span>,</span>
              <input
                id="y"
                min="0"
                type="number"
                name="roverPosition"
                max={plateauData.height - 1}
                value={roverData.y}
                onChange={handleInputChange}
              />

              <span>,</span>
              <select
                id="facing"
                name="roverDirection"
                onChange={handleInputChange}
                value={roverData.facing}
              >
                <option value="N">N</option>
                <option value="E">E</option>
                <option value="S">S</option>
                <option value="W">W</option>
              </select>
              <p>Instructions (L, R or M)</p>
              <input
                type="string"
                name="instructions"
                value={instructions}
                className="instructions"
                onChange={handleInputChange}
              />
              <button
                type="submit"
                style={{
                  opacity: isAnimating ? 0.5 : 1,
                  cursor: isAnimating ? "not-allowed" : "pointer",
                }}
              >
                Start
              </button>
            </Form>
          </Info>
          <Plateau
            columns={plateauData.width}
            direction={roverData.rotation}
            y={roverData.y}
            x={roverData.x}
          >
            <div className="grid">
              {Array(plateauData.height * plateauData.width)
                .fill(plateauData.height * plateauData.width)
                .map((row, i) => {
                  return <div className="block" key={i} />;
                })}
              <img src="https://i.imgur.com/oZggVmT.gif" alt="img" />
            </div>
          </Plateau>
        </Banner>
      </Wrapper>
    </Container>
  );
};

export default Hero;

export const animateRover = (
  instructions,
  roverData,
  plateauData,
  setRoverData,
  setIsAnimating
) => {
  const listOfInstructions = Array.from(instructions);
  const listOfActions = new Array();
  var mutableRover = roverData;

  listOfInstructions.forEach((letter) => {
    const newAction = getActionFromInstruction(
      letter,
      mutableRover,
      plateauData
    );
    newAction && listOfActions.push({ ...roverData, ...newAction });
  });

  listOfActions.length > 0 && setIsAnimating(true);
  listOfActions.forEach((newRoverData, index) => {
    setTimeout(() => {
      setRoverData({ ...newRoverData });
    }, index * 850);
  });

  setTimeout(() => {
    setIsAnimating(false);
  }, listOfActions.length * 850);
};

const getActionFromInstruction = (letter, roverData, plateauData) => {
  switch (letter) {
    case "L":
      return rotateRover("L", roverData);

    case "R":
      return rotateRover("R", roverData);

    case "M":
      return moveRover(roverData, plateauData);
  }
};

const rotateRover = (spinDirection, roverData) => {
  switch (roverData.facing) {
    case "N":
      roverData.facing = spinDirection === "L" ? "W" : "E";
      roverData.rotation =
        spinDirection === "L"
          ? roverData.rotation - 90
          : roverData.rotation + 90;
      break;

    case "E":
      roverData.facing = spinDirection === "L" ? "N" : "S";
      roverData.rotation =
        spinDirection === "L"
          ? roverData.rotation - 90
          : roverData.rotation + 90;
      break;

    case "S":
      roverData.facing = spinDirection === "L" ? "E" : "W";
      roverData.rotation =
        spinDirection === "L"
          ? roverData.rotation - 90
          : roverData.rotation + 90;
      break;

    case "W":
      roverData.facing = spinDirection === "L" ? "S" : "N";
      roverData.rotation =
        spinDirection === "L"
          ? roverData.rotation - 90
          : roverData.rotation + 90;
      break;
  }

  return {
    rotation: roverData.rotation,
    facing: roverData.facing,
  };
};

const moveRover = (rover, plateauData) => {
  const topLimit = rover.y === plateauData.height - 1;
  const rightLimit = rover.x === plateauData.width - 1;
  const leftLimit = rover.x === 0;
  const bottomLimit = rover.y === 0;

  switch (rover.facing) {
    case "N":
      if (topLimit) return;

      rover.y += 1;
      return { y: rover.y };

    case "E":
      if (rightLimit) return;

      rover.x += 1;
      return { x: rover.x };

    case "S":
      if (bottomLimit) return;

      rover.y -= 1;
      return { y: rover.y };

    case "W":
      if (leftLimit) return;

      rover.x -= 1;
      return { x: rover.x };
  }
};

export const getRoverRotation = (facing) => {
  switch (facing) {
    case "N":
      return -90;

    case "E":
      return 0;

    case "S":
      return 90;

    case "W":
      return -180;
  }
};

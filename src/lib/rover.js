export const animateRover = (
  instructions,
  rover,
  plateauData,
  setPosition,
  setIsAnimating
) => {
  const listOfInstructions = Array.from(instructions);
  setIsAnimating(true);
  var muteablePosition = rover;
  const listOfActions = [];

  listOfInstructions.forEach((letter) => {
    const res = decideWay(letter, muteablePosition, plateauData);
    res && listOfActions.push({ ...rover, ...res });
  });
  console.log(listOfActions);

  listOfActions.forEach((action, order) => {
    setTimeout(() => {
      setPosition({ ...action });
    }, order * 850);
  });

  setTimeout(() => {
    setIsAnimating(false);
  }, listOfActions.length * 850);
};

const decideWay = (letter, position, plateauData) => {
  switch (letter) {
    case "L":
      return changeDirection("L", position);

    case "R":
      return changeDirection("R", position);

    case "M":
      return moveRover(position, plateauData);
  }
};

const changeDirection = (spinWay, position) => {
  switch (position.facing) {
    case "N":
      position.facing = spinWay === "L" ? "W" : "E";
      position.rotation =
        spinWay === "L" ? position.rotation - 90 : position.rotation + 90;
      break;

    case "E":
      position.facing = spinWay === "L" ? "N" : "S";
      position.rotation =
        spinWay === "L" ? position.rotation - 90 : position.rotation + 90;
      break;

    case "S":
      position.facing = spinWay === "L" ? "E" : "W";
      position.rotation =
        spinWay === "L" ? position.rotation - 90 : position.rotation + 90;
      break;

    case "W":
      position.facing = spinWay === "L" ? "S" : "N";
      position.rotation =
        spinWay === "L" ? position.rotation - 90 : position.rotation + 90;
      break;
  }
  return {
    rotation: position.rotation,
    facing: position.facing,
  };
};

const moveRover = (rover, plateauData) => {
  switch (rover.facing) {
    case "N":
      if (rover.y === plateauData.height - 1) return;

      rover.y += 1;
      return { y: rover.y };

    case "E":
      console.log(rover.x, plateauData.width);
      if (rover.x === plateauData.width - 1) return;

      rover.x += 1;
      return { x: rover.x };

    case "S":
      if (rover.y === 0) return;

      rover.y -= 1;
      return { y: rover.y };

    case "W":
      if (rover.x === 0) return;

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

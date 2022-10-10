export const getListOfActions = (instructions, position) => {
  const listOfInstructions = Array.from(instructions);
  var muteablePosition = position;
  const actions = [];
  listOfInstructions.forEach((letter) => {
    const res = decideWay(letter, muteablePosition);
    actions.push({ ...position, ...res });
  });

  return actions;
};

const decideWay = (letter, position) => {
  switch (letter) {
    case "L":
      return changeDirection("L", position);

    case "R":
      return changeDirection("R", position);

    case "M":
      return moveRover(position);
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

const moveRover = (position) => {
  switch (position.facing) {
    case "N":
      position.y += 1;
      return { y: position.y };

    case "E":
      position.x += 1;
      return { x: position.x };

    case "S":
      position.y -= 1;
      return { y: position.y };

    case "W":
      position.x -= 1;
      return { x: position.x };
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

# Mars Rover
> simple mars rover problem solved in react.js
> https://mars-rover-test.vercel.app/

![image](https://user-images.githubusercontent.com/50970557/194802350-9461241c-f5f3-402d-a8f3-536dc0e89c96.png)

<br/>

## Installation

1 - Clone the repository on your machine.

```
git clone https://github.com/jordaoqualho/MarsRover.git
```

2 - Run `npm i` or `yarn` in the project root to install the dependencies.

3 - Use the `npm start` or `yarn start` command to start the project.

<br/>

## How it works

The rover has a starting point (x,y) and a direction (N,S,E,W) property which describe the initial position and facing direction and its receives commands as a character array.
- (M) Moves the rover forward.
- (L,R) Turns the rover left/right.

  <br/>

## Used Packages

```
AOS
Styled Components
```

<br/>

## Project structure

```
📦MarsRover
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Hero
 ┃ ┃ ┗ 📂LoadingPage
 ┃ ┣ 📂hooks
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📜popUp.js
 ┃ ┃ ┗ 📜rover.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┣ 📜App.js
 ┃ ┃ ┗ 📜routes.js
 ┃ ┣ 📂styles
 ┃ ┣ 📂themes
 ┃ ┗ 📜index.js
 ┣ 📜LICENSE
 ┣ 📜README.md
```

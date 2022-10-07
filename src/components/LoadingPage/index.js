import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

const LoadingPage = () => {
  const container = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      setTimeout(() => {
        container.current.style.opacity = "0";
      }, 600);
      return setTimeout(() => {
        container.current.style.top = "-150%";
      }, 1000);
    }

    const timerId = setInterval(() => {
      setProgress(progress + 5);
    }, 50);

    return () => clearInterval(timerId);
  });

  return (
    <Container
      name="container"
      className="flex_ccc"
      ref={container}
      width={progress}
    >
      <div className="logo flex_cc">
        <h1>
          Healhty<span>Carely</span>
        </h1>
      </div>
      <div className="bar" />
    </Container>
  );
};

export default LoadingPage;

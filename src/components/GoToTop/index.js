import { arrow_blue } from "imgs";
import { useEffect, useRef } from "react";
import { Button } from "./styles";

const GoToTop = () => {
  const button = useRef(null);

  const goTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 600) {
        button.current.style.opacity = "1";
      } else if (scrolled <= 600) {
        button.current.style.opacity = "0";
      }
    });
  }, []);

  return (
    <Button name="button" onClick={() => goTop()} ref={button}>
      <img src={arrow_blue} alt="arrow_blue" />
    </Button>
  );
};

export default GoToTop;

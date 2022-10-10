export function popUp(msg = "", isError = false) {
  const duration = isError ? 6500 : 4500;
  const borderColor = isError ? "var(--error)" : "transparent";
  const targetDiv = document.createElement("div");

  targetDiv.innerHTML = msg;
  targetDiv.setAttribute(
    "style",
    "position:fixed; opacity:0 ;" +
      "transition: var(--fast);" +
      "transform: translate(-50%);" +
      "top:-10%;left:50%;  " +
      "padding: 15px 30px;" +
      "font-weight: 500;" +
      "backdrop-filter: blur(28px);  " +
      "border-radius: 15px; " +
      "margin: 20px; border: none;  " +
      "background-color: var(--contrast);" +
      "font-size: 14px; " +
      "color:var(--background); " +
      "z-index:10005;" +
      "border: 2px dashed " +
      borderColor +
      ";"
  );
  document.body.appendChild(targetDiv);

  setTimeout(function () {
    targetDiv.style.top = "2%";
    targetDiv.style.opacity = "1";
  }, 100);

  setTimeout(function () {
    targetDiv.style.opacity = "0";
    targetDiv.style.top = "-15%";
  }, duration);

  setTimeout(function () {
    targetDiv.innerHTML = "";
  }, duration * 1.5);
}

export default popUp;

export function popUp(msg = "", isError = false) {
  const duration = isError ? 6500 : 4500;
  const borderColor = isError ? "var(--error)" : "transparent";

  var el = document.createElement("div");
  el.setAttribute(
    "style",
    "position:fixed; opacity:0 ;" +
      "transition: var(--fast);" +
      "transform: translate(-50%);" +
      "top:-10%;left:50%;  " +
      "padding: 15px 30px;" +
      "font-weight: 500;" +
      "backdrop-filter: blur(28px);  " +
      "box-shadow: var(--basicShadow); " +
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
  el.innerHTML = msg;

  setTimeout(function () {
    el.style.top = "2%";
    el.style.opacity = "1";
  }, 100);

  setTimeout(function () {
    el.style.opacity = "0";
    el.style.top = "-15%";
  }, duration);

  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, duration * 1.5);

  document.body.appendChild(el);
}

export default popUp;

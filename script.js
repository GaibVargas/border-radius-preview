const rngTopLeft = document.querySelector("#topLeft");
const rngTopRight = document.querySelector("#topRight");
const rngBotLeft = document.querySelector("#botLeft");
const rngBotRight = document.querySelector("#botRight");
const square = document.querySelector(".preview");
const code = document.querySelector("#toCopy");
const btn = document.querySelector("button");

rngTopLeft.addEventListener("input", () => {
  const value = rngTopLeft.value;
  square.style.borderTopLeftRadius = `${value}%`;
  toCopy(square.style.cssText);
});

rngTopRight.addEventListener("input", () => {
  const value = rngTopRight.value;
  square.style.borderTopRightRadius = `${value}%`;
  toCopy(square.style.cssText);
});

rngBotLeft.addEventListener("input", () => {
  const value = rngBotLeft.value;
  square.style.borderBottomLeftRadius = `${value}%`;
  toCopy(square.style.cssText);
});

rngBotRight.addEventListener("input", () => {
  const value = rngBotRight.value;
  square.style.borderBottomRightRadius = `${value}%`;
  toCopy(square.style.cssText);
});

function toCopy(value) {
  code.value = "";
  const lines = value.split(';');
  lines.splice(-1, 1);
  lines.forEach((line, index) => {
    if(index === 0) code.value = " ";
    code.value += `${line};\n`;
  });
}

btn.onclick = event => {
  event.preventDefault();
  code.select();
  code.setSelectionRange(0, 99999);
  document.execCommand("copy");
};

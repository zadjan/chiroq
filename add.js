const ellight = document.getElementById("buton");
const elflash = document.getElementById("flash");

ellight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  elflash.style.cssText = `
  left: ${clientX - 130}px;
  top: ${clientY - 130}px;
  `;
});
const button = document.querySelector(".button");

button.addEventListener("click", onClick);

function onClick() {
  if (document.querySelector(".popover")) {
    document.querySelector(".popover").remove();
    return;
  }
  const popover = document.createElement("div");
  const container = document.querySelector(".container");
  popover.classList.add("popover");
  popover.textContent = "Popover title";
  const popoverText = document.createElement("div");
  popoverText.classList.add("popoverText");
  popoverText.textContent = "This is the text of popover. Cool, yeah?!";
  popover.appendChild(popoverText);
  container.appendChild(popover);
}

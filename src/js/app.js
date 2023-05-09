const button = document.querySelector(".button");

button.addEventListener("click", (event) => onClick(event));

function onClick(event) {
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
  const buttonRect = event.target.getBoundingClientRect();
  popover.style.top = buttonRect.top + buttonRect.height - 130 + "px";
  popover.style.left = buttonRect.left + "px";
  container.appendChild(popover);
}

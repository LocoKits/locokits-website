const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const msg = document.createElement("div");
    msg.textContent = "✔ Shirt toegevoegd aan winkelwagen!";
    msg.style.backgroundColor = "#4caf50";
    msg.style.color = "white";
    msg.style.padding = "1em";
    msg.style.margin = "1em auto";
    msg.style.textAlign = "center";
    msg.style.borderRadius = "5px";
    document.body.insertBefore(msg, document.body.firstChild);
    setTimeout(() => msg.remove(), 3000);
  });
});
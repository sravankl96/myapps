document.addEventListener("DOMContentLoaded", () => {
  const heartGrid = document.getElementById("heart-grid");
  const resetButton = document.getElementById("reset-button");
  const colors = ["grey", "red", "green", "blue"];
  const colorCounts = { grey: 64, red: 0, green: 0, blue: 0 };

  // Initialize grid cells
  for (let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    const heart = document.createElement("span");
    heart.classList.add("heart", "grey");
    heart.innerText = "❤";
    cell.appendChild(heart);
    heartGrid.appendChild(cell);

    // Add click event to change color
    cell.addEventListener("click", () => {
      let currentColorIndex = colors.indexOf(heart.classList[1]);
      let newColorIndex = (currentColorIndex + 1) % colors.length;
      let newColor = colors[newColorIndex];

      // Update counts
      colorCounts[heart.classList[1]]--;
      colorCounts[newColor]++;
      updateCounts();

      // Change heart color
      heart.classList.remove(colors[currentColorIndex]);
      heart.classList.add(newColor);
    });
  }

  // Update color counts display
  function updateCounts() {
    document.getElementById("grey-count").innerText = colorCounts.grey;
    document.getElementById("red-count").innerText = colorCounts.red;
    document.getElementById("green-count").innerText = colorCounts.green;
    document.getElementById("blue-count").innerText = colorCounts.blue;
  }

  updateCounts();

  // Add event listener for reset button
  resetButton.addEventListener("click", () => {
    // Reset all grid cells to grey
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach(heart => {
      const currentColor = heart.classList[1];
      if (currentColor !== "grey") {
        colorCounts[currentColor]--;
        colorCounts["grey"]++;
        heart.classList.remove(currentColor);
        heart.classList.add("grey");
      }
    });
    updateCounts();
  });
});
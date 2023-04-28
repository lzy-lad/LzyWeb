const switcherButton = document.getElementById("mode-switcher");
switcherButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    switcherButton.textContent = "Switch to Light Mode";
  } else {
    switcherButton.textContent = "Switch to Dark Mode";
  }
});

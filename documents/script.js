/* JavaScript Code (in script.js file) */
// Add event listeners to interactive elements
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector(".search-bar input[type='search']");
  const searchButton = document.querySelector(".search-bar button[type='button']");
  const heroButton = document.querySelector(".hero-text button[type='button']");
  const bookButtons = document.querySelectorAll(".book button[type='button']");

  searchInput.addEventListener("focus", function() {
      this.style.borderColor = "#333";
      this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  });

  searchInput.addEventListener("blur", function() {
      this.style.borderColor = "#ccc";
      this.style.boxShadow = "none";
  });

  searchButton.addEventListener("click", function() {
      alert("Search button clicked!");
  });

  heroButton.addEventListener("click", function() {
      alert("Hero button clicked!");
  });

  bookButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          alert("Book button clicked!");
      });
  });
});
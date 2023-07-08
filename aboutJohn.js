// JavaScript code for search functionality
document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.querySelector(".search-input");
  var searchButton = document.querySelector(".search-button");

  searchButton.addEventListener("click", function () {
    var searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {
      // Perform search functionality here
      console.log("Searching for: " + searchTerm);
    }
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      // Enter key is pressed, perform search
      var searchTerm = searchInput.value.trim();

      if (searchTerm !== "") {
        // Perform search functionality here
        console.log("Searching for: " + searchTerm);
      }
    }
  });
});

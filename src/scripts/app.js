console.log("Test");

(function() {
  const mediumViewButton = document.getElementById("medium-view");
  mediumViewButton.addEventListener("click", function() {
    console.log("mediumViewButton clicked");
  });

  const smallViewButton = document.getElementById("small-view");
  smallViewButton.addEventListener("click", function() {
    console.log("smalliewButton clicked");
  });

  const listViewButton = document.getElementById("list-view");
  listViewButton.addEventListener("click", function() {
    console.log("listViewButton clicked");
  });
})();

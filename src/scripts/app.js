console.log("Test");

(function() {
  const mediumViewButton = document.getElementById("large-view");
  let setLargeView = function() {
    document.querySelectorAll(".content-browser").forEach(el => el.className = "content-browser content-browser_large");
    document.querySelectorAll(".content-item").forEach(el => el.className = "content-item content-item_large");
    document.querySelectorAll(".content-item__column_date").forEach(el => el.className = "content-item__column_date content-item__column_hidden");
    document.querySelectorAll(".content-item__column_time").forEach(el => el.className = "content-item__column_time content-item__column_hidden");
    document.querySelectorAll(".content-item__column_size").forEach(el => el.className = "content-item__column_size content-item__column_hidden");
    document.querySelectorAll(".content-item__icon").forEach(el => el.className = "content-item__icon");
  }

  setLargeView();

  mediumViewButton.addEventListener("click", setLargeView);

  const smallViewButton = document.getElementById("small-view");
  smallViewButton.addEventListener("click", function() {
    document.querySelectorAll(".content-browser").forEach(el => el.className = "content-browser content-browser_small");
    document.querySelectorAll(".content-item").forEach(el => el.className = "content-item content-item_small");
    document.querySelectorAll(".content-item__column_date").forEach(el => el.className = "content-item__column_date content-item__column_hidden");
    document.querySelectorAll(".content-item__column_time").forEach(el => el.className = "content-item__column_time content-item__column_hidden");
    document.querySelectorAll(".content-item__column_size").forEach(el => el.className = "content-item__column_size content-item__column_hidden");
    document.querySelectorAll(".content-item__icon").forEach(el => el.className = "content-item__icon");
  });

  const listViewButton = document.getElementById("list-view");
  listViewButton.addEventListener("click", function() {
    document.querySelectorAll(".content-browser").forEach(el => el.className = "content-browser content-browser_list");
    document.querySelectorAll(".content-item").forEach(el => el.className = "content-item content-item_list");
    document.querySelectorAll(".content-item__column_date").forEach(el => el.className = "content-item__column_date");
    document.querySelectorAll(".content-item__column_time").forEach(el => el.className = "content-item__column_time");
    document.querySelectorAll(".content-item__column_size").forEach(el => el.className = "content-item__column_size");
    document.querySelectorAll(".content-item__icon").forEach(el => el.className = "content-item__icon content-item__icon_list");
  });
})();

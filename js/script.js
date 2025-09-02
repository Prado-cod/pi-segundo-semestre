function toggleMenu() {
  const nav = document.querySelector('.menu');
  nav.classList.toggle('active');
}

function toggleSearch() {
  const searchBar = document.querySelector(".search-bar");
  searchBar.classList.toggle("active");

  if (searchBar.classList.contains("active")) {
    searchBar.querySelector("input").focus();
  }
}

function closeSearch() {
  document.querySelector(".search-bar").classList.remove("active");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
  }
});

document.addEventListener("click", (e) => {
  const searchBar = document.querySelector(".search-bar");
  const searchIcon = document.querySelector(".search-icon");

  if (
    searchBar.classList.contains("active") &&
    !searchBar.contains(e.target) &&
    !searchIcon.contains(e.target)
  ) {
    closeSearch();
  }
});

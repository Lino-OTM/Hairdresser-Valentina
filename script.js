const toggleButton = document.getElementsByClassName("hamburger-menu")[0]
const navbarLinks = document.getElementsByClassName("nav__list")[0]

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active")
})
const nav = document.getElementById("navbar")

document.getElementById("hamburger").addEventListener("click", e => {
  e.preventDefault()

  if (nav.classList.contains("open")) {
    nav.classList.remove("open")
  } else {
    nav.classList.add("open")
  }
})
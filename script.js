let themeDots = document.getElementsByClassName("theme-dot")

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode
    console.log("option clicked", mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "dark.css"
  } else {
    document.getElementById("theme-style").href = "main.css"
  }
}

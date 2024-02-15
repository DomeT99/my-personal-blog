export function getTheme() {
  let storage = localStorage.getItem("theme");
  if (storage !== null) {
    document.querySelector("html")?.setAttribute("data-theme", storage!);
  }
}

export function setTheme() {
  let html = document.querySelector("html")?.getAttribute("data-theme");

  if (html == "dark") {
    document.querySelector("html")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else if (html == "light") {
    document.querySelector("html")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("done");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);

  }, 1500);
});
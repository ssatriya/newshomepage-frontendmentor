"strict mode";

window.addEventListener("resize", function (e) {
  const img = document.querySelector(".hero__img");
  if (e.target.screen.width < 376)
    img.src = "./assets/images/image-web-3-mobile.jpg";
  else {
    img.src = "./assets/images/image-web-3-desktop.jpg";
  }
});

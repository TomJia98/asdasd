const frown = document.getElementById("thing");

setInterval(function () {
  frown.style.postition = "absolute";

  frown.style.top = `${Math.floor(Math.random() * 90)}%`;
  frown.style.left = `${Math.floor(Math.random() * 90)}%`;
  frown.style.fontSize = `${Math.random() * 20}em`;
}, 500);

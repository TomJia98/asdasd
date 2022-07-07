const frown = document.getElementById("thing");

setInterval(function () {
  frown.style.postition = "absolute";

  frown.style.top = `${Math.floor(Math.random() * 100)}%`;
  frown.style.left = `${Math.floor(Math.random() * 100)}%`;
  frown.style.fontSize = `${Math.floor(Math.random() * 10)}em`;
}, 1000);

(function () {
  var audio = new Audio(
    "https://drive.google.com/uc?id=1q_BIdyFQ_gF0zqK-45IpECLJYQQ27zyC&export=download"
  );
  audio.loop = true;
  audio.play();
  var controlBtn = document.querySelector("control");
  document.addEventListener("click", (e) =>
    audio.paused ? audio.play() : audio.pause()
  );
})();

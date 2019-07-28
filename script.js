var canvas, ctx, bars = 400, frequency_array;
function initPage() {
  var song = document.getElementById("song").value;
  audio = document.getElementById("audio");
  audio.pause();
  context = new (window.AudioContext || window.webkitAudioContext)();
  analyser = context.createAnalyser();
  audio.src = song + ".mp3";
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  frequency_array = new Uint8Array(analyser.frequencyBinCount);
  canvas = document.getElementById("renderer");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  analyser.fftSize = 4096;
  analyser.smoothingTimeConstant = 0;
  analyser.minDecibels = -90;
  analyser.maxDecibels = -10;
  analyser.getByteFrequencyData(frequency_array);
  document.getElementById("songSelectMenu").style.visibility = "hidden";
  setTimeout(function() {
    audio.load();
    audio.play();
    audio.oncanplaythrough = function() {
      animationLooper();
    }
    audio.addEventListener("ended", function() {
      alert(song + " has ended. Reload the page to select a new song.");
    });
  }, 1000);
}
function animationLooper(){
  canvas = document.getElementById("renderer");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  analyser.getByteFrequencyData(frequency_array);
  var width = canvas.width / bars, height, x;
  for (var i = 0; i < bars; i++) {
    height = Math.pow(frequency_array[i] / 255 * Math.pow(canvas.height, 1/5), 5);
    drawBar(x, canvas.height - height, width, height, i);
    x += width;
  }
  window.requestAnimationFrame(animationLooper);
}
function drawBar(x, y, w, h, index){
  var barcolor = "rgb(" + 255 + ", " + frequency_array[index] + ", " + frequency_array[index] + ")";
  ctx.fillStyle = barcolor;
  ctx.fillRect(x, y, w, h);
}

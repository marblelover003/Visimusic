var canvas, ctx, center_x, center_y, radius = 135, bars = 192, x_end, y_end, bar_height, bar_width = 5, frequency_array;
function initPage(song) {
  audio = document.getElementById("audio");
  audio.pause();
  context = new (window.AudioContext || window.webkitAudioContext());
  analyser = context.createAnalyser();
  audio.src = song + ".mp3";
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  frequency_array = new Uint8Array(analyser.frequencyBinCount);
  canvas = document.getElementById("renderer");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  center_x = canvas.width / 2;
  center_y = canvas.height / 2;
  var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(35, 7, 77, 1)");
  gradient.addColorStop(1, "rgba(204, 83, 51, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(center_x, center_y, radius, 0, 2*Math.PI);
  ctx.stroke();
  analyser.getByteFrequencyData(frequency_array);
  setTimeout(function() {
    audio.load();
    audio.play();
    animationLooper();
  }, 3000);
}
function animationLooper(){
  canvas = document.getElementById("renderer");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  center_x = canvas.width / 2;
  center_y = canvas.height / 2;
  var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(35, 7, 77, 1)");
  gradient.addColorStop(1, "rgba(204, 83, 51, 1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(center_x, center_y, radius, 0, 2*Math.PI);
  ctx.stroke();
  analyser.getByteFrequencyData(frequency_array);
  for(var i = 0; i < bars; i++){
    rads = Math.PI * 2 / bars;
    bar_height = frequency_array[i]*0.7;
    x = center_x + Math.cos(rads * i) * (radius);
    y = center_y + Math.sin(rads * i) * (radius);
    x_end = center_x + Math.cos(rads * i)*(radius + bar_height);
    y_end = center_y + Math.sin(rads * i)*(radius + bar_height);
    drawBar(x, y, x_end, y_end, bar_width, frequency_array[i]);
  }
  window.requestAnimationFrame(animationLooper);
}
function drawBar(x1, y1, x2, y2, width, frequency){
  var lineColor = "rgb(" + 255 + ", " + frequency + ", " + frequency + ")";
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}

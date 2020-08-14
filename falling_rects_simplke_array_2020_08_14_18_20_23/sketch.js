var rectY = [5,100,10];//replace the ??????

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectY.length; i++) {
    rect((i+1) * 100, rectY[i], 50, 25);//replace the question mark
    rectY[i] += 1; // Replace this comment with an explanation
  }
}

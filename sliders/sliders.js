var xSlider, ySlider, wSlider, hSlider, StartSlider,StopSlider;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15);
//   noStroke();

  // create sliders
  
  //xSlider = createSlider(50, 700);
 // xSlider.position(20, 20);
  //ySlider = createSlider(0, 400);
  //ySlider.position(20, 40);
  wSlider = createSlider(0, 500);
  wSlider.position(20, 60);
  hSlider = createSlider(0, 100);
  hSlider.position(20, 80);
  StartSlider = createSlider(0, 360);
  StartSlider.position(20, 100);
  StopSlider = createSlider(0, 360);
  StopSlider.position(20, 120);
  

  
}

function draw() {
    
    
 // var x = xSlider.value();
 // var y = ySlider.value();
  var w = wSlider.value();
  var h = hSlider.value();
  var start = StartSlider.value();
  var stop = StopSlider.value();
  //noStroke()
  fill(150)
  arc(width/2,height/2,w,h,0,radians(stop),PIE);
  

  
 // background(255, 250, 250);
//   text("x", xSlider.x * 2 + rSlider.width, 35);
//   text("y", gSlider.x * 2 + gSlider.width, 65);
//   text("w", bSlider.x * 2 + bSlider.width, 95);

  //
  
  // arc(100, 50, 80, 80, 0, PI + QUARTER_PI);
 
 // arc(479, 300, 280, 280, PI, TWO_PI);

}
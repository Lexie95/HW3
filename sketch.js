
var colorList = ['#FEB7E2', //pink
                 '#1D80F9', //blue
                 '#C1C4D2', //grey
                 '#EAD2F1', //purple
                 '#FDC920', //yellow
                 '#113683'];//darkblue

function setup() {
  
  createCanvas(500, 500);
  background(color('#EAD2F1'));
  
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  
  var a = 50
  for(var x = a; x < 500; x+=a){
    for(var y = a; y < 500; y+=a){
      strokeWeight(3);
      stroke(color(colorHex));
      
      if(random()<0.5){ fill(color('#EAD2F1')); } 
      else { fill(color('#1D80F9')); }

      ellipse(x, y,20);
      
      
      strokeWeight(1);
      stroke(color(colorHex));
      line(x,0,y,500);
      line(0,x,500,y);
      
      fill(color('#1D80F9'));
      var c = 50
      ellipse(x,0,c);
      ellipse(0,y,c);
      ellipse(x,500,c);
      ellipse(500,y,c);
    }
  }

}

function draw(){
  var x = mouseX;
  var y = mouseY;
  var r = random() * 50;
  ellipse(x, y, r,r);
  ellipse(x, width-y,r);
  ellipse(height-x,y,r);
  ellipse(height-x,width-y,r);
  strokeWeight(1);
  //line(250,250,0,y);
  //line(250,250,0, width-y);
  rect(0,0,x,y);
  rect(500-x,500-y,500,500);
  //line(250,250,500,y);
  //line(250,250,500,width-y);

  
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  fill(color(colorHex));
  stroke(color(colorHex));
  
}

function mousePressed(){
  noLoop();
}
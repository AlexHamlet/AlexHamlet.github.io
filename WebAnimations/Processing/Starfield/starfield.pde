Star[] stars = new Star[(height < width ? height: width) * 5];
float speed, direction;
PImage w;
float wx, wy;
boolean wheatley = false;

void setup()
{
  size(screen.width,screen.height); 
  translate(width/2, height/2);
  for(int p = 0;p < stars.length;p++){
    stars[p] = new Star();
  }

  w = loadImage("wheatley.png");
  wx = (-width / 2) * 10;
  wy = (-height / 2) + 20;
}

void draw(){  
  background(0);
  translate(width/2, height/2);
  for(Star s : stars){
    s.update();
    s.show();
  }

  if(wheatley){
  image(w, wx, wy, 62.4, 40);
  wx += speed;
  if(wx > width * 5){
    wx = (-width / 2) * 10;
  }
  }
}

void mousePressed(){
  wheatley = !wheatley;
}

class Star{
  float x,y,z;

  Star(){
    x = random(-width/2, width/2);
    y = random(-height/2, height/2);
    z = random(width);
  }

  void show(){
    fill(255);
    noStroke();

    float sx = map(x / z, 0,1,0,width);
    float sy = map(y / z, 0,1,0,width);
    float r = map(z, 0, width, 8, 0);

    ellipse(sx, sy, r, r);
  }

  void update(){
    speed = map(mouseX, 0, width, 0, 20);
    direction = map(mouseY, 0, height, -1, 1);
    z += speed * direction;
    if(z < 1 || z > width){
      x = random(-width/2, width/2);
      y = random(-height/2, height/2);
      z = random(1, width);
    }
  }
}

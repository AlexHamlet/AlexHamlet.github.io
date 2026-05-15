ArrayList<Box> sponge;
float spin;

void setup(){
  size(400,400, P3D);
  fill(255);
  sponge = new ArrayList<Box>();
  sponge.add(new Box(0,0,0,200));
  spin = 0;
}

void draw(){
  background(0);
  translate(width/2, height/2);
  stroke(255);
  noFill();
  lights();

  rotateX(spin);
  rotateY(spin);
  spin += .01;
  for(Box b : sponge){
    b.show();
  }
  
}

void mousePressed(){
  ArrayList<Box> replace = new ArrayList<Box>();
  for(Box b : sponge){
    replace.addAll(b.sponge());
  }
  sponge = replace;
}

class Box{
  float x,y,z,dim;

  Box(float x, float y, float z, float dim){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dim = dim;
  }

  ArrayList<Box> sponge(){
    ArrayList<Box> boxList = new ArrayList<Box>();
    for(int p = -1;p < 2;p++){
    for(int s = -1;s < 2;s++){
    for(int t = -1;t < 2;t++){
      if(abs(p) + abs(s) + abs(t) > 1){
      Box b = new Box(x + p*dim/3,y + s*dim/3,z + t*dim/3,dim/3);
      boxList.add(b);
      }
    }}}
    return boxList;
  }

  void show(){
    pushMatrix();
    translate(x, y, z);
    fill(255);
    box(dim);
    popMatrix();
  }
}
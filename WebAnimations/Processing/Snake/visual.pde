Snake s;
float scale;
int xdir, ydir;

void setup(){
    size(400,400);
    frameRate(10);
    scale = width/20;
    s = new Snake();
    xdir = 1;
    ydir = 1;
}

void draw(){
    background(0);
    fill(255);
    s.update();
    s.show();
}

void keyPressed() {
    if(keyCode === UP_ARROW){
        ydir = 1;
    }
    if(keyCode === DOWN_ARROW){
        ydir = -1;
    }
    if(keyCode === LEFT_ARROW){
        xdir = -1;
    }
    if(keyCode === RIGHT_ARROW){
        xdir = 1;
    }
    background(255);
}

class Snake{
    float x,y,len;

    Snake(){
        x = 0;
        y = 0;
        len = 3;
    }

    void update(){
        if(x < scale-1 || x > 0){
            x += xdir;
        }
        if(y < scale-1 && y > 0){
            y += ydir;
        }
    }

    void show(){
        rect(x* scale, y* scale, scale, scale);
    }

}
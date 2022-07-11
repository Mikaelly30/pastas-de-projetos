class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.fumaca = loadImage("sprites/smoke.png");
    this.tragetoria = [];
  }

  
  display() {
    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.tragetoria.push(position);
    }
    
    for(var i = 0; i < this.tragetoria.length; i++){
    image(this.fumaca, this.tragetoria[i][0],this.tragetoria[i][1]);
    }
    
  }
}

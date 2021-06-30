class Block{
    constructor(x, y, width, height) {
        var options = {
                
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        this.image=loadImage("block.png")
        World.add(world, this.body);
      }
      display(){
      
        if(this.body.speed<3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          //rect(0,0,this.width, this.height);
          image (this.image,0,0)
          pop();
        }
        else{
          World.remove(world,this.body)
          push()
          this.visibility=this.visibility-5;
          tint (255,this.visibility)
          image (this.image,this.body.position.x,this.body.position.y)
          pop();
          //lives=lives-1;

        }
       
      }
}

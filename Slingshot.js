class Slingshot{
    constructor(bodyA,pointB){
      var options={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.07,
          length: 10
      }
      this.pointB = pointB
      this.sling= Constraint.create(options)
      World.add(world,this.sling)
    }
    
    attach(obj){
        this.sling.bodyA=obj
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        push ();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3)
            stroke(125, 255, 93)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }




}
class Trash {
//added width,height
//deleted angle
    constructor(x, y, width,height) {

      var options = {
          isStatic:true
      } 

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x=x
   this.y=y
      this.width = width;
      this.height =height;
      //deleted the angle option.you can simply create container with width and height
     // Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);

    }

    display(){
      //if angle is not there thn  push pop are not required.
     // push();
     // translate(this.body.position.x, this.body.position.y);
     // rotate(this.body.angle);
      rectMode(CENTER);
      fill("black");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
     // pop();
    }
  };
 
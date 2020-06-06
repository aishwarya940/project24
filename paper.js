class Paper {

    constructor() {

      var options = {
          isStatic:false,
          restituition:0.4,
          friction:0.4,
          density:1.2
      }
      
      this.body = Bodies.circle(100, 680, 40, options);
      this.body.position.x = 100;
      this.body.position.y = 680;
      this.radius = 20;
      
      World.add(world, this.body);

    }

    display(){
      ellipseMode(CENTER);
      fill("white");

      //here in ellipse display updated position of paper not 100,680
      ellipse(this.body.position.x,this.body.position.y, this.radius);
    }
    
  };
  
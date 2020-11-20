class Girl {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("boy.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image,280, 400, this.width, this.height)
    }
  };

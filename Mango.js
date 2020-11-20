class Mango
{
	constructor(x,y,width, height)
	{
		var options={
			isStatic:true,
			restitution:0,
            friction:1,
            }
            
    this.image = loadImage("mango.png")	
	this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
	this.x = x
	this.y = y
	this.width= width
	this.height = height
	World.add(world, this.body);

	}
	display()
	{
			
	   imageMode(CENTER)
	
		image(this.image,this.x,this.y, this.width, this.height);
		
			
	}

}
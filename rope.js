class rope{
	constructor(body1,body2,pointA,pointB)
	{  this.pointA = pointA
	   this.pointB = pointB 
	   this.body1 = body1
	   this.body2 = body2

	   var options = {
		   bodyA : body1,
		   bodyB : body2,
		   pointB : {x:this.pointA, y:this.pointB},
	   } 

	//create rope constraint here

		con = Matter.Constraint.create({
			pointA:{x:10,y:20},
			bodyB:bob1,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
	    });

		World.add(world,con);   

		

	} 

                                                                                   
    //create display() here
	display() { 
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position; 
		console.log("inside display function" )

		strokeWeight(2);
		line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
        line(roof.position.x,roof.position.y,bob1.position.x,bob1.position.y)
	  }  

}   

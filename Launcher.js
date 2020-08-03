class Launcher{
    constructor(point1, body2){
        var options = {
            pointA: point1,
            bodyB: body2,
            length: 50,
            stiffness: 0.1
        }
        this.body = Matter.Constraint.create(options);
        
        World.add(world , this.body);
    }

    attach(body){
        this.body.bodyB = body; 
    }

    fly(){
        this.body.bodyB = null; 
    }

    display(){
        if(this.body.bodyB){
            var posA = this.body.pointA;
            var posB = this.body.bodyB.position;
            rectMode(CENTER);
            push ();
            strokeWeight(4);
            stroke ("yellow");
            line (posA.x, posA.y, posB.x, posB.y);
            pop ();
        }
        
    }
}
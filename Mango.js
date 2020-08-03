class Mango{
    constructor(x, y){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x, pos.y);
        rotate (angle);
        imageMode(CENTER);
        image (this.image, 0, 0, 2*this.radius, 2*this.radius);
        pop ();
    }
}
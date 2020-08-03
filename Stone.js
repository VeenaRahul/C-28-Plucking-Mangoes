class Stone{
    constructor(){
        var options = {
            restitution: 0.5,
            density: 0.5
        }
        this.body = Bodies.circle(200, 400, 25, options);
        this.radius = 25;
       
        this.image = loadImage("stone.png");
        World.add(world , this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        push ();
        fill ("brown")
        image (this.image, pos.x, pos.y, 2*this.radius, 2*this.radius);
        pop ();
    }
}
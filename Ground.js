class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(500, 780, 800, 40, options);
        this.width = 1000;
        this.height = 40;
        World.add(world , this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        push ();
        fill (102, 52, 16);
        rect (pos.x, pos.y, this.width, this.height);
        pop ();
    }
}
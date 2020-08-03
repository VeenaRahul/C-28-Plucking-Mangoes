class Tree{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(700, 400, 400, 800, options);
        this.width = 400;
        this.height = 800;
        this.image = loadImage("images/tree.png");
        World.add(world , this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        push ();
        fill ("brown")
        image (this.image, pos.x, pos.y, this.width, this.height);
        pop ();
    }
}
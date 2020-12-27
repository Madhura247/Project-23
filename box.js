class Box {
    constructor(x, y, height, angle) {
        var Box_options = {
            'restitution' : 0,
            isStatic : true,
        }

        this.body = Bodies.rectangle(x, y, height, Box_options);
        this.width = 20;
        this.height = height;
        this.angle = angle;

        World.add(world, this.body);
    }


    display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y)
    rotate(angle);

    rectMode(CENTER);
    fill ("red")
    stroke("red");
    rect (0, 0, this.width, this.height);
   
    pop();
    }

    }

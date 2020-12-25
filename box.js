class Box {
    constructor(x, y, width, height) {
        var Box_options = {
            'restitution' : 0,
            isStatic : true,
        }

        this.body = Bodies.rectangle(x, y, width, height, Box_options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }


    display() {
    var pos = this.body.position;
    
    translate(pos.x, pos.y)
    rectMode(CENTER);
    fill ("red")
    rect (0, 0, this.width, this.height);

    }

    }












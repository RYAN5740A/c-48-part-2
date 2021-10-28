class ParentClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(100,100, 100, 100, options);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
        console.log("Parent Class")
      }
      display(){
        var angle = this.body.angle;
        push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, 100, 100,100, 100);
        pop();
      }
}
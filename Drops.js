class Drops
{
    constructor(x,y) {
        var options={
            restitution:0.1,
            friction:0.001,
           
        }
    this.x=x
    this.y=y
    this.body = Bodies.circle(this.x,this.y,5,options)
    World.add(world, this.body);
    }
    
    update(){
        if (this.body.position.y >height) {
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display()
    {
    var boss = this.body.position;
    ellipseMode(CENTER)
    fill("skyblue")
    ellipse(boss.x,boss.y,5,5);
    }
}
class Rope{

    constructor(objA,objB,offX,offY) {
        
        var options = 
        {
            bodyA:objA.body,
            bodyB:objB.body
            pointB:{x:offX,y:offY},
            stiffness:0.05,
            length:10

        }

        this.posA = objA.body.position;
        this.posB = ;

        this.connection = Constraint.create(options);
        World.add(world,this.connection)

    }


    display(){
        
        line(this.posA.x,this.posA.y,this.posB.x,this.posB.y)

    }

}
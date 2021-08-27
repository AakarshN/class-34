class String{

    constructor(BodyA, PointB){
    var options= {
            bodyA: BodyA,
            pointB: PointB,
            stiffness: 1,
            length: 400
        }
        this.pointB= PointB

        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
    push();
       var A= this.rope.bodyA.position
       var B= this.pointB
        strokeWeight(4)
       line(A.x, A.y, B.x, B.y);
    pop();
    }
} 
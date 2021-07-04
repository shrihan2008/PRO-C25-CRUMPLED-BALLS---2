class Launch{
    constructor(bodyA,pointB){
            var options =
            {
                bodyA:bodyA,
                pointB:pointB,
                stifffness:0.5,
                length:10
            }
            this.pointB=pointB
             this.launch=Constraint.create(options)
             World.add(world,this.sling)
    }
    fly()
    {
        this.launch.bodyA=null
    }

  
  display(){
  if(this.sling.bodyA){
        var pointA=this.launch.bodyA.position
        var pointB=this.pointB
        strokeWeight(2)
         line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
    }
}
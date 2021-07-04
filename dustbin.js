class Dustbin
{
constructor(x,y,width,height){
   var options= {
  isStatic:true,    
  friction:0.5,
   density:1.2
    }
   this.body = Bodies.rectangle(x, y, width, height, options);
 this.width = width;
   this.height = height;
    
    World.add(world, this.body);
}
display(){
        
  var pos =this.body.position;
  rectMode(CENTER);
   fill("yellow")
    rect(pos.x, pos.y, this.width, this.height);
    
}
}
//class Dustbin 
//{ 
 //   constructor(x,y) 
  //  { 
  //      this.x=x;
     //    this.y=y; 
   //      this.dustbinWidth=200;
//   this.dustbinHeight=213; 
      //   this.wallThickness=20; 
    /// /   this.image=loadImage("bin.png") 
       // this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
        // this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
       //  this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
      ////   World.add(world, this.rightWallBody); }
    //}

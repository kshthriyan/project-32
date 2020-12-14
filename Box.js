class Box {
  constructor(x, y, width, height) {
    var options = {
       
        restitution :0.4,
        friction :0.1,
        //isStatic:true
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;

  }
  display(){

        if(this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          pop();
        //}
      }
  }
       score(){
         if (this.Visibility < 0 && this.Visibility > -1005){
           score++;
         }
       }
  

}
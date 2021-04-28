class stone {
    constructor(x,y){
        var opt = {
            isStatic:false, 
            restitution:0, 
            friction:1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,20,opt);
        World.add(world,this.body)
        this.image = loadImage("stone.png");
        
        
        this.x=x ;
        this.y=y ;
        this.r=80;
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        
    }
}
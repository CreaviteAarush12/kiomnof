class Bird {
    constructor(x,y) {

        var options = { 
            isStatic:false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
       
    }

    display() {

        var pos=this.body.postition;

        push ()
        translate(pos.x,pos.y)
        ellipseMode (RADIUS)
        storkeWeight(3)
        Fill(255,0,255)
        ellipse(0,0,this.r,this.r)
        Pop()
    }




}
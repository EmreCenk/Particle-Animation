

var canvas = document.querySelector("canvas") //selecting the canvas from the html


//Making canvas full screen:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("mousemove",mouse_was_moved)
//Setting a variable for the canvas 2d context object:

var c = canvas.getContext("2d");


class ball{
    constructor(x,y,radius, vx, vy, color="black"){
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.vx=vx;
        this.vy = vy;
        this.color=color;
    }
    update_position(){
        if (this.x-this.radius<0 && this.vx<0){
            this.vx*=-1;

        }
        if (this.x+this.radius>window.innerWidth && this.vx>0){
            this.vx*=-1;
   
        }
        if (this.y-this.radius<0 && this.vy<0){
            this.vy*=-1;
        }
        else if (this.y+this.radius>window.innerHeight && this.vy>0){
            this.vy*=-1;
        }
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2);
        c.fillStyle = this.color;
        c.fill();

    }
}

var circ_num = 50;
var velinterval = 20;
var circles = [];

//Generating circle coordinates and velocities::
for (i = 0; i<circ_num; i++){
    let xc = Math.random()*window.innerWidth;
    let yc= Math.random()*window.innerHeight;
    let vxc = velinterval*(Math.random()-0.5);
    let vyc = velinterval*(Math.random()-0.5);
    let radius = Math.random()*5;
    let cur_ob = new ball(xc,yc,radius,vxc,vyc);
    circles.push(
        cur_ob
    );
}

function mouse_was_moved(event){
    let mouse_x = event.x;
    let mouse_y = event.y;
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);

    for (i=0; i<circ_num; i++){
        //getting variables:
        cur = circles[i];
        c.beginPath();
        c.arc(cur.x,cur.y,cur.radius,0,Math.PI*2);
        c.fill()

        
        if (cur.x-cur.radius<0 && cur.vx<0){
            cur.vx*=-1;

        }
        if (cur.x+cur.radius>window.innerWidth && cur.vx>0){
            cur.vx*=-1;   
        }

        if (cur.y-cur.radius<0 && cur.vy<0){
            cur.vy*=-1;
        }
        else if (cur.y+cur.radius>window.innerHeight && cur.vy>0){
            cur.vy*=-1;

        }

        //updating coordinates:
        cur.x+=cur.vx;
        cur.y+=cur.vy;
        
        


    }


}
animate()
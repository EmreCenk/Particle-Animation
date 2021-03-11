

var canvas = document.querySelector("canvas") //selecting the canvas from the html


//Making canvas full screen:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Setting a variable for the canvas 2d context object:

var c = canvas.getContext("2d");

var coordinates = [];
var velocities = [];
var radii = [];
var circ_num = 80;
var velinterval = 20;

//Generating circle coordinates and velocities::
for (i = 0; i<circ_num; i++){
    coordinates.push([Math.random()*window.innerWidth,Math.random()*window.innerHeight]);
    velocities.push([velinterval*(Math.random()-0.5),velinterval*(Math.random()-0.5)]);
    radii.push(15);
    //Math.random()*20+10
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);

    for (i=0; i<circ_num; i++){
        //getting variables:
        let x = coordinates[i][0];
        let y = coordinates[i][1];
        let vx = velocities[i][0];
        let vy = velocities[i][1];    
        let radius = radii[i];
        c.beginPath();
        c.arc(x,y,radius,0,Math.PI*2);
        c.fill()
        console.log(vx,vy);
        
        if (x-radius<0 && vx<0){
            velocities[i][0]*=-1;
            let vx = velocities[i][0];

        }
        if (x+radius>window.innerWidth && vx>0){
            velocities[i][0]*=-1;
            let vx = velocities[i][0];
   
        }
        if (y-radius<0 && vy<0){
            velocities[i][1]*=-1;
            let vy = velocities[i][1];  
        }
        else if (y+radius>window.innerHeight && vy>0){
            velocities[i][1]*=-1;
            let vy = velocities[i][1];  
        }

        //updating coordinates:
        coordinates[i][0]+=vx;
        coordinates[i][1]+=vy;
        
        


    }


}
animate()


var canvas = document.querySelector("canvas") //selecting the canvas from the html


//Making canvas full screen:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Setting a variable for the canvas 2d context object:

var c = canvas.getContext("2d");

var x,y,w,h;

x=100;
y=100;
w=50;
h=50;

//rectangles:
c.fillStyle = "green";
c.fillRect(x,y,w,h);

c.fillStyle = "rgba(255,0,0,0.7";
c.fillRect(111,222,333,444);


//lines:
c.fillStyle = "rgba(10,0,0)";
c.moveTo(200,200);
c.lineTo(200,300);
c.lineTo(300,200);
c.lineTo(234,532);
c.fill();


//DRAWING AUDI LOGO:
c.lineWidth=8;
for (i=0; i<4; i++){
    c.beginPath(); //resetting path so that the line and the circle are not connected
    // Arcs and circles:
    c.strokeStyle="black";
    c.arc(100+i*65,100,50,0,Math.PI*2);
    c.stroke();
    // c.stroke();

}


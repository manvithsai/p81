canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle=red;
ctx.lineWidth=6;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=blue;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=green;
ctx.lineWidth=5;
ctx.arc(255,217,50,10,4*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=green;
ctx.lineWidth=5;
ctx.arc(260,225,60,15,6*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=green;
ctx.lineWidth=5;
ctx.arc(265,230,70,20,8*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=green;
ctx.lineWidth=5;
ctx.arc(270,235,80,25,10*Math.PI);
ctx.stroke();
function draw() {
    var canvas = document.getElementById('mainImg');
    var ctx = canvas.getContext('2d');

    console.log("Stop!");
    var aX = document.getElementById("AX").value;
    var aY = document.getElementById("AY").value;
    var bX = document.getElementById("BX").value;
    var bY = document.getElementById("BY").value;
    var cX = document.getElementById("CX").value;
    var cY = document.getElementById("CY").value;
    var dX = document.getElementById("DX").value;
    var dY = document.getElementById("DY").value;

    //start drawing
    ctx.beginPath();
    ctx.strokeStyle="#008b8b";
    ctx.moveTo(aX,aY);
    ctx.lineTo(bX,bY);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="#8b008b";
    ctx.moveTo(cX,cY);
    ctx.lineTo(dX,dY);
    ctx.stroke();

    var x,y;

    ctx.fillStyle = 'rgb(18, 18, 135)';

    for(x=0;x<800;x++)
        for(y=0;y<450; y++)
        {
         det1=aX*bY*1 + bX*y*1 + x*aY*1 - 1*bY*x - aX*y*1 - bX*aY*1;
         det2=cX*dY*1 + dX*y*1 + x*cY*1 - 1*dY*x - cX*y*1 - dX*cY*1;

         //dakr magenta
         if((det1>0) && (det2<0)) {
             ctx.fillStyle='#008b8b';
             ctx.fillRect(x,y,1,1);
         }

         //main aim, dark blue
         if((det1>0)&&(det2>0)){
             ctx.fillStyle = 'rgb(18, 18, 135)';
             ctx.fillRect(x,y,1,1);
         }
         if((det1<0)&&(det2>0)){
             ctx.fillStyle = '#8b008b';
             ctx.fillRect(x,y,1,1);
         }
        }
}
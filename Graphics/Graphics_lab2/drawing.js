//you should better open main.html and see what it`ll draw for better understanding

function drawLine(stX,stY, fnX,fnY) {
    //just a sweetie to draw lines more comfortable

    var canvas = document.getElementById('mainImg');
    var ctx = canvas.getContext('2d');


    ctx.moveTo(stX,stY);
    ctx.lineTo(fnX,fnY);
}

function drawIceLine (stX,stY, fnX,fnY, step) {
    //drawing line with one more part we need
    //height means how long this part will be
    var canvas = document.getElementById('mainImg');
    var ctx = canvas.getContext('2d');

    //determines coordinates
    var midX,midY,midhighX,midhighY;

    midX = (stX + fnX)/2;
    midY = (stY + fnY)/2;

    //successfully googled calculations above to find coords of point after rotation at angle A

    var A = 270 * Math.PI/180;

        var tempX = (midX - stX) * Math.cos(A) - (midY - stY) * Math.sin(A) + midX;
        var tempY = (midX - stX) * Math.sin(A) + (midY - stY) * Math.cos(A) + midY;

        var height = 7.5;
        midhighX = (midX + height * tempX) / (1 + height);
        midhighY = (midY + height * tempY) / (1 + height);

        var currentStep = step;
    //drawing
    // var colorString = "rgb(" + (currentStep*15) + "," + (140 + currentStep * 20) + "," + (140 + currentStep *20) + ")";
    // ctx.strokeStyle= colorString;

    if (step){
        drawIceLine(stX, stY, midX, midY,currentStep-1);
        drawIceLine(midX, midY, midhighX, midhighY,currentStep-1);
        drawIceLine(midhighX, midhighY, midX, midY,currentStep-1);
        drawIceLine(midX, midY, fnX, fnY,currentStep-1);
    } else{
        drawLine(stX, stY, midX, midY);
        drawLine(midX, midY, midhighX, midhighY);
        drawLine(midhighX, midhighY, midX, midY);
        drawLine(midX, midY, fnX, fnY);
    }
}

function draw() {
    var canvas = document.getElementById('mainImg');
    var ctx = canvas.getContext('2d');

    var step = document.getElementById("step").value;
    step--;
    //triangle drawing block
    ctx.beginPath();
    ctx.strokeStyle="rgb(0,140,140)";
  
    drawIceLine(200,375,400,50, step);
    drawIceLine(400,50,600,375, step);
    drawIceLine(600,375,200,375, step);
    ctx.stroke();
}

function clearCanvas() {
    var canvas = document.getElementById('mainImg');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
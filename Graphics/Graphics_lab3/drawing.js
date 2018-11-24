function drawBezier(x, y) {
    var canvas = document.getElementById('mainImg');
    var ctx = canvas.getContext('2d');

    var i;
    var t;

    ctx.strokeStyle="rgb(51,100,51)";
    for (t = 0.0; t < 1.0; t += 0.00005)
    {
        var xt = Math.pow(1-t, 3) * x[0] + 3 * t * Math.pow(1-t, 2) * x[1] +
        3 * Math.pow(t, 2) * (1-t) * x[2] + Math.pow(t, 3) * x[3];

        var yt = Math.pow(1-t, 3) * y[0] + 3 * t * Math.pow(1-t, 2) * y[1] +
        3 * Math.pow(t, 2) * (1-t) * y[2] + Math.pow(t, 3) * y[3];

        ctx.fillRect(xt, yt, 0.5, 0.5);
    }


    ctx.fillStyle="rgb(41,173,41)";
    for (i=0; i<4; i++){
        ctx.fillRect(x[i], y[i], 5, 5);
    }

    //sign the points
    ctx.fillStyle="darkgreen";
    ctx.font = 'bold 20px bachnschrift';

    for(i=0; i<4; i++){
        ctx.fillText(""+(i+1), x[i]-2, y[i]-5);
    }
}

function draw() {
    var X = [0, 0, 0, 0];
    var Y = [0, 0, 0, 0];

    X[0]=document.getElementById('x1').value;
    X[1]=document.getElementById('x2').value;
    X[2]=document.getElementById('x3').value;
    X[3]=document.getElementById('x4').value;

    Y[0]=document.getElementById('y1').value;
    Y[1]=document.getElementById('y2').value;
    Y[2]=document.getElementById('y3').value;
    Y[3]=document.getElementById('y4').value;

    //var step = document.getElementById("step").value;
    drawBezier(X, Y);
}

function clearCanvas() {
    var canvas = document.getElementById('mainImg');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
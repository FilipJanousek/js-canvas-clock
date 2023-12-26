// Formula for converting degrees to radians 
// -----------------------------------------
// Radians = Degrees × π/180°

// Formula for rotation
// ------------------------
// x' = x*cos(a) - y*sin(a)
// y' = x*sin(a) + y*cos(a)

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.convertPointToCartesian();
    }

    convertPointToCartesian() {
        this.y = -this.y;
    }
}

function convertPointToCartesian(point) {
    return new Point(point.x, -point.y);
}

function sabDrawLines(ctx, points, color = 'black', width = '1', fill = false) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    points.forEach(point => {
        ctx.lineTo(point.x, point.y)
    });

    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.stroke();
    }

    ctx.closePath();
}

function sabDrawText(ctx, text, point, color = 'black', font = '20px Arial') {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, point.x, point.y);
}

function sabDrawCircle(ctx, point, radius, color = 'black', width = '1', fill = false) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color;

    if (fill) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.stroke();
    }
    
    ctx.closePath();
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.translate(canvas.width / 2, canvas.height / 2);

let counter = 0;

function animate() {
    const date = new Date();

    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    const seconds = (360 / 60) * ss;
    const minutes = (360 / 60) * mm + (360 / 60) * (ss / 60);
    const hours = (360 / 12) * hh + (360 / 12) * (mm / 60) + (360 / 12) * (ss / 60 / 60);
    const divisor = -180

    counter = counter + 1;

    ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2)

    // draw numbers
    sabDrawText(ctx, '1', new Point(75, 125), 'black', '42px Arial');
    sabDrawText(ctx, '2', new Point(135, 65), 'black', '42px Arial');
    sabDrawText(ctx, '3', new Point(160, -15), 'black', '42px Arial');
    sabDrawText(ctx, '4', new Point(135, -95), 'black', '42px Arial');
    sabDrawText(ctx, '5', new Point(75, -155), 'black', '42px Arial');
    sabDrawText(ctx, '6', new Point(-12, -180), 'black', '42px Arial');
    sabDrawText(ctx, '7', new Point(-95, -155), 'black', '42px Arial');
    sabDrawText(ctx, '8', new Point(-155, -95), 'black', '42px Arial');
    sabDrawText(ctx, '9', new Point(-185, -15), 'black', '42px Arial');
    sabDrawText(ctx, '10', new Point(-160, 65), 'black', '42px Arial');
    sabDrawText(ctx, '11', new Point(-105, 125), 'black', '42px Arial');
    sabDrawText(ctx, '12', new Point(-25, 150), 'black', '42px Arial');

    // author
    sabDrawText(ctx, 'Saburo Toshiro', new Point(175, -240), 'black', '10px Arial');

    // center circle
    sabDrawCircle(ctx, new Point(0, 0), 10, 'black', 1, fill = true);

    angleHour = ((hours - 90) * Math.PI / -180);
    angleMinute = ((minutes - 90) * Math.PI / -180);
    angleSecond = ((seconds - 90) * Math.PI / -180);

    sabDrawLines(ctx, [
        // hours hand
        new Point(0 * Math.cos(angleHour) - (-6) * Math.sin(angleHour), 0 * Math.sin(angleHour) + (-6) * Math.cos(angleHour)),
        new Point(125 * Math.cos(angleHour) - (-6) * Math.sin(angleHour), 125 * Math.sin(angleHour) + (-6) * Math.cos(angleHour)),
        new Point(125 * Math.cos(angleHour) - 6 * Math.sin(angleHour), 125 * Math.sin(angleHour) + 6 * Math.cos(angleHour)),
        new Point(0 * Math.cos(angleHour) - 6 * Math.sin(angleHour), 0 * Math.sin(angleHour) + 6 * Math.cos(angleHour)),
        new Point(0 * Math.cos(angleHour) - 6 * Math.sin(angleHour), 0 * Math.sin(angleHour) + 6 * Math.cos(angleHour)),
    ], 'black', 1, fill = true);

    sabDrawLines(ctx, [
        // minutes hand
        new Point(0 * Math.cos(angleMinute) - 4 * Math.sin(angleMinute), 0 * Math.sin(angleMinute) + 4 * Math.cos(angleMinute)),
        new Point(185 * Math.cos(angleMinute) - 4 * Math.sin(angleMinute), 185 * Math.sin(angleMinute) + 4 * Math.cos(angleMinute)),
        new Point(185 * Math.cos(angleMinute) - (-4) * Math.sin(angleMinute), 185 * Math.sin(angleMinute) + (-4) * Math.cos(angleMinute)),
        new Point(0 * Math.cos(angleMinute) - (-4) * Math.sin(angleMinute), 0 * Math.sin(angleMinute) + (-4) * Math.cos(angleMinute)),
        new Point(0 * Math.cos(angleMinute) - 4 * Math.sin(angleMinute), 0 * Math.sin(angleMinute) + 4 * Math.cos(angleMinute)),
    ], 'black', 1, fill = true);

    sabDrawLines(ctx, [
        // second hand
        new Point(0 * Math.cos(angleSecond) - 2 * Math.sin(angleSecond), 0 * Math.sin(angleSecond) + 2 * Math.cos(angleSecond)),
        new Point(185 * Math.cos(angleSecond) - 2 * Math.sin(angleSecond), 185 * Math.sin(angleSecond) + 2 * Math.cos(angleSecond)),
        new Point(185 * Math.cos(angleSecond) - (-2) * Math.sin(angleSecond), 185 * Math.sin(angleSecond) + (-2) * Math.cos(angleSecond)),
        new Point(0 * Math.cos(angleSecond) - (-2) * Math.sin(angleSecond), 0 * Math.sin(angleSecond) + (-2) * Math.cos(angleSecond)),
        new Point(0 * Math.cos(angleSecond) - 2 * Math.sin(angleSecond), 0 * Math.sin(angleSecond) + 2 * Math.cos(angleSecond)),
    ], 'red', 1, fill = true);


    // circle of second hand
    sabDrawCircle(ctx, new Point(0, 0), 6, 'red', 1, fill = true);

    // inner circle
    sabDrawCircle(ctx, new Point(0, 0), 200, 'black', 5);

    // outer circle
    sabDrawCircle(ctx, new Point(0, 0), 220, 'black', 15);


    let i = 0;
    // drawn dashes for minutes
    for (i = 0; i < 360; i = i + 6) {
        sabDrawLines(ctx, [
            new Point(0 * Math.cos(i * Math.PI / divisor) + 190 * Math.sin(i * Math.PI / divisor), 0 * Math.sin(i * Math.PI / divisor) - 190 * Math.cos(i * Math.PI / divisor)),
            new Point(0 * Math.cos(i * Math.PI / divisor) + 200 * Math.sin(i * Math.PI / divisor), 0 * Math.sin(i * Math.PI / divisor) - 200 * Math.cos(i * Math.PI / divisor)),
        ], 'black', 2);
    }

    // drawn dashes for hours
    for (i = 0; i < 360; i = i + 30) {
        sabDrawLines(ctx, [
            new Point(0 * Math.cos(i * Math.PI / divisor) + 190 * Math.sin(i * Math.PI / divisor), 0 * Math.sin(i * Math.PI / divisor) - 190 * Math.cos(i * Math.PI / divisor)),
            new Point(0 * Math.cos(i * Math.PI / divisor) + 200 * Math.sin(i * Math.PI / divisor), 0 * Math.sin(i * Math.PI / divisor) - 200 * Math.cos(i * Math.PI / divisor)),
        ], 'black', 5);
    }

    requestAnimationFrame(animate);
}

animate()
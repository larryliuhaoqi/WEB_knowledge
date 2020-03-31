var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

document.getElementById("myBox").oncontextmenu = function (e) {
    e.preventDefault();
};

document.getElementById("myBox").onmouseup = function (oEvent) {
    if (!oEvent) oEvent = window.event;
    if (oEvent.button == 2) {
        var x = event.x;
        var y = event.y;
        var dx = (Math.random() - 0.5) * 20;
        var dy = (Math.random() - 0.5) * 20;
        squareArray.push(new Square(x, y, dx, dy, radius));
    }
}

window.addEventListener('click',
    function (event) {
        // console.log(event);
        var x = event.x;
        var y = event.y;
        var dx = (Math.random() - 0.5) * 20;
        var dy = (Math.random() - 0.5) * 20;
        circelArray.push(new Circle(x, y, dx, dy, radius));
    });


var quanX = 5;
var quanY = 6;
c.fillStyle = 'rgba(2,0,0,0.5)';
c.strokeStyle = 'rgba(2,0,0,0.5)';
var radius = 50;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.stroke();
        //c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y += this.dy;

        this.draw();
    }
}

function Square(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {

        c.fillRect(this.x, this.y, this.radius, this.radius);
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y += this.dy;

        this.draw();
    }
}

var circelArray = [];

for (let i = 0; i < quanX; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 20;
    var dy = (Math.random() - 0.5) * 20;
    circelArray.push(new Circle(x, y, dx, dy, radius))

}

var squareArray = [];

for (let i = 0; i < quanY; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 20;
    var dy = (Math.random() - 0.5) * 20;
    squareArray.push(new Square(x, y, dx, dy, radius))

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circelArray.length; i++) {
        circelArray[i].update();
    }
    for (let i = 0; i < squareArray.length; i++) {
        squareArray[i].update();
    }
}

animate();
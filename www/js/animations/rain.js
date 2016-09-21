var rain = [], drops = [];

var gravity = 0.2;
var wind = 0.015;
var rain_chance = 0.4;

window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };

var canvas = document.getElementById('rain');
var ctx = canvas.getContext('2d');

var w = window.innerWidth

if (w <= 320) {
  console.log('this is an iphone 5');
  canvas.height = 373;
} else if ( w > 310 && w <= 375) {
  console.log('this is an iphone 6');
  canvas.height = 392;
} else if ( w > 375 && w <= 414) {
  console.log('this is an iphone 6plus');
  canvas.height = 403;
};

// canvas.width = 800;
// canvas.height = 399;


//--------------------------------------------

var Vector = function(x, y) {

  this.x = x || 0;
  this.y = y || 0;
};

Vector.prototype.add = function(v) {

  if (v.x != null && v.y != null) {

    this.x += v.x;
    this.y += v.y;

  } else {

    this.x += v;
    this.y += v;
  }

  return this;
};

Vector.prototype.copy = function() {

  return new Vector(this.x, this.y);
};

//--------------------------------------------

var Rain = function() {

  this.pos = new Vector(Math.random() * canvas.width, -50);
  this.prev = this.pos;

  this.vel = new Vector();
};

Rain.prototype.update = function() {

  this.prev = this.pos.copy();

  this.vel.y += gravity;
  this.vel.x += wind;

  this.pos.add(this.vel);
};

Rain.prototype.draw = function() {

  ctx.beginPath();
  ctx.moveTo(this.pos.x, this.pos.y);
  ctx.lineTo(this.prev.x, this.prev.y);
  ctx.stroke();
};

//--------------------------------------------

var Drop = function(x, y) {

  var dist = Math.random() * 7;
  var angle = Math.PI + Math.random() * Math.PI;

  this.pos = new Vector(x, y);

  this.vel = new Vector(
    Math.cos(angle) * dist,
    Math.sin(angle) * dist
    );
};

Drop.prototype.update = function() {

  this.vel.y += gravity;

  this.vel.x *= 0.95;
  this.vel.y *= 0.95;

  this.pos.add(this.vel);
};

Drop.prototype.draw = function() {

  ctx.beginPath();
  ctx.arc(this.pos.x, this.pos.y, 1, 0, Math.PI * 2);
  ctx.fill();
};

//--------------------------------------------

function update() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var i = rain.length;
  while (i--) {

    var raindrop = rain[i];

    raindrop.update();

    if (raindrop.pos.y >= canvas.height) {

      var n = Math.round(4 + Math.random() * 4);

      while (n--)
      drops.push(new Drop(raindrop.pos.x, canvas.height));

      rain.splice(i, 1);
    }

    raindrop.draw();
  }

  var i = drops.length;
  while (i--) {

    var drop = drops[i];
    drop.update();
    drop.draw();

    if (drop.pos.y > canvas.height) drops.splice(i, 1);
  }

  if (Math.random() < rain_chance) rain.push(new Rain());

  requestAnimFrame(update);
}

function init() {

  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(60,135,235,1)';
  ctx.fillStyle = 'rgba(60,135,235,1)';

  update();
}

init();
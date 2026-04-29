let px, py; //팩맨위치
let pd; //팩맨크디

let dx; //콩위치
let dy;
let dActive; //콩생사여부
let sSize; //콩크기

let wx = 100; //벽위치
let wy = 100;
let ww = 300; //벽넓이
let wh = 15; //벽높이

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  fill(0, 0, 275);
  rect(wx, wy, ww, wh);
}

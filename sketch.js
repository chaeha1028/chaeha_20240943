let px, py; //팩맨위치
let pd; //팩맨크디

let dx; //콩위치
let dy;
let dActive; //콩생사여부
let dSize; //콩크기

function drawWall(wx, wy, ww, wh){
  rect(wx, wy, ww, wh);
} //벽그리기함수

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  fill(0, 0, 180);

  //위쪽 벽
  drawWall(50, 70, 310, 35);
  drawWall(420, 70, 310, 35);
  drawWall(50, 70, 25, 130);
  drawWall(725, 70, 25, 130);
  //아래쪽 벽
  drawWall(50, 500, 700, 25);
  drawWall(50, 405, 25, 120);
  drawWall(725, 405, 25, 120);

}

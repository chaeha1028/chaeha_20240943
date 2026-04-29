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
  drawWall(50, 70, 35, 130);
  drawWall(725, 70, 35, 130);
  //아래쪽 벽
  drawWall(50, 500, 700, 35);
  drawWall(50, 415, 35, 120);
  drawWall(725, 415, 35, 120);

  //위쪽 중간 홈
  drawWall(360, 40, 25, 80);
  drawWall(415, 40, 25, 80);
  drawWall(360, 120, 80, 25);

  //좌우 중간 홈
  //좌우 워프 통로
}

let px, py; //팩맨위치
let pd = 10; //팩맨크디

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
  stroke(0, 191, 255);
  strokeWeight(3);

  //위쪽 벽
  drawWall(50, 70, 310, 35);
  drawWall(420, 70, 310, 35);
  drawWall(50, 70, 35, 175);
  drawWall(725, 70, 35, 175);

  //아래쪽 벽
  drawWall(50, 500, 700, 35);
  drawWall(50, 370, 35, 165);
  drawWall(725, 370, 35, 165);

  //위쪽 중간 홈
  drawWall(360, 70, 25, 80);
  drawWall(415, 70, 25, 80);
  drawWall(360, 150, 80, 25);

  //좌우 워프 통로
  drawWall(0, 245, 85, 30);
  drawWall(0, 340, 85, 30);
  drawWall(725, 245, 85, 30);
  drawWall(725, 340, 85, 30);

  //내부 중간 장애물 
  drawWall(360, 250, 90, 25);
  drawWall(360, 275, 25, 80);
  drawWall(360, 355, 90, 25);
  drawWall(425, 275, 25, 80);

  //왼쪽 내부 장애물
  drawWall(130, 150, 140, 25);
  drawWall(130, 150, 35, 130);
  drawWall(200, 200, 140, 25);

}

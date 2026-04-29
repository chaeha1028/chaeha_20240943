let px, py; //팩맨위치
let pd = 20; //팩맨크디

let dx; //콩위치
let dy;
let dActive; //콩생사여부
let dSize; //콩크기

function drawWall(wx, wy, ww, wh){
  rect(wx, wy, ww, wh);
} //벽그리기함수

function drawWalls(){
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

  drawWall(335, 435, 130, 15);
  drawWall(390, 415, 15, 50);

  //왼쪽 내부 장애물
  drawWall(130, 150, 140, 25);
  drawWall(130, 150, 35, 130);
  drawWall(200, 210, 120, 25);

  drawWall(265, 390, 25, 80);
  drawWall(130, 390, 25, 80);
  drawWall(130, 445, 160, 25);
  drawWall(150, 330, 150, 15);

  //오른쪽 내부 장애물
  drawWall(510, 160, 180, 25);
  drawWall(510, 160, 25, 120);
  drawWall(665, 160, 25, 120);
  drawWall(590, 280, 100, 25);

  drawWall(520, 380, 25, 30);
  drawWall(520, 355, 150, 25);
  drawWall(645, 435, 25, 30);
  drawWall(520, 410, 150, 25);
}

function drawPacman(){
    //팩맨 캐릭터
  fill(255, 255, 0);
  noStroke();
  arc(px, py, pd, pd, 0.3, TWO_PI - 0.3);
}

function movePacman(){
  if (keyIsDown(LEFT_ARROW)) px -= 3;
  if (keyIsDown(RIGHT_ARROW)) px += 3;
  if (keyIsDown(UP_ARROW)) py -= 3;
  if (keyIsDown(DOWN_ARROW)) py += 3;
}

function setup() {
  createCanvas(800, 600);

  px = 110;
  py = 300;
}

function draw() {
  background(0);

  drawWalls();
  drawPacman();
  movePacman();

}

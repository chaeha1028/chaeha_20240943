let px, py; //팩맨위치
let pd = 20; //팩맨크디

let dActive; //콩생사여부
let dSize = 12; //콩크기

let dx = [];
let dy = [];
let dCnt = 5;

let score = 0;

let bean1 = true; //콩 살아있음 -> flase: 콩이 팩맨과 겹친 경우
let bean2 = true;
let bean3 = true;
let bean4 = true;
let bean5 = true;

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

function checkWall(nx, ny, wx, wy, ww, wh){ // 벽인지 아닌지 체크하는 함수
    return(
      nx + 10 > wx && 
      nx -10 < wx + ww &&
      ny + 10 > wy &&
      ny -10 < wy + wh);
} //벽에 닿으면 true(벽임) 반환, 벽에 안닿으면 false(벽 아님) 반환

function movePacman() {
  let nx = px; //nx는 이동한 위치
  let ny = py;

  if (keyIsDown(LEFT_ARROW)) nx -= 3;
  if (keyIsDown(RIGHT_ARROW)) nx += 3;
  if (keyIsDown(UP_ARROW)) ny -= 3;
  if (keyIsDown(DOWN_ARROW)) ny += 3;

  if (nx < 0 && ny > 275 && ny < 340){
    nx = 800;
  }
  else if (nx > 800 && ny > 275 && ny < 340){
    nx = 0;
  }

  if (
    checkWall(nx, ny, 50, 70, 310, 35) === false &&
    checkWall(nx, ny, 420, 70, 310, 35) === false &&
    checkWall(nx, ny, 50, 70, 35, 175) === false &&
    checkWall(nx, ny, 725, 70, 35, 175) === false &&

    checkWall(nx, ny, 50, 500, 700, 35) === false &&
    checkWall(nx, ny, 50, 370, 35, 165) === false &&
    checkWall(nx, ny, 725, 370, 35, 165) === false &&

    checkWall(nx, ny, 360, 70, 25, 80) === false &&
    checkWall(nx, ny, 415, 70, 25, 80) === false &&
    checkWall(nx, ny, 360, 150, 80, 25) === false &&

    checkWall(nx, ny, 0, 245, 85, 30) === false &&
    checkWall(nx, ny, 0, 340, 85, 30) === false &&
    checkWall(nx, ny, 725, 245, 85, 30) === false &&
    checkWall(nx, ny, 725, 340, 85, 30) === false &&

    checkWall(nx, ny, 360, 250, 90, 25) === false &&
    checkWall(nx, ny, 360, 275, 25, 80) === false &&
    checkWall(nx, ny, 360, 355, 90, 25) === false &&
    checkWall(nx, ny, 425, 275, 25, 80) === false &&

    checkWall(nx, ny, 335, 435, 130, 15) === false &&
    checkWall(nx, ny, 390, 415, 15, 50) === false &&

    checkWall(nx, ny, 130, 150, 140, 25) === false &&
    checkWall(nx, ny, 130, 150, 35, 130) === false &&
    checkWall(nx, ny, 200, 210, 120, 25) === false &&

    checkWall(nx, ny, 265, 390, 25, 80) === false &&
    checkWall(nx, ny, 130, 390, 25, 80) === false &&
    checkWall(nx, ny, 130, 445, 160, 25) === false &&
    checkWall(nx, ny, 150, 330, 150, 15) === false &&

    checkWall(nx, ny, 510, 160, 180, 25) === false &&
    checkWall(nx, ny, 510, 160, 25, 120) === false &&
    checkWall(nx, ny, 665, 160, 25, 120) === false &&
    checkWall(nx, ny, 590, 280, 100, 25) === false &&

    checkWall(nx, ny, 520, 380, 25, 30) === false &&
    checkWall(nx, ny, 520, 355, 150, 25) === false &&
    checkWall(nx, ny, 645, 435, 25, 30) === false &&
    checkWall(nx, ny, 520, 410, 150, 25) === false) {
      px = nx; //즉 현 위치는 이동한 위치가 됨
      py = ny;
  }
}

function drawBean(x, y){
  fill(46, 139, 87);
  noStroke();

  ellipse(x, y, dSize, dSize);
}

function drawBeans(){
  if(bean1 === true) drawBean(300, 300);
  if(bean2 === true) drawBean(430, 470);
  if(bean3 === true) drawBean(629, 240);
  if(bean4 === true) drawBean(582, 472);
  if(bean5 === true) drawBean(190, 217);
}

function eatBeans(){
  
  let d1 = dist(px, py, 300, 300);
  if (bean1 === true && d1 < 16) 
    {bean1 === false;
    score += 10;
  }
  
  let d2 = dist(px, py, 430, 470);
  if (bean1 === true && d1 < 16) 
    {bean1 === false;
    score += 10;
  }
  
  let d3 = dist(px, py, 629, 240);
  if (bean1 === true && d1 < 16) 
    {bean1 === false;
    score += 10;
  }
  
  let d4 = dist(px, py, 582, 472);
  if (bean1 === true && d1 < 16) 
    {bean1 === false;
    score += 10;
  }

  let d5 = dist(px, py, 190, 217);
  if (bean1 === true && d1 < 16) 
    {bean1 === false;
    score += 10;
  }
}

function setup() {
  createCanvas(800, 600);

  px = 110;
  py = 310;
}

function draw() {
  background(0);

  movePacman();
  drawWalls();
  drawBeans();
  drawPacman();
  eatBeans();
}

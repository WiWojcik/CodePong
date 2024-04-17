let player1Top = 250;
let player2Top = 250;
const playerSpeed = 5;

function p1move(keyup, keydown) {
  if (keys[keyup] && player1Top > 0) {
    player1Top -= playerSpeed;
    player1.style.top = player1Top + "px";
  }
  if (keys[keydown] && player1Top < 550) {
    player1Top += playerSpeed;
    player1.style.top = player1Top + "px";
  }
}

function p2move(keyup, keydown) {
  if (keys[keyup] && player2Top > 0) {
    player2Top -= playerSpeed;
    player2.style.top = player2Top + "px";
  }
  if (keys[keydown] && player2Top < 550) {
    player2Top += playerSpeed;
    player2.style.top = player2Top + "px";
  }
}

const keys = {};


window.addEventListener('keydown', (event) => {
  keys[event.key] = true;

});

window.addEventListener('keyup', (event) => {
  keys[event.key] = false;

});

function gameLoop() {
  p1move('w', 's');
  p2move('ArrowUp', 'ArrowDown');
requestAnimationFrame(gameLoop)


}
gameLoop();

let ball = document.getElementById('ball')


 let ballSpeedX = 2
 let p1HitStraight = false
 let p1HitUp = false
 let p1hitDown = false

function ballMove(){
  let ballLeft = parseFloat(getComputedStyle(ball).getPropertyValue('left'))
  let ballTop = parseFloat(getComputedStyle(ball).getPropertyValue('top'))

  ball.style.left = (ballLeft - ballSpeedX) + 'px'

  if(ballLeft <=20 && ballLeft >= 0){
    let player1Top = parseFloat(getComputedStyle(player1).getPropertyValue('top'))
    if (ballTop >= player1Top + 15 && ballTop <= player1Top + 20) { 
      p1HitStraight = true;
      
    }else if (ballTop < player1Top + 20 && ballTop > player1Top ) { 
      p1HitUp = true;
      
    }else if (ballTop > player1Top + 20 && ballTop < player1Top + 50) { 
      p1hitDown = true;
      
    }
  }

  if(p1HitStraight){
    ball.style.left = (ballLeft + ballSpeedX) + 'px'

  }else if(p1HitUp){
    console.log('hitUp')
    ball.style.left = (ballLeft + ballSpeedX) + 'px'
    ball.style.top = (ballTop  - 0.8 ) + 'px'

  }else if(p1hitDown){
    console.log('hitDown')
    ball.style.left = (ballLeft + ballSpeedX) + 'px'
    ball.style.top = (ballTop + 0.8 ) + 'px'
  }





    requestAnimationFrame(ballMove)

}
ballMove()
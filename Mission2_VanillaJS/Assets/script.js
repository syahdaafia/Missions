/*
Tugas   : mission2_webdev
Nama    : Syahda Afia Dhiya Ulhaq Tajudin
NIM     : 201524030
Kelas   : D4-3A
File    : javascript
*/

window.onload = () => {
  startSetTimeoutAnimation();
  startAnimFrameAnimation();
  startSetTimeoutAnimation2();
  startAnimFrameAnimation2();
  startSetTimeoutAnimation3();
  startAnimFrameAnimation3();
  myMove();
};

function myMove() {
    let id = null;
    const elem = document.getElementById("sun");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = 2*pos + "px"; 
      }
    }
}
  
  function startSetTimeoutAnimation() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 400;
    let rect = document.getElementById('tractor');
    let speedX = 1;
    let positionX = 0;
  
    window.setInterval(() => {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.left = positionX + 'px';
    }, refreshRate);
  }
  
  function startAnimFrameAnimation() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 400;
    let rect = document.getElementById('tractor');
    let speedX = 1;
    let positionX = 0;
  
    function step() {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.left = positionX + 'px';
      window.requestAnimationFrame(step);
    }
  
    window.requestAnimationFrame(step);
  }

  
  function startSetTimeoutAnimation2() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 100;
    let rect = document.getElementById('grass');
    let speedX = 1;
    let positionX = 5;
  
    window.setInterval(() => {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.left = positionX + 'px';
    }, refreshRate);
  }
  
  function startAnimFrameAnimation2() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 100;
    let rect = document.getElementById('grass');
    let speedX = 0.5;
    let positionX = 5;
  
    function step2() {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.left = positionX + 'px';
      window.requestAnimationFrame(step2);
    }
  
    window.requestAnimationFrame(step2);
  }

  function startSetTimeoutAnimation3() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 10;
    let rect = document.getElementById('bird');
    let speedX = 1;
    let positionX = 0;
  
    window.setInterval(() => {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.left = positionX + 'px';
    }, refreshRate);
  }
  
  function startAnimFrameAnimation3() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 10;
    let rect = document.getElementById('bird');
    let speedX = 1;
    let positionX = 0;
  
    function step3() {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.left = positionX + 'px';
      window.requestAnimationFrame(step3);
    }
  
    window.requestAnimationFrame(step3);
  }
function myMove() {
    let id = null;
    const elem = document.getElementById("sun");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 100);
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
myMove();

window.onload = () => {
    startSetTimeoutAnimation();
    startAnimFrameAnimation();
  };
  
  function startSetTimeoutAnimation() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 400;
    let rect = document.getElementById('cow');
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
    const maxXPosition = 800;
    let rect = document.getElementById('cow');
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
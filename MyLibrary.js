function isTouching(fixRect, moveRect){
    if (fixRect.x-moveRect.x<(fixRect.width/2 + moveRect.width/2)&&
    moveRect.x-fixRect.x<(fixRect.width/2 + moveRect.width/2)&&
    fixRect.y-moveRect.y<(fixRect.height/2 + moveRect.height/2)&&
    moveRect.y-fixRect.y<(fixRect.height/2 + moveRect.height/2)){
      return true;
  }
  else{
    return false
  }
  }
  function bounceoff(fixRect, moveRect){
    if (fixRect.x-moveRect.x<(fixRect.width/2 + moveRect.width/2)&&
    moveRect.x-fixRect.x<(fixRect.width/2 + moveRect.width/2)){
    fixRect.velocityX = (-1)* 4;
    moveRect.velocityX = (-1)* 4;
  }
  if(fixRect.y-moveRect.y<(fixRect.height/2 + moveRect.height/2)&&
  moveRect.y-fixRect.y<(fixRect.height/2 + moveRect.height/2)){
    fixRect.velocityY = (-1)* 4;
    moveRect.velocityY = (-1)* 4;
  
  }
  }
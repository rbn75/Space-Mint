
  function checkKeys() {
    if (keys["ArrowUp"]) {
      mint1.jump()
    }
    if (keys["ArrowLeft"]) {
      mint1.velX--
    }
    if (keys["ArrowRight"]) {
       mint1.velX++
    }
  }
  
  document.onkeydown = e => {
    keys[e.key] = true
  }
  
  document.onkeyup = e => {
    keys[e.key] = false
  }

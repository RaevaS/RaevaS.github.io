(function() {
    const canvas = document.getElementById("galaxy");
  
    window.addEventListener("resize", resizeCanvas, false);
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      create();
    }
    resizeCanvas();
  })();
  
  function create() {
    const canvas = document.getElementById("galaxy");
  
    const stars = 2000;
  
    for (let i = 0; i < stars; i++) {
      const size = getRandomSize();
      const color = getColor();
      const { x, y } = getRandomLocation(0, Math.max(canvas.width, canvas.height));
      drawStar(x, y, size, color);
    }
  }
  

  function getRandomLocation(min, max) {
    const multiplier = max - min + min;
    return { x: Math.random() * multiplier, y: Math.random() * multiplier };
  }
  
  function drawStar(x, y, size, color) {
    const canvas = document.getElementById("galaxy");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  }
  
  function getColor() {
    const colors = ["#fff"];
    return colors[parseInt(Math.random() * 4)];
  }
  
  function getRandomSize() {
    return Math.ceil(Math.random() * 2);
  }
  
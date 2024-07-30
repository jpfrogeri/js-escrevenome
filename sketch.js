function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
   background("white");
  fill("black");
   let palavra = "Caminhante";
    textSize(64);
    textAlign(CENTER, CENTER);
    
   if(mouseX < 50) {
    let palavra = "C";
    
     
   textAlign(CENTER, CENTER);
   text(palavra, 200, 200);
   } else if(mouseX < 100) {
      let palavra = "Ca";
    text(palavra, 200, 200);
   } else {
     let palavra = "caminhante";
   }
  }
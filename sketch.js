var ninja;
var AppleGroup, MelonGroup, StrawGroup, PeachGroup;
var gameState;
var count,ground, gameOver;

var score = 0;

var time = 5;

function preload(){
  backImage = loadImage("background.jpg");
  appleImg = loadImage("fruit/apple.png");
  appleSlice1 = loadImage("fruit/apple-1.png");
  appleSlice2 = loadImage("fruit/apple-2.png");
  strawImg = loadImage("fruit/straw.png");
  strawSlice1 = loadImage("fruit/straw-1.png");
  strawSlice2 = loadImage("fruit/straw-2.png");
  melonImg = loadImage("fruit/melon.png");
  melonSlice1 = loadImage("fruit/melon-1.png");
  melonSlice2 = loadImage("fruit/melon-2.png");
  peachImg = loadImage("fruit/peach.png");
  peachSlice1 = loadImage("fruit/peach-1.png");
  peachSlice2 = loadImage("fruit/peach-2.png");
  ninjaImg = loadImage("ninja.png");
  boomImg = loadImage("fruit/boom.png");
  gameOverImg = loadImage("game-over.png");
  boomSound = loadSound("boom.mp3");
  clockSound = loadSound("clock.mp3");
}


function setup() {
  createCanvas(800,400);
  gameState = 1;
  AppleGroup = createGroup();
  StrawGroup = createGroup();
  MelonGroup = createGroup();
  PeachGroup = createGroup();
  BoomGroup = createGroup();
  NinjaGroup = createGroup();

  
  
  ninja = createSprite(200,380,20,20);
  num = random(Math.round(300,600));

  gameOver = createSprite(400,200,20,20);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
}

function draw() {
  background(backImage); 
 if(gameState === 1){
    spawnApples();
    spawnStraws();
    spawnMelons();
    spawnPeaches();
    spawnBooms();
    time = 5;
    if(keyWentDown("space")){
      createStar();
    }

    if(frameCount %50 === 0){
      clockSound.play();
      gameState = 2;

    }

    
    for(var a = 0; a<AppleGroup.length; a++){
      var appleTemp = AppleGroup.get(a);
      for(var n = 0; n<NinjaGroup.length; n++){
        var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(appleTemp)){
          score = score + 4;
          appleTemp.destroy();
          ninjaTemp.destroy();
          appleS = createSprite(appleTemp.x-10,appleTemp.y,20,20);
          appleS.addImage(appleSlice1);
          appleS.scale = 0.6;
          appleS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          appleS.rotationSpeed = random(-3,3)
          appleS2 = createSprite(appleTemp.x + 10,appleTemp.y,20,20);
          appleS2.addImage(appleSlice2);
          appleS2.scale = 0.6;
          appleS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          appleS2.rotationSpeed = random(-3,3);
          if(appleS.y>400){
            appleS.destroy();
          }
          if(appleS2.y>400){
            appleS2.destroy();
          }
        }
        if(appleTemp.y>400){
          appleTemp.destroy();
        }
      }
    }
    for(var s = 0; s<StrawGroup.length; s++){
      var strawTemp = StrawGroup.get(s);
        for(var n = 0; n<NinjaGroup.length; n++){
          var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(strawTemp)){
          score = score + 4;
          strawTemp.destroy();
          ninjaTemp.destroy();
          strawS = createSprite(strawTemp.x-10,strawTemp.y,20,20);
          strawS.addImage(strawSlice1);
          strawS.scale = 0.6;
          strawS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          strawS.rotationSpeed = random(-3,3)
          strawS2 = createSprite(strawTemp.x + 10,strawTemp.y,20,20);
          strawS2.addImage(strawSlice2);
          strawS2.scale = 0.6;
          strawS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          strawS2.rotationSpeed = random(-3,3);
          if(strawS.y>400){
            strawS.destroy();
          }
          if(strawS2.y>400){
            strawS2.destroy();
          }
        }
        if(strawTemp.y>400){
          strawTemp.destroy();
        }
      }
    }
    
    for(var m = 0; m<MelonGroup.length; m++){
      var melonTemp = MelonGroup.get(m);
        for(var n = 0; n<NinjaGroup.length; n++){
          var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(melonTemp)){
          score = score + 4;
          melonTemp.destroy();
          ninjaTemp.destroy();
          melonS = createSprite(melonTemp.x-10,melonTemp.y,20,20);
          melonS.addImage(melonSlice1);
          melonS.scale = 0.6;
          melonS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          melonS.rotationSpeed = random(-3,3)
          melonS2 = createSprite(melonTemp.x + 10,melonTemp.y,20,20);
          melonS2.addImage(melonSlice2);
          melonS2.scale = 0.6;
          melonS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          melonS2.rotationSpeed = random(-3,3);
          if(melonS.y>400){
            melonS.destroy();
          }
          if(melonS2.y>400){
            melonS2.destroy();
          }
        }
        if(melonTemp.y>400){
          melonTemp.destroy();
        }
      }
    }

    for(var p = 0; p<PeachGroup.length; p++){
      var peachTemp = PeachGroup.get(p);
      for(var n = 0; n<NinjaGroup.length; n++){
        var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(peachTemp)){
          score = score + 4;
          peachTemp.destroy();
          ninjaTemp.destroy();
          peachS = createSprite(peachTemp.x-10,peachTemp.y,20,20);
          peachS.addImage(peachSlice1);
          peachS.scale = 0.6;
          peachS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          peachS.rotationSpeed = random(-3,3)
          peachS2 = createSprite(peachTemp.x + 10,peachTemp.y,20,20);
          peachS2.addImage(peachSlice2);
          peachS2.scale = 0.6;
          peachS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          peachS2.rotationSpeed = random(-3,3);
          if(peachS.y>400){
            peachS.destroy();
          }
          if(peachS2.y>400){
            peachS2.destroy();
          }
        }
        if(peachTemp.y>400){
          peachTemp.destroy();
        }
      }
    }
    for(var b = 0; b<BoomGroup.length; b++){
      var boomTemp = BoomGroup.get(b);
      for(var n = 0; n<NinjaGroup.length; n++){
        var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(boomTemp)){
          boomSound.play();
          gameState = 3;
        }
      }
    }
   
 }

 if(gameState === 2){
  time = time - 0.05;
  textSize(20);
  stroke("white");
  fill("white");
  text("Time Left 0:0" + Math.round(time),200,70);

  if(time < 0){
    gameState =1;
    console.log("hi")
  }

  spawnApples();
    spawnStraws();
    spawnMelons();
    spawnPeaches();
    spawnBooms();

    if(keyWentDown("space")){
      createStar();
    }
    for(var a = 0; a<AppleGroup.length; a++){
      var appleTemp = AppleGroup.get(a);
      for(var n = 0; n<NinjaGroup.length; n++){
        var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(appleTemp)){
          score = score + 4;
          appleTemp.destroy();
          ninjaTemp.destroy();
          appleS = createSprite(appleTemp.x-10,appleTemp.y,20,20);
          appleS.addImage(appleSlice1);
          appleS.scale = 0.6;
          appleS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          appleS.rotationSpeed = random(-3,3)
          appleS2 = createSprite(appleTemp.x + 10,appleTemp.y,20,20);
          appleS2.addImage(appleSlice2);
          appleS2.scale = 0.6;
          appleS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          appleS2.rotationSpeed = random(-3,3);
          if(appleS.y>400){
            appleS.destroy();
          }
          if(appleS2.y>400){
            appleS2.destroy();
          }
        }
        if(appleTemp.y>400){
          appleTemp.destroy();
        }
      }
    }

    for(var s = 0; s<StrawGroup.length; s++){
      var strawTemp = StrawGroup.get(s);
        for(var n = 0; n<NinjaGroup.length; n++){
          var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(strawTemp)){
          score = score + 4;
          strawTemp.destroy();
          ninjaTemp.destroy();
          strawS = createSprite(strawTemp.x-10,strawTemp.y,20,20);
          strawS.addImage(strawSlice1);
          strawS.scale = 0.6;
          strawS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          strawS.rotationSpeed = random(-3,3)
          strawS2 = createSprite(strawTemp.x + 10,strawTemp.y,20,20);
          strawS2.addImage(strawSlice2);
          strawS2.scale = 0.6;
          strawS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          strawS2.rotationSpeed = random(-3,3);
          if(strawS.y>400){
            strawS.destroy();
          }
          if(strawS2.y>400){
            strawS2.destroy();
          }
        }
        if(strawTemp.y>400){
          strawTemp.destroy();
        }
      }
    }
    
    for(var m = 0; m<MelonGroup.length; m++){
      var melonTemp = MelonGroup.get(m);
        for(var n = 0; n<NinjaGroup.length; n++){
          var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(melonTemp)){
          score = score + 4;
          melonTemp.destroy();
          ninjaTemp.destroy();
          melonS = createSprite(melonTemp.x-10,melonTemp.y,20,20);
          melonS.addImage(melonSlice1);
          melonS.scale = 0.6;
          melonS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          melonS.rotationSpeed = random(-3,3)
          melonS2 = createSprite(melonTemp.x + 10,melonTemp.y,20,20);
          melonS2.addImage(melonSlice2);
          melonS2.scale = 0.6;
          melonS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          melonS2.rotationSpeed = random(-3,3);
          if(melonS.y>400){
            melonS.destroy();
          }
          if(melonS2.y>400){
            melonS2.destroy();
          }
        }
        if(melonTemp.y>400){
          melonTemp.destroy();
        }
      }
    }

    for(var p = 0; p<PeachGroup.length; p++){
      var peachTemp = PeachGroup.get(p);
      for(var n = 0; n<NinjaGroup.length; n++){
        var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(peachTemp)){
          score = score + 4;
          peachTemp.destroy();
          ninjaTemp.destroy();
          peachS = createSprite(peachTemp.x-10,peachTemp.y,20,20);
          peachS.addImage(peachSlice1);
          peachS.scale = 0.6;
          peachS.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          peachS.rotationSpeed = random(-3,3)
          peachS2 = createSprite(peachTemp.x + 10,peachTemp.y,20,20);
          peachS2.addImage(peachSlice2);
          peachS2.scale = 0.6;
          peachS2.velocityY = random(3 + 3*(frameCount/500),6 + 3*(frameCount/500));
          peachS2.rotationSpeed = random(-3,3);
          if(peachS.y>400){
            peachS.destroy();
          }
          if(peachS2.y>400){
            peachS2.destroy();
          }
        }
        if(peachTemp.y>400){
          peachTemp.destroy();
        }
      }
    }
    for(var b = 0; b<BoomGroup.length; b++){
      var boomTemp = BoomGroup.get(b);
      for(var n = 0; n<NinjaGroup.length; n++){
        var ninjaTemp = NinjaGroup.get(n);
        if(ninjaTemp.isTouching(boomTemp)){
          boomSound.play();
          gameState = 3;
        }
      }
    }

    if(gameState === 3){
      gameOver.visible = true;
      NinjaGroup.setLifetimeEach(4);
      BoomGroup.setLifetimeEach(4);
      AppleGroup.destroyEach();
      PeachGroup.destroyEach();
      MelonGroup.destroyEach();
      StrawGroup.destroyEach();
    }
 }

 textSize(20);
 fill("white");
 stroke("white");
 text("Score: "+ score,630,60);

 
  
  ninja.addImage(ninjaImg);
  ninja.scale = 0.03;
  ninja.x = mouseX;
  //ninja.depth = ground.depth + 1;
  
  drawSprites();
}

function spawnApples(){
  if(frameCount %25 === 0){
    var apple = createSprite(random(0,800),random(-80,0),20,20);
    apple.addImage(appleImg);
    apple.velocityY = 6 + 3*(frameCount/500);
    apple.scale = 0.6;
    AppleGroup.add(apple);
  }
}
function spawnStraws(){
  if(frameCount %25 === 0){
    var straw = createSprite(random(0,800),random(-80,0),20,20);
    straw.addImage(strawImg);
    straw.velocityY = 6 + 3*(frameCount/1000);
    straw.scale = 0.6;
    StrawGroup.add(straw);
  }
}
function spawnMelons(){
  if(frameCount %25 === 0){
    var melon = createSprite(random(0,800),random(-80,0),20,20);
    melon.addImage(melonImg);
    melon.velocityY = 6 + 3*(frameCount/1000);
    melon.scale = 0.6;
    MelonGroup.add(melon);
  }
}
function spawnPeaches(){
  if(frameCount %25 === 0){
    var peach = createSprite(random(0,800),random(-80,0),20,20);
    peach.addImage(peachImg);
    peach.velocityY = 6 + 3*(frameCount/1000);
    peach.scale = 0.6;
    PeachGroup.add(peach);
  }
}
function spawnBooms(){
  if(frameCount %60 === 0){
    var boom = createSprite(random(0,800),random(-80,0),20,20);
    boom.addImage(boomImg);
    boom.velocityY = 6 + 3*(frameCount/1000);
    boom.rotationSpeed = random(-0.5,0.5);
    boom.scale = 0.8;
    boom.lifetime = 400/(6 + 3*(frameCount/1000));
    BoomGroup.add(boom);
  }
}
function createStar(){
  
  var star = createSprite(mouseX,380,20,20);
  star.velocityY = -7;
  star.rotationSpeed = 10;
  star.addImage(ninjaImg);
  star.scale = 0.03;
  star.lifetime = 80;
  NinjaGroup.add(star);
  

}

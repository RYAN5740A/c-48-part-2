const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var HOME =0
var BUILD=1
var INFO =2

levelValue=1

var engine,world;
var level = 1;
var gameState = HOME;
var weight = 0;

function preload(){
    
BackgroundImg1 =loadImage("Images/BG.jpg")
startButtonImg=loadImage("Images/StartButton.png")
gameTitleImg=loadImage("Images/Game Title.png")
HowToPlayImg=loadImage("Images/HowToPlayImage.png")
UserImg=loadImage("Images/UserIcon.png")
CameraImg=loadImage("Images/CamIcon.png")
DoneImg=loadImage("Images/DoneIMG.png")
DeleteImg=loadImage("Images/DeleteImg.jpg")
RectangleImg=loadImage("Images/Rectangle.png")
GreyImg=loadImage("Images/Grey.jpg")
}
function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create()
    world=engine.world;
    // homeBG=createSprite(width/2,height/2,windowWidth,windowWidth)
    // homeBG.shapeColor="Navy"
    startButton=createSprite(windowWidth/2,windowHeight-70,20,20)
    startButton.addImage(startButtonImg)
    startButton.scale=0.5
    gameTitle=createSprite(windowWidth/2-50,windowHeight/2+45,1000,350)
    gameTitle.addImage(gameTitleImg)
    gameTitle.scale=0.8
    HowToPlay=createSprite(width/8,windowHeight/2+250,100,100)
    HowToPlay.addImage(HowToPlayImg)
    HowToPlay.scale=0.2
    UserIcon=createSprite(width/2,height/6-50,50,50)
    UserIcon.addImage(UserImg)
    UserIcon.scale=0.4
    // Level=createSprite(width/2,height/4,50,20)
    // Level.addImage(LevelOneImg)
}

function draw(){
background("Navy")

Engine.update(engine);
// console.log( mousePressedOver(startButton))

    if(level===1 && mousePressedOver(startButton)){
        console.log("Succec")
        background(BackgroundImg1)
    console.log(windowWidth/2)
    var section=width/10
    for(var i =1; i<=10;i++){
        verticalboundary=createSprite(section*i,350,5,windowHeight+100)
        verticalboundary.shapeColor="White"
    }
    var horizontalSection=height/6
    for(var i=1; i<=5;i++){
        horizontalBoundary=createSprite(0,horizontalSection*i,windowWidth*2,5)
        horizontalBoundary.shapeColor="White"
    }
    
    TipsBar=createSprite(width/2,height/15,windowWidth,150)
    TipsBar.shapeColor="Navy"
    ToolBar=createSprite(width/2,height/1,windowWidth,250)
    ToolBar.shapeColor="Navy"
    SideBar1=createSprite(width/1,height/15,350,windowHeight+800)
    SideBar1.shapeColor="Navy"
    SideBar2=createSprite("width/10",height/15,350,windowHeight+800)
    SideBar2.shapeColor="Navy"

    cameraIcon=createSprite(windowWidth/2+600,height/14,20,20)
    cameraIcon.addImage(CameraImg)
    cameraIcon.scale=0.1
    DoneSprite=createSprite(width/2+500,height/1-90)
    DoneSprite.addImage(DoneImg)
    DoneSprite.scale=0.2
    DeleteSprite=createSprite(width/2+600,height/1-90)
    DeleteSprite.addImage(DeleteImg)
    DeleteSprite.scale=0.2

    Box1=createSprite(248,183,145,115)
    Box1.visible=false;
    Box2=createSprite(400,183,165,115)
    Box2.visible=false;
    Box3=createSprite(560,183,165,115)
    Box3.visible=false;
    Box4=createSprite(720,183,160,115)
    Box4.visible=false;
    Box5=createSprite(880,183,160,115)
    Box5.visible=false;
    Box6=createSprite(1040,183,160,115)
    Box6.visible=false;
    Box7=createSprite(1200,183,160,115)
    Box7.visible=false;
    Box8=createSprite(1350,183,160,115)
    Box8.visible=false;
    Box9=createSprite(248,300,145,115)
    Box9.visible=false;
    Box10=createSprite(400,300,160,115)
    Box10.visible=false;
    Box11=createSprite(560,300,165,115)
    Box11.visible=false;
    Box12=createSprite(720,300,165,115)
    Box12.visible=false;
    Box13=createSprite(880,300,160,115)
    Box13.visible=false;
    Box14=createSprite(1040,300,160,115)
    Box14.visible=false;
    Box15=createSprite(1200,300,160,115)
    Box15.visible=false;
    Box16=createSprite(1350,300,150,115)
    Box16.visible=false;
    Box17=createSprite(245,423,145,120)
    Box17.visible=false;
    Box18=createSprite(397,423,165,120)
    Box18.visible=false;
    Box19=createSprite(560,423,165,120)
    Box19.visible=false;
    Box20=createSprite(720,423,165,120)
    Box20.visible=false;
    Box21=createSprite(880,423,165,120)
    Box21.visible=false;
    Box22=createSprite(1040,423,165,120)
    Box22.visible=false;
    Box23=createSprite(1200,423,165,120)
    Box23.visible=false;
    Box24=createSprite(1350,423,150,120)
    Box24.visible=false;
    Box25=createSprite(248,540,145,115)
    Box25.visible=false;
    Box26=createSprite(397,540,165,120)
    Box26.visible=false;
    Box27=createSprite(560,540,165,120)
    Box27.visible=false;
    Box28=createSprite(720,540,165,120)
    Box28.visible=false;
    Box29=createSprite(880,540,165,120)
    Box29.visible=false;
    Box30=createSprite(1040,540,165,120)
    Box30.visible=false;
    Box31=createSprite(1200,540,165,120)
    Box31.visible=false;
    Box32=createSprite(1350,540,150,120)
    Box32.visible=false;

    RectangleSprite=createSprite(width/8,height/1-60)
    RectangleSprite.addImage(RectangleImg)
    RectangleSprite.scale=0.6
    RectangleSprite2=createSprite(width/8+200,height/1-60)
    RectangleSprite2.addImage(RectangleImg)
    RectangleSprite2.scale=0.6
    RectangleSprite3=createSprite(width/8+400,height/1-60)
    RectangleSprite3.addImage(RectangleImg)
    RectangleSprite3.scale=0.6
    RectangleSprite4=createSprite(width/8+600,height/1-60)
    RectangleSprite4.addImage(RectangleImg)
    RectangleSprite4.scale=0.6

    console.log("sketch")
    
    verticalBar = new VerticalProp(width/8,height/1-60,30,100)
    verticalBar.shapeColor="steelblue"
    // HorizontalProp=createSprite(width/8+200,height/1-60,100,30)
    // HorizontalProp.shapeColor="steelblue"
    // LeftAngledBar = new AngledProp(870,120,150, -PI/7);
    // RightAngledProp=createSprite(width/8+600,height/1-60,100,30)
    // RightAngledProp.shapeColor="steelblue"

    VerticalProp1=createSprite(width/10+30,height/4+3,30,120)
    VerticalProp1.shapeColor="steelblue"
    VerticalProp1.visible=false;
    HorizontalProp1=createSprite(width/10+90,height/5-6,150,30)
    HorizontalProp1.shapeColor="steelblue"
    HorizontalProp1.visible=false;
    LeftAngledProp1 = createSprite(width/10+85,height/5-6,140,30)
    LeftAngledProp1.shapeColor="steelblue"
    LeftAngledProp1.visible=false;
    RightAngledProp1=createSprite(width/10+85,height/5-6,140,30)
    RightAngledProp1.shapeColor="steelblue"
    RightAngledProp1.visible=false;
    VerticalProp2=createSprite(width/10+172,height/4+3,30,120)
    VerticalProp2.visible=false;
    HorizontalProp2=createSprite(width/10+240,height/5-6,170,30)
    HorizontalProp2.visible=false;
    HorizontalProp2.shapeColor="steelblue"
    VerticalProp3=createSprite(width/10+332,height/4+3,30,120)
    VerticalProp3.visible=false;
    HorizontalProp3=createSprite(width/10+400,height/5-6,170,30)
    HorizontalProp3.visible=false;
    VerticalProp4=createSprite(width/10+492,height/4+3,30,120)
    VerticalProp4.visible=false;
    HorizontalProp4=createSprite(width/10+562,height/5-6,170,30)
    HorizontalProp4.visible=false;
    VerticalProp5=createSprite(width/10+652,height/4+3,30,120)
    VerticalProp5.visible=false;
    HorizontalProp5=createSprite(width/10+722,height/5-6,170,30)
    HorizontalProp5.visible=false;
    VerticalProp6=createSprite(width/10+812,height/4+3,30,120)
    VerticalProp6.visible=false;
    HorizontalProp6=createSprite(width/10+882,height/5-6,170,30)
    HorizontalProp6.visible=false;
    VerticalProp7=createSprite(width/10+972,height/4+3,30,120)
    VerticalProp7.visible=false;
    HorizontalProp7=createSprite(width/10+1042,height/5-6,170,30)
    HorizontalProp7.visible=false
    VerticalProp8=createSprite(width/10+1132,height/4+3,30,120)
    VerticalProp8.visible=false
    HorizontalProp8=createSprite(width/10+1192,height/5-6,150,30)
    HorizontalProp8.visible=false;
    VerticalProp9=createSprite(width/10+30,height/4+120,30,125)
    VerticalProp9.visible=false;
    HorizontalProp9=createSprite(width/10+90,height/4+72,150,30)
    HorizontalProp9.visible=false;
    VerticalProp10=createSprite(width/10+172,height/4+120,30,127)
    VerticalProp10.visible=false;
    HorizontalProp10=createSprite(width/10+240,height/4+72,170,30)
    HorizontalProp10.visible=false;
    VerticalProp11=createSprite(width/10+332,height/4+120,30,127)
    VerticalProp11.visible=false;
    HorizontalProp11=createSprite(width/10+400,height/4+72,170,30)
    HorizontalProp11.visible=false;
    VerticalProp12=createSprite(width/10+492,height/4+120,30,127)
    VerticalProp12.visible=false;
    HorizontalProp12=createSprite(width/10+722,height/4+72,170,30)
    HorizontalProp12.visible=false;
    VerticalProp13=createSprite(width/10+652,height/4+120,30,127)
    VerticalProp13.visible=false;
    HorizontalProp13=createSprite(width/10+722,height/4+72,170,30)
    HorizontalProp13.visible=false;
    VerticalProp14=createSprite(width/10+812,height/4+120,30,127)
    VerticalProp14.visible=false;
    HorizontalProp14=createSprite(width/10+882,height/5-6,170,30)
    HorizontalProp14.visible=false;
    VerticalProp15=createSprite(width/10+972,height/4+120,30,127)
    VerticalProp15.visible=false;
    HorizontalProp15=createSprite(width/10+1042,height/4+72,170,30)
    HorizontalProp15.visible=false;
    VerticalProp16=createSprite(width/10+1132,height/4+120,30,127)
    VerticalProp16.visible=false;
    HorizontalProp16=createSprite(width/10+1192,height/4+72,150,30)
    HorizontalProp16.visible=false
    VerticalProp17=createSprite(width/10+30,height/4+240,30,127)
    VerticalProp17.visible=false;
    HorizontalProp17=createSprite(width/10+90,height/4+192,150,30)
    HorizontalProp17.visible=false;
    VerticalProp18=createSprite(width/10+172,height/4+240,30,127)
    VerticalProp18.visible=false;
    HorizontalProp18=createSprite(width/10+240,height/4+192,170,30)
    HorizontalProp18.visible=false;
    VerticalProp19=createSprite(width/10+332,height/4+240,30,127)
    VerticalProp19.visible=false;
    HorizontalProp19=createSprite(width/10+400,height/4+192,170,30)
    HorizontalProp19.visible=false;
    VerticalProp20=createSprite(width/10+492,height/4+240,30,127)
    VerticalProp20.visible=false;
    HorizontalProp20=createSprite(width/10+562,height/4+192,170,30)
    HorizontalProp20.visible=false;
    VerticalProp21=createSprite(width/10+652,height/4+240,30,127)
    VerticalProp21.visible=false;
    HorizontalProp21=createSprite(width/10+722,height/4+192,170,30)
    HorizontalProp21.visible=false;
    VerticalProp22=createSprite(width/10+812,height/4+240,30,127)
    VerticalProp22.visible=false;
    HorizontalProp22=createSprite(width/10+882,height/4+192,170,30)
    HorizontalProp22.visible=false;
    VerticalProp23=createSprite(width/10+972,height/4+240,30,127)
    VerticalProp23.visible=false;
    HorizontalProp23=createSprite(width/10+1042,height/4+192,170,30)
    HorizontalProp23.visible=false;
    VerticalProp24=createSprite(width/10+1132,height/4+240,30,127)
    VerticalProp24.visible=false;
    HorizontalProp24=createSprite(width/10+1192,height/4+192,150,30)
    HorizontalProp24.visible=false;
    VerticalProp25=createSprite(width/10+30,height/4+357,30,120)
    VerticalProp25.visible=false;
    HorizontalProp25=createSprite(width/10+90,height/4+312,150,30)
    HorizontalProp25.visible=false;
    VerticalProp26=createSprite(width/10+172,height/4+357,30,120)
    VerticalProp26.visible=false;
    HorizontalProp26=createSprite(width/10+240,height/4+312,170,30)
    HorizontalProp26.visible=false;
    VerticalProp27=createSprite(width/10+332,height/4+357,30,120)
    VerticalProp27.visible=false;
    HorizontalProp27=createSprite(width/10+400,height/4+312,170,30)
    HorizontalProp27.visible=false;
    VerticalProp28=createSprite(width/10+492,height/4+357,30,120)
    VerticalProp28.visible=false;
    HorizontalProp28=createSprite(width/10+562,height/4+312,170,30)
    HorizontalProp28.visible=false;
    VerticalProp29=createSprite(width/10+652,height/4+357,30,120)
    VerticalProp29.visible=false;
    HorizontalProp29=createSprite(width/10+722,height/4+312,170,30)
    HorizontalProp29.visible=false;
    VerticalProp30=createSprite(width/10+812,height/4+357,30,120)
    VerticalProp30.visible=false;
    HorizontalProp30=createSprite(width/10+882,height/4+312,170,30)
    HorizontalProp30.visible=false;
    VerticalProp31=createSprite(width/10+972,height/4+357,30,120)
    VerticalProp31.visible=false;
    HorizontalProp31=createSprite(width/10+1042,height/4+312,170,30)
    HorizontalProp31.visible=false;
    VerticalProp32=createSprite(width/10+1132,height/4+357,30,120)
    VerticalProp32.visible=false;
    HorizontalProp32=createSprite(width/10+1192,height/4+312,150,30)
    HorizontalProp32.visible=false;
    // console.log(mousePressedOver)
    // if(mousePressedOver(VerticalProp) && mousePressedOver(Box1)){
    //     console.log("Succec")
    // }
  
//   LeftAngleBar.displaY()
     verticalBar.display()
   function RecycleBin(){
   VerticalProp1.visible=false;
   HorizontalProp1.visible=false;
   LeftAngualerProp1.visible=false;
   RightAngularProp1.visible=false;

   }
  
  
    gameState=BUILD

    }
    // if(level===2 && mousePressedOver(startButton)){
    
    // }
    // if(level===3 && mousePressedOver(startButton)){
    
    // }
    // if(level===4 && mousePressedOver(startButton)){
    
    // }
    // if(level===5 && mousePressedOver(startButton)){
    
    // }
    drawSprites()


    if(gameState === HOME){
        fill("Cyan")
        stroke("Cyan")
        textSize(30)
        text("Level:"+levelValue,width/2-50,height/4-30)
    
    }
    if(gameState === BUILD){
     text("Weight:" + weight,width/2+300,height/1-60)
   
     homeBG.visible=false;
     startButton.visible=false;
     gameTitle.visible=false;
     HowToPlay.visible=false;
     UserIcon.visible=false;

    }
    
    if(gameState === INFO){

     homeBG.visible=false;
     startButton.visible=false;
     gameTitle.visible=false;
     HowToPlay.visible=false;
     UserIcon.visible=false;
   

 Info()
    

    }
  function Info(){

    //   InfoBG=createSprite(width/2,height/2,windowWidth,windowHeight)
    //   InfoBG.scale=0.3
    //   InfoBG.addImage(BackgroundImg1)
    //   InfoBG.alpha=0.5;

      fill("Black")
      stroke("Black")
      textSize(30)
      console.log("Test Succecfull")
      text("Click on the Start Butoon on the bottom of you're screen to start",width/2-200,height/8+50)
      text("",width/2-600,height/8+400)
      text("Click on the Start Butoon on the bottom of you're screen to start",width/2-200,height/8+50)
      text("Getting Started",width/2,height/8)
      text("Building",width/2,height/8+600)
      
      ScreenShot1=createSprite(width/2,height/8+200,250,250)

      
  }
}
// console.log("Succec")
// console.log(mousePressedOver(HowToPlay))
// if(mousePressedOver(HowToPlay)){
//     gameState=INFO;
//     console.log("Test Succecfull")
// }



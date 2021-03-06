const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg ;
var hour;

function preload() {

    getBackgroundImg();
    
}

function setup(){

    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(bg){
        console.log("YES");
        background(bg);
    }    
    else{
        console.log("NO");
        background(255);
    }
    if(hour < 12){
    textSize(20);
    fill("black")
    text("Time : " + hour + " AM",1000,50);  
    }
    
    if(hour >= 12){
        textSize(20);
    fill("black")
    text("Time : " + (hour-12) + " PM",1000,50);  
    }


    Engine.update(engine);
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    // write code slice the datetime
    hour = dt.slice(11,13)
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset    
    if(hour >= 01 && hour <= 04 ){
        console.log(1);
        bg = loadImage("sunrise1.png")
    }

    else if(hour >= 04 && hour <= 06){
        console.log(2);
        bg = loadImage("sunrise2.png")
    }

    else if(hour >= 06 && hour <= 08){
        console.log(3);
        bg = loadImage("sunrise3.png")
    }

    else if(hour >= 08 && hour <= 10){
        console.log(4);
        bg = loadImage("sunrise4.png")
    }

    else if(hour >= 10 && hour <= 12){
        console.log(5);
        bg = loadImage("sunrise5.png")
    }

    else if(hour >= 12 && hour <= 14){
        console.log(6);
        bg = loadImage("sunrise6.png")
    }

    else if(hour >= 14 && hour <= 16){
        console.log(7);
        bg = loadImage("sunset7.png")
    }

    else if(hour >= 16 && hour <= 18){
        console.log(8);
        bg = loadImage("sunset8.png")
    }

    else if(hour >=  18 && hour <= 20){
        console.log(9);
        bg = loadImage("sunset10.png")
    }

    else if(hour >= 20 && hour <= 22){
        console.log(10);
        bg = loadImage("sunset11.png")
    }

    else if(hour >= 22 && hour <= 01){
        console.log(11);
        bg = loadImage("sunset12.png")
    }

 
}

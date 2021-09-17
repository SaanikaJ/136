var status = " ";
var video_load = " "; 

var text = " "; 
var objects = [ ];

function preload(){
    video_load = createCapture("video.mp4");
    video_load.hide();
}

function draw(){
    image(video_load, 0, 0, 500, 500);

    if(status != " "){ 
        objectDetector.detect(video_load, gotResult);

        for(i == 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected"; 
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length; 

            
        }
    }
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center(); 
} 

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    text = document.getElementById("text").value;
}

function modelLoaded(){
    console.log("Model loaded!"); 
    status_load = "true"; 
} 


function gotResult(error, results){ 
    if (error){ 
        console.log(error);} 
        
    console.log(results); 
    objects = results; 
}
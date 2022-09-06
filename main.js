img="";
object_detector="";
status="";
objects=[];
function preload(){
    img=loadImage('Elephant.jpg');
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    object_detector.detect(img,gotResult);


}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;


}
function draw(){
    image(img,0,0,600,400);
    if(status != "") { for (var i = 0; i < objects.length; i++) { 
        document.getElementById("status").innerHTML = "Status : Object Detected"; 
        fill(255, 0, 0); percent = floor(objects[i].confidence * 100); 
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
        noFill(); stroke(255, 0, 0); rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); } }



}
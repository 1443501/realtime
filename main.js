noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,500);
    canvas.position(800,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotResults);
}
function modelLoaded(){
    console.log("Posenet is loaded");

}
function draw(){
  background("green");
  fill("pink");
  stroke("cyan");
  square(noseX,noseY,difference);
  document.getElementById("square_side").innerHTML="The side length of the square is "+difference+"px";
}
function gotResults(results){
    if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.y;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX = " +leftWristX+ "rightWristX=" +rightWristX+ "difference = " +difference);
console.log("noseX=" +noseX+ "noseY" +noseY );

}
}

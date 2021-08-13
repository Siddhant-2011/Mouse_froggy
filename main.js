function setup(){
    video=createCapture(VIDEO);
    video.size(440, 290);
    video.position(70,115);
    
    canvas=createCanvas(450,300);
    canvas.position(800,110);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
 }

function draw(){
    background('#969A97');
}

function modelLoaded(){
    console.log('model is loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}


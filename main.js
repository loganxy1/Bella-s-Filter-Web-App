var nose_x = 0;
var nose_y = 0;

function preload(){
    lipstick = loadImage('https://cpng.pikpng.com/pngl/s/547-5472120_lip-gloss-png-download-lip-gloss-clipart.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('87ceeb');
    image(video, 0, 0, 300, 300);
}

function takePic(){
    save('Joe_Biden/Your_Mama');
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = "+nose_x);
        console.log("nose y = "+nose_y);
    }
}
nosex = 0;
nosey = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/jjXRp85G/476-4761771-circle-hd-png-download.jpg')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)


}


function modelLoaded(){
    console.log('pose net is intialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        console.log("nose x= "+nosex);
        console.log("nose x= "+nosey);
    }

}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nosex,nosey,20);
    // image(clown_nose,nosex,nosey,30,30)

}

function takeSnapshot(){
    save("my.png");
}

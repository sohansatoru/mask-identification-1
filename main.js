function setup (){
    canvas = creatCanvas(300,300);
    canvas.centre();
    video = createCapture(VIDEO);
    video.hide;
    imageClassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/w82zxsKph/',modelLoaded);
}


function modelLoaded(){
    console.log('model Loaded');
}


function draw(){
    image(video,0,0,300,300);
    classifier.classify(video, gotresult);
}


function gotresult(error,results){
if (error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.tofixed(3);
}
}
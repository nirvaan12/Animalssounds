//https://teachablemachine.withgoogle.com/models/HlUJz5US6/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("//https://teachablemachine.withgoogle.com/models/HlUJz5US6/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){}
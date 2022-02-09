//https://teachablemachine.withgoogle.com/models/HlUJz5US6/
dog=0;
cat=0;
lion=0;
cow=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("//https://teachablemachine.withgoogle.com/models/HlUJz5US6/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }                                                                        
    else{
        console.log(results)
    color_r= Math.floor(Math.random()*255)+1;
    color_g= Math.floor(Math.random()*255)+1;
    color_b= Math.floor(Math.random()*255)+1;

    document.getElementById("sounds").innerHTML= "Detected voice is of  - "+results[0].label;
    document.getElementById("Animals").innerHTML = "Detected Dog - "+dog+ " Detected Cat - "+cat+ " Detected Lion - "+lion+" Detected Cow - "+cow;
    document.getElementById("sounds").style.color="rgb("+color_r+","+color_g+","+color_b+")";
    document.getElementById("Animals").style.color="rgb("+color_r+","+color_g+","+color_b+")";


    }
    
} 
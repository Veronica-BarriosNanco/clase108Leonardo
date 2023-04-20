function start_clasification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eGd2t2jLQ/model.json', modelReady);
}function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='escucho - '+ results[0].label;
        document.getElementById("result_confidense").innerHTML='precicion - '+ (results[0].confidence*100).toFixed(2)+"%";//es con F mayuscula
        document.getElementById("result_label").style.color="rgb("+ random_number_r+","+random_number_b+","+random_number_g+")";
        document.getElementById("result_confidense").style.color="rgb("+ random_number_r+","+random_number_b+","+random_number_g+")";
        img=document.getElementById('alien1');
        img1=document.getElementById('alien2');
        img2=document.getElementById('alien3');
        img3=document.getElementById('alien4');
        if(results[0].label=="aplauso"){
            img.src='aliens-01.gif';
            img1.src='aliens-02.png';
            img2.src='aliens-03.png';
            img3.src='aliens-04.png';
        }
        else if(results[0].label=="violin"){
            img.src='aliens-01.png';
            img1.src='aliens-02.gif';
            img2.src='aliens-03.png';
            img3.src='aliens-04.png';
        }
        else if(results[0].label=="chasquido"){
            img.src='aliens-01.png';
            img1.src='aliens-02.png';
            img2.src='aliens-03.gif';
            img3.src='aliens-04.png';
        }
        else{
            img.src='aliens-01.png';
            img1.src='aliens-02.png';
            img2.src='aliens-03.png';
            img3.src='aliens-04.gif';
        } 
    }
}
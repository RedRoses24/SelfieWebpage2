var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("text-box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var text=event.results[0][0].transcript;
    console.log(text);
    document.getElementById("text-box").innerHTML=text;
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="You just said"+document.getElementById("text-box").value;
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
camera=document.getElementById("camera");

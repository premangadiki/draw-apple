screen_height ="window.innerheight";
screen_width  ="window.innerWidth";
apple="";
speak_data="";
to_number="";

x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
    canvas = createCanvas(screen_height , screen_width);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number + "apples drawn";
}

function preload(){
  apple = loadImage('https://www.pngitem.com/pimgs/m/104-1042524_cartoon-apple-png-apple-clipart-transparent-png.png')
}

to_number=Number(content);
if(Number.isInteger(to_number)){
    console.log("Started drawing apple")
    draw_apple ="set";
}
else{
    console.log( "The speech has not recognized a number ");
}

for(var i=1 ; i <= to_number; i++ )
{
  x = Math.floor(Math.random() * 700);
  y = Math.floor(Math.random() * 400);
  image(apple , x , y ,50 , 50)
}

document.getElementbyId("status").innerHTML = to_number + "apples drawn";

var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function run(outcome) {
    console.log(outcome);
var output = outcome.results[0][0].transcript
document.getElementById("textbox").innerHTML = output
if (output == "tell me a rhyme") {
    speak()
     
}

}

function speak() {
    var speechapi = window.speechSynthesis

    var speakdata = "Jhonny jhonny yes papa eating sugar no papa telling a lies no papa open your mouth hahaha. Twinkle twinkle liittle star how I wonder what you are up above the world so high like a diamond in the sky twinkle twinkle little star how I wonder what you are. Five little monkeys jumping on the bed, One fell down and bumped his head,Mama called the doctor and the doctor said,No more monkeys jumping on the bed!Four little monkeys jumping on the bed,One fell down and bumped his head,Mama called the doctor and the doctor said,No more monkeys jumping on the bed!Three little monkeys jumping on the bed,One fell down and bumped her head,Mama called the doctor and the doctor said,No more monkeys jumping on the bed! Two little monkeys jumping on the bed,one fell of and bumped his head mama called the doctor and the doctor said no more monkeys jumping on the bed one little monkey jumping on the bed he fell of and bumped his head mama called the doctor and doctor said no more monkeys jumping on the bed No little monkeys jumping on the bed mama called the doctor and doctor said put dose monkeys back to bed "
    var saythis = new SpeechSynthesisUtterance(speakdata)
    speechapi.speak(saythis)
    Webcam.attach("#camera")
   
}






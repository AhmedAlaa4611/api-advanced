// Buttons.
var saye = document.getElementById('saye');
var read = document.getElementById('read');
var retext = document.getElementById('retext');
var copy = document.getElementById('copy');
var download = document.getElementById('download');

// Text Area.
var Text_Area = document.getElementById('TextArea');

var language = 'en-IE';

window.onload = function() {
    Text_Area.focus();
}

saye.onclick = function() {
    // Running audio.
    var audio = document.createElement('audio');
    audio.src = "audio/audio.m4a";
    audio.play();
    
    // Create Speech Recognition object.
    var listening = new webkitSpeechRecognition();
    listening.interimResults = true;
    listening.start();
    listening.onresult = function(e) {
        Text_Area.value = e.results[0][0].transcript;
    }
}

read.onclick = function() {
    var say = new SpeechSynthesisUtterance(Text_Area.value);
    say.lang = language;         // en-IE, en-GB, en-US, fr-FR, de-DE, it-IT
    if (voice_rate.checked) {
        say.rate = 0.7;
    }
    window.speechSynthesis.speak(say);
}

retext.onclick = function() {
    Text_Area.value = Text_Area.value.replace(/\#+/g, "").replace(/\*+/g, "");      // For md files.
    Text_Area.value = Text_Area.value.replace(/\[[0-9]([0-9])?\]/g, "");            // For wikipedia site.
    Text_Area.value = Text_Area.value.replace(/^\s/, "").replace(/\s$/, "");        // Maching the start and end spaces.
    Text_Area.value = Text_Area.value.replace(/\n/g, " ").replace(/\s+/g, " ");
    Text_Area.value = Text_Area.value.replace(/ \. /g, ". ").replace(/ \./g, ". ");
}

copy.onclick = function() {
    Text_Area.select();
    document.execCommand("copy");
    window.alert("copied successfully.");
}

download.onclick = function() {
    var a = document.createElement('a');
    const dataToFile = new Blob(Array(Text_Area.value), Object("text"));
    a.href = URL.createObjectURL(dataToFile);
    a.download = "helloText.txt";
    a.click();
}
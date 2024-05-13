var voice = document.querySelector('.voice');
var dialog_1 = document.getElementById('dialog_1');
var dialog_1_button_Done = document.getElementById('Done');

var radio_1 = document.getElementById('radio_1');
var radio_2 = document.getElementById('radio_2');
var radio_3 = document.getElementById('radio_3');
var radio_4 = document.getElementById('radio_4');
var radio_5 = document.getElementById('radio_5');
var radio_6 = document.getElementById('radio_6');

voice.onclick = function() {
    dialog_1.showModal();
}

dialog_1_button_Done.onclick = function() {
    dialog_1.close();
    if (isArabic === false) {
        if (radio_1.checked) {
            language = 'en-IE';
        }
        else if(radio_2.checked) {
            language = 'en-GB';
        }
        else if(radio_3.checked) {
            language = 'en-US';
        }
        else if(radio_4.checked) {
            language = 'fr-FR';
        }
        else if(radio_5.checked) {
            language = 'de-DE';
        }
        else if(radio_6.checked) {
            language = 'it-IT';
        }
    }
}
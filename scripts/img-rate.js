var rate = document.querySelector('.rate');
var dialog_3 = document.getElementById('dialog_3');
var dialog_3_button_Done2 = document.querySelector('#dialog_3 #Done2');
var voice_rate = document.getElementById('voice_rate');

rate.onclick = function() {
    dialog_3.showModal();
}

dialog_3_button_Done2.onclick = function() {
    dialog_3.close();
}
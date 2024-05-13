var erase = document.querySelector('.erase');

erase.onclick = function() {
    Text_Area.value = "";
    Text_Area.focus();
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
}
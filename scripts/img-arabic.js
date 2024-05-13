var arabic = document.querySelector('.arabic');
var dialog_2 = document.getElementById('dialog_2');
var dialog_2_button_yes = document.querySelector('#dialog_2 #Yes');
var dialog_2_button_no = document.querySelector('#dialog_2 #No');

arabic.onclick = function() {
    dialog_2.showModal();
}

var isArabic = false;

dialog_2_button_yes.onclick = function() {
    dialog_2.close();
    language = 'ar-SA'; // ar-DZ, ar-BH, ar-AE
    isArabic = true;
    Text_Area.value = "";
    Text_Area.style.direction = "rtl";
    Text_Area.placeholder = "اكتب النص هنا.";
    read.innerHTML = "قراءة النص";
    copy.innerHTML = "انسخ النص";
    download.innerHTML = "حمل النص كملف";
    retext.innerHTML = "ترتيب النص";
    saye.style.display = "none";
}

dialog_2_button_no.onclick = function() {
    dialog_2.close();
    if (isArabic === true) {
        location.reload();  // location.reload(true); from server
    }
}
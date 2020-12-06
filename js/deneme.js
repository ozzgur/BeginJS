
function hesapla() {
    var sayi = document.getElementById('sayi').value;
    var s = document.getElementById('sayi2').value;
    //Hesaplama işlmeleri
    /*var PIsayisi = Math.PI;
    var yuvarla = Math.round(sayi);
    var ceil = Math.ceil(sayi);
    var floor = Math.floor(sayi);
    var pow = Math.pow(sayi,s);
    var sqrt = Math.sqrt(sayi);
    var md = Math.abs(sayi);*/
    var sayilar = [0, 3, 900, 211, 67, -9, 1001, 100001];
    var a = Math.max(...sayilar);
    console.log(a);
}
var i, x = 0;
function myCounter() {
    setTimeout(function () {
        console.log("Merhaba");
        i++;
        if (i < 3) {
            myCounter();
        }
    }, 2000);
}

function Go() {
    x++;
    console.log(x);
    setTimeout(Go, 100);
}
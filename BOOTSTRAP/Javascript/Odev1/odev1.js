let ad = prompt("Adınızı Giriniz: ");
document.querySelector("#adbilgisi").innerHTML = `Merhaba, <b>${ad}!</b> Hoşgeldin! `;

function gunsaat(){
    let d = new Date();
    let saat = d.getHours();
    let dakika = d.getMinutes();
    let saniye = d.getSeconds();

    dakika = Tik(dakika);
    saniye = Tik(saniye);

    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    document.querySelector("#saatbilgisi").innerHTML = `
    ${saat}:${dakika}:${saniye} ${gunler[d.getDay()]} <br>
    tarihinde <b>Kodluyoruz Frontend Web Develoment Patikası</b>'nın Javascript<br>
    Bölümü 1. Ödevindesiniz. `;
}
function Tik(tikDegeri) {
    if (tikDegeri < 10) {
        tikDegeri = "0" + tikDegeri;
    }
    return tikDegeri;
}

setInterval(gunsaat, 1000);
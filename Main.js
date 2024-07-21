let mesaj = `Market'e hoşgeldiniz!
Market kartınız var mı?
1-Evet
2-Hayır`;

let sonuc = confirm(mesaj); // true veya false döner
let odenecekTutar;

const products = [
    {
        productName: "Süt",
        price: 15
    },
    {
        productName: "Bebek Bezi",
        price: 100
    },
    {
        productName: "Et",
        price: 400
    }
];

if (sonuc) {
    let isim = prompt("Adınızı giriniz:");
    let soyad = prompt("Soyadınızı giriniz:");
    const musteri = new Musteri(isim, soyad, sonuc, products);
    odenecekTutar = musteri.count();

    alert(`Müşteri Bilgileri: ${isim} ${soyad}
Ödenecek Tutar: ${odenecekTutar}`);
} else {
    const musteri = new Musteri(null, null, sonuc, products);
    odenecekTutar = musteri.count();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}

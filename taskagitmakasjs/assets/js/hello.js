let hareketler = ['Taş', 'Kağıt', 'Makas'];
let kisi = prompt ("hangisi Taş Kağıt Makas ?");
let rastgeleSayi = Math.round(Math.random() * 2);
let bilgisayarHamlesi = hareketler[rastgeleSayi];
console.log(bilgisayarHamlesi);

if (
  (kisi === "Taş" && bilgisayarHamlesi === "Makas") ||
  (kisi === "Kağıt" && bilgisayarHamlesi === "Taş") ||
  (kisi === "Makas" && bilgisayarHamlesi === "Kağıt")
){
  alert ("kazandın");
} else {
  alert("kaybettin");
}
  




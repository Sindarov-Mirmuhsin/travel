var sum = Number(prompt("pul miqdorini kiriting"));

var dollar = 750;
var yevro = 120;

var currencyDollar = dollar * 10.900;
var currencyYevro = yevro * 12272.64;

var general = currencyDollar + currencyYevro;

if (sum >= general) {
  console.log("Oq yo’l, Alisher!");
}else{
  console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
}
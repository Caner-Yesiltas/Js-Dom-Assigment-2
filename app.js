const backgroundColor = document.querySelector(".bgDiv");
const buttonClick = document.querySelector(".btn-click");
const butonOver = document.querySelector(".btn-over");
const butonKeyDown = document.querySelector(".btn-down");

buttonClick.addEventListener("click", function () {
  const newColor = randomColors();
  backgroundColor.style.backgroundColor = newColor;
});

butonOver.addEventListener("mouseover", function () {
  const newColor = randomColors(); // degiskene atadik cunku birden fazla kere bu fonksiyonu kullanabiliriz.
  backgroundColor.style.backgroundColor = newColor;
});

butonKeyDown.setAttribute("tabindex", "0");
butonKeyDown.addEventListener("keydown", function () {
  const newColor = randomColors();
  backgroundColor.style.backgroundColor = newColor;
});
as;
function randomColors() {
  const colorLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorLetters[Math.floor(Math.random() * 16)]; // *16 ile carpmak sifir ile 15 arasinda bir sayi secer 15 dahil ! *100 deseydik 100e kadar secicekti.
  }

  return color;
}

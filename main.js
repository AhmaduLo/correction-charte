alert('Bienvenu dans mon site Charte Simplon, je voulait vous dire que "MES BUTTON FONCTIONNES"')

let reusite = document.querySelector(".reussite-collect");
let vivre = document.querySelector(".vivre-ens");
let covid = document.querySelector(".covid");
let fun = document.querySelector(".fun");
let p = document.querySelector(".p");

let btnRand = document.querySelector(".btn-rand");
var nom = document.querySelector(".name");

btnRand.addEventListener("click", function () {
  var apprenant = [
    "David",
    "Muhammad",
    "Fodie",
    "Alicia",
    "Asad",
    "Caroline",
    "Denis",
    "Elyesse",
    "Gaëlle",
    "Maëlys",
    "Farima",
    "Abdoulaye ",
    " Adil ",
    " Alexis ",
    " Ayoub ",
    " Bamba ",
    " Charles ",
    " Flora ",
    " Jules ",
    "Kevin",
    "Lobna",
    "Jonathan",
    "Lyes",
    "Mohamed",
    "Nasser",
  ];
  var random = apprenant[Math.floor(Math.random() * apprenant.length)];
  nom.innerHTML = random;
});

reusite.addEventListener("click", function () {
  reusite.classList.toggle("click");
});
// reusite.addEventListener('mouseenter', function(){
// reusite.classList.toggle('click')
// })
// reusite.addEventListener('mouseout', function(){
// reusite.classList.remove('click')
// })

vivre.addEventListener("click", function () {
  vivre.classList.toggle("click");
});

// vivre.addEventListener('mouseout', function(){
// vivre.classList.remove('click')
// })

covid.addEventListener("click", function () {
  covid.classList.toggle("click");
});
// covid.addEventListener('mouseout', function(){
// covid.classList.remove('click')
// })

fun.addEventListener("click", function () {
  fun.classList.toggle("click");
});
// fun.addEventListener('mouseout', function(){
// fun.classList.remove('click')
// })

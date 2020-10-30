const first = document.getElementById("slider1");
let output = document.getElementById("range1");
const second = document.getElementById("slider2");
let output2 = document.getElementById("range2");
const third = document.getElementById("slider3");
let output3 = document.getElementById("range3");
const fourth = document.getElementById("slider4");
let output4 = document.getElementById("range4");
output.innerHTML = first.value;
first.oninput = function() {
  output.innerHTML = this.value;
};
output2.innerHTML = second.value;
second.oninput = function() {
  output2.innerHTML = this.value;
};
output3.innerHTML = third.value;
third.oninput = function() {
  output3.innerHTML = this.value;
};
output4.innerHTML = fourth.value;
fourth.oninput = function() {
  output4.innerHTML = this.value;
};

// const sliders = document.querySelectorAll('#first');
// const one = parseInt(first.value);
// const two = parseInt(second.value);
// const three = parseInt(third.value);
// const four = parseInt(fourth.value);
// let sum =  one + two + three + four;
// sliders.forEach(function(elem) {
// 	elem.addEventListener('oninput', function (event) {
//     console.log(sliders.value);
//   });
// });
// $( "input[type='range']" ).change(function() {
   
// });

// 	if (sum > 100){
	
// 	console.log(fourth);
// };

// console.log(fourth.value);
// ==================================================
const detailsBtn = document.querySelector('.details__btn');
const detailsMenu = document.querySelector('.details__menu');
const close = document.querySelector('.close');

detailsBtn.addEventListener('mouseover', () => {
	detailsMenu.classList.add('details--active');
});
close.addEventListener('click', () => {
	detailsMenu.classList.remove('details--active');
});

// ==================================================
const pacageMenu = document.querySelector('.pacage__menu');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
	pacageMenu.classList.toggle('pacage__active');
});

const menuLink = document.querySelectorAll('.menu__item');
menuLink.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    menuBtn.innerText = '';
	 menuBtn.innerText += elem.innerText;
	 event.preventDefault();
	 pacageMenu.classList.remove('pacage__active');
  });
});
// ==================================================
const pacageCart = document.querySelector('.pacage__cart');
const pacageCartoval = document.querySelector('.pacage__cartoval');

pacageCart.addEventListener('mouseover', () => {
	pacageCartoval.classList.add('cartoval__active');
});
pacageCartoval.addEventListener('mouseout', () => {
	pacageCartoval.classList.remove('cartoval__active');
});
// ==================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
iconMenu.addEventListener('click', () => {
	iconMenu.classList.toggle('active');
	menuBody.classList.toggle('active');
	body.classList.toggle('lock');
});
// $('.icon-menu').click(function(event) {
// 	$(this).toggleClass('active');
// 	$('.menu__body').toggleClass('active');
// 	$('body').toggleClass('lock');
// });
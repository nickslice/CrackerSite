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
// ==================================================
const detailsBtn = document.querySelector('.details__btn');
const detailsMenu = document.querySelector('.wrapper__details');
const close = document.querySelector('.close');

detailsBtn.addEventListener('click', () => {
	detailsMenu.classList.toggle('details--active');
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


const ul = document.querySelector('.items');
pacageCartoval.addEventListener('click', () => {
	let li = document.createElement('li');
	li.className = 'details__item';
	li.innerHTML = '<span class="weight">1.50kg</span><span class="price">81.50€</span><button onclick="deleteSelf(this)" class="delete"><img class="delete__image" src="img/details/x.svg" alt=""></button>';
	li.id = 'newLi';
	ul.append(li);

	let ingFirst = document.createElement('span');
	ingFirst.className = 'ing first--ing';
	li.prepend(ingFirst);
	let ingSecond = document.createElement('span');
	ingSecond.className = 'ing second--ing';
	li.prepend(ingSecond);

	let ingThird = document.createElement('span');
	ingThird.className = 'ing third--ing';
	li.prepend(ingThird);

	let ingFourth = document.createElement('span');
	ingFourth.className = 'ing fourth--ing';
	li.prepend(ingFourth);


	const img = document.createElement('img');
	img.setAttribute('src', 'img/details/semen2.png');
	li.prepend(img);

	li.insertBefore(ingFirst, img.nextSibling);
	li.insertBefore(ingSecond, ingFirst.nextSibling);
	li.insertBefore(ingThird, ingFourth);
	ingFirst.innerHTML = '';
	ingFirst.innerHTML += output.innerHTML + '%';

	ingSecond.innerHTML = '';
	ingSecond.innerHTML += output2.innerHTML + '%';
	
	
	ingThird.innerHTML = '';
	ingThird.innerHTML += output3.innerHTML + '%';
	
	
	ingFourth.innerHTML = '';
	ingFourth.innerHTML += output4.innerHTML + '%';
	
	
});
// deleting products from cart
const deleteProduct = document.querySelector('.delete');
let newList = document.querySelectorAll('.items li');
const deleting = document.getElementById('newLi');
function deleteSelf(deleteProduct) {
    deleteProduct.parentNode.remove();
}
// ==================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
iconMenu.addEventListener('click', () => {
	iconMenu.classList.toggle('active');
	menuBody.classList.toggle('active');
	body.classList.toggle('lock');
});

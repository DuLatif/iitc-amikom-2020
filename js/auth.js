const input = document.querySelectorAll('input');
console.log(input);

function setEvent(event , element) {
	element.addEventListener(event , function() {
		if(event === 'keydown' || event === 'mouseleave') {
			if(element.value !== '') {
				element.parentElement.firstElementChild.classList.add('active');
			} else {
				element.parentElement.firstElementChild.classList.remove('active');
			}
		} else  {
			element.parentElement.firstElementChild.classList.add('active');
		}
	})
}
input.forEach(element => {
	setEvent('mouseover' , element);
	setEvent('mouseleave' , element);
	setEvent('keydown' , element);
})


const btnLogin = document.querySelector('.btnLogin');

btnLogin.addEventListener('click' , function() {
	const modalBox = document.querySelector('.modal-box');
	modalBox.classList.toggle('active');
})
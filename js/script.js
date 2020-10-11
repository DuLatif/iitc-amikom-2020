const pageItem = document.querySelectorAll('.page-item');
pageItem.forEach(item => {
	item.addEventListener('click' , function() {
		pageItem.forEach(element => {
			element.classList.remove('active');
		})
		item.classList.add('active');
	})
})

const icon       = document.querySelector('.icon-sidebar-menu');
const sidebar    = document.querySelector('aside');


icon.addEventListener('click' , () => {
    if(!icon.classList.contains('active')) {
        icon.classList.add('active');
        sidebar.style.transform = 'translateX(0%)';
    } else {
        icon.classList.remove('active');
        sidebar.style.transform = 'translateX(-100%)';
    }
})
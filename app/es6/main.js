document.addEventListener('DOMContentLoaded', function(){
	window.onscroll = function(){
		var	scrolled = window.pageYOffset || document.documentElement.scrollTop,
			header = document.querySelector('.header');
		if (scrolled > 1){
			header.classList.add('header--scrolled');
		}
		else {
			header.classList.remove('header--scrolled');
		}
	}
	document.querySelector('.header__menu').addEventListener('click', function(e){
		e.preventDefault();
		var target = e.target;
		var href = target.getAttribute('href');
		if (href && href.length > 1) {
			document.getElementById(href.slice(1)).scrollIntoView({
				behavior: 'smooth',
      			block: 'start'
			});
		}
	});
});
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body=document.querySelector('body');
if(isMobile.any()){
	body.classList.add('touch');
	let item=document.querySelectorAll('.nav-item');
	for(i=0; i<item.length; i++){
		let thisLink= item[i].firstChild.nextElementSibling;
		let thisArrow= thisLink.nextElementSibling;
		let subMenu= thisArrow.nextElementSibling;
		thisLink.classList.add('parent');
		item[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
			thisLink.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

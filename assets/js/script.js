VANTA.WAVES({
	el: '#intro',
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 1.0,
	scaleMobile: 1.0,
	color: 0x0,
})
VANTA.WAVES({
	el: '#intro2',
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 1.0,
	scaleMobile: 1.0,
	color: 0x0,
})
window.addEventListener('scroll', function () {
	let nav = document.querySelector('nav')
	nav.classList.toggle('sticky', window.scrollY > 0)
})

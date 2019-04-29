// this is the code which will be injected into a given page...

(function() {
	let y = document.getElementsByTagName('header')
	let x = document.getElementsByTagName('footer')

	y[0].style.visibility = 'hidden'
	x[0].style.visibility = 'hidden'
	console.log('bars killed')
})()
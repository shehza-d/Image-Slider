const img = document.querySelector('#img')
img.src = './img/img01.jpg'
let a = 3;

img.addEventListener('click', (event) => {
	console.log(`Shehzad ${img.src}`)
	console.log(event);
	const Xaxis = event.clientX;
	console.log(event.clientX);

	a++
	switch (a) {
		case 1:
			img.src = './img/img02.jpg'
			break;
		case 2:
			img.src = './img/img03.jpg'
			break;
		case 3:
			img.src = './img/img04.jpg'
			break;
		case 4:
			img.src = './img/img05.jpeg'
			break;
		case 5:
			img.src = './img/img06.jpeg'
			break;
		case 6:
			img.src = './img/img09.jpeg'
			break;
		case 7:
			img.src = './img/img11.jpeg'
			break;
		case 8:
			img.src = './img/img12.jpeg'
			break;
		default:
			img.src = './img/img01.jpg'
			break;
	}
	console.log(a)
	if (a > 8 || a < 0) a = 1
});


// img.src = './img/img03.jpg'
// img.src = './img/img04.jpg'
// img.src = './img/img05.jpeg'
// img.src = './img/img06.jpeg'
// img.src = './img/img09.jpeg'
// img.src = './img/img11.jpeg'
// img.src = './img/img12.jpeg'

// const imgSlider = (event) => {
// let img = document.querySelector('#img').innerHTML; //"./img/img01.jpg";
// 	// console.log(img)
// 	// console.log(typeof(img))
// 	// console.log(event);
// 	const Xaxis= event.clientX;
// 	console.log(event.clientX);
// 	// console.log(event.PointerEvent.clientX);
// 	// console.log(event.clientY);
// }
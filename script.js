let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;

function showSlide(index) {
	images.forEach((image, i) => {
		image.style.opacity = i === index ? 1 : 0;
		image.style.zIndex = i === index ? 1 : 0;
	});
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % totalImages;
	showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000); // Change image every 3 seconds

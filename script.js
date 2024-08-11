let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;
let isTransitioning = false;

function showSlide(index) {
	const carouselImages = document.querySelector(".carousel-images");
	isTransitioning = true;
	carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
	if (isTransitioning) return; // Prevent spamming next button
	currentIndex = (currentIndex + 1) % totalImages;
	showSlide(currentIndex);
}

function prevSlide() {
	if (isTransitioning) return; // Prevent spamming prev button
	currentIndex = (currentIndex - 1 + totalImages) % totalImages;
	showSlide(currentIndex);
}

// Listen for the end of transition to unlock controls
document
	.querySelector(".carousel-images")
	.addEventListener("transitionend", () => {
		isTransitioning = false;
	});

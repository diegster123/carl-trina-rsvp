// Carousel functionality
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

// Scroll animations
document.addEventListener("DOMContentLoaded", () => {
	// Initialize ScrollReveal
	const sr = ScrollReveal({
		distance: "60px",
		duration: 1500,
		delay: 20,
		easing: "cubic-bezier(0.5, 0, 0, 1)",
	});

	// Animate the header (carousel)
	sr.reveal("header", {
		origin: "bottom",
		distance: "100px",
	});

	// Animate sections
	sr.reveal(
		".invitation, .details, .wedding-party, .wedding-location, .other-info, .other-details, .rsvp",
		{
			origin: "bottom",
			interval: 35,
		}
	);

	// Animate timeline items
	sr.reveal(".timeline-item", {
		origin: "bottom",
		interval: 150,
	});

	// Animate party groups
	sr.reveal(".party-group", {
		origin: "bottom",
		interval: 35,
	});

	// Animate color swatches
	sr.reveal(".color-swatch", {
		origin: "bottom",
		interval: 150,
	});

	// Animate details grid items
	sr.reveal(".detail-item", {
		origin: "bottom",
		interval: 35,
	});

	// Add fade-in effect to text elements
	sr.reveal(".invitation p, .details p, .wedding-party p", {
		origin: "bottom",
		distance: "20px",
		opacity: 0,
		interval: 30,
	});
});

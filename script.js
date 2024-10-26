// Add this to your script.js file
function createMapModal() {
	// Create modal HTML
	const modalHTML = `
      <div id="mapModal" class="map-modal" style="display: none;">
        <div class="map-modal-overlay"></div>
        <div class="map-modal-content">
          <button class="map-modal-close">&times;</button>
          <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7721.547636064705!2d120.98282540291812!3d14.61195667082055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3397c9fffc6ffc0b%3A0x631402c0b2ea5f77!2sSant%C3%ADsimo%20Rosario%20Parish%20(Archdiocese%20of%20Manila)%2C%20JX5Q%2BM8G%2C%20Ceferino%20Gonzales%20Dr%2C%20Sampaloc%2C%20Manila%2C%201008%20Metro%20Manila!3m2!1d14.6091503!2d120.9883661!4m5!1s0x3397b5fd636fd041%3A0x3684f05d82fff018!2sWinford%20Resort%20and%20Casino%20Manila%2C%20352%20Zone%2035%2C%201800%20Consuelo%20St%2C%20Santa%20Cruz%2C%20Manila%2C%201014%20Metro%20Manila!3m2!1d14.6175328!2d120.9873913!5e0!3m2!1sen!2sph!4v1729969649067!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    `;

	document.body.insertAdjacentHTML("beforeend", modalHTML);

	// Add button to map-directions div
	const mapButtonHTML = `
    <button id="mapButton" class="map-button">
      <i class="map-icon"></i>
      View Map Directions
    </button>
    `;
	const mapDirectionsDiv = document.getElementById("map-directions");
	mapDirectionsDiv.innerHTML = mapButtonHTML;

	// Get modal elements
	const modal = document.getElementById("mapModal");
	const btn = document.getElementById("mapButton");
	const closeBtn = document.querySelector(".map-modal-close");
	const overlay = document.querySelector(".map-modal-overlay");

	// Add click events
	btn.onclick = () => {
		modal.style.display = "block";
	};

	const closeModal = () => {
		modal.style.display = "none";
	};

	closeBtn.onclick = closeModal;
	overlay.onclick = closeModal;

	// Close modal when pressing Escape key
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal.style.display === "block") {
			closeModal();
		}
	});
}

// Main DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
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
			interval: 100,
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
		interval: 100,
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
	sr.reveal(
		".invitation p, .details p, .wedding-party p, .attire p, .colors p",
		{
			origin: "bottom",
			distance: "20px",
			opacity: 0,
			interval: 30,
		}
	);

	// Animate wedding location elements
	sr.reveal(".wedding-location .qr-code", {
		origin: "bottom",
		distance: "40px",
		interval: 100,
	});

	sr.reveal(
		".wedding-location h1, .wedding-location h3, .wedding-location p",
		{
			origin: "bottom",
			distance: "40px",
			interval: 150,
		}
	);

	sr.reveal(".wedding-location .parish", {
		origin: "bottom",
		distance: "60px",
		interval: 200,
	});

	// Create map modal
	createMapModal();
});

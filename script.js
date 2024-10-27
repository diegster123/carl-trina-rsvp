// Add this to your script.js file
function createMapModal() {
	// Create modal HTML
	const modalHTML = `
      <div id="mapModal" class="map-modal" style="display: none;">
        <div class="map-modal-overlay"></div>
        <div class="map-modal-content">
          <button class="map-modal-close">&times;</button>
         
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
		document.body.style.overflow = "hidden"; // Prevent background scrolling
	};

	const closeModal = () => {
		modal.style.display = "none";
		document.body.style.overflow = ""; // Restore scrolling
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

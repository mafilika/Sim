// LIGHTBOX
const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = "none";
});

// WHATSAPP FORM
function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const url = "https://wa.me/27736429105?text="
        + "New Booking%0A"
        + "Name: " + name + "%0A"
        + "Service: " + service + "%0A"
        + "Message: " + message;

    window.open(url, '_blank');
      }

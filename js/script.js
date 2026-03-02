// Mobile Menu
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if(toggle){
toggle.addEventListener('click',()=>{
navMenu.classList.toggle('active');
});
}

// Lightbox
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');

if(galleryImages){
galleryImages.forEach(img=>{
img.addEventListener('click',()=>{
lightbox.style.display="flex";
lightboxImg.src=img.src;
});
});
}

if(lightbox){
lightbox.addEventListener('click',()=>{
lightbox.style.display="none";
});
}

// WhatsApp Form
function sendToWhatsApp(){
let name=document.getElementById("name").value;
let service=document.getElementById("service").value;
let message=document.getElementById("message").value;

let url="https://wa.me/27736429105?text="
+"NEW SERVICE BOOKING%0A%0A"
+"Name: "+name+"%0A"
+"Service Needed: "+service+"%0A"
+"Project Details: "+message+"%0A"
+"Location: Gauteng Province";

window.open(url,'_blank');
    }

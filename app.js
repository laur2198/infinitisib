const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

const phoneNumber = document.querySelector('phone-button')

function makePhoneCall(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}

function openWhatsAppChat(phoneNumber) {
  window.open('https://wa.me/' + phoneNumber, '_blank');
}

let scrollContainer = document.querySelector(".fifth_container");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

const pictureWidth = 350;

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += pictureWidth;
}); 

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= pictureWidth;
});







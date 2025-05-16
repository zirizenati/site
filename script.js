document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your submission! We will contact you soon.');
  this.reset();
});

// Place this script at the bottom of your HTML (before </body>) or in a JS file
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  const thankYou = document.getElementById('thankYouMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        form.style.display = 'none';
        thankYou.style.display = 'block';
      } else {
        alert("There was a problem sending your message. Please try again.");
      }
    })
    .catch(error => {
      alert("There was a problem sending your message. Please try again later.");
    });
  });
});

document.getElementById("headline").classList.add("h1-underline-end");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let submit = document.getElementById("submit");
  submit.addEventListener("click", function() {
    document.getElementById("sent").classList.add("sent");
  });

new WOW().init();

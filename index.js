document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    console.log('Revealing .home-content and .heading from top');

    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-container, .contact form', { origin: 'bottom' });
    console.log('Revealing .home-img, .services-container, .portfolio-box, .contact form from bottom');

    ScrollReveal().reveal('.about-img img, .contact h1', { origin: 'left' });
    console.log('Revealing .home-contact h1 and .about-img from left');

    ScrollReveal().reveal('.home-content p, .services-box, .portfolio-box, .about-content, .experience-box', { origin: 'right' });
    console.log('Revealing .home-content p, .services-box, .portfolio-box, .about-content, .experience-box from right');
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', (event) => {
    const typed = new Typed('#multiple-text', {
        strings: ['Cloud Operations Engineer', 'Contributor'],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
    });
});

function SendMail(event) {
    event.preventDefault();
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        mobile: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    if (!params.from_name || !params.email_id || !params.message) {
        alert("Please fill in all required fields.");
        return;
    }

    emailjs.send("service_tq4fo65", "template_94ysqah", params)
        .then(function (res) {
            alert("Success! " + res.status);
            document.getElementById("contactForm").reset();
        })
        .catch(function (err) {
            console.error("Error details:", err);
            alert("Failed to send: " + JSON.stringify(err));
        });
}
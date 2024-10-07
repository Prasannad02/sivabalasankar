document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content', { origin: 'top' });
    console.log('Revealing .home-content and .heading from top');

    ScrollReveal().reveal('.home-img, .services-container', { origin: 'bottom' });
    console.log('Revealing .home-img, .services-container, .portfolio-box, .contact form from bottom');

    ScrollReveal().reveal('.home-contact h1, .about-img,.contact form', { origin: 'left' });
    console.log('Revealing .home-contact h1 and .about-img from left');

    ScrollReveal().reveal('.home-contact p,.services-box, .portfolio-box,.about-content', { origin: 'right'});
    console.log('Revealing .home-contact p and .about-content from right');
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
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
    // Gather form data
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        mobile: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Input validation (optional)
    if (!params.from_name || !params.email_id || !params.message) {
        alert("Please fill in all required fields.");
        return; // Stop execution if validation fails
    }

    // Send email
    emailjs.send("service_tq4fo65", "template_94ysqah", params)
        .then(function (res) {
            alert("Success! " + res.status);
            document.getElementById("contactForm").reset(); // Reset form after success
        })
        .catch(function (err) {
            console.error("Error details:", err); // Log error details to the console
            alert("Failed to send: " + JSON.stringify(err));
        });
}



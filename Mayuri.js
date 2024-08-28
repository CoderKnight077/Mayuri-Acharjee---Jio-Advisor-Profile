
// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated Typing Effect for Tagline
const tagline = document.querySelector('.tagline');
const text = tagline.textContent;
tagline.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        tagline.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Image Modal Viewer
const imageContainer = document.querySelector('.image-container');
const modal = document.createElement('div');
const modalImg = document.createElement('img');
const closeBtn = document.createElement('span');

modal.classList.add('modal');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';
modal.appendChild(modalImg);
modal.appendChild(closeBtn);
document.body.appendChild(modal);

imageContainer.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = imageContainer.querySelector('img').src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
    const email = form.querySelector('input[name="email"]');
    const name = form.querySelector('input[name="name"]');
    const message = form.querySelector('textarea[name="message"]');
    
    if (!email.value || !name.value || !message.value) {
        alert('All fields are required!');
        event.preventDefault();
    } else if (!validateEmail(email.value)) {
        alert('Please enter a valid email address!');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Accordion for Achievements
const cards = document.querySelectorAll('.card h2');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const content = card.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Scroll-to-Top Button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = 'Top';
scrollBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        "Your voice is calming, and your support has been truly exceptional.",
        "Your assistance was timely, and your advice has been invaluable.",
        "You are incredibly patient, and your guidance is always spot on.",
        "Your dedication to helping customers is truly inspiring.",
        "Your professionalism and warmth made all the difference."
    ];

    let currentIndex = 0;
    const testimonialTextElement = document.getElementById('testimonial-text');
    const typingSpeed = 50; // Speed of typing effect in milliseconds
    const pauseBetweenTestimonials = 5000; // Pause between testimonials

    function typeEffect(text, callback) {
        let index = 0;
        testimonialTextElement.textContent = '';

        function type() {
            if (index < text.length) {
                testimonialTextElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            } else if (callback) {
                setTimeout(callback, pauseBetweenTestimonials); // Pause after typing
            }
        }

        type();
    }

    function changeTestimonial() {
        const testimonial = testimonials[currentIndex];
        typeEffect(testimonial, () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            changeTestimonial(); // Move to next testimonial after typing
        });
    }

    changeTestimonial(); // Start the typing effect
});


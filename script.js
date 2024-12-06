document.addEventListener("DOMContentLoaded", function () {
    const words = ["Web Developer", "Web Designer", "Frontend Developer","A Pythonist"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newWordDelay = 2000;
  
    function type() {
        if (charIndex < words[wordIndex].length) {
            currentWord += words[wordIndex].charAt(charIndex);
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newWordDelay);
        }
    }
  
    function erase() {
        if (charIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            document.querySelector('.typing-animation').textContent = currentWord;
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }
  
    type();
  });
  
  
  
  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-done');
  
  progressBars.forEach(bar => {
      setTimeout(() => {
          bar.style.width = bar.getAttribute('data-done') + '%';
          bar.style.opacity = 1;
      }, 500);
  });
  
  // Animate circular skills
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach(circle => {
      let percent = circle.getAttribute('data-percent');
      circle.style.setProperty('--percent', percent);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Show the thank you message
        thankYouMessage.classList.add("visible");

        // Clear the form fields
        contactForm.reset();

        // Automatically hide the message after 5 seconds
        setTimeout(() => {
            thankYouMessage.classList.remove("visible");
        }, 5000);
    });
});


document.addEventListener("mousemove", (e) => {
    const elements = document.querySelectorAll(".animation-elements div");
    elements.forEach((el, index) => {
        const speed = (index + 1) * 0.5;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
});


// Wait 5 seconds before hiding the preloader and showing the portfolio content
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none'; // Hide the preloader
        document.getElementById('portfolio').style.display = 'block'; // Show the portfolio content
    }, 5000); // 5 seconds delay
});






particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");
    const burger = document.createElement("div");
    burger.classList.add("burger");
    burger.innerHTML = '<div></div><div></div><div></div>';
    document.querySelector(".navbar").appendChild(burger);

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


const phrases = ["Sahil Andhare", "Future Billionaire", "humanitarian", "Genius?", "Scroll down now"];
        const typewriterElement = document.getElementById('typewriter');
        const speed = 100; // typing speed in milliseconds
        let phraseIndex = 0;

        function typeWriter() {
            let index = 0;
            const text = phrases[phraseIndex];

            function typeCharacter() {
                if (index < text.length) {
                    typewriterElement.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(typeCharacter, speed);
                } else {
                    setTimeout(eraseText, 2000); // wait before erasing
                }
            }

            function eraseText() {
                if (index > 0) {
                    typewriterElement.innerHTML = text.substring(0, index - 1);
                    index--;
                    setTimeout(eraseText, speed / 2); // erasing speed
                } else {
                    phraseIndex = (phraseIndex + 1) % phrases.length; // move to the next phrase
                    setTimeout(typeWriter, 500); // wait before typing the next phrase
                }
            }

            typeCharacter();
        }

        typeWriter(); // Start the typing effect




// ===============================
// MUSIC
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.currentTime = 60;

musicBtn.addEventListener("click", function () {
    music.play();

    musicBtn.innerHTML = "🎵 Music Playing ❤️";
});
window.addEventListener("load", function () {
    music.play().catch(function () {
        console.log("Chrome blocked autoplay");
    });
});
document.addEventListener("click", function startMusic() {
    music.play().catch(function () {
        console.log("Music blocked");
    });

    document.removeEventListener("click", startMusic);
});

// ===============================
// SURPRISE
// ===============================

function openSurprise() {
    document.getElementById("surprise").style.display = "flex";

    music.play().catch(function() {
        console.log("Music could not start");
    });
}

function closeSurprise() {
    document.getElementById("surprise").style.display = "none";
}


// ===============================
// PHOTO SLIDESHOW
// ===============================

const photos = [
    "Birthday photos/1.jpeg",
    "Birthday photos/2.jpeg",
    "Birthday photos/3.jpeg",
    "Birthday photos/4.jpeg",
    "Birthday photos/5.jpeg",
    "Birthday photos/6.jpeg",
    "Birthday photos/7.jpeg",
    "Birthday photos/8.jpeg",
    "Birthday photos/9.jpeg",
    "Birthday photos/10.jpeg",
    "Birthday photos/11.jpeg",
    "Birthday photos/12.jpeg",
    "Birthday photos/13.jpeg",
    "Birthday photos/14.jpeg",
    "Birthday photos/15.jpeg",
    "Birthday photos/16.jpeg",
    "Birthday photos/17.jpeg",
    "Birthday photos/18.jpeg",
    "Birthday photos/19.jpeg",
    "Birthday photos/20.jpeg",
    "Birthday photos/21.jpeg",
    "Birthday photos/22.jpeg",
    "Birthday photos/23.jpeg",
    "Birthday photos/24.jpeg",
    "Birthday photos/25.jpeg"
];

let currentPhoto = 0;

setInterval(function () {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    document.getElementById("sliderImage").src =
        photos[currentPhoto];

}, 3000);
// FLOATING HEARTS ❤️

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    document.getElementById("effects").appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);


// FLOATING BALLOONS 🎈

function createBalloon() {
    const balloon = document.createElement("div");

    balloon.className = "balloon";
    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * 100 + "%";

    document.getElementById("effects").appendChild(balloon);

    setTimeout(function () {
        balloon.remove();
    }, 9000);
}

setInterval(createBalloon, 900);

// ===============================
// COUNTDOWN
// ===============================

const birthdayDate = new Date("September 18, 2026 00:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Happy Birthday Panu! 🎂❤️";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}, 1000);
// ================================
// FIREWORKS 🎆
// ================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = [];

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = 100 + Math.random() * (canvas.height * 0.45);

    const colors = [
        "#ff3366",
        "#ffd700",
        "#00bfff",
        "#ff66ff",
        "#00ff99"
    ];

    for (let i = 0; i < 70; i++) {

        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 6;

        particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 60,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p) {

        p.x += p.vx;
        p.y += p.vy;

        p.vy += 0.05;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });

    particles = particles.filter(function(p) {
        return p.life > 0;
    });

    requestAnimationFrame(animateFireworks);
}

animateFireworks();

setInterval(function() {
    createFirework();
}, 900);
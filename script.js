// ==============================
// SETTING
// ==============================

// GANTI TANGGAL HARI H
const weddingDate = new Date("December 12, 2026 09:00:00").getTime();


// ==============================
// OPENING UNDANGAN
// ==============================

function openInvitation() {

    const opening = document.getElementById("opening");
    const content = document.getElementById("content");
    const music = document.getElementById("music");

    // Tampilkan isi undangan
    content.style.display = "block";

    // Hilangkan halaman pembuka
    opening.classList.add("hide");

    // Kunci scroll dibuka
    document.body.classList.remove("locked");

    // Coba putar musik
    music.play()
        .then(() => {
            console.log("Musik berjalan");
        })
        .catch(() => {
            console.log("Browser menunggu izin musik");
        });

}


// ==============================
// MUSIK ON / OFF
// ==============================

let musicPlaying = false;


function toggleMusic() {

    const music = document.getElementById("music");
    const button = document.getElementById("musicButton");


    if (music.paused) {

        music.play();

        musicPlaying = true;

        button.innerHTML = "🎵";

    } else {

        music.pause();

        musicPlaying = false;

        button.innerHTML = "🔇";

    }

}


// ==============================
// COUNTDOWN
// ==============================

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    // Kalau tanggal sudah lewat
    if (distance <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;

    }


    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance %
            (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance %
            (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance %
            (1000 * 60))
        /
        1000
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


// Jalankan countdown setiap 1 detik
setInterval(updateCountdown, 1000);

// Jalankan langsung
updateCountdown();


// ==============================
// ANIMASI SAAT SCROLL
// ==============================

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Elemen yang ingin dianimasikan
document
    .querySelectorAll(
        ".section, .person, .event-card, .gallery-item, .story-item"
    )
    .forEach(function(element) {

        element.classList.add("scroll-animation");

        observer.observe(element);

    });


// ==============================
// GALERI CLICK EFFECT
// ==============================

const galleryImages =
    document.querySelectorAll(".gallery-item img");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const overlay =
            document.createElement("div");

        overlay.className =
            "image-preview";


        const preview =
            document.createElement("img");

        preview.src =
            image.src;


        overlay.appendChild(preview);

        document.body.appendChild(overlay);


        overlay.addEventListener(
            "click",
            function() {

                overlay.remove();

            }
        );

    });

});

const leavesContainer = document.getElementById("leaves");

function createLeaf() {

    const leaf = document.createElement("div");

    leaf.className = "leaf";

    leaf.style.left = Math.random() * 100 + "vw";

    const size = 0.6 + Math.random() * 0.8;

    leaf.style.width = (10 * size) + "px";
    leaf.style.height = (18 * size) + "px";

    const duration = 8 + Math.random() * 8;

    leaf.style.animationDuration = duration + "s";

    leavesContainer.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, (duration + 1) * 1000);
}

setInterval(createLeaf, 1000);

const sparklesContainer = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    const size = 2 + Math.random() * 4;

    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    sparkle.style.animationDelay =
        Math.random() * 3 + "s";

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);
}

setInterval(createSparkle, 1500);
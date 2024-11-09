// Gjej elementet
const heartButton = document.getElementById('heart-button');
const animatedHeart = document.getElementById('animated-heart');
const heartbeatSound = document.getElementById('heartbeat-sound');

// Shfaq zemrën dhe nis tingullin kur kursori afrohet
heartButton.addEventListener('mouseenter', () => {
    animatedHeart.style.display = 'block';
    animatedHeart.style.top = `${heartButton.offsetTop - 50}px`;
    animatedHeart.style.left = `${heartButton.offsetLeft + heartButton.offsetWidth / 2 - 50}px`;
    heartbeatSound.play();
});

// Fsheh zemrën dhe ndalon tingullin kur kursori largohet
heartButton.addEventListener('mouseleave', () => {
    animatedHeart.style.display = 'none';
    heartbeatSound.pause();
    heartbeatSound.currentTime = 0; // Reset tingullin për herën tjetër
});

// Hap faqen e dytë kur butoni klikohet
heartButton.addEventListener('click', () => {
    window.location.href = 'second-page.html';
});
// Funksioni për të luajtur muzikën
let music = document.getElementById('background-music');
let playBtn = document.getElementById('play-music-btn');

function playMusic() {
    // Kontrollo nëse muzika është në pauzë dhe luaj atë
    if (music.paused) {
        music.play();
        playBtn.style.display = 'none'; // Fshih butonin pasi muzika ka filluar
    }
}

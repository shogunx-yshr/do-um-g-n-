// Sayfa yüklendiği an konfetileri patlat
window.onload = function() {
    // İlk açılışta çok yoğun bir yağmur başlat (200 adet)
    createConfettiBurst(200);

    // Müzik çalmayı dene
    const audio = document.getElementById("myAudio");
    if (audio) {
        audio.play().catch(() => console.log("Müzik için etkileşim bekleniyor..."));
    }
};

function openLetter(element) {
    // Mektuba basıldığında sadece açılma animasyonu olur
    element.classList.add('active');
}

function createConfettiBurst(count) {
    for (let i = 0; i < count; i++) {
        spawnConfetti();
    }
}

function spawnConfetti() {
    const container = document.querySelector('.confetti-container');
    if (!container) return;

    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Rastgele Şekil Seçimi: Kare, Yıldız veya Dalga
    const shapes = ['square', 'star', 'wave'];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    if (randomShape !== 'square') {
        confetti.classList.add(randomShape);
    }

    // Renkler, Boyutlar ve Hızlar
    const colors = ['#ff4d4d', '#ffb6c1', '#ffffff', '#ffd700', '#ff69b4', '#87ceeb'];
    const size = Math.random() * 15 + 8 + 'px'; // Biraz daha büyükler
    
    confetti.style.width = (randomShape === 'wave' ? '25px' : size);
    confetti.style.height = size;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    
    // Konfetilerin düşüş hızı (farklı hızlar daha doğal durur)
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's'; 
    confetti.style.animationDelay = Math.random() * 3 + 's'; // Bazıları geç başlasın ki yağmur sürsün

    container.appendChild(confetti);

    // Hafıza dolmaması için sil
    setTimeout(() => { confetti.remove(); }, 7000);
}

// Sayfa açık olduğu sürece arka planda hafif dökülmeye devam etsin
setInterval(() => {
    spawnConfetti();
}, 200);
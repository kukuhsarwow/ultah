function createBalloons() {
    const balloonCount = 10; // Jumlah balon
    const body = document.body;

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        body.appendChild(balloon);

        // Posisi acak balon
        balloon.style.left = `${Math.random() * window.innerWidth}px`;
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durasi acak animasi
        balloon.style.animationDelay = `${Math.random() * 5}s`; // Delay acak
    }
}

// Memulai fungsi pembuatan balon
createBalloons();
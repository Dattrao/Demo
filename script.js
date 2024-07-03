function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

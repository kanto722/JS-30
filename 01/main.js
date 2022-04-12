function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('playing');
    setTimeout(() => {
        key.classList.remove('playing');
    }, 300)
  }
const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
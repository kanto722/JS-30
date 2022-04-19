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
<<<<<<< HEAD

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  
  this.classList.remove('playing');

}

=======
>>>>>>> e640b6ab7ae88a12f7059fea08d7fcb69ebb7a01
const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
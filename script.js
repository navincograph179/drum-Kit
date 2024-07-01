

function removeTransition (e) {
    // (e) para return values include properName. ProperName is used for css properties
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    key.classList.add('playing');

    //audio.currentTime represented the currrent time of audio.
    //In this code, audio time will start from zero without delayed.
    audio.currentTime = 0;
    audio.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// transitionend is a type of event listener
window.addEventListener('keydown', playSound);
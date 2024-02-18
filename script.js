document.addEventListener('DOMContentLoaded', function () {
    const audiobutton = document.getElementById('sound');


    audiobutton.addEventListener('click', function () {
        var audio = document.getElementById('backgroundAudio');
        if (audio.paused) {
            audio.play();
            audiobutton.innerHTML = "🔊";
        } else {
            audio.pause();
            audiobutton.innerHTML = "🔇";
        }
    });

})
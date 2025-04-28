const beat = document.querySelectorAll('.beat');
const sounds = document.querySelector('.sounds');

const beatFile = [
    "beats/085459_8039s-power-snare-44664.mp3",
    "beats/hi-hat-6-231041.mp3",
    "beats/kick-greg-232043.mp3",
    "beats/one-shot-experimental-808-bass-113409.mp3",
    "beats/pearl-mlx-10-tom-86785.mp3",
    "beats/percussion-snap-103929.mp3",
    "beats/rimshot-sweet-107111.mp3",
    "beats/tr707-crash-cymbal-241376.mp3",
    "beats/tr808-clap-241405.mp3"
]


sounds.addEventListener('click', (e) => {
    if(e.target.classList.contains('beat')){
        beat.forEach((drumBeat, index) => {
            drumBeat = new Audio(beatFile[index])
            drumBeat.play();
        });
    }
})









// const listA = [1,2,3]
// const listB = ['A','B','C']
// listB.forEach((letter, index) => {
//     console.log(`${letter}:${listA[index]}`);

// })
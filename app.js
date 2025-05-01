const beat = document.querySelectorAll('.beat');
const sounds = document.querySelector('.sounds');
const customSwitch =  document.querySelector('.customSwitch');


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


function DrumSwitch() {
  
}





beat.forEach((sound) => {
  sound.classList.add('disabled');
});

customSwitch.addEventListener('change', () => {

  if(customSwitch.checked === true){
    
  }else {
    
  }
})

sounds.addEventListener('click', (e) => {
    if(e.target.classList.contains('beat')){
      beat.forEach((beats, index) => {
        if(e.target === beats){      
          let sounds = beatFile[index];
          let audio = new Audio(sounds);
          audio.play();
        }
      })
    
    }
})

const beat = document.querySelectorAll('.beat');
const sounds = document.querySelector('.sounds');
const customSwitch =  document.querySelector('.customSwitch');
const volume = document.querySelector('#volume')
const soundName = document.querySelector('.soundName');


// List of  drum beat audio
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


//looping through the beat container and assigning the class of 'disabled' to each
for(bt of beat){
  bt.classList.add('disabled');  
}

//Drum switch function
function drumSwitch() {
  
  beat.forEach((sound) => {
    if(customSwitch.checked === true){
      sound.classList.remove('disabled');
    }else {
      sound.classList.add('disabled');
    }
  });
}

//Drum volume function
function drumVolume(){
  beat.forEach((index) => {
    let sounds = beatFile[index];
    let audio = new Audio(sounds);
    audio.volume = volume.value / 100;
    
  })
}


// EventListener for drum switch
customSwitch.addEventListener('change', drumSwitch)

// EventListener for drum volume
volume.addEventListener('change', drumVolume);

// EventListener for sound when clicked
sounds.addEventListener('click', (e) => {
    if(e.target.classList.contains('beat')){
      beat.forEach((beats, index) => {
        if(e.target === beats){      
          let sounds = beatFile[index];
          console.log(sounds);
          let audio = new Audio(sounds);
          audio.volume = volume.value / 100;
          audio.play();
        }
      })
    
    }
})





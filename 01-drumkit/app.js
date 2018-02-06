function playSound(sound) {
  var audio = new Audio('./sounds/'+sound+'.wav');
  audio.play();
}

function activateSound(sound, key) {
  if (sound) {
    Array.from(document.getElementsByClassName("key")).forEach((e)=>{
      e.classList.remove("active")
    })
    document.getElementById("key-"+ key.toLowerCase()).classList.add("active");
    window.setTimeout(function(){
      document.getElementById("key-"+ key.toLowerCase()).classList.remove("active");
    }, 300);
    playSound(sound);
  }
}

document.addEventListener('keypress', (event) => {
  var key = ("" + event.key).toUpperCase();
  switch (key) {
    case "A":
      activateSound('clap', key)
      break;
    case "S":
      activateSound('hihat', key)
      break;
    case "D":
      activateSound('kick', key)
      break;
    case "F":
      activateSound('openhat', key)
      break;
    case "G":
      activateSound('boom', key)
      break;
    case "H":
      activateSound('ride', key)
      break;
    case "J":
      activateSound('snare', key)
      break;
    case "K":
      activateSound('tom', key)
      break;
    case "L":
      activateSound('tink', key)
      break;
  }
})
function playSound(sound, key) {
  if (sound) {
    Array.from(document.getElementsByClassName("key")).forEach((e)=>{
      e.classList.remove("active")
    })
    document.getElementById("key-"+ key.toLowerCase()).classList.add("active");
    window.setTimeout(function(){
      document.getElementById("key-"+ key.toLowerCase()).classList.remove("active");
    }, 300);
    console.log(sound);
  } else {
    console.log("no sounds")
  }
}

playSound();

document.addEventListener('keypress', (event) => {
  var key = ("" + event.key).toUpperCase();
  //console.log(key.toLowerCase())
  //console.log(key)
  switch (key) {
    case "A":
      playSound('clap', key)
      break;
    case "S":
      playSound('hihat', key)
      break;
    case "D":
      playSound('kick', key)
      break;
    case "F":
      playSound('openhat', key)
      break;
    case "G":
      playSound('boom', key)
      break;
    case "H":
      playSound('ride', key)
      break;
    case "J":
      playSound('snare', key)
      break;
    case "K":
      playSound('tom', key)
      break;
    case "L":
      playSound('tink', key)
      break;
  }
})
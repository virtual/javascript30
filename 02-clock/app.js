var clock = {
  init: function() {
    this.time = new Date();
    this.hour = this.time.getHours() % 12;
    this.min = this.time.getMinutes() % 60;
    this.sec = this.time.getSeconds() % 60;

    this.displaySec();
    this.displayMin();
    this.displayHour();
  },
  getTime: function() {
    let time = '';
    time = this.hour + ":"+ (this.min).toString().padStart(2, "0")+":"+(this.sec).toString().padStart(2, "0");
    return time;
  },
  displayHour: function() {
    let deg = (this.hour % 12 * 30) + 90;
    document.getElementById('clock-hour').setAttribute('style', 'transform: rotate('+ 
    deg +'deg)');
  },
  displayMin: function() {
    let deg = (this.min % 60 * 6) + 90;
    document.getElementById('clock-min').setAttribute('style', 'transform: rotate('+ deg +'deg)');
  },
  displaySec: function() {
    document.getElementById('clock-sec').setAttribute('style', 'transform: rotate('+ ((this.sec % 60 * 6) + 90) +'deg)');
  }
} 
function updateHands() {
  let oneSec = 1000;
  setInterval(function(){ 
    clock.displaySec();
    document.getElementById('time').innerHTML = clock.getTime();
    clock.sec = (clock.sec+1)%60;
  }, oneSec);
  setInterval(function(){ 
    clock.displayMin();
    clock.min = (clock.min + 1)% 60;
  }, oneSec * 60);
  setInterval(function(){ 
    clock.displayHour();
    clock.hour = (clock.hour + 1)%12;
  }, oneSec * 60 * 60);
}
function runClock(){
  clock.init();
  updateHands();
} 
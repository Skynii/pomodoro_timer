let pomodoroBtn = document.getElementById('pomodoroBtn');
let pausaCurtaBtn = document.getElementById('pausaCurtaBtn');
let pausaLongaBtn = document.getElementById('pausaLongaBtn');
let time = document.getElementById('counter')
let startBtn = document.getElementById('start-btn');
const timer = {
   pomodoro: 25,
   shortBreak: 5,
   longBreak: 15,
   longBreakInterval: 4,
};

const menuBtn = document.querySelectorAll('.menu');
menuBtn.addEventListener('click', handleMode);

function updateTimer() {
   const { remaingTime } = timer;
   const minutes = `${remainingTime.minutes}`.padStart(2,'0');
   const seconds = `${remainingTime.seconds}`.padStart(2,'0');

   const min = document.getElementById('minutes');
   const sec = document.getElementById('seconds');
   min.textContent = minutes
   sec.textContent = seconds
}


//*Buttons are working and changing the mode
function switchMode(mode) {
   timer.mode = mode;
   time.remaingTime ={
      total: timer[mode] * 60,
      minutes: timer[mode],
      seconds: 0,
   };


   document
      .querySelectorAll('button[data-mode]')
      .forEach(e => e.classList.remove('active')); //!Remove active from all buttons
   document.querySelector(`[data-Mode="${mode}"]`).classList.add('active');//! Add active only at the button wich was clicked
   document.body.style.backgroundColor = `var(--${mode})` //!Add Color when the button is clicked

   updateTimer();
}

function handleMode(event) {
   const {mode} = event.target.dataset;

   if (!mode) return;

   switchMode (mode);
}







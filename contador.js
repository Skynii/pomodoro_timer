const alarm = new Audio('clock-alarm.mp3')
const timer = {
   pomodoro:  25,
   shortBreak: 5,
   longBreak: 15,
   longBreakInterval: 4,
   sessions: 0,
};
let interval;

const menuButtons = document.querySelector('#mode-buttons');
menuButtons.addEventListener('click', handleMode);

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
   const { action } = startBtn.dataset;
   if (action === 'start') {
      startTimer();
   }else{
      stopTimer();
   }   
});

//*function will calculate the difference between the end and start, and convert by time
function getRemainingTime(endTime) { 
   
   const currentTime = Date.parse(new Date());
   const difference = endTime - currentTime;

   const total = Number.parseInt(difference / 1000, 10);
   const minutes = Number.parseInt((total / 60) % 60, 10);
   const seconds = Number.parseInt(total % 60, 10);

   return {
      total, 
      minutes,
      seconds,
   }
}

function startTimer() {
   let { total } = timer.remainingTime; //*when i use {time} is calling the property inside the object;
   const endTime = Date.parse(new Date()) + total * 1000;

   if (timer.mode === 'pomodoro') timer.sessions++;

   startBtn.dataset.action = 'stop';
   startBtn.textContent = 'Pausar';
   startBtn.classList.add('active')

   interval =setInterval(function(){
      timer.remainingTime = getRemainingTime(endTime);
      updateTimer();

      total = timer.remainingTime.total;
      if (total <= 0) {
         clearInterval(interval)
      

      switch(timer.mode){
         case 'pomodoro':
            if (timer.sessions % timer.longBreakInterval === 0) {
               switchMode('longBreak');
            } else {
               switchMode('shortBreak');
            }
            break;
         default:
               switchMode('pomodoro')
      }

      document.querySelector(`[data-sound="${timer.mode}"]`).play();

      startTimer();
      }
   }, 1000);

   //*setInterval is method that update which 1 second(1000 miliseconds)
}

function stopTimer() {
   clearInterval(interval);

   startBtn.dataset.action = 'start';
   startBtn.textContent = 'Iniciar';
   startBtn.classList.remove('active');
}

function updateTimer() {
   const { remainingTime } = timer;
   const minutes = `${remainingTime.minutes}`.padStart(2, '0');
   const seconds = `${remainingTime.seconds}`.padStart(2, '0');

   const min = document.getElementById('min');
   const sec = document.getElementById('sec');
   min.textContent = minutes;
   sec.textContent = seconds;
   
}

//*Buttons are working and changing the mode
function switchMode(mode) {
   timer.mode = mode;
   timer.remainingTime = {
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
};

function handleMode(event) {
   const { mode } = event.target.dataset;

   if (!mode) return;

   switchMode(mode);
   stopTimer();
}

document.addEventListener('DOMContentLoaded', () => {
   switchMode('pomodoro');
   stopTimer();
});


//* Function for add a task
function addTask() {
   var li = document.createElement('li');
   var inputValue = document.getElementById('text').value;
   var text = document.createTextNode(inputValue);
   li.appendChild(text);

   //!If is empity the input, trow an alert;
   if (inputValue === ''){
      alert("Você precisa escrever alguma tarefa")
   } else {
      document.getElementById("myList").appendChild(li);
   }
   document.querySelector('.add-text').value = "";

   //! when button is clicked, the task go to the last line.
   var span =document.createElement("span");
   var text1 = document.createTextNode("\u00D7") //? X para fechar;

   span.className = "close";
   span.appendChild(text1);
   li.appendChild(span);

   for( i = 0; i< close.length; i++){
      close[i].onclick = function(){
         var div = this.parentElement;
         div.style.display = "none"
      }
   }
}






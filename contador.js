let pomodoroBtn = document.getElementById('pomodoroBtn');
let pausaCurtaBtn = document.getElementById('pausaCurtaBtn');
let pausaLongaBtn = document.getElementById('pausaLongaBtn');
let time = document.getElementById('counter')

//* Button Iniciar turn Parar when counter starts; Aftar starts, became stop again;





//* Add event handlers for button from menu;
function main(){
   pomodoroBtn.addEventListener('click',function(){
      console.log('mudou para 25')
      time.innerHTML ='25:00'
   });
   pausaCurtaBtn.addEventListener('click', function(){
      console.log(' mudou para 5');
      time.innerHTML = "5:00"
   });
   pausaLongaBtn.addEventListener('click', function(){
      console.log('mudou para 15');
      time.innerHTML = '15:00'
   })
}




main();

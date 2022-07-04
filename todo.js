var myList = document.getElementsByTagName('LI');
var i;

for(i = 0; i < myList.length; i++) {
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className ="close";
   span.appendChild(txt);
   myList[i].appendChild(span);
}


//*Button X is closing;
var close = document.getElementsByClassName("close");
var i;

for(i = 0; i < close.length; i++){
   close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display ="none";
   }
}


//* Add a checkbox to every taks;
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
   if(ev.target.tagName === 'LI') {
      ev.target.classList.add('checkbox');
   }
}, false);



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

// let images = document.querySelectorAll('.images img');
// let bigImage = document.querySelector('.bigImage img');
// let spinner= document.querySelector('.spinner-border');


// for(let i = 0 ; i<images.length ; i++){
//     images[i].onclick =function(){
//         let togg = bigImage.src;
//         bigImage.src =images[i].src;
//         images[i].src = togg;
//     }
// }


// window.onload = function(){
//     spinner.classList.add('hidden')
//     spinner.remove()
// }

let taskInput = document.querySelectorAll('#taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let allTasks = document.getElementById('allTasks');
let noTask = document.getElementById('noTask');
let validaitionMessage = document.getElementById('validaitionMessage');
let closeValidationMessageBtn = document.getElementById('closeValidationMessageBtn');


let addTask = (name , image , date) => {


  
if(name.trim() == "" ||image.trim() == ""  || date.trim() == "" ){
  validaitionMessage.classList.remove('none');
  if(name.trim() == "" ){
    validaitionMessage.innerHTML="you must enter data";
  }
  else if(image.trim() == "" ){
    validaitionMessage.innerHTML="you must enter image";
  }
  else if(date.trim() == ""){
    validaitionMessage.innerHTML="you must enter date";
  }
  
}else{
  noTask.remove();
  allTasks.innerHTML += `
  <div class=' alert alert-info'> ${name}
  <img src='${image}'>
  <p class='float-right'> ${date} </p>
  <button  class=" margin delete float-right btn btn-info">delete</button>
  </div>
  
  
    `

}
 

}  
  
//   let divNewTask = document.createElement('div');
//   divNewTask.classList = "alert alert-info";
//   divNewTask.append(task);
//   allTasks.append(divNewTask)

let renderTask =()=>{
  let allTask = {
   taskName : taskInput[0].value,
   taskimage : taskInput[1].value,
   taskdate : taskInput[2].value,
  }
   taskName : taskInput[0].value,
   addTask(allTask.taskName , allTask.taskimage , allTask.taskdate)
 
}




addTaskBtn.addEventListener('click', renderTask);

closeValidationMessageBtn.addEventListener('click', function(){
  validaitionMessage.classList.add('none')
})

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
      
  }
})


let mode = document.getElementById('mode');
let body =document.querySelector('body')
mode.onclick = function(){
  if(mode.classList.contains('ali')){
    mode.innerText="light"
    mode.classList= 'btn btn-light btn-lg'
    body.classList.add('dark')
  }else{
    mode.innerText="dark"
    mode.classList= 'btn btn-dark btn-lg ali'
    body.classList.remove('dark')

    
  }
}
let audioElement = null;
window.addEventListener('load', function() {
  audioElement = this.document.getElementById('audio');

})

function loadAudio(event) {
  let file = event.target.files[0];
  let info = document.getElementById('info');
  info.innerHTML = ""
  audioElement.remove();

  audioElement = document.createElement('audio')
  audioElement.controls = true;
  audioElement.playbackRate= 2.0
  
  let source = document.createElement('source');
  source.src = URL.createObjectURL(file)
  source.type= file.type
  audioElement.addEventListener('loadeddata', function(event){
    info.innerHTML = ` <div>Duration: ${this.duration} seconds</div>`
  })
  audioElement.appendChild(source);
  document.body.append(audioElement)
}
const task=document.querySelector("#task")
const toDo=document.querySelector("#to-do")
function addTask(){
     if(task.value === '')
          alert("You Must Write Something!");
     else{
          let listItem=document.createElement("li");
          listItem.innerHTML=`
               ${task.value}
               <i class="fa-solid fa-xmark"></i>
          `;
          // fa-solid fa-xmark (font awesome) used for xmark
          toDo.appendChild(listItem)
          task.value=''
          listItem.addEventListener(
               "click",
               function(){
                    this.classList.toggle("done");
               }
          )
          listItem.querySelector("i").addEventListener(
               "click",
               function(){
                    listItem.remove()
               }
          )
     }
}
function clearTasks() {
     toDo.innerHTML = '';
}

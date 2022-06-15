document.addEventListener("DOMContentLoaded", () => {
   document.querySelector('form').addEventListener('submit', (e) => {
     e.preventDefault()
     handleTask(e.target.new_task_description.value)
   })
});

function handleTask(task){
  let newLi = document.createElement('li')
  newLi.textContent = task
  let taskElement = document.querySelector('#tasks')
  taskElement.appendChild(newLi)
}
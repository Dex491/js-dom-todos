const tasksUL = document.querySelector('#todo-list')


// STATE
const state = {
  tasks: []
}


// RENDER CODE
function renderToDo() {
  tasksUL.innerHTML = ''
  state.tasks.forEach((task) => {
    const li = document.createElement('li')
    li.innerText = task.title

    const complete = document.createElement('input')
    complete.setAttribute('type', 'checkbox')
    complete.addEventListener('click', (event) => {
      if (task.completed === true) {
        task.completed = false
        console.log(task.title, "is now no longer completed")
      } else if (task.completed === false) {
        task.completed = true
        console.log(task.title, "is now completed")
      }
    })

    if (task.completed === true) {
      console.log(task.title, 'completed: true')
      li.setAttribute('class', 'completed')
      complete.checked = true
    } else if (task.completed === false) {
      console.log(task.title, 'completed: false')
      li.removeAttribute('class', 'completed')
      complete.checked = false
    }


    li.appendChild(complete)
    tasksUL.appendChild(li)
  })
}

function checkboxClick() {
  
}

function loadToDo() {
  const uri = "http://localhost:3000/todos"
  fetch(uri)
    .then((response) => {
      return response.json()
    })
    .then((task) => {
      console.log('Tasks:', task)
      state.tasks = task
      renderToDo()
    })
}

//INIT
loadToDo()
const tasksUL = document.querySelector('#todo-list')

const state = {
  tasks: []
}

function renderToDo() {
  tasksUL.innerHTML = ''
  state.tasks.forEach((task) => {
    const li = document.createElement('li')
    li.innerText = task.title
    
    const complete = document.createElement('input')
    complete.setAttribute('type', 'checkbox')
    complete.addEventListener('click', (event) => {
      console.log('hello')
    })

    li.appendChild(complete)

    tasksUL.appendChild(li)
  })
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

loadToDo()
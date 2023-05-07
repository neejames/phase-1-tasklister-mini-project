document.addEventListener('DOMContentLoaded', () => {
 document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  addTask(e.target["new-task-description"].value)
 })
});

function addTask(toDo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener('click', handleDelte)
  p.textContent = `${toDo}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelte(e) {
  e.target.parentNode.remove()
}
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit' ,(e) => {
    e.preventDefault()
    newTodo(e.target.newtask.value)
    form.reset()
  })
});
function newTodo(task) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click' , deleteTodo)
  btn.textContent = 'Done(X)'
  li.textContent = `${task} `
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)
}

function deleteTodo(e){
  e.target.parentNode.remove()
}
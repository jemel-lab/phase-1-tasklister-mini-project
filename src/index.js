document.addEventListener( "DOMContentLoaded" , () => {
   let form = document.querySelector('form')
   form.addEventListener('submit', (e) => {
      e.preventDefault()
      let newTask = document.getElementById('new-task-description')
      handleNewTask(newTask.value)
      form.reset()

    })
  })
   function handleNewTask(newTask) {
      let p = document.createElement("p")
     let btn = document.createElement("button")
    btn.textContent = "x"
     p.textContent = `${newTask}`
     p.appendChild(btn) 
    document.querySelector("#list").appendChild(p)
      
     }
     
    
    
    
window.onload = () => {

  function backgroundColor(){
    const select = document.querySelector('#background-color')
    const div = document.querySelector('div')

    select.addEventListener('change', () => {
      const selected = select.selectedOptions[0]
      const blackWhite = (selected.value === 'black') ? div.style.color = 'white' : div.style.color = 'black';
      div.style.backgroundColor = selected.value
      
      localStorage.setItem('5.4-backgroundColor', selected.value)
    })

    const saveBackground = localStorage.getItem('5.4-backgroundColor')
    div.style.backgroundColor = saveBackground

  }
  
  backgroundColor()

  function color() {
    const select = document.querySelector('#color')
    const div = document.querySelector('div')
    select.addEventListener('change', () => {
      const selected = select.selectedOptions[0]
      div.style.color = selected.value

      localStorage.setItem('5.4-color', selected.value)
    })
    const saveColor = localStorage.getItem('5.4-color')
    div.style.color = saveColor
  }
  
  color()

  function fontSize(){
    const selecFontSize = document.querySelector('input[name="font-size"]')
    const p = document.querySelector('p')
    selecFontSize.addEventListener('change', () => {
      p.style.fontSize = `${selecFontSize.value}px`
      localStorage.setItem('5.4-fontSize', `${selecFontSize.value}px`)
    })
    const saveFontSize = localStorage.getItem('5.4-fontSize')
    p.style.fontSize = saveFontSize
  }
  fontSize()





}






function saveTasks() {
  const list = document.querySelectorAll('li');
  const buttonSave = document.querySelector;('#salvar-tarefas');
  for (let i = 0; i < list.length; i += 1) {
    list[i].innerText;
  }
  localStorage.setItem('Tasks', JSON.stringify(list));
}

function save() {
  const buttonSave = document.querySelector;('#salvar-tarefas');
  buttonSave.addEventListener('click', saveTasks);
}

save()










  // window.localStorage.tasks = list.innerHTML


  function printList() {
    if (JSON.stringify(localStorage.getItem('Tasks'))  !== null) {
    const ol = document.querySelectorAll('#lista-tarefas');
    ol = JSON.stringify(localStorage.getItem('Tasks'))
    const lista = ol.children
      for (let i = 0; i < ol.length; i++) {
        lista[i] = completeTask()
        
      }
  
    }
  }





window.onload = () => {
  const list = document.querySelectorAll('li');
  const tasks = document.querySelector('#lista-tarefas');
    tasks.innerHTML = window.localStorage.list === undefined ? '' : window.localStorage.list
  }
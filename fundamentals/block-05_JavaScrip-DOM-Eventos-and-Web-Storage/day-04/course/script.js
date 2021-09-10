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
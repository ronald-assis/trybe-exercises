import './node_modules/just-validate/dist/js/just-validate'

function createOptionStates() {
  const select = document.querySelector('#state')
  const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  
  for (let i = 0; i < states.length; i += 1) {
    let option = document.createElement('option')
    
    select.appendChild(option).innerHTML = states[i]
    select.appendChild(option).value = states[i]
  }
}

window.onload = () => {
  createOptionStates()
} 
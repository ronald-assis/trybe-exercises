function createOptionStates() {
  const select = document.querySelector('#state')
  const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  
  for (let i = 0; i < states.length; i += 1) {
    let option = document.createElement('option')
    
    select.appendChild(option).innerHTML = states[i]
    select.appendChild(option).value = states[i]
  }
}

createOptionStates()

let inputs = {
  fullName: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  complement: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  jobDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

function deafultValidation(input, name) {
  let trimmed = input.value.trim()
  let validation = inputs[name]

  if (validation.required && trimmed.length === 0) {
    return false
  } else if (validation.maxLength && trimmed.length > validation.maxLength) {
    return false
  }

  return true
}

function dateValidation(input, name) {
  if (input.value.length === 0) {
    return {
      message: 'A data não foi preenchida!'
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/

  if (!regex.test(input.value)) {
    return {message: 'Data: Formaro inválido'}
  }

  let divided = input.split('/')
  let day = divided[0]
  let month = divided[1]
  let year = divided[2]

  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }

  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }

  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true
}
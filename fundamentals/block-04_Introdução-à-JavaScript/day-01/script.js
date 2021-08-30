let note = 104

if (note >= 80){
  console.log('parabens vc passou')   
} else if (note >= 60) {
  console.log('lista de espera')
} else {
  console.log('reprovado')
}


const currentHour = 13

let message = ''

if( currentHour >= 22){
  console.log(`${message} Não deveríamos comer nada, é hora de dormir`)
} else if (currentHour >= 18){
  console.log(`${message} Rango da noite, vamos jantar :D`)
} else if ( currentHour >= 14){
  console.log(`${message} Vamos fazer um bolo pro café da tarde?`)
} else if (currentHour == 14 || currentHour >= 11){
  console.log(`${message} Hora do almoço!!!`)
}else if (currentHour >= 4 || currentHour < 11){
  console.log(`${message} Hmmm, cheiro de café recém passado`)
}else{
  console.log(`${message} Vai dormir`)
}


let weekDay = 'domingo'
if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}else if (weekDay == 'sabado' || weekDay == 'domingo'){
  console.log('FINALMENTE, descando merecido UwU')
}


let noteTwo = 10

switch (noteTwo) {
  case 100:
    console.log('aprovado')
  break

  case 90:
    console.log('aprovado')
  break

  case 80:
    console.log('aprovado')
  break

  case 70:
    console.log('lista de espera')
  break

  case 60:
    console.log('lista de espera')
  break

  case 50:
    console.log('reprovado')
  break
  
  case 40:
    console.log('reprovado')
  break
  
  case 30:
    console.log('reprovado')
  break
  
  case 20:
    console.log('reprovado')
  break
  
  case 10:
    console.log('reprovado')
  break
                    
  default:
  console.log('não se aplica')
}
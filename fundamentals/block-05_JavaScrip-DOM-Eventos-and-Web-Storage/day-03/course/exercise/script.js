function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const classDays = document.querySelector('#days')


function createEveryDay() {
  for (let i = 0; i < dezDaysList.length; i += 1){
    const numDay = dezDaysList[i]
    const numDayList = document.createElement('li')

    if (numDay === 24 || numDay === 31){
      numDayList.classList.add('day', 'holiday')
      
    } else if (numDay === 4 || numDay === 11 ||numDay === 18){
      numDayList.classList.add('day', 'friday')
    } else if ( numDay === 25) {
      numDayList.classList.add('day', 'holiday', 'friday')
    } else {
      numDayList.classList.add('day')
    }
    
    numDayList.innerHTML = numDay
    classDays.appendChild(numDayList)
  }
}

createEveryDay()

function friday (fryday) {
  const buttonsContainer = document.querySelector('.buttons-container')
  const button = document.createElement('button')
  button.innerHTML = fryday
  button.id = 'btn-holiday'
  buttonsContainer.appendChild(button)
}

friday('Feriados')


const clickHoliday = document.querySelector('#btn-holiday')
function receiveClickHoliday(){
  const classHoliday = document.querySelectorAll('.holiday')
  const backgroundColor = 'rgb(238,238,238)'
  const newColor = 'rgb(135,224,232)'
  
  for (let i = 0; i < classHoliday.length; i+=1) {
    if(classHoliday[i].style.backgroundColor === newColor){
      classHoliday[i].style.backgroundColor = backgroundColor
      } else {
        classHoliday[i].style.backgroundColor = newColor
      }
    }
  }
  
clickHoliday.addEventListener('click', receiveClickHoliday)

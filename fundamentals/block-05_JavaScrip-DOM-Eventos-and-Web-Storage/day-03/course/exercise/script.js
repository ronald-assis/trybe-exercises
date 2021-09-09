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

function holiday (holiday) {
  const buttonsContainer = document.querySelector('.buttons-container')
  const button = document.createElement('button')
  button.innerHTML = holiday
  button.id = 'btn-holiday'
  buttonsContainer.appendChild(button)
}

holiday('Feriados')

const clickHoliday = document.querySelector('#btn-holiday')
function receiveClickHoliday(){
  const classHoliday = document.querySelectorAll('.holiday')
  const backgroundColor = 'rgb(238,238,238)'
  const newColor = 'aqua'
  
  for (let i = 0; i < classHoliday.length; i+=1) {
    if(classHoliday[i].style.backgroundColor === newColor){
      classHoliday[i].style.backgroundColor = backgroundColor
    } else {
      classHoliday[i].style.backgroundColor = newColor
    }
  }
}

clickHoliday.addEventListener('click', receiveClickHoliday)

function fridayButton(friday){
  const buttonsContainer = document.querySelector('.buttons-container')
  const buttonFriday = document.createElement('button')
  buttonFriday.innerHTML = friday
  buttonFriday.id = 'btn-friday'
  buttonsContainer.appendChild(buttonFriday)
}

fridayButton('Sexta-feira')

const clickFriday = document.querySelector('#btn-friday')
function friday(fridays) {
  const classFriday = document.querySelectorAll('.friday')
  const sextou = 'SEXTOU!!!'

  clickFriday.addEventListener('click', () => {
    for (let i = 0; i < classFriday.length; i += 1) {
      if (classFriday[i].innerHTML !== sextou){
        classFriday[i].innerHTML = sextou
      } else {
        classFriday[i].innerHTML = fridays[i]
      }
    }
  })
}
const daysFromFriday = [4, 11, 18, 25]
friday(daysFromFriday)

function mouseOverOut() {
  const days = document.querySelectorAll('.day')

  for (let i = 0; i < days.length; i += 1){
    days[i].addEventListener('mouseover', (evt) => {
      evt.target.style.fontSize = '40px'
      evt.target.style.fontWeight = '600'
    })
    
    days[i].addEventListener('mouseout', (evt) => {
      evt.target.style.fontWeight = '200'
      evt.target.style.fontSize = '20px'
    })
  }
}

mouseOverOut()

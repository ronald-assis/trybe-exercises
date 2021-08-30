function sum(a,b){
  return a + b
}

console.log(sum(10,4))



function result(note){
  if(note <= 80){
    note = 'congratulations you passed'
  }else if(note < 80 || note >= 60){
    note = 'You are on our waiting list'
  }else{
    note = 'You failed'
  }

  return note;
}

console.log(result(70))

function sum(a,b){
  return a + b
}

console.log(sum(10,4))

let note = 60

function result(){
  if(note <= 80){
   return note = 'congratulations you passed'
  }else if(note < 80 || note >= 60){
    return note = 'You are on our waiting list'
  }else{
    return note = 'You failed'
  }


}

console.log(result(70))

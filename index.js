let score = 0
let readlineSync = require("readline-sync")
var userName

console.log("welcome to 'Do you know Ritwik' quiz")

// array that includes question and answer's object
let questions = [
    {
    question: "what is my last name  ",
    answer: "sadhu"
  },
    {
    question: "what is my age  ",
    answer: "23"
  },
  {
    question: "what is my favorite color?  ",
    answer: "blue"
  },
  {
    question: "do i know how to dance?  ",
    answer: "no"
  },
  {
    question: "what is my favorite food?  ",
    answer: "chicken tandoori"
  }
]

// Greet Section
function greet(){
    userName = readlineSync.question("what should we call you?  ")
  console.log("hello", userName, ", lets start the game!")
  }


// creating the game functuin
function game(){
  questions.forEach((elem)=>{
  
  let input = readlineSync.question(elem.question)
  if(input.toLowerCase() == elem.answer.toLowerCase()){
    console.log("right")
    score++
    console.log("current score is ", score)
  }
    console.log("----------------")

})
  console.log("game Ended")
  console.log("your score is" , score)
  console.log("highest score is " , 5)
  console.log("thanks for playing" , userName)
  
}

// calling the functions
greet()
game()
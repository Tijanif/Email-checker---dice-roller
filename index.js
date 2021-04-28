/*
Description
These exercises are for you to practise arrays and loops. So keep those in mind, and see if you can figure out how to apply them to each exercise.

Instructions

Email checker
- Make a list of emails
- Ask the user for their email
- Check if their email is listed
- Output a message granting them access if the email is listed

Dice roller
- Generate a random number from 1 to 6, for both the player and the computer
- Determine the winner, based on who gets the highest score and let the user know
- Make it a best of 5!

Tips
- If we have to compare something, "what" do we need to do the comparison?
- Try to write comments first explaining what you plan to do step by step

Have fun!
*/

const emails = ["tijani@gmail.com", "nico@gmail.com", 'lars@gmail.com', "rico@gmail.com", "james@gmail.com" ]


 

let emailMatch = false

function emailChecker () {
 let userEmail = prompt("What is your email?")
 for (email of emails) {
  if(email === userEmail){
   emailMatch = true
   break
  } 
 }
 
  if(emailMatch === true) {
   console.log("Welcome to the email checker")
   
  } else {
   console.log('You are not in the system')
   emailChecker()
  
  }
}

emailChecker()
// console.log(emailChecker())


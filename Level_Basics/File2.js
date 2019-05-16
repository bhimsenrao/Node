//using this command before you run this 
// npm install inquirer
const inquirer = require('inquirer')
var questions = [{
  type: 'input',
  name: 'name',
  message: "What's your name?",
}]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})

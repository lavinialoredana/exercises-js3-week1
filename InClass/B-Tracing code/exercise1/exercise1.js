/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
var mentors = ["Irina", "Ashleigh", "Etza"];
var result = greetPeople(mentors);

function greetPeople(people) {
  var greeting = "He";
  greeting = greeting + "llo";
  greeting = greeting + " ";

  people.forEach(function (jordi) {
    greeting = greeting + jordi;
    console.log(greeting);
  });
  var name = "Lavinia";
  let lastName = "Esp";
  return greeting;
}

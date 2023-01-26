enum Answer {
  Yes = "Y",
  No = "N",
}

function getAnswer(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("yehhh");
  }

  if (answer === Answer.No) {
    console.log("nooooo");
  }
}

getAnswer(Answer.Yes)
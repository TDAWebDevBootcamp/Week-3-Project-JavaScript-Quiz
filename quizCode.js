/**
 * hides intro and show question 1
 */
function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides question 1 shows question2
 */
function question2() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}

/**
 * hides question 2 shows results
 */
function results() {
  calculateResults()
  document.getElementById("question2").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}


/**
 * calculates and displays the results
 */
function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  let total = Number(q1Value) + Number(q2Value);
  result = total / 2;
  
  if (result > 2) {
    msg = "You answered mostly c you may have a kinesthetic learning style";
  } else if (result >= 1.5) {
    msg = "You answered mostly b, you may have an auditory learning style";
  } else {
    msg = "You answered mostly a, you may have a visual learning style";
  }

  document.getElementById("result").innerHTML = msg

}


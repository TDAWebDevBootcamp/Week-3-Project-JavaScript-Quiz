/**
 * hides the element of given id
 * 
 * @author Neil Bizzell
 * @param {string} id the name of the element to be hidden
 */
function hideElement(id) {
  document.getElementById(id).style.display = "none";
}

/**
 * shows the element of given id
 * 
 * @author Neil Bizzell
 * @param {string} id the id of the element to be shown
 */
function showElement(id){
  document.getElementById("ifYes").style.display = "block";
}

/**
 * hides current question and moves to next question 
 *  
 * @author Neil Bizzell
 * @param {number} question the number of the current question 
 */

function nextQuestion(questionNo){
  questionId = "question" + questionNo
  hideElement(questionId)
  questiionNo ++
  nextId =  "question" + questionNo
}

function getRadioVal(form, name) {
  var val;
  // get list of radio buttons with specified name
  var radios = form.elements[name];
  
  // loop through list of radio buttons
  for (var i=0, len=radios.length; i<len; i++) {
      if ( radios[i].checked ) { // radio checked?
          val = radios[i].value; // if so, hold its value in val
          break; // and break out of for loop
      }
  }
  return val; // return value of checked radio or undefined if none checked
}

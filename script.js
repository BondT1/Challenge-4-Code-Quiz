var homepageEl = document.getElementById("homepage");
var questionViewEl = document.getElementById("question-view");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var viewHighScoreEl = document.getElementById("view-high-scores");

var startQuizBtn = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");

const questionEl = [
  { 
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 1,  
  },

  {
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 1,  
  },

  { 
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 1,  
  },
    
  { 
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 1,  
  },
        
  { 
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 1,  
  },        
];

var startQuizBtn = function() {
  homepageEl.classList.add("remove");
  homepageEl.classList.remove("add");
  questionViewEl.classList.add("add");
  questionViewEl.classList.remove("remove");

}


var homepageEl = document.getElementById("homepage");
var questionViewEl = document.getElementById("question-view");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var viewHighScoreEl = document.getElementById("view-high-scores");
var HighScoreBoxEl = document.getElementById("high-score-box")
var HighScoreListEl = document.getElementById("high-score-list")
var ScoreInitialsEl = document.getElementById("score-initials")



var startQuizBtnEL = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");


startQuizBtnEL.addEventListener("click", startQuiz);
viewHighScoreEl.addEventListener("click", HighScoresDisplay);
ScoreInitialsEl.addEventListener("submit", HighScoreCreation);





var questionEl = [
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
    correct: 3,  
  },

  { 
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 2,  
  },
    
  { 
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 0,  
  },
        
  { 
    question: 'question here',
    answers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
    ],
    correct: 2,  
  },        
];

var startQuiz = function() {
  homepageEl.classList.add("remove");
  homepageEl.classList.remove("add");
  questionViewEl.classList.add("add");
  questionViewEl.classList.remove("remove");

}

var createStartPage = function() {
  homepageEl.classList.add("remove");
  homepageEl.classList.remove("add")
  homepageEl.removeChild(homepageEl.lastChild)
  HighScoreBoxEl.classList.remove("remove");
  HighScoreBoxEl.classList.add("add");
}

var HighScoresDisplay = function() {
  
}

var HighScoreCreation = function() {

}
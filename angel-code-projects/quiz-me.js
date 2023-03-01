/**
 * Step one:(HTML)
 * Set up the basic HTML structure:
 * create an HTML container element that will hold the quiz
 * question and answers.
 */
/*
<!DOCTYPT html>
<header>
<title>QUIZ ME App</title>
</header>
<body>
<div id= 'container-questions-and-answers'></div>
</body>
</html>
*/

/**
 * Step two: (JavaScript):
 * Create an array of questions:
 * An array contain a list of question,
 * each question is an object with several properties:
 * Question text, Possible answers and the correct answer.
 */

let questionAnswers = [
  {
    question: "What is the capital of Uganda?",
    answers: [
      { text: "Kinsha", correct: false },
      { text: "Nairobi", correct: false },
      { text: "Kigali", correct: false },
      { text: "Kampala", correct: true },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "What is the smallest country in East-Africa?",
    answers: [
      { text: "DRC", correct: false },
      { text: "Burundi", correct: false },
      { text: "Kenya", correct: false },
      { text: "Rwanda", correct: true },
    ],
  },
];

 const quizData = [{
    category: ['Religion'],
    question: "Who is considered the final prophet in Islam?",
    a: 'Moses',
    b: 'David',
    c:'Jesus',
    d:'Mohammed(PBUH)',
    correctAnswer:'Mohammed(PBUH)'
},{
    category: ['Religion'],
    question: "What is the holy book of Islam?",
    a:'Bible',
    b:'Vedas',
    c:'Torah',
    d:'Quran',
    correctAnswer:'Quran'
},{
    category: ['Religion'],
    question: "Who were the people that prophet Moses has preached to?",
    a:'Quraich',
    b:'Sons of Israel',
    c:'LGBTQ+',
    d:'Arabs',
    correctAnswer:'Sons of Israel'
},{
    category: ['Religion'],
    question: "Which city is considered sacred by Judaism, Christianity, and Islam?",
    a:'Mecca',
    b:'Jerusalem',
    c:'Medina',
    d:'Rome',
    correctAnswer:'Jerusalem'
},{
    category: ['Religion'],
    question: "What is the first book of the Bible in the Old Testament?",
    a:'Exodus',
    b:'Leviticus',
    c:'Genesis',
    d:'Numbers',
    correctAnswer:'Genesis'
}, {
    category: ['Science'],
    question: "What is the powerhouse of the cell?",
    a: 'Nucleus',
    b: 'Mitochondria',
    c: 'Endoplasmic reticulum',
    d: 'Golgi apparatus',
    correctAnswer: 'Mitochondria'
},
{
    category: ['Science'],
    question: "Which planet is known as the Red Planet?",
    a: 'Jupiter',
    b: 'Mars',
    c: 'Venus',
    d: 'Saturn',
    correctAnswer: 'Mars'
},
{
    category: ['Science'],
    question: "What is the chemical symbol for water?",
    a: 'H2O',
    b: 'CO2',
    c: 'O2',
    d: 'CH4',
    correctAnswer: 'H2O'
},
{
    category: ['Science'],
    question: "Which element has the symbol 'Fe' in the periodic table?",
    a: 'Iron',
    b: 'Gold',
    c: 'Silver',
    d: 'Copper',
    correctAnswer: 'Iron'
},
{
    category: ['Science'],
    question: "What is the speed of light approximately?",
    a: '300,000 km/s',
    b: '150,000 km/s',
    c: '500,000 km/s',
    d: '1,000,000 km/s',
    correctAnswer: '300,000 km/s'
},{
    category: ['History'],
    question: "Who was the first President of the United States?",
    a: 'Thomas Jefferson',
    b: 'George Washington',
    c: 'John Adams',
    d: 'Abraham Lincoln',
    correctAnswer: 'George Washington'
  },
  {
    category: ['History'],
    question: "In which year did World War II end?",
    a: '1942',
    b: '1945',
    c: '1950',
    d: '1939',
    correctAnswer: '1945'
  },
  {
    category: ['History'],
    question: "Who is known as the 'Father of India'?",
    a: 'Jawaharlal Nehru',
    b: 'Mahatma Gandhi',
    c: 'Sardar Patel',
    d: 'B.R. Ambedkar',
    correctAnswer: 'Mahatma Gandhi'
  },
  {
    category: ['History'],
    question: "Which ancient civilization built the pyramids in Egypt?",
    a: 'Greek',
    b: 'Roman',
    c: 'Egyptian',
    d: 'Mesopotamian',
    correctAnswer: 'Egyptian'
  },
  {
    category: ['History'],
    question: "Who was the first Emperor of China?",
    a: 'Confucius',
    b: 'Mao Zedong',
    c: 'Sun Yat-sen',
    d: 'Qin Shi Huang',
    correctAnswer: 'Qin Shi Huang'
  },{
    category: ['Technology'],
    question: "Who is the co-founder of Microsoft Corporation?",
    a: 'Steve Jobs',
    b: 'Mark Zuckerberg',
    c: 'Bill Gates',
    d: 'Elon Musk',
    correctAnswer: 'Bill Gates'
  },
  {
    category: ['Technology'],
    question: "What does the acronym 'CPU' stand for?",
    a: 'Central Processing Unit',
    b: 'Computer Processing Unit',
    c: 'Central Processor Unit',
    d: 'Computer Processor Unit',
    correctAnswer: 'Central Processing Unit'
  },
  {
    category: ['Technology'],
    question: "Which programming language is commonly used for web development?",
    a: 'Java',
    b: 'Python',
    c: 'C++',
    d: 'JavaScript',
    correctAnswer: 'JavaScript'
  },
  {
    category: ['Technology'],
    question: "What does 'HTML' stand for?",
    a: 'Hypertext Markup Language',
    b: 'Hyperlink and Text Markup Language',
    c: 'High-Level Text Markup Language',
    d: 'Hypertext and Links Markup Language',
    correctAnswer: 'Hypertext Markup Language'
  },
  {
    category: ['Technology'],
    question: "Who is the CEO of Tesla, Inc.?",
    a: 'Bill Gates',
    b: 'Elon Musk',
    c: 'Jeff Bezos',
    d: 'Mark Zuckerberg',
    correctAnswer: 'Elon Musk'
  },{
    category: ['Entertainment'],
    question: "Who played the character of Iron Man in the Marvel Cinematic Universe?",
    a: 'Chris Evans',
    b: 'Chris Hemsworth',
    c: 'Robert Downey Jr.',
    d: 'Mark Ruffalo',
    correctAnswer: 'Robert Downey Jr.'
  },
  {
    category: ['Entertainment'],
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    a: 'Parasite',
    b: '1917',
    c: 'Joker',
    d: 'Once Upon a Time in Hollywood',
    correctAnswer: 'Parasite'
  },
  {
    category: ['Entertainment'],
    question: "Who is the lead singer of the band 'Queen'?",
    a: 'Freddie Mercury',
    b: 'John Lennon',
    c: 'Elton John',
    d: 'Mick Jagger',
    correctAnswer: 'Freddie Mercury'
  },
  {
    category: ['Entertainment'],
    question: "What is the name of the wizarding school in the Harry Potter series?",
    a: 'Hogwarts',
    b: 'Durmstrang',
    c: 'Beauxbatons',
    d: 'Ilvermorny',
    correctAnswer: 'Hogwarts'
  },
  {
    category: ['Entertainment'],
    question: "Who directed the movie 'Inception'?",
    a: 'Christopher Nolan',
    b: 'Steven Spielberg',
    c: 'Quentin Tarantino',
    d: 'Martin Scorsese',
    correctAnswer: 'Christopher Nolan'
  },{
    category: ['Sports'],
    question: "In which sport would you perform a slam dunk?",
    a: 'Tennis',
    b: 'Basketball',
    c: 'Golf',
    d: 'Swimming',
    correctAnswer: 'Basketball'
},
{
    category: ['Sports'],
    question: "Which country won the FIFA World Cup in 2018?",
    a: 'Germany',
    b: 'Argentina',
    c: 'Brazil',
    d: 'France',
    correctAnswer: 'France'
},
{
    category: ['Sports'],
    question: "Who is often called 'The Greatest' in boxing?",
    a: 'Mike Tyson',
    b: 'Floyd Mayweather Jr.',
    c: 'Muhammad Ali',
    d: 'Manny Pacquiao',
    correctAnswer: 'Muhammad Ali'
},
{
    category: ['Sports'],
    question: "Which sport is known as the 'king of sports'?",
    a: 'Football (Soccer)',
    b: 'Cricket',
    c: 'Tennis',
    d: 'Baseball',
    correctAnswer: 'Football (Soccer)'
},
{
    category: ['Sports'],
    question: "In Olympic diving, which height platforms are used?",
    a: '5m and 7.5m',
    b: '3m and 10m',
    c: '2m and 5m',
    d: '7.5m and 10m',
    correctAnswer: '3m and 10m'
},{
  category: ['Nature'],
  question: "What is the largest planet in our solar system?",
  a: 'Earth',
  b: 'Jupiter',
  c: 'Venus',
  d: 'Mars',
  correctAnswer: 'Jupiter'
},
{
  category: ['Nature'],
  question: "Which bird is known for its ability to mimic human speech?",
  a: 'Penguin',
  b: 'Parrot',
  c: 'Eagle',
  d: 'Ostrich',
  correctAnswer: 'Parrot'
},
{
  category: ['Nature'],
  question: "What is the main gas responsible for the greenhouse effect on Earth?",
  a: 'Oxygen',
  b: 'Carbon Dioxide',
  c: 'Methane',
  d: 'Nitrogen',
  correctAnswer: 'Carbon Dioxide'
},
{
  category: ['Nature'],
  question: "Which animal is known as the 'king of the jungle'?",
  a: 'Elephant',
  b: 'Tiger',
  c: 'Gorilla',
  d: 'Lion',
  correctAnswer: 'Lion'
},
{
  category: ['Nature'],
  question: "What is the world's largest ocean?",
  a: 'Atlantic Ocean',
  b: 'Indian Ocean',
  c: 'Southern Ocean',
  d: 'Pacific Ocean',
  correctAnswer: 'Pacific Ocean'
},{
  category: ['Movies'],
  question: "Who directed the movie 'The Shawshank Redemption'?",
  a: 'Christopher Nolan',
  b: 'Quentin Tarantino',
  c: 'Martin Scorsese',
  d: 'Frank Darabont',
  correctAnswer: 'Frank Darabont'
},
{
  category: ['Movies'],
  question: "Which actress played the character Katniss Everdeen in 'The Hunger Games' series?",
  a: 'Emma Stone',
  b: 'Jennifer Lawrence',
  c: 'Scarlett Johansson',
  d: 'Natalie Portman',
  correctAnswer: 'Jennifer Lawrence'
},{
  category: ['Movies'],
  question: "Which film features a character named 'Darth Vader'?",
  a: 'Jurassic Park',
  b: 'Star Wars',
  c: 'The Matrix',
  d: 'The Lord of the Rings',
  correctAnswer: 'Star Wars'
},
{
  category: ['Movies'],
  question: "Which movie features a character named 'Frodo Baggins'?",
  a: "Harry Potter and the Philosopher's Stone",
  b: 'The Lord of the Rings: The Fellowship of the Ring',
  c: 'Star Wars: A New Hope',
  d: 'Jurassic Park',
  correctAnswer: 'The Lord of the Rings: The Fellowship of the Ring'
},
{
  category: ['Movies'],
  question: "Who won the Academy Award for Best Actor in 2019?",
  a: 'Joaquin Phoenix',
  b: 'Brad Pitt',
  c: 'Leonardo DiCaprio',
  d: 'Christian Bale',
  correctAnswer: 'Joaquin Phoenix'
},{
  category: ['Music'],
  question: "Who is often referred to as the 'King of Pop'?",
  a: 'Elvis Presley',
  b: 'Michael Jackson',
  c: 'Prince',
  d: 'Madonna',
  correctAnswer: 'Michael Jackson'
},
{
  category: ['Music'],
  question: "Which band is known for the album 'The Dark Side of the Moon'?",
  a: 'The Rolling Stones',
  b: 'The Beatles',
  c: 'Pink Floyd',
  d: 'Led Zeppelin',
  correctAnswer: 'Pink Floyd'
},
{
  category: ['Music'],
  question: "What instrument does Carlos Santana play?",
  a: 'Guitar',
  b: 'Piano',
  c: 'Drums',
  d: 'Saxophone',
  correctAnswer: 'Guitar'
},
{
  category: ['Music'],
  question: "Which artist released the album 'Back to Black'?",
  a: 'Adele',
  b: 'Amy Winehouse',
  c: 'Taylor Swift',
  d: 'Beyoncé',
  correctAnswer: 'Amy Winehouse'
},
{
  category: ['Music'],
  question: "Which artist is known for the song 'Shape of You'?",
  a: 'Ed Sheeran',
  b: 'Taylor Swift',
  c: 'Adele',
  d: 'Justin Bieber',
  correctAnswer: 'Ed Sheeran'
},{
  category: ['Games'],
  question: "In the game 'World of Warcraft,' what is the capital city of the Horde?",
  a: 'Stormwind',
  b: 'Undercity',
  c: 'Orgrimmar',
  d: 'Ironforge',
  correctAnswer: 'Orgrimmar'
},
{
  category: ['Games'],
  question: "Who is the main protagonist in the game 'Assassin's Creed II'?",
  a: 'Ezio Auditore',
  b: "Altair Ibn-La'Ahad",
  c: 'Connor Kenway',
  d: 'Edward Kenway',
  correctAnswer: 'Ezio Auditore'
},
{
  category: ['Games'],
  question: "Which game features the character Kratos, the Ghost of Sparta?",
  a: 'God of War',
  b: 'Dark Souls',
  c: 'Devil May Cry',
  d: "Assassin's Creed",
  correctAnswer: 'God of War'
},
{
  category: ['Games'],
  question: "What is the primary objective in the game 'Fortnite'?",
  a: 'Build structures',
  b: 'Solve puzzles',
  c: 'Survive the night',
  d: 'Collect resources',
  correctAnswer: 'Survive the night'
},
{
  category: ['Games'],
  question: "Which popular game is known for its battle royale mode and features a map called 'Erangel'?",
  a: 'Apex Legends',
  b: 'Call of Duty: Warzone',
  c: "PlayerUnknown's Battlegrounds (PUBG)",
  d: 'Fortnite',
  correctAnswer: "PlayerUnknown's Battlegrounds (PUBG)"
},
{
  category: ['Puzzle'],
  question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
  a: 'Gold',
  b: 'Coal',
  c: 'Pencil lead',
  d: 'Diamond',
  correctAnswer: 'Pencil lead'
},
{
  category: ['Puzzle'],
  question: "The more you take, the more you leave behind. What am I?",
  a: 'Memories',
  b: 'Footprints',
  c: 'Money',
  d: 'Hints',
  correctAnswer: 'Footprints'
},
{
  category: ['Puzzle'],
  question: "What has a heart that doesn't beat?",
  a: 'A watermelon',
  b: 'An artichoke',
  c: 'An avocado',
  d: 'An apple',
  correctAnswer: 'An artichoke'
},
{
  category: ['Puzzle'],
  question: "I have keys but no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
  a: 'A keyboard',
  b: 'A book',
  c: 'A computer',
  d: 'A garden',
  correctAnswer: 'A keyboard'
},
{
  category: ['Puzzle'],
  question: "What has a head, a tail, is brown, and has no legs?",
  a: 'A snake',
  b: 'A coin',
  c: 'A stick',
  d: 'A pencil',
  correctAnswer: 'A coin'
},
{
  category: ['Puzzle'],
  question: "I am a word of letters three, add two and fewer there will be. What am I?",
  a: 'Few',
  b: 'More',
  c: 'Less',
  d: 'Word',
  correctAnswer: 'Few'
},
{
  category: ['Puzzle'],
  question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
  a: 'The letter "M"',
  b: 'The number 1',
  c: 'The word "once"',
  d: 'The word "minute"',
  correctAnswer: 'The letter "M"'
},
{
  category: ['Puzzle'],
  question: "Forward I am heavy, but backward I am not. What am I?",
  a: 'A ton',
  b: 'A kilogram',
  c: 'Light',
  d: 'Dark',
  correctAnswer: 'Light'
},
{
  category: ['Puzzle'],
  question: "The person who makes it, sells it. The person who buys it never uses it. What is it?",
  a: 'A coffin',
  b: 'A car',
  c: 'A book',
  d: 'A chair',
  correctAnswer: 'A coffin'
},
{
  category: ['Puzzle'],
  question: "What has keys but can't open locks?",
  a: 'A piano',
  b: 'A typewriter',
  c: 'A guitar',
  d: 'A trumpet',
  correctAnswer: 'A typewriter'
}];
export const ReligionQuiz = quizData.filter(quiz=>quiz.category.includes('Religion'));
export const ScienceQuiz = quizData.filter(quiz=>quiz.category.includes('Science'));
export const HistoryQuiz = quizData.filter(quiz=>quiz.category.includes('History'));
export const TechnologyQuiz = quizData.filter(quiz=>quiz.category.includes('Technology'));
export const EntertainmentQuiz = quizData.filter(quiz=>quiz.category.includes('Entertainment'));
export const SportQuiz = quizData.filter(quiz=>quiz.category.includes('Sports'));
export const NatureQuiz = quizData.filter(quiz=>quiz.category.includes('Nature'));
export const MoviesQuiz = quizData.filter(quiz=>quiz.category.includes('Movies'));
export const MusicQuiz = quizData.filter(quiz=>quiz.category.includes('Music'));
export const GamesQuiz = quizData.filter(quiz=>quiz.category.includes('Games'));
export const PuzzleQuiz = quizData.filter(quiz=>quiz.category.includes('Puzzle'));
// MVC lookalike Technique to avoid duplication :)
export function mvcTechnique(quizTheme){
    // Declaring Variables
    const questionElement = document.querySelector('#question');
    const allInput = document.querySelectorAll('input[name="answer"]');
    const answera= document.querySelector('#labela');
    const answerb= document.querySelector('#labelb');
    const answerc= document.querySelector('#labelc');
    const answerd= document.querySelector('#labeld');
    const inputA= document.querySelector('#a');
    const inputB= document.querySelector('#b');
    const inputC= document.querySelector('#c');
    const inputD= document.querySelector('#d');
    const submitBtn = document.querySelector('#submitBtn');
    const sectionElem = document.querySelector('.js-quiz-section');
    const errorMsg = document.querySelector('.error-msg')
    // Initializing Curent Question by Index, Question Tracks and Score
    let currentQuestion = 0;
    let questionsTrack = 1;
    let score = 0;
    // if Theme Quiz is Puzzle store it in a varriable
    let isPuzzleQuiz;
    quizTheme.forEach(value=>{
      value.category.includes('Puzzle')? isPuzzleQuiz = 'This is Puzzle Theme':'';
    })
    // Renedering Quiz
    function loadQuiz(){
        // Which Question are we on Sorted by Array Index 
        let QuizRender = quizTheme[currentQuestion];
        // Injecting Values in Elements 
        questionElement.innerHTML = QuizRender.question;
        answera.innerHTML = QuizRender.a;
        inputA.value = QuizRender.a;
        answerb.innerHTML = QuizRender.b;
        inputB.value = QuizRender.b;
        answerc.innerHTML = QuizRender.c;
        inputC.value = QuizRender.c;
        answerd.innerHTML = QuizRender.d;
        inputD.value = QuizRender.d;
        updatingScore(QuizRender)
        // Tracking which Question are we on and checking if is Puzzle theme
        let isPuzzle= isPuzzleQuiz?'Puzzle':'Question'; 
        document.querySelector('.questionCounter').innerHTML= `${isPuzzle} ${questionsTrack} out of ${quizTheme.length}`
    }
    //updating the Score
    function updatingScore(QuizRender){
    allInput.forEach(input=>{
        // Increasing Score by one if correct answer
        input.checked && input.value === QuizRender.correctAnswer?
        score++:'';
    })
    }
    // BG color for Feedback
    function answerFeedback(){
        // Which Question are we on Sorted by Array Index 
        let feedbackRender = quizTheme[currentQuestion];
        // Initializing answers either wrong or correct with their own Id 
        let correctAnswer = '';
        let wrongAnswer = '';
        let correctAnswerId = '';
        let wrongAnswerId = '';
        // Defining Answers Id
        allInput.forEach(input=>{
            input.checked && input.value === feedbackRender.correctAnswer?
            correctAnswerId = input.id:'';
            input.checked && input.value !== feedbackRender.correctAnswer?
            wrongAnswerId = input.id:'';
        })
        // Defining Answers
        correctAnswer = document.querySelector(`#label${correctAnswerId}`);
        wrongAnswer = document.querySelector(`#label${wrongAnswerId}`);
        // Adding Classes for Answers
        correctAnswer?correctAnswer.classList.add('correct-answer'):'';
        wrongAnswer?wrongAnswer.classList.add('wrong-answer'):'';
    }
    // Clearing BG color for Feedback
    function clearAnswerFeedback(){
        allInput.forEach(input => {
            document.querySelector(`#label${input.id}`)
            .classList.remove('correct-answer', 'wrong-answer');
        });
    }
    // Refreching input Checked
    function refrechingChecked(){
        allInput.forEach(input=>{
            input.checked=false;
        })
    }
    // Error Message if not Answered
    function errorMessage(){
        errorMsg.innerHTML = "*Please Choose an Answer";
    }
    // Clearing Error Message after Answering
    function clearErrorMessage(){
        errorMsg.innerHTML = "";
    }
    // TimeOut for next Question
    function moveToNextQuestion() {
        answerFeedback();
        refrechingChecked();
        setTimeout(() => {
            clearErrorMessage();
            clearAnswerFeedback();
            currentQuestion++;
            questionsTrack++;
            setTimeout(()=>loadQuiz(),520)
        }, 500);
    }
    //display score 
    function displayingScore(){
        let scoreMessage = isPuzzleQuiz && score<=4? "it's okay you can do better next time!":
        isPuzzleQuiz && score <7 ?  "Not bad buddy.":
        isPuzzleQuiz && score ===10 ?  "I knew you could do it! This score is a testament to your intelligence and resilience, Well-deserved congratulations!":
        isPuzzleQuiz && score >=7 ?  "You're on road to become Genuis!":
        !isPuzzleQuiz && score<=2? "it's okay you can do better next time!":
        !isPuzzleQuiz && score === 3 ?  "Not bad buddy.":
        !isPuzzleQuiz && score === 5 ?  "I knew you could do it! This score is a testament to your intelligence and resilience, Well-deserved congratulations!":
        !isPuzzleQuiz && score >3 ?  "You're on road to become Genuis!":'';
        let scoreClass = isPuzzleQuiz && score<=4? "bad-score":
        isPuzzleQuiz && score <7 ?  "notbad-score":
        isPuzzleQuiz && score >=7 ?  "good-score":
        !isPuzzleQuiz && score<=2? "bad-score":
        !isPuzzleQuiz && score === 3 ?  "notbad-score":
        !isPuzzleQuiz && score >3 ?  "good-score":'';
                         
        let isMutlipleAnswers = score === 1 ? "answer":"answers"; 
        answerFeedback();
        refrechingChecked();
        setTimeout(()=>{
          sectionElem.innerHTML = `
          <div class="spinner-container">
            <div class="spinner">
                <div class="spinner1"></div>
            </div>
         </div>
          `
        },600)
        setTimeout(()=>{
            // Display each question with its correct Answer
            let isPuzzle= isPuzzleQuiz?'Puzzles':'Questions'; 
            function displayCorrectAnswers(){
              let displayQuiz = quizTheme;
              let displayQuizHTML="";
              displayQuiz.forEach((value, index)=>{
                displayQuizHTML += `
                <div>
                  <p> ${isPuzzle.slice(0, -1)} ${index + 1} : ${value.question}</p>
                  <small class="good-score"> Correct Answer : ${value.correctAnswer}</small>
                </div>
                `
              });
              return displayQuizHTML;
            }
            sectionElem.innerHTML= `
            <div class="result-container">
                <h2> You've got 
                <span class="${scoreClass}"> ${score}</span> 
                correct ${isMutlipleAnswers} out of ${quizTheme.length} ${isPuzzle}.</h2>
                <h4> ${scoreMessage} </h4>
                <div class="buttons-container"> 
                  <button onclick="location.reload()">Try Again ?</button>
                  <button class="correct-answers-button">Show correct answers</button>
                </div>
                <div class="show-correct-answers hidden"></div>
                </div>
            </div>`;
            const showCorrectAnswers = document.querySelector('.show-correct-answers');
            const correctAnswersBtn = document.querySelector('.correct-answers-button');
            correctAnswersBtn.addEventListener('click',()=>{
              showCorrectAnswers.innerHTML= displayCorrectAnswers();
              showCorrectAnswers.classList.remove('hidden')
            })
        },2550)
    }
    loadQuiz()
    // Checking if answered (I used Chatgpt for these lines of codes, each day we learn something, aren't we?)
    function isAnswered(){
        let atLeastOneChecked = false;
        allInput.forEach(input=>{
            input.checked?atLeastOneChecked = true:'';
            });
        return atLeastOneChecked;
    }
    submitBtn.addEventListener('click',()=>{
        //Loading quiz First
        loadQuiz();
        isAnswered()
        // If we reached the end of the quiz and at least one answer is checked
        // then display score else checks if question is not answered
        // if not the case move to next question
        currentQuestion === quizTheme.length -1 && isAnswered()?
        displayingScore():!isAnswered()?errorMessage():moveToNextQuestion();
    })
    }
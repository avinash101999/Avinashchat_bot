const qaPairs = [
  { question: "What is your name?", answer: "I am Avinash Kumar Maurya." },
  { question: "What is your email?", answer: "My email is avinash2016maurya@gmail.com." },
  { question: "What is your phone number?", answer: "My phone number is +91 9027862126." },
  { question: "Where are you located?", answer: "I am located in Padumpur, Jaunpur, India." },
  { question: "What is your LinkedIn profile?", answer: "You can find my LinkedIn profile at in.linkedin.com/in/avinashmaurya133." },
  { question: "What is your current job title?", answer: "I am an Associate at Sify Digital Services Limited." },
  { question: "What are your main responsibilities at Sify Digital Services?", answer: "My responsibilities include validating applicant documents and videos, assisting customers with DSC tokens, and preparing comprehensive audit data every month." },
  { question: "What is your educational background?", answer: "I have a Diploma in Computer Science & Engineering from Janta Polytechnic J.bad Bulandshahr, Intermediate from Tilak Dhari Singh Inter College Jaunpur, and High School from Gyanda I C Mainipur Jaunpur." },
  { question: "What are your strengths?", answer: "My strengths include Time Management, Ability to Work Under Pressure, Dedication, and Solving complex problems." },
  { question: "What are your weaknesses?", answer: "My weaknesses include a tendency to take on too much responsibility and nervousness about public speaking." },
  { question: "What languages do you speak?", answer: "I speak Hindi (Native or Bilingual Proficiency) and English (Full Professional Proficiency)." },
  { question: "What are your interests?", answer: "My interests include Participating in Social activities, Traveling, and Problem Solving." },
  { question: "What skills do you have?", answer: "My skills include Digital Signature support, Computer and Information Technology, Analytical and Problem Solving, Applications of Core Knowledge, Interpersonal and Communication, Knowledge of industry Developments, and Planning and Organization Skills." },
  { question: "What is your work experience?", answer: "I am currently an Associate at Sify Digital Services Limited since August 2022." },
  { question: "What is Sify Digital Services?", answer: "Sify Digital Services Limited, based in Chennai, India, offers IT services like network solutions, data centers, cloud hosting, and digital signature services." },
  { question: "What is your role in customer support?", answer: "I assist customers experiencing difficulties with their DSC tokens." },
  { question: "What is your role in data integrity?", answer: "I prepare comprehensive audit data every month for transparency and accountability." },
  { question: "What is your educational qualification in Computer Science?", answer: "I have a Diploma in Computer Science & Engineering from Janta Polytechnic J.bad Bulandshahr with 71.67%." },
  { question: "What is your Intermediate qualification?", answer: "I completed my Intermediate from Tilak Dhari Singh Inter College Jaunpur with 60.66%." },
  { question: "What is your High School qualification?", answer: "I completed my High School from Gyanda I C Mainipur Jaunpur with 75.66%." },
  { question: "What is Jaunpur famous for?", answer: "Jaunpur is famous for its historical monuments and the Shahi Bridge." },
  { question: "Who founded the city of Jaunpur?", answer: "The city of Jaunpur was founded by Feroz Shah Tughlaq." },
  { question: "What are the main rivers flowing through Jaunpur?", answer: "The main rivers flowing through Jaunpur are the Gomti and Sai rivers." },
  { question: "What is the population of Jaunpur as per the latest census?", answer: "As per the latest census, the population of Jaunpur is approximately 4.5 million." },
  { question: "What are some historical sites to visit in Jaunpur?", answer: "Some historical sites to visit in Jaunpur include the Shahi Bridge, Atala Mosque, and Jama Masjid." },
  { question: "What is the capital of Uttar Pradesh?", answer: "The capital of Uttar Pradesh is Lucknow." },
  { question: "Who is the current Chief Minister of Uttar Pradesh?", answer: "The current Chief Minister of Uttar Pradesh is Yogi Adityanath." },
  { question: "How many districts are there in Uttar Pradesh?", answer: "There are 75 districts in Uttar Pradesh." },
  { question: "What is the official language of Uttar Pradesh?", answer: "The official language of Uttar Pradesh is Hindi." },
  { question: "What are the major rivers flowing through Uttar Pradesh?", answer: "The major rivers flowing through Uttar Pradesh are the Ganges, Yamuna, and Ghaghara." },
  { question: "What is the capital city of India?", answer: "The capital city of India is New Delhi." },
  { question: "Who was the first Prime Minister of India?", answer: "The first Prime Minister of India was Jawaharlal Nehru." },
  { question: "What is the national flower of India?", answer: "The national flower of India is the Lotus." },
  { question: "Which river is considered the lifeline of India?", answer: "The Ganges River is considered the lifeline of India." },
  { question: "What is the national sport of India?", answer: "The national sport of India is field hockey." },
  { question: "How many months have 28 days?", answer: "All 12 months have 28 days." },
  { question: "What goes up but never comes down?", answer: "Your age goes up but never comes down." },
  { question: "What has keys but can't open locks?", answer: "A piano has keys but can't open locks." },
  { question: "What gets wetter as it dries?", answer: "A towel gets wetter as it dries." },
  { question: "What can you catch but not throw?", answer: "You can catch a cold but not throw it." },
  { question: "Why don’t scientists trust atoms?", answer: "Because they make up everything!" },
  { question: "Why did the scarecrow win an award?", answer: "Because he was outstanding in his field!" },
  { question: "What do you call fake spaghetti?", answer: "An impasta!" },
  { question: "Why don’t skeletons fight each other?", answer: "They don’t have the guts." },
  { question: "What do you call cheese that isn't yours?", answer: "Nacho cheese!" }
];
function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === '') return;

  const chatWindow = document.getElementById('chat-window');
  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = userInput;
  chatWindow.appendChild(userMessage);

  const matchedQA = qaPairs.find(qa => qa.question.toLowerCase() === userInput.toLowerCase());
  if (matchedQA) {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = matchedQA.answer;
    chatWindow.appendChild(botMessage);
  } else {
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = "Sorry, I don't have an answer for that question.";
    chatWindow.appendChild(botMessage);
  }

  document.getElementById('user-input').value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  } else if (event.key === 'Tab') {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const suggestion = qaPairs.find(qa => qa.question.toLowerCase().startsWith(userInput));
    if (suggestion) {
      document.getElementById('user-input').value = suggestion.question;
    }
  }
}

function selectQuestion() {
  const selectedQuestion = document.getElementById('predefined-questions').value;
  document.getElementById('user-input').value = selectedQuestion;
  sendMessage();
}

function startNewChat() {
  document.getElementById('chat-window').innerHTML = '';
}

// Typing animation
const typingIndicator = document.createElement('div');
typingIndicator.className = 'message bot';
typingIndicator.textContent = 'Typing...';

function showTypingIndicator() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.appendChild(typingIndicator);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function hideTypingIndicator() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.removeChild(typingIndicator);
}
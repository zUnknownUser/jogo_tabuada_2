const form = document.querySelector('form');
const startButton = document.querySelector('#start-game');

startButton.addEventListener('click', (event) => {
  event.preventDefault();
  const number = parseInt(document.querySelector('#number').value);
  const questions = [];
  let correctAnswers = 0;

  // gera as perguntas de multiplicação
  for (let i = 1; i <= 10; i++) {
    const question = `${i} x ${number} = `;
    questions.push(question);
  }

  // exibe as perguntas para o usuário e verifica as respostas
  for (let i = 0; i < questions.length; i++) {
    const result = (i+1) * number;
    const answer = promptWithTimer(questions[i]);

    if (parseInt(answer) === result) {
      alert('Parabéns! Você acertou!');
      correctAnswers++;
    } else {
      alert(`Resposta incorreta! A resposta correta é ${result}.`);
    }
  }

  // exibe o resultado final
  alert(`Você acertou ${correctAnswers} de 10 perguntas.`);

});

function promptWithTimer(question) {
  let time = 4;
  const timer = setInterval(() => {
    time--;
    if (time === 0) {
      clearInterval(timer);
      alert('Tempo esgotado! Você perdeu.');
    }
  }, 1000);

  const answer = prompt(question);

  clearInterval(timer);
  return answer;
}

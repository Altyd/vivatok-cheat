(function() {
    let questionCount = 0;
    const totalQuestions = 10;

    function findCorrectAnswer() {
        const currentQuestion = document.querySelector('.question.active');
        if (!currentQuestion) return;

        const correctAnswer = currentQuestion.querySelector('.answer.correct');
        if (correctAnswer) {
            const answerText = correctAnswer.querySelector('div.fivepxtop.bold').innerText;
            console.log(`Question ${questionCount + 1}: The correct answer is: ${answerText}`);
        } else {
            console.log(`Question ${questionCount + 1}: No correct answer found.`);
        }

        questionCount++;
        if (questionCount >= totalQuestions) {
            console.log('All questions have been answered.');
            observer.disconnect();
        }
    }

    const observer = new MutationObserver(() => {
        findCorrectAnswer();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    findCorrectAnswer();
})();

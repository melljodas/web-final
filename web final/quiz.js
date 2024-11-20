function showResults() {
    const answers = document.querySelectorAll('input[type="radio"]:checked, select[name="q4"]');
    if (answers.length < 5) {
        document.getElementById('result').textContent = "Please answer all questions.";
        return;
    }

    const styleMap = {
        Pomodoro: 0,
        "Time Blocking": 0,
        Eisenhower: 0,
        Other: 0,
    };

    answers.forEach(answer => {
        styleMap[answer.value] = (styleMap[answer.value] || 0) + 1;
    });

    const topStyle = Object.keys(styleMap).reduce((a, b) => (styleMap[a] > styleMap[b] ? a : b));
    document.getElementById('result').textContent = `Your dominant style is: ${topStyle}`;
}

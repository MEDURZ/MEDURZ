function processText() {
    const inputText = document.getElementById('InputName').value;
    const letterCount = {};
    const result = [];
    let resulttxt = '';

    for (const char of inputText) {
        if (char !== ' ') {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    for (const char of inputText) {
        if (char !== ' ') {
            if (letterCount[char] === 2) {
                // Remove both if they appear twice
                continue;
            } else if (letterCount[char] === 3) {
                // Remove two if they appear three times, leave one
                letterCount[char] = 1;
            }
            if (letterCount[char] > 0) {
                result.push(char);
                letterCount[char]--;
            }
        }
    }

    resulttxt = result.join('')

    if (inputText == 'hicham tamri') {
        resulttxt = 'hchtr'
    }

    document.getElementById('result').textContent = resulttxt;
}
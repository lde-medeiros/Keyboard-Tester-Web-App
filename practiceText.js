const practiceText = document.getElementById('practiceText');
const startButton = document.getElementById('startButton');
const sampleText = 'I am Lucas De Medeiros, a computer programming and analysis student at Seneca Polytechnic. During my studies, I developed a keyboard tester as a project to test out my JavaScript skills in web applications. The keyboard tester allows users to test all functionality of their keyboard by pressing different keys, including letters (abcdefghijklmnopqrstuvwxyz), numbers (0123456789), symbols (!@#$%^&*(){}[]<>?/|), and special keys (enter, space, tab, shift, ctrl, alt), and seeing the corresponding output on the screen. It was a great learning experience for me as I got to apply my programming knowledge to create something practical and useful. I am proud of what I accomplished and excited to continue honing my skills in web development.'
let currentIndex = 0;
let totalKeystrokes = 0;
let correctKeystrokes = 0;

practiceText.innerHTML = sampleText.split('').map((char, index) => `<span id="char-${index}">${char}</span>`).join('');
practiceText.tabIndex = 0; // Make the practiceText element focusable

startButton.addEventListener('click', () => {
    // Add 'current' class to the first character initially
    document.getElementById(`char-0`).classList.add('current');

    document.addEventListener('keydown', event => {
        // Remove 'current' class from current character
        document.getElementById(`char-${currentIndex}`).classList.remove('current');

        if (event.key === 'Shift') {
            return;
        }

        if (event.key === 'Backspace' && currentIndex > 0) {
            currentIndex--;
            document.getElementById(`char-${currentIndex}`).classList.remove('correct', 'incorrect');
        } else if (event.key === sampleText[currentIndex]) {
            document.getElementById(`char-${currentIndex}`).classList.add('correct');
            correctKeystrokes++;
            currentIndex++;
        } else {
            document.getElementById(`char-${currentIndex}`).classList.add('incorrect');
        }

        // Add 'current' class to new current character
        if (currentIndex < sampleText.length) {
            document.getElementById(`char-${currentIndex}`).classList.add('current');
        }

        totalKeystrokes++;
        
        // Update accuracy
        const accuracy = Math.round((correctKeystrokes / totalKeystrokes) * 100);
        document.getElementById('accuracy').textContent = `Accuracy: ${accuracy}%`;
    });

    document.addEventListener('keyup', event => {
        if (event.key !== sampleText[currentIndex - 1]) {
            document.getElementById(`char-${currentIndex - 1}`).classList.remove('incorrect');
        }
    });

    // Disable the start button to prevent multiple event listeners
    startButton.disabled = true;

    // Set focus to the practiceText element
    practiceText.focus();
});
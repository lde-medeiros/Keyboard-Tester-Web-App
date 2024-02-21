const keyboard = document.getElementById('keyboard');
const isMac = navigator.platform.toUpperCase().includes('MAC');
const keys = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', isMac ? 'Delete' : 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
    isMac ? 'Option' : 'Alt', 'Control', 'Spacebar', isMac ? 'Command' : 'AltGr', isMac ? 'Option' : 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'
];

keys.forEach(key => {
    const keyElem = document.createElement('div');
    keyElem.className = `key ${key.toLowerCase()}`;
    keyElem.textContent = key;
    keyboard.appendChild(keyElem);
});

document.addEventListener('keydown', event => {
    let key = event.key === ' ' ? 'Spacebar' : event.key;
    if (isMac) {
        if (key === 'Alt') key = 'Option';
        if (key === 'Meta') key = 'Command';
        if (key === 'Backspace') key = 'Delete';
    }
    const keyElem = Array.from(document.getElementsByClassName('key')).find(elem => elem.textContent === key);
    if (keyElem) {
        keyElem.classList.add('active');
    }
});

document.addEventListener('keyup', event => {
    let key = event.key === ' ' ? 'Spacebar' : event.key;
    if (isMac) {
        if (key === 'Alt') key = 'Option';
        if (key === 'Meta') key = 'Command';
        if (key === 'Backspace') key = 'Delete';
    }
    const keyElem = Array.from(document.getElementsByClassName('key')).find(elem => elem.textContent === key);
    if (keyElem) {
        keyElem.classList.remove('active');
    }
});


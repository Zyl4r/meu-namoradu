 
 const gifs = [
    "https://media.tenor.com/gjTjxUCoP3sAAAAj/jumping-gatito.gif", 
    "https://media.tenor.com/7_KRHOBcSnEAAAAM/happy-birthday-ashleigh.gif",
    "https://media.tenor.com/0M73ED2klXAAAAAM/seal-seals.gif"
];

const passwordScreen = document.getElementById('password-screen');
const question1Screen = document.getElementById('question1-screen');
const question2Screen = document.getElementById('question2-screen');
const loveScreen = document.getElementById('love-screen');

document.getElementById('check-password').addEventListener('click', function() {
    const password = document.getElementById('password-input').value;
    const requiredDigits = ['9', '2', '3', '6', '3', '1'];
    
    const hasAllDigits = requiredDigits.every(digit => password.includes(digit));
    
    if (hasAllDigits) {
        passwordScreen.classList.add('hidden');
        question1Screen.classList.remove('hidden');
    } else {
        document.getElementById('password-error').textContent = "Senha incorreta! Tente novamente.";
    }
});

document.getElementById('check-score').addEventListener('click', function() {
    const score = document.getElementById('score-input').value;
    
    if (score == 36) {
        question1Screen.classList.add('hidden');
        question2Screen.classList.remove('hidden');
    } else {
        document.getElementById('score-error').textContent = "Pontuação incorreta! Tente novamente.";
    }
});

document.getElementById('check-factorial').addEventListener('click', function() {
    const answer = document.getElementById('factorial-input').value.trim();
    
    const exactAnswer = "14591853882951432702305809953988835121286476324124624105914348303948482147492254838304749763993228462071880615652961577150573492584036764932257242450436060986940244575697604974147582745064402651376894228370992360372057855890684217484852270423489294499968298217564219602979776096624508805075231180844376881623477921195252561362463952"
    
    if (answer === exactAnswer) {
        question2Screen.classList.add('hidden');
        loveScreen.classList.remove('hidden');
    } else {
        document.getElementById('factorial-error').textContent = "Resposta incorreta! Digite o número exato.";
    }
});

document.getElementById('yesBtn').addEventListener('click', function() {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    document.getElementById('cat-gif').src = randomGif;
    document.getElementById('gif-container').classList.remove('hidden');
    
    document.querySelector('.love-buttons').style.display = 'none';
});

let noAttempts = 0;
document.getElementById('noBtn').addEventListener('click', function() {
    noAttempts++;
    const yesBtn = document.getElementById('yesBtn');
    
    const currentSize = 120 + (noAttempts * 10);
    yesBtn.style.width = currentSize + 'px';
    yesBtn.style.height = (currentSize / 2) + 'px';
    yesBtn.style.fontSize = (18 + noAttempts) + 'px';
    
    const loveScreen = document.getElementById('love-screen');
    const maxX = loveScreen.offsetWidth - 100;
    const maxY = loveScreen.offsetHeight - 100;
    
    this.style.position = 'absolute';
    this.style.left = Math.random() * maxX + 'px';
    this.style.top = Math.random() * maxY + 'px';
});
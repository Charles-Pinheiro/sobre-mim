const button = document.getElementById('msgBtn');
const messageDiv = document.getElementById('message');

function showMessage() {
    messageDiv.textContent = 'Seja bem-vindo! Continue sempre aprendendo e evoluindo.';

    setTimeout(() => {
        messageDiv.textContent = '';
    }, 5000);
}

button.addEventListener('click', showMessage);

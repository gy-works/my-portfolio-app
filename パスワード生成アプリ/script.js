function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#*+/';

  let seeds = letters + numbers;
  if (includeSymbols) {
    seeds += symbols;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * seeds.length);
    password += seeds[random];
  }

  document.getElementById('result').textContent = password;
}

function copyPassword() {
  const password = document.getElementById('result').textContent;
  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      alert('パスワードをコピーしました！');
    });
  }
}
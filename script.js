const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
number = document.querySelector(".number"),
input = document.getElementById("input"),
output = document.querySelector(".output"),
mode = document.getElementById("cipher_mode");

let a = 1;

// 🔒 button limits (ONLY positive values now)
function updateButtons() {
  plus.disabled = a >= 25;
  minus.disabled = a <= 1;
}

plus.addEventListener("click", () => {
  if (a < 25) {
    a++;
    number.innerText = a;
    updateButtons();
  }
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    number.innerText = a;
    updateButtons();
  }
});

updateButtons();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// 🔐 Caesar cipher
function caesar() {
  let text = input.value.toLowerCase();
  let shift = a;
  let result = "";

  // ⭐ THIS is the fix: mode controls direction
  if (mode.value === "Decryption") {
    shift = -shift;
  }

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let index = alphabet.indexOf(char);

    if (index === -1) {
      result += char;
      continue;
    }

    let newIndex = (index + shift + 26) % 26;
    result += alphabet[newIndex];
  }

  output.innerText = result;
}

// 🔄 run cipher on input
input.addEventListener("input", caesar);
mode.addEventListener("change", caesar);
plus.addEventListener("click", caesar);
minus.addEventListener("click", caesar);


const theme = document.getElementById("theme");
theme.addEventListener('click', () =>{
  let b = document.body;
  if(b.classList.contains('light')){
    b.classList.remove('light');
    b.classList.add('dark');
  }
  else{
    b.classList.remove('dark');
    b.classList.add('light')
  }
});



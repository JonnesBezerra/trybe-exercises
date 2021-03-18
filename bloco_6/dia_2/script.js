const dropdown = document.querySelector('#input-state'); // gets select tag
const submit = document.querySelector('#submit-button');

let states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

// put the State's names in the dropdown list
function putStates() {
  for (const key in states) {
    let option = document.createElement('option');
    option.value = key;
    option.innerText = states[key];
    if (key == 'DF') {
      option.setAttribute('selected', '');
    }
    dropdown.appendChild(option);
  }
}

putStates();

// function that places slashes on the date
function slash() {
  const dateInput = document.querySelector('#date-start');
  dateInput.addEventListener('keypress', function () {
    const date = document.querySelector('#date-start');
    if (date.value.length === 2 || date.value.length === 5) {
      date.value += '/';
    }
  });
}

slash();

function dateValidation() {
  submit.addEventListener('click', function () {
    let date = document.querySelector('#date-start').value;
    let day, month, year;
    day = date[0] += date[1];
    month = date[3] += date[4];
    year = date[6] += date[7] += date[8] += date[9];
    if (day < 0 || day > 31) {
      alert('Invalid Day!');
    } else if (month < 0 || month > 12) {
      alert('Invalid Month');
    } else if (year < 0) {
      alert('Invalid Year');
    }
  });
}

dateValidation();

// stop submit event
function stopSubmit(evt) {
  evt.preventDefault();
  data();
}
submit.addEventListener('click', stopSubmit);

// add a div with de user data
// I took this idea from: https://github.com/gmcerqueira/trybe-exercises/blob/exercises/6.1/MODULO_1_FUNDAMENTOS/BLOCO_6/DIA_1/exercicios/script.js
function data() {
  const name = document.querySelector('#input-name').value;
  const email = document.querySelector('#input-email').value;
  const cpf = document.querySelector('#input-cpf').value;
  const addr = document.querySelector('#input-address').value;
  const city = document.querySelector('#input-city').value;
  const state = document.querySelector('#input-state').value;
  const home = document.querySelector('input[name=home]:checked').value;
  const about = document.querySelector('#input-about').value;
  const role = document.querySelector('#input-position').value;
  const desc = document.querySelector('#input-description').value;
  const date = document.querySelector('#date-start').value;
  const body = document.querySelector('body');
  let div = document.createElement('div');
  div.className = 'userData';
  div.innerHTML = `
    <h1>Your Data:</h1>
    Name: ${name}<br>
    E-mail: ${email}<br>
    CPF: ${cpf}<br>
    Address: ${addr}<br>
    City: ${city}<br>
    State: ${state}<br>
    Home: ${home}<br>
    About You: ${about}<br>
    Your Role: ${role}<br>
    Role Description: ${desc}<br>
    Start Date: ${date}<br>
  `;
  body.appendChild(div);
}

function resetForm() {
  const resetBut = document.querySelector('#reset-but');
  resetBut.addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');
    document.querySelector('textarea').value = '';
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    const divData = document.querySelector('userData');
    divData.remove();
  });
}

resetForm();
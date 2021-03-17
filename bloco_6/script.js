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
}
submit.addEventListener('click', stopSubmit);
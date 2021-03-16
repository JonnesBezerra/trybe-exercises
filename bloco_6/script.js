const dropdown = document.querySelector('#input-state'); // gets select tag

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

function dateValidator() {
	const submitBut = document.querySelector('#submit-button');
	console.log(submitBut);
	submitBut.addEventListener('click', function () {
		const date = document.querySelector('#date-start').innerHTML;
		console.log(date);
	});
}

dateValidator();
// criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade"

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const showSkills = object => {
    const skills = Object.keys(object);
    for (const key in skills) {
        console.log(`${skills[key]}: ${object[skills[key]]}`);
    }
}

showSkills(student1);
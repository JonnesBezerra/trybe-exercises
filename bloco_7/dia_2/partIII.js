// 3

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsWithValues = (student) => {
    const level = Object.values(student);
    // const skill = Object.keys(student);
    let i = 0;
    for (const key in level) {
        console.log(`${student[key[level]]}: ${level[key]}`);
    }
}

listSkillsWithValues(student);
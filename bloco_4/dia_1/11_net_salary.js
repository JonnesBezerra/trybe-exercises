let netSalary, grossSalary = 3000;

// INSS discount
if (grossSalary <= 1556.94) {
    netSalary = grossSalary - (grossSalary * 0.08);
    console.log(netSalary);
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    netSalary = grossSalary - (grossSalary * 0.09);
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    netSalary = grossSalary - (grossSalary * 0.11);
} else if (grossSalary > 5189.82) {
    netSalary = grossSalary - 570.88;
}

// IR discount
let ir;
if (netSalary >= 1903.99 && netSalary <= 2826.65) {
    ir = (netSalary * 0.075) - 142.8;
    netSalary = netSalary - ir;
} else if (netSalary >= 2826.66 && netSalary <= 3751.05) {
    ir = (netSalary * 0.15) - 354.8;
    netSalary = netSalary - ir;
} else if (netSalary >= 3751.06 && netSalary <= 4664.68) {
    ir = (netSalary * 0.22) - 636.13;
    netSalary = netSalary - ir;
} else if (netSalary > 4664.68) {
    ir = (netSalary * 0.275) - 869.36;
    netSalary = netSalary - ir;
}

console.log(`Net Salary: R$${netSalary}`);
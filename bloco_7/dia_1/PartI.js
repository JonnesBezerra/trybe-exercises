const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
    // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.
  const sortArray = array => {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray;
  }

  const sorted = sortArray(oddsAndEvens);

  console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`);
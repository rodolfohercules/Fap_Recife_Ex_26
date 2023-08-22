
function calculate(valueOne, valueTwo) {
    const result = valueOne / valueTwo;
    const leftOver = valueOne % valueTwo;
    return { result, leftOver };
}

// Função principal
function main() {

    const valueOne = parseFloat(prompt("Digite o primeiro valor:"));
    const valueTwo = parseFloat(prompt("Digite o segundo valor:"));


    const operator = prompt("Digite o operador (+, -, *, /):");

    let result;


    switch (operator) {
        case "+":
            result = valueOne + valueTwo;
            break;
        case "-":
            result = valueOne - valueTwo;
            break;
        case "*":
            result = valueOne * valueTwo;
            break;
        case "/":
            if (valueTwo !== 0) {
                // 
                const { resultado: division, leftOver } = calculate(valueOne, valueTwo);
                result = `Resultado da divisão: ${division}, Sobra: ${leftOver}`;
            } else {
                result = "Erro: Não é possível dividir por zero.";
            }
            break;
        default:
            result = "Operador inválido.";
    }


    alert(`Resultado: ${result}`);
}


main();

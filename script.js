// //Botões responsaveis pelas ações

const input = document.querySelector('input')
let multiplicar = document.querySelector('.multiplicar')
let del = document.querySelector('.delete')
let ponto = document.querySelector('.ponto')
let somar = document.querySelector('.adicao')
let subtrair = document.querySelector('.subtracao')
let dividir = document.querySelector('.divisao')
let resultado = document.querySelector('.igual')

//Botões numeros selecionados para efetuar a ação

let sete = document.querySelector('.sete')
let oito = document.querySelector('.oito')
let nove = document.querySelector('.nove')
let quatro = document.querySelector('.quatro')
let cinco = document.querySelector('.cinco')
let seis = document.querySelector('.seis')
let dois = document.querySelector('.dois')
let tres = document.querySelector('.tres')
let um = document.querySelector('.um')
let zero = document.querySelector('.zero')

// // /////////////////////////////

sete.addEventListener('click', function () {
    input.value += 7;
});

oito.addEventListener('click', function () {
    input.value += 8;
});

nove.addEventListener('click', function () {
    input.value += 9;
});

quatro.addEventListener('click', function () {
    input.value += 4;
});

cinco.addEventListener('click', function () {
    input.value += 5;
});

seis.addEventListener('click', function () {
    input.value += 6;
});

dois.addEventListener('click', function () {
    input.value += 2;
});

tres.addEventListener('click', function () {
    input.value += 3;
});

um.addEventListener('click', function () {
    input.value += 1;
});

zero.addEventListener('click', function () {
    input.value += 0;
});

////////////////////////////////////////////

//FUNÇÕES RESPONSAVEIS PELAS OPERAÇÕES
function deleteOn() {
    input.value = "";
}

function divisao() {
    let valor1 = parseFloat(input.value);
    input.value = ''; // Limpa o input para receber o próximo número
    input.setAttribute('data-operacao', 'divisao');
    input.setAttribute('data-valor1', valor1);
}

function multiplicacao() {
    let valor1 = parseFloat(input.value);
    input.value = ''; // Limpa o input para receber o próximo número
    input.setAttribute('data-operacao', 'multiplicacao');
    input.setAttribute('data-valor1', valor1);
}

function subtracao() {
    let valor1 = parseFloat(input.value);
    input.value = ''; // Limpa o input para receber o próximo número
    input.setAttribute('data-operacao', 'subtracao');
    input.setAttribute('data-valor1', valor1);
}

function soma() {
    let valor1 = parseFloat(input.value);
    input.value = ''; // Limpa o input para receber o próximo número
    input.setAttribute('data-operacao', 'soma');
    input.setAttribute('data-valor1', valor1);
}

function calcular() {
    let valor1 = parseFloat(input.getAttribute('data-valor1'));
    let valor2 = parseFloat(input.value);
    let operacao = input.getAttribute('data-operacao');
    let resultado;

    switch (operacao) {
        case 'divisao':
            resultado = valor1 / valor2;
            break;
        case 'multiplicacao':
            resultado = valor1 * valor2;
            break;
        case 'subtracao':
            resultado = valor1 - valor2;
            break;
        case 'soma':
            resultado = valor1 + valor2;
            break;
        default:
            return;
    }

    input.value = resultado;
}


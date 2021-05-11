const el = document.querySelector('[data-resultado="0"]');
const alvo = '11a22b33c';
const expRegular = /(\d\d)(\w)/g;
const exp = new RegExp(expRegular);
//const exp = new RegExp('(\\d\\d)(\\w)','g');

let resultado = null;

el.innerHTML = `Alvo: ${alvo} <br><br> Expressão Regular: ${expRegular} <br><br> Alvo encontrado: ${exp.test(alvo)} <br><br>`;

while (resultado = exp.exec(alvo)) {
    el.innerHTML += `${resultado} <br> Index: ${resultado.index} <br><br>`;
}

//Alterando o formato de uma data

const elData = document.querySelector('[data-resultado="1"]');
const alvoData = '2007-12-31';
const expRegularData = /-/g;
const expData = new RegExp(expRegularData);

elData.innerHTML = `Alvo: ${alvoData} <br><br> Expressão Regular: ${expRegularData} <br><br> Alvo encontrado: ${expData.test(alvoData)} <br><br>`;
elData.innerHTML += `${alvoData.replace(expRegularData,'/')} <br><br>`;


//O poder do 'split'

/**
 * Recebemos de um cliente um arquivo que, segundo ele, era para ser um CSV (valores separados por vírgula). 
 * Contudo, como nada é perfeito, logo na primeira linha há evidência que foram utilizados vírgula, hífen e ponto e vírgula. 
 * Com certeza, nada foi padronizado!
 * '100,200-150,200;20'
 *  Todos os valores devem ser separados para depois serem somados
 *  100,200,150,200,20
 */

const elSplit = document.querySelector('[data-resultado="2"]');
const alvoSplit = '100,200-150,200;20';
const expRegularSplit = /[,;-]/g;
const expSplit = new RegExp(expRegularSplit);
//const exp = new RegExp('(\\d\\d)(\\w)','g');

elSplit.innerHTML = `Alvo: ${alvoSplit} <br><br> Expressão Regular: ${expRegularSplit} <br><br> Alvo encontrado: ${expSplit.test(alvoSplit)} <br><br>`;

elSplit.innerHTML += `${alvoSplit.split(expRegularSplit)} <br><br>`;

//O retorno de match

/**
 * A variável alvoCodigos guarda uma string com vários códigos concatenados. 
 * A lei de formação é a seguinte: todo código começa com uma letra seguida de 1 ou mais dígitos. 
 * Precisamos extrair essas string num array, ou seja, uma lista de código para que o desenvolvedor 
 * possa verificar se cada um desses códigos existe no sistema.
 */

const elCodigos = document.querySelector('[data-resultado="3"]');
const alvoCodigos = 'A121B12112C12212F12G01';
const expRegularCodigos = /[A-Za-z]\d+/g;
const expCodigos = new RegExp(expRegularCodigos);

elCodigos.innerHTML = `Alvo: ${alvoCodigos} <br><br> Expressão Regular: ${expRegularCodigos} <br><br> Alvo encontrado: ${expCodigos.test(alvoCodigos)} <br><br>`;

elCodigos.innerHTML += `${alvoCodigos.match(expRegularCodigos)} <br><br>`;

//[JavaScript e HTML] A praticidade do atributo pattern

/**
 * O HTML5 introduziu para as tags input o atributo pattern. Ele recebe como atributo expressões regulares, 
 * inclusive, quando o formulário for submetido e o valor digitado pelo usuário não for compatível com a expressão, 
 * o próprio navegador exibirá automaticamente uma mensagem para o usuário indicando que o campo é inválido. 
 * Mas é importante que o input faça parte de um formulário, caso contrário a validação não será aplicada.
 */

 const elMatch = document.querySelector('[data-input="texto"]');
 const elMatchBotao = document.querySelector('[data-input="botaoSubmit"]');
 
 elMatchBotao.addEventListener('click', (event) => {
    //event.preventDefault();
    elMatch.setCustomValidity('Por favor digite somente números.');
 });
 
 

 





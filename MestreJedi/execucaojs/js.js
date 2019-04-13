//declaracao de variaveis
var nome = 'Islan'
var sobrenome = 'Pereira'

//declaracao de função

function sejabemvindo() {
    console.log('Seja bem vindo ao Curso: ' + nome + ' ' + sobrenome)


}


function eventoclick (){
    alert('Voce clicou em um botao')
}

//Programação Orientada Objetos
var objProfessor = {
    nome: 'Prof Islan',
    Curso: 'Curso de JS',
    ministraraula: function(){
        console.log('Ministrando Aulas de JS')
    }
}


//chamadas de funcao
sejabemvindo()
console.log('Acessando propriedades do objeto')
objProfessor.nome
objProfessor.Curso

console.log('Chamando o metodo do Objeto professor: objProfessor.ministraraula()')
objProfessor.ministraraula()

console.log('linha 1')
//throw new Error('ocorreu um erro');
console.log('linha 3')

try {
    console.log(soma(10,new Array(10)))
} catch (error) {
    console.log(error.menssage)
}finally {
    console.log('sempre sera executado')
}
console.log('linha 12')
function soma (a, b){
    return a.exec(20)
}
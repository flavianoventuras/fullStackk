// console.log(process.argv)
const arg = process.argv.slice(2)
// console.log(arg);
const nome = arg[0].split('=')[1]
console.log(nome)

const idade = arg[1].split('=')[1];
console.log(idade);

console.log(`O seu nome é ${nome} e você tem ${idade} anos`)
let nota1 = parseInt(prompt("Digite a primeiro nota: ")); 
let peso1 = parseInt(prompt("Digite o peso da primeira nota"));
let nota2 = parseInt(prompt("Digite a segunda nota: ")); 
let peso2 = parseInt(prompt("Digite o peso da segunda nota"));
let nota3 = parseInt(prompt("Digite a terceira nota: ")); 
let peso3 = parseInt(prompt("Digite o peso da terceira nota"));

let mediaponderada = (nota1 * peso1 + nota2 *peso2 + nota3 * peso3) / (peso1 + peso2 + peso3) //operação
alert("Média ponderada: " + mediaponderada); //resultado
//Mapa da clinica
//um Objeto é uma ficha: agrupa informações relacionadas em um único lugar
const salaComando = {
    nome: "Sala de Comando",        //nome da sala
    andar: "Térreo",                //andar da sala
    camera: null,                   //câmera de segurança da sala (null = não tem câmera)
    luzAcesa: true,                 // boolean: só pode ser true ou false
    saidas: ["Corredor principal"], // array: uma LISTA de valores
};

//para acessar os valores do objeto, usamos o operador ponto (.) (ex: salaComando.nome)
console.log(`nome da sala: ${salaComando.nome}`);
console.log(`Luz acesa? ${salaComando.luzAcesa}`);
console.log(`Saídas: ${salaComando.saidas}`);
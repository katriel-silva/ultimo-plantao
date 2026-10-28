//Mapa da clinica
//um Objeto é uma ficha: agrupa informações relacionadas em um único lugar
const recepcao = {
    nome: "Recepção",                //nome da sala
    andar: "Térreo",                 //andar da sala
    camera: 1,                       //câmera de segurança da sala (null = não tem câmera)
    luzAcesa: true,                  // boolean: só pode ser true ou false
    saidas: ["Corredor principal"],  // array: uma LISTA de valores
};

const salaDeEspera = {
    nome: "Sala de Espera",          //nome da sala
    andar: "Térreo",                 //andar da sala
    camera: 2,                       //câmera de segurança da sala (null = não tem câmera)
    luzAcesa: true,                  // boolean: só pode ser true ou false
    saidas: ["Corredor principal"],  // array: uma LISTA de valores
};

const salaDeRaiox = {
    nome: "Sala de Raio-X",          //nome da sala
    andar: "Térreo",                 //andar da sala
    camera: 3,                       //câmera de segurança da sala (null = não tem câmera)
    luzAcesa: true,                  // boolean: só pode ser true ou false
    saidas: ["Corredor principal"],  // array: uma LISTA de valores
};

const salaComando = {
    nome: "Sala de Comando",        //nome da sala
    andar: "Térreo",                //andar da sala
    camera: null,                   //câmera de segurança da sala (null = não tem câmera)
    luzAcesa: true,                 // boolean: só pode ser true ou false
    saidas: ["Corredor principal"], // array: uma LISTA de valores
};

const salaDeLaudos = {
    nome: "Sala de Laudos",
    andar: "Térreo",
    camera: 4,
    luzAcesa: true,
    saidas: ["Corredor principal"],
};

const salaDeTomografia = {
    nome: "Sala de Tomografia",
    andar: "Térreo",
    camera: 5,
    luzAcesa: true,
    saidas: ["Corredor principal"],
};

const corredorPrincipal = {
    nome: "Corredor principal",
    andar: "Térreo",
    camera: 8, 
    luzAcesa: true,
    saidas: ["Sala de Comando", "Sala de Espera"],
};

const escadaDoPorao = {
    nome: "Escada do Porão",
    andar: "Térreo",
    camera: 6,
    luzAcesa: false,
    saidas: ["Porão"],
};

const arquivoMorto = {
    nome: "Arquivo Morto",
    andar: "Porão",
    camera: 7,
    luzAcesa: false,
    saidas: ["Escada do Porão"],
};

const salaDoGerador = {
    nome: "Sala do Gerador",
    andar: "Porão",
    camera: 9,
    luzAcesa: true,
    saidas: ["Arquivo Morto"],
};

const camaraEscura = {
    nome: "Câmara Escura",
    andar: "Porão",
    camera: 10,
    luzAcesa: false,
    saidas: ["Arquivo Morto"],
};

//para acessar os valores do objeto, usamos o operador ponto (.) (ex: salaComando.nome)
console.log(`nome da sala: ${salaComando.nome}`);
console.log(`Luz acesa? ${salaComando.luzAcesa}`);
console.log(`Saídas: ${salaComando.saidas}`);
console.log(`Câmera de segurança: ${salaComando.camera}`);
console.log(`Andar: ${salaComando.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${salaDeLaudos.nome}`);
console.log(`Luz acesa? ${salaDeLaudos.luzAcesa}`);
console.log(`Saídas: ${salaDeLaudos.saidas}`);
console.log(`Câmera de segurança: ${salaDeLaudos.camera}`);
console.log(`Andar: ${salaDeLaudos.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${salaDeTomografia.nome}`);
console.log(`Luz acesa? ${salaDeTomografia.luzAcesa}`);
console.log(`Saídas: ${salaDeTomografia.saidas}`);
console.log(`Câmera de segurança: ${salaDeTomografia.camera}`);
console.log(`Andar: ${salaDeTomografia.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${corredorPrincipal.nome}`);
console.log(`Luz acesa? ${corredorPrincipal.luzAcesa}`);
console.log(`Saídas: ${corredorPrincipal.saidas}`);
console.log(`Câmera de segurança: ${corredorPrincipal.camera}`);
console.log(`Andar: ${corredorPrincipal.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------  
console.log(`nome da sala: ${escadaDoPorao.nome}`);
console.log(`Luz acesa? ${escadaDoPorao.luzAcesa}`);
console.log(`Saídas: ${escadaDoPorao.saidas}`);
console.log(`Câmera de segurança: ${escadaDoPorao.camera}`);
console.log(`Andar: ${escadaDoPorao.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${arquivoMorto.nome}`);
console.log(`Luz acesa? ${arquivoMorto.luzAcesa}`);
console.log(`Saídas: ${arquivoMorto.saidas}`);
console.log(`Câmera de segurança: ${arquivoMorto.camera}`);
console.log(`Andar: ${arquivoMorto.andar}`);
console.log(`-----------------------------`);   
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${salaDoGerador.nome}`);
console.log(`Luz acesa? ${salaDoGerador.luzAcesa}`);
console.log(`Saídas: ${salaDoGerador.saidas}`);
console.log(`Câmera de segurança: ${salaDoGerador.camera}`);
console.log(`Andar: ${salaDoGerador.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${camaraEscura.nome}`);
console.log(`Luz acesa? ${camaraEscura.luzAcesa}`);
console.log(`Saídas: ${camaraEscura.saidas}`);
console.log(`Câmera de segurança: ${camaraEscura.camera}`);
console.log(`Andar: ${camaraEscura.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------

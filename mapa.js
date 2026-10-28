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
    nome: "Sala de Espera",          
    andar: "Térreo",                 
    camera: 2,                       
    luzAcesa: true,                  
    saidas: ["Corredor principal"],  
};

const salaDeRaiox = {
    nome: "Sala de Raio-X",          
    andar: "Térreo",                 
    camera: 5,                       
    luzAcesa: true,                  
    saidas: ["Corredor principal"],  
};

const salaComando = {
    nome: "Sala de Comando",        
    andar: "Térreo",                
    camera: null,                   
    luzAcesa: true,                 
    saidas: ["Corredor principal"], 
};

const salaDeLaudos = {
    nome: "Sala de Laudos",
    andar: "Térreo",
    camera: 3,
    luzAcesa: true,
    saidas: ["Corredor principal"],
};

const salaDeTomografia = {
    nome: "Sala de Tomografia",
    andar: "Térreo",
    camera: 4,
    luzAcesa: true,
    saidas: ["Corredor principal"],
};

const corredorPrincipal = {
    nome: "Corredor principal",
    andar: "Térreo",
    camera: 8, 
    luzAcesa: true,
    saidas: ["Sala de Comando", "Sala de Espera", "Sala de Laudos", "Sala de Tomografia", "Sala de Raio-X", "Recepção", "Escada do Porão"],
};

const escadaDoPorao = {
    nome: "Escada do Porão",
    andar: "Térreo",
    camera: 6,
    luzAcesa: false,
    saidas: ["Corredor principal", "Arquivo Morto"],
};

const arquivoMorto = {
    nome: "Arquivo Morto",
    andar: "Porão",
    camera: 7,
    luzAcesa: false,
    saidas: ["Escada do Porão", "Sala do Gerador", "Câmara Escura"],
};

const salaDoGerador = {
    nome: "Sala do Gerador",
    andar: "Porão",
    camera: 9,
    luzAcesa: true,
    saidas: ["Arquivo Morto", "Câmara Escura"],
};

const camaraEscura = {
    nome: "Câmara Escura",
    andar: "Porão",
    camera: 10,
    luzAcesa: false,
    saidas: ["Arquivo Morto", ],
};

//para acessar os valores do objeto, usamos o operador ponto (.) (ex: salaComando.nome)
console.log(`nome da sala: ${recepcao.nome}`);
console.log(`Luz acesa? ${recepcao.luzAcesa}`);
console.log(`Saídas: ${recepcao.saidas}`);
console.log(`Câmera de segurança: ${recepcao.camera}`);
console.log(`Andar: ${recepcao.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${salaDeEspera.nome}`);
console.log(`Luz acesa? ${salaDeEspera.luzAcesa}`);
console.log(`Saídas: ${salaDeEspera.saidas}`);
console.log(`Câmera de segurança: ${salaDeEspera.camera}`);
console.log(`Andar: ${salaDeEspera.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
console.log(`nome da sala: ${salaDeRaiox.nome}`);
console.log(`Luz acesa? ${salaDeRaiox.luzAcesa}`);
console.log(`Saídas: ${salaDeRaiox.saidas}`);
console.log(`Câmera de segurança: ${salaDeRaiox.camera}`);
console.log(`Andar: ${salaDeRaiox.andar}`);
console.log(`-----------------------------`);
//--------------------------------------------------------------------------------------------
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


// Alterando o valor da propriedade luzAcesa para false, desse jeito finciona pq a propriedade luzAcesa é do tipo booleano, então podemos alterar o valor dela para true ou false.
salaComando.luzAcesa = false;
console.log(`nome da sala: ${salaComando.nome}`);
console.log(`Luz acesa? ${salaComando.luzAcesa}`);

console.log(arquivoMorto.saidas.length);

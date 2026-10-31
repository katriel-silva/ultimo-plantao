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
    saidas: ["Arquivo Morto", "Sala do Gerador"],
};

//função que mostra as informações de uma sala
function mostrarSala(sala){
    console.log(`Nome da sala: ${sala.nome}`);
    console.log(`Luz acesa?: ${sala.luzAcesa}`);
    console.log(`Saídas: ${sala.saidas}`);
    console.log(`Câmera de segurança: ${sala.camera}`);
    console.log(`Andar: ${sala.andar}`);
    console.log(`-----------------------------`);
};

mostrarSala(salaComando);
mostrarSala(arquivoMorto);
mostrarSala(salaDeLaudos);
mostrarSala(salaDeTomografia);

//funções para acender e apagar a luz de uma sala
function apagarLuz(sala){
    sala.luzAcesa = false;
    console.log(`Luz da sala ${sala.nome} apagada!`);
}

apagarLuz(salaComando);

function acenderLuz(sala){
    sala.luzAcesa = true;
    console.log(`Luz da sala ${sala.nome} acesa!`);
}

acenderLuz(salaComando);


/*desse jeito funciona pq nao estou alterando o objeto, apenas mudando o valor de uma propriedade dele
salaComando.luzAcesa = false;
console.log(`nome da sala: ${salaComando.nome}`);
console.log(`Luz acesa? ${salaComando.luzAcesa}`);

console.log(arquivoMorto.saidas.length);*/



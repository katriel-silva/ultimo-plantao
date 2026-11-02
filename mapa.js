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

//funções para acender e apagar a luz de uma sala
function apagarLuz(sala){
    sala.luzAcesa = false;
    console.log(`Luz da ${sala.nome} apagada!`);
}
//função para acender a luz de uma sala
function acenderLuz(sala){
    sala.luzAcesa = true;
    console.log(`Luz da ${sala.nome} acesa!`);
}

//array com todas as salas da clínica
const salas = [recepcao, salaDeEspera, salaDeRaiox, salaComando, arquivoMorto, salaDeLaudos, salaDeTomografia, corredorPrincipal, escadaDoPorao, salaDoGerador, camaraEscura];

//função que busca uma sala pelo nome
function buscarSala(nome){
    for (const sala of salas){
        if (sala.nome === nome){
            return sala;
        }
    }
    console.log(`Sala ${nome} não encontrada.`);
    return null;
};

//função que mostra todas as salas da clínica
function mostrarTodasAsSalas(){
    for (const sala of salas){
        mostrarSala(sala);
    }
}

//função que conta quantas luzes estão acesas na clínica (usado let em vez de const, pois o valor da variável contador vai mudar)
function contarLuzesAcesas(){
    let contador = 0;
    for (const sala of salas){
        if (sala.luzAcesa){
            contador++;
        }
    }
    console.log(`Número de luzes acesas: ${contador}`);
};

function ondeVeladaPodeIr(sala){
    //ela so pode ir nas salas que estão com as luzes apagadas.
    //criar um array vazio para guardar as salas disponíveis
    const salasDisponiveis = [];
    for (const s of salas){
        //verificar se a luz da sala está apagada
        if (!s.luzAcesa){
            salasDisponiveis.push(s);
        }
    }
    return salasDisponiveis;
};

const destino = buscarSala("Sala de Laudos");
mostrarSala(destino);

//apagar a luz da sala de comando e mostrar as informações dela
apagarLuz(salaComando);
mostrarSala(salaComando);
//acender a luz da sala de comando e mostrar as informações dela
acenderLuz(salaComando);
mostrarSala(salaComando);
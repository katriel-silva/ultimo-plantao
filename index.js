// Importando o que cada módulo oferece
import { salas, buscarSala, mostrarSala, apagarLuz, acenderLuz, contarLuzesAcesas } from "./mapa.js";
import { velada, ondeVeladaPodeIr } from "./entidades.js";
import { velada, ondeVeladaPodeIr, moverVelada } from "./entidades.js";

for (let i = 1; hora <=8; hora++){
    // Simulando o passar do tempo no plantão
}

// Último Plantão hehe
// fazer a inicialização do sistema da clínica

//Variaveis: "Gavetas com etiquetas" que guardam um valor,
//Dados que não vão mudar durante o plantão.
const nomeTecnico = "Katriel Silva"; // Nome do novo técnico (nome do jogador)
const horarioPlantao = "22:00 às 06:00"; // Horário do plantão noturno
const clinica = "Clínica Santa Luzia"; // Nome da clínica 

// Dados que PODEM mudar durante o plantão 
let statusGerador = "Ligado"; // Status do gerador
let gasolinaGerador = 100; // Nível de gasolina do gerador (gasta com o tempo)

//console.log() -> é basicamente para mostrar um informação no terminal
console.log(`Iniciando o sistema da ${clinica}....`);
console.log(`Status do gerador: ${statusGerador}`);
console.log(`Gasolina do gerador: ${gasolinaGerador}%`);
console.log(`Técnico de plantão: ${nomeTecnico}`);
console.log(`Horário do plantão: ${horarioPlantao}`);


// ===== TESTES =====
const salaComando = buscarSala("Sala de Comando");
apagarLuz(salaComando);
mostrarSala(salaComando);
acenderLuz(salaComando);
mostrarSala(salaComando);

console.log(`Luzes acesas: ${contarLuzesAcesas()} de ${salas.length}`);
console.log(ondeVeladaPodeIr(buscarSala("Arquivo Morto")).length);   // tem que dar 2
console.log(ondeVeladaPodeIr(buscarSala("Recepção")).length);        // tem que dar 0
console.log(`${velada.nome} está na ${velada.salaAtual.nome}`);


const destino = buscarSala("Sala de Laudos");
mostrarSala(destino);



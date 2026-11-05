// Importando o que cada módulo oferece
import { salas, buscarSala, mostrarSala, apagarLuz, acenderLuz, contarLuzesAcesas } from "./mapa.js";
import { velada, ondeVeladaPodeIr, moverVelada } from "./entidades.js";

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

console.log("---------------------------------");
console.log("O plantão começou!...");

for (let hora = 0 ; hora <8; hora++){
    const relogio = (22 + hora) % 24; // para mostrar o horário correto (22, 23, 0, 1, 2, 3, 4, 5)
    console.log(`${relogio}:00`);
    
    console.log(`Hora ${hora+1}:`);
    // A cada hora, a gasolina do gerador diminui 10%
    gasolinaGerador -= 10;
    console.log(`Gasolina do gerador: ${gasolinaGerador}%`);

    if (hora === 4) {
        console.log("São 04:00 da manhã, e a tempestade está piorando... A luz do corredor da clínica se apagou!");
        apagarLuz(buscarSala("Corredor principal"));
    }

    moverVelada();
}

console.log(`Fim do plantão! O técnico ${nomeTecnico} vai embora...`);


/* ===== TESTES =====
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
mostrarSala(destino);,
*/
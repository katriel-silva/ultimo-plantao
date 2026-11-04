//entidades.js - as assombrações do jogo 
//esse arquivo usa o mapa.js.
import {buscarSala} from "mapa.js";

//ficha da Velada
export const velada = {
    nome: "A Velada",                   //nome da assombração
    salaAtual: buscarSala("Câmara escura"), //onde ela está agora

};

// Onde a Velada pode ir a partir da sala em que ela está?
// Regra: ela só anda para salas VIZINHAS que estão com a luz apagada.
export function ondeVeladaPodeIr(salaAtual) {
    const destinos = [];                          // lista vazia pra guardar os destinos
    for (const nomeSaida of salaAtual.saidas) {   // percorre só as saídas DESTA sala
        const vizinha = buscarSala(nomeSaida);      // transforma o nome na ficha da sala
        if (!vizinha.luzAcesa) {                    // se a luz da vizinha NÃO está acesa...
            destinos.push(vizinha);                   // ...ela pode ir pra lá
        } else {
            console.log(`A Velada não pode ir para ${vizinha.nome}: a luz está acesa!`);
        }
    }
    return destinos;
}
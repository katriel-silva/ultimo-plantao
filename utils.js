//utils.js - Ferramentas de utilidade geral

//Sorteia um item qualquer de uma lista

export function sortearItem(lista){
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}
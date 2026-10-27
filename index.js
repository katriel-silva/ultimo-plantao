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
console.log("Iniciando o sistema da " + clinica + "....");
console.log(`Status do gerador: ${statusGerador}`);
console.log(`Gasolina do gerador: ${gasolinaGerador}%`);
console.log(`Técnico de plantão: ${nomeTecnico}`);
console.log(`Horário do plantão: ${horarioPlantao}`);


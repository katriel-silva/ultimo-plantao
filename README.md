# Último Plantão

Jogo de terror psicológico em que você é o técnico de radiologia do plantão noturno
de uma clínica reaberta. Uma tempestade derrubou a energia, as luzes só acendem com
movimento, e algo anda pelos corredores no escuro. Sobreviva das 22h às 6h.

>Em desenvolvimento. Fase atual: lógica do jogo no terminal (JavaScript puro).

## Como rodar

Precisa do [Node.js](https://nodejs.org) instalado.

```bash
git clone https://github.com/katriel-silva/ultimo-plantao.git
cd ultimo-plantao
npm start
```

## Tecnologias

- JavaScript + Node.js (agora)
- React Native + Expo, Express e Socket.io (próximas fases)

## Estrutura

| Arquivo | O que faz |
| --- | --- |
| `index.js` | Inicia o jogo |
| `mapa.js` | As salas da clínica e as luzes |
| `entidades.js` | As entidades e como elas se movem |
| `utils.js` | Funções genéricas, como sorteio |

## Sobre

Sou técnico em radiologia e estudante de ADS. O jogo nasceu de relatos reais de plantão noturno.
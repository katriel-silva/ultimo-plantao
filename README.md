Último Plantão — História e Roteiro
26 de out. de 2026 · @katriel Alves Da Silva 
Visão geral
Último Plantão é um jogo de terror psicológico para celular e navegador: você é o técnico de radiologia do plantão noturno de uma clínica reaberta e precisa sobreviver das 22h às 6h. Numa semana de tempestade, a clínica roda no gerador e as luzes só acendem com movimento: você precisa atender os exames, manter o gerador vivo e não ser pego pela Velada no escuro.
Pitch para o recrutador: "Sou técnico em radiologia e criei um jogo de terror multiplayer em tempo real, ambientado num plantão noturno, com React Native, Node.js e Socket.io. Dá para jogar pelo link."
Parte
Tecnologia
O que mostra
App e versão web
React Native + Expo
Interface mobile e web com um código só
Servidor do jogo
Node.js + Express
API REST (testada no Postman)
Tempo real
Socket.io
Multiplayer com salas e código de convite
Regras do jogo
Servidor autoritativo
O jogo roda no servidor, ninguém trapaceia
Dados
PostgreSQL + Prisma
Contas e ranking de noites sobrevividas
Publicação
Deploy + README com GIF
Projeto testável e bem apresentado
Inspiração: Five Nights at Freddy's. Cenário, entidade e regras são originais, sem personagens, nomes ou imagens do FNAF.
Seu objetivo
Cada noite vai das 22h às 6h, cerca de 8 minutos de jogo. Para passar a noite, você precisa cumprir três coisas ao mesmo tempo:
1. Manter o gerador ligado até as 6h. Luzes, câmeras, porta blindada e aparelhos gastam combustível. Se o gerador morrer, a clínica fica no escuro total, e no escuro ela te pega.
2. Fazer os exames que o hospital pede. Os chamados de urgência chegam pelo sistema e cada noite tem um mínimo (2 na noite 1, até 5 na noite 5). É o seu trabalho, e é pelas imagens desses exames que a história avança.
3. Não ser pego pela Velada. Ela anda no escuro e congela na luz.
Você perde se o gerador acabar, se ela te alcançar ou se chegar às 6h sem os exames mínimos (você é demitido).
O que te obriga a sair da sala de comando:
Motivo
Para onde você vai
Por que é perigoso
Chamado de exame
Sala de raio-X ou tomografia
A tomografia fica do outro lado do corredor
Gerador acabando
Porão, buscar galão e reabastecer
É onde ela nasce, e com o galão nas mãos você fica sem lanterna
Aparelho disparando sozinho
A sala com a luz vermelha acesa
O aparelho gasta combustível até você desligar, e pode ser isca dela
Fitas e filmes (opcional)
Arquivo morto e outras salas
Necessários para o final verdadeiro
A história
Todos os relatos de plantão vêm de uma mesma noite: o apagão de 1998. A silhueta nos exames, os aparelhos disparando sozinhos, a voz chamando "enfermeira" e a paciente que nunca deu entrada têm a mesma origem.
1998 — O apagão
A Clínica Santa Luzia atendia urgências de madrugada. Numa noite de tempestade, a energia caiu no meio de um exame. A paciente, Lúcia Andrade, ficou presa no escuro da sala de raio-X chamando pela enfermeira. O técnico do plantão, Elias Vargas, não achou a lanterna a tempo. Quando a luz voltou, Lúcia estava morta.
O último raio-X dela, feito segundos antes do apagão, ficou na câmara escura sem ser revelado.
Os meses seguintes
Elias começou a ver uma silhueta nos filmes, em pé ao lado dos pacientes. Os aparelhos disparavam sozinhos de madrugada e do porão vinha uma voz chamando "enfermeira". Ele entendeu que Lúcia nunca saiu daquela noite: ela continua procurando alguém no escuro para terminar o exame dela.
Elias gravou tudo o que descobriu em fitas de treinamento para o próximo técnico. Numa noite de tempestade, desceu à câmara escura para revelar o último filme dela e nunca mais foi visto. A clínica fechou.
2026 — Você
A clínica reabre como centro de imagem 24 horas do hospital regional, e você é o técnico do plantão noturno. Na sua primeira noite, começa uma tempestade que dura a semana inteira. A energia passa para o gerador e, no modo de economia, as luzes só acendem com sensor de movimento.
Na gaveta da sala de comando tem um walkman, um fone, uma lanterna de manivela com as iniciais E.V. riscadas no cabo e cinco fitas com a etiqueta "Treinamento — Plantão Noturno". O coordenador avisou que o treinamento é esse mesmo, ninguém nunca atualizou. A primeira fala do personagem: "Na era da IA, meu treinamento é num walkman? Tá bom então."
A lanterna é do Elias. Em 1998, foi a lanterna que ele não achou a tempo, e depois daquela noite ele nunca mais quis depender de pilha.
Ao clicar em Começar, o jogo pede o seu nome, como se fosse o cadastro do novo técnico. Esse nome aparece no crachá, nos chamados do hospital ("Técnico responsável: ...") e, na noite 4, escrito à mão na etiqueta da fita do Elias, gravada 28 anos antes de você chegar.
A regra da revelação
Quem revela ela, é visto por ela. No último exame da noite 1, aparece uma silhueta ao lado do paciente na imagem. Você a viu, e a partir dali ela sabe que você existe. Por isso ela começa a te seguir na noite 2.
Ela não te odeia. No escuro, você é a pessoa que ela tenta alcançar para pedir ajuda, como pediu em 1998. Só que o toque dela é o frio daquela sala, e ninguém sobrevive a ele.
Como a história aparece
• Fitas no walkman: você ouve pelo fone, inclusive andando. O fone abafa os sons do jogo, então ouvir uma fita no corredor é arriscado.
• Imagens dos exames: cada chamado pode trazer uma pista na imagem.
• Filmes e fichas no arquivo morto.
As entidades
São duas, com regras opostas: uma você precisa encarar com luz, a outra você não pode olhar. Saber qual é qual é o coração do jogo.

A Velada
O Acompanhante
Quem é
Lúcia Andrade, a paciente que morreu no apagão de 1998
A silhueta que aparece ao lado dos pacientes nos exames
Por que o nome
Na radiologia, filme velado é o filme estragado pela luz. A luz também é o que trava ela
Nos exames, ele aparece acompanhando o paciente
Regra
Anda no escuro e congela na luz direta
Aparece atrás de você quando você fica parado no escuro
O que fazer
Manter luz entre você e ela, ou apontar a lanterna
Não virar. Voltar a andar e ele some
Se errar
Ela te alcança e é fim de jogo
Se você vira e ilumina, ele grita e a Velada ouve onde você está
Sinais
Luzes piscando, aparelho disparando, voz chamando "enfermeira", passos descalços
Respiração atrás de você e as bordas da tela escurecendo
O segredo (revelado só no final): o Acompanhante é o Elias. Ele não quer te machucar. Quando aparece atrás de você, está te empurrando a continuar andando, porque andando as luzes ficam acesas.
A clínica
Você fica na sala de comando, com a porta blindada para o corredor e o visor de chumbo para a sala de raio-X. A Velada nasce na câmara escura, ao lado do gerador que mantém as luzes da clínica: toda ida para reabastecer é uma descida até ela.
Estilo visual, baseado em clínicas reais:
• Piso vinílico, azulejo até meia parede e lâmpadas fluorescentes que piscam
• Portas pesadas com o símbolo de radiação e a luz vermelha de aviso por cima
• Negatoscópio aceso na sala de laudos, com filmes antigos pendurados
• Porão com estantes de envelopes de exames e a luz vermelha de segurança da câmara escura
• Câmeras em preto e branco, com chiado e horário no canto
• Arte 2D. O estilo exato (pixel art, desenho, fotomontagem) a gente decide antes da fase 5.
Mecânicas
A regra central: enquanto você se move, a luz fica acesa; parado, ela apaga. Todo o resto gira em torno disso.
Luzes por movimento
Com o gerador em economia, cada ambiente só acende quando detecta movimento. Ficou parado 5 segundos, a luz apaga. Enquanto você anda, a luz do ambiente onde você está fica acesa e ela não entra.
A Velada pode estourar a lâmpada de um ambiente, que fica escuro até o fim da noite, ou derrubar uma ala inteira por alguns segundos. Luz piscando quer dizer que ela está perto.
Stamina
Andar não gasta nada. Correr gasta stamina e é o único jeito de fugir quando ela apaga as luzes atrás de você. Parar recupera a stamina, mas parado a luz apaga e o Acompanhante aparece. O dilema é sempre esse: descansar no escuro ou seguir andando cansado.
Ferramentas
Ferramenta
Para que serve
Custo
Lanterna de manivela
Congela a Velada enquanto está apontada para ela
Nunca acaba, mas a carga dura pouco. Para recarregar você gira a manivela: fica parado (a luz do ambiente apaga) e o barulho pode atrair a Velada
Câmeras
Ver onde ela está (ela aparece como silhueta, igual num raio-X)
Combustível. Só funcionam na sala de comando
Porta blindada
Fecha a sala de comando e ela não entra
Muito combustível por segundo
Walkman
Ouvir as fitas: história e dicas
O fone abafa os sons do jogo
Galão de combustível
Reabastecer o gerador no porão
Ocupa as mãos: sem lanterna enquanto carrega
Aparelhos disparando
De tempos em tempos a luz vermelha de aviso acende sozinha numa sala e o aparelho começa a gastar combustível rápido. Você precisa ir até lá e desligar no painel. Às vezes é ela disparando para te atrair: barulho de um lado, e ela vem pelo outro com as luzes apagadas. Olhar as câmeras antes de sair ajuda a descobrir se é armadilha.
Lugares seguros
• Sala de comando com a porta blindada fechada, enquanto houver combustível.
• Qualquer ambiente aceso enquanto você se move, até ela estourar a lâmpada.
Quando você morre
A tela de fim de jogo é um filme de raio-X na luz do negatoscópio, com um bilhete do Elias escrito à mão. A dica muda conforme o que te matou:
O que te matou
Exemplo de dica do Elias
A Velada te alcançou
"Ela não entra onde tem luz. Nunca fique parado no corredor."
Você olhou para o Acompanhante
"Não vire. Quem está atrás de você não é ela."
O gerador acabou
"A porta blindada bebe combustível. Feche só quando ela estiver na escada."
Aparelho ligado tempo demais
"Luz vermelha acesa é combustível indo embora. Mas olhe as câmeras antes de ir."
Poucos exames
"O hospital não perdoa plantão vazio."
Cada causa tem várias dicas, e o jogo escolhe uma que você ainda não viu.
Uma noite na prática
Um trecho da noite 3, para ver como tudo se encaixa:
1. 23h10. Chega um chamado: raio-X de tórax. Nas câmeras, a Velada está no porão. Você vai até a sala de raio-X, faz o exame e volta. Na imagem, a silhueta está de novo ao lado do paciente.
2. 0h40. A luz vermelha acende na tomografia. Câmera 4: nada. Câmera 6: ela está subindo a escada. É armadilha, ela quer te pegar no corredor. Você fecha a porta blindada até ela passar e gasta combustível.
3. 2h15. O gerador está em 30% e você precisa descer ao porão. No corredor, as luzes acendem conforme você anda. Na escada, você para para recuperar a stamina e a luz apaga. Respiração atrás de você. Você não vira e volta a andar: o Acompanhante some.
4. 2h20. Na volta, com o galão nas mãos e sem lanterna, as luzes do corredor piscam e apagam. Passos descalços. Você corre com o resto da stamina até a sala de comando e fecha a porta.
5. 6h00. Gerador em 8%, quatro exames feitos. Noite sobrevivida e uma fita nova liberada.
As 5 noites e os finais
A cada noite a Velada alcança uma parte maior da clínica, e cada fita do Elias explica o que você acabou de viver.
1. Treinamento. A tempestade começa. A fita 1 ensina o walkman, o gerador, os sensores e os chamados. Ela ainda não se move. No último exame da noite, a silhueta aparece na imagem. A fita termina: "Se você viu alguém na imagem, ela também te viu."
2. Ela acorda. Ela anda só pelo porão e pela escada. Primeira descida ao gerador, e os aparelhos começam a disparar sozinhos. A fita 2 explica a regra da luz.
3. A paciente da madrugada. Agora ela sobe até o corredor. Às 3h, uma senhora chega com uma requisição amassada de 1998 no nome de Lúcia Andrade, e você decide se faz o exame. O Acompanhante começa a aparecer atrás de você. A fita 3 conta o apagão de 1998.
4. O arquivo. Ela começa a estourar lâmpadas e derrubar alas. Objetivo extra: achar no arquivo morto os filmes do Elias. A fita 4 é puro desespero, e a etiqueta dela tem o seu nome escrito à mão.
5. Revelação. Pico da tempestade, gerador falhando, as duas entidades na clínica inteira. A fita 5 conta que o último filme de Lúcia continua na câmara escura. Você decide o que fazer com ele.
Para revelar um filme, você precisa ficar 60 segundos na câmara escura só com a luz vermelha de segurança: escuro o bastante para ela andar.
Finais:
• Laudo final (verdadeiro): você revela o filme. Na imagem, Lúcia na maca e, ao lado dela, Elias segurando a sua mão: ele voltou para não deixar ela sozinha no escuro. A luz volta e a tempestade para. Exige ter feito o exame da noite 3 e ouvido as 5 fitas.
• Filme velado: você acende a luz e queima o filme. Ela some, e logo depois todas as luzes da clínica apagam. Uma fita nova começa a gravar com a sua voz: "Treinamento — Plantão Noturno."
• Fim do plantão: você sobrevive até as 6h sem decidir e pede demissão. Na última imagem das câmeras, o novo técnico chega, e ela está atrás dele.
Modo multiplayer
Um jogador é o técnico e o outro controla a Velada pelo próprio celular, numa sala criada com código de 4 letras. Sozinho, você joga contra a IA. O Acompanhante é sempre controlado pelo servidor.
Habilidade da Velada
Efeito
Limite (valores iniciais)
Andar no escuro
Vai para um ambiente vizinho apagado
Não entra em ambiente aceso
Estourar lâmpada
Um ambiente fica escuro até o fim da noite
3 por noite
Derrubar ala
Apaga uma ala por 8 segundos
Recarga de 60 segundos
Disparar aparelho
Acende a luz vermelha e gasta combustível do técnico
Recarga de 45 segundos
Chamar "enfermeira"
Faz um som falso em outro lugar
Recarga de 30 segundos
O servidor decide tudo: onde cada um está, quais luzes estão acesas, quanto combustível sobrou. Os celulares só enviam ações e mostram o resultado. É assim que jogos online de verdade evitam trapaça, e é a parte que mais impressiona numa entrevista.
Roteiro de aprendizado
São 10 fases, e cada uma termina com uma parte do jogo funcionando e um commit no GitHub. Você só avança quando conseguir explicar a fase com as suas palavras.
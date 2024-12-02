CREATE TABLE autores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(50) NOT NULL,
  id_autor INT NOT NULL,
  id_categoria INT NOT NULL,
  FOREIGN KEY (id_autor) REFERENCES autores (id),
  FOREIGN KEY (id_categoria) REFERENCES categorias (id)
);

CREATE TABLE perguntas (
  id SERIAL PRIMARY KEY,
  id_quiz INT NOT NULL,
  pergunta TEXT NOT NULL,
  resposta_correta TEXT NOT NULL,
  FOREIGN KEY (id_quiz) REFERENCES quizzes (id)
);

-- Inserindo dados na tabela 'autores'
INSERT INTO autores (nome) VALUES
  ('Leonardo De Souza'),
  ('Yuri Oliveira');

-- Inserindo dados na tabela 'categorias'
INSERT INTO categorias (nome) VALUES
  ('Tecnologia'),
  ('Astronomia'),
  ('Programação'),
  ('Música'),
  ('Conhecimentos Gerais'),
  ('Ciências'),
  ('Futebol'),
  ('Animais'),
  ('História');

-- Inserindo dados na tabela 'quizzes'
INSERT INTO quizzes (titulo, id_autor, id_categoria) VALUES
  ('Quiz de Tecnologia', 1, 1),
  ('Quiz de Astronomia', 2, 2),
  ('Quiz de Programação', 1, 3),
  ('Quiz de Música', 2, 4),
  ('Quiz de Conhecimentos Gerais', 2, 5),
  ('Quiz de Ciências', 2, 6),
  ('Quiz de Futebol', 2, 7),
  ('Quiz de Animais', 2, 8),
  ('Quiz de História', 2, 9);

-- Inserindo dados na tabela 'perguntas'
INSERT INTO perguntas (id_quiz, pergunta, resposta_correta) VALUES
  -- Quiz de Tecnologia
  (1, 'Qual empresa desenvolveu o sistema operacional Windows?', 'Microsoft'),
  (1, 'Qual linguagem é conhecida por ser usada para desenvolvimento web?', 'JavaScript'),
  (1, 'O que significa HTML?', 'HyperText Markup Language'),
  (1, 'Qual empresa comprou o GitHub em 2018?', 'Microsoft'),
  (1, 'Em que ano o iPhone foi lançado pela primeira vez?', '2007'),
  -- Quiz de Astronomia
  (2, 'Qual é o maior planeta do Sistema Solar?', 'Júpiter'),
  (2, 'O que é uma supernova?', 'A explosão de uma estrela'),
  (2, 'Qual é a estrela mais próxima da Terra?', 'Sol'),
  (2, 'Qual planeta é conhecido como o Planeta Vermelho?', 'Marte'),
  (2, 'O que é um buraco negro?', 'Um lugar no espaço onde a gravidade é tão forte que nada, nem mesmo a luz, pode escapar'),
  -- Quiz de Programação
  (3, 'Qual é a função principal de um algoritmo?', 'Resolver problemas de forma lógica e sequencial'),
  (3, 'O que é uma variável em programação?', 'Um espaço na memória que armazena um valor que pode ser modificado'),
  (3, 'Qual é a ordem correta de execução das etapas de um algoritmo?', 'Entrada, processamento, saída'),
  (3, 'O que é um bug em um programa?', 'Um erro que causa o programa a funcionar de forma incorreta'),
  (3, 'Qual é a principal diferença entre um vetor e uma lista encadeada?', 'Todas as alternativas estão corretas'),
    -- Quiz de Música
  (4, 'Qual é a nota musical que representa a primeira nota da escala musical?', 'Dó'),
  (4, 'Qual é a diferença entre um acorde maior e um acorde menor?', 'A distância entre as notas que compõem o acorde'),
  (4, 'O que é um ritmo?', 'A duração e a organização dos sons'),
  (4, 'Qual é a função de um maestro em uma orquestra?', 'Dirigir a execução da música pelos músicos'),
  (4, 'Qual é a diferença entre tempo e compasso na música?', 'O tempo se refere à velocidade da música, enquanto o compasso define a organização dos tempos em grupos'),
    -- Quiz de Conhecimentos gerais
  (5, 'Qual é a capital da Austrália?', 'Camberra'),
  (5, 'Qual civilização antiga é conhecida por construir pirâmides gigantescas?', 'Egípcia'),
  (5, 'Qual evento histórico marcou o fim da Segunda Guerra Mundial?', 'Os bombardeios atômicos de Hiroshima e Nagasaki'),
  (5, 'Qual artista italiano é considerado o pai da pintura renascentista e é famoso por obras como a Mona Lisa e A Última Ceia?', 'Leonardo da Vinci'),
  (5, 'Qual é o maior oceano do mundo?', 'Oceano Pacífico'),
    -- Quiz de Ciências
  (6, 'Qual a unidade básica da vida?', 'Célula'),
  (6, 'Qual a teoria que explica a origem do universo?', 'Teoria do Big Bang'),
  (6, 'Qual o elemento químico mais abundante no universo?', 'Hidrogênio'),
  (6, 'Qual a principal função das mitocôndrias nas células?', 'Gerar energia'),
  (6, 'Qual o processo pelo qual as plantas produzem seu próprio alimento?', 'Fotossíntese'),
      -- Quiz de Futebol
  (7, 'Qual país é considerado o maior vencedor da Copa do Mundo?', 'Brasil'),
  (7, 'Qual a principal competição de clubes de futebol da Europa?', 'Liga dos Campeões da UEFA'),
  (7, 'Quantos jogadores de cada equipe estão em campo durante uma partida de futebol?', '11'),
  (7, 'Qual a principal diferença entre um pênalti e um tiro de meta?', 'Todas as alternativas estão corretas'),
  (7, 'Qual jogador brasileiro é conhecido como o Rei do Futebol?', 'Pelé'),
        -- Quiz de Animais
  (8, 'Qual animal é conhecido por ser o mais rápido do mundo?', 'Guepardo'),
  (8, 'Qual a maior ave que já existiu?', 'Avestruz'),
  (8, 'Qual mamífero marinho pode viver mais de 200 anos?', 'Baleia-azul'),
  (8, 'Qual o processo pelo qual os insetos se transformam de larva em adulto?', 'Metamorfose'),
  (8, 'Em qual ambiente vivem os ursos polares?', 'Tundra'),
          -- Quiz de História
  (9, 'Qual era a principal atividade econômica do Brasil Colônia?', 'Cultivo de café'),
  (9, 'Quem proclamou a independência do Brasil?', 'Dom Pedro I'),
  (9, 'Qual período da história do Brasil ficou conhecido como República Velha?', '1889 a 1930'),
  (9, 'Qual era o principal meio de transporte utilizado pelos indígenas brasileiros antes da chegada dos europeus?', 'Canoas'),
  (9, 'Qual foi o principal motivo da Guerra dos Canudos?', 'Todas as alternativas');
  
UPDATE quizzes
SET id_autor = 2
WHERE titulo = 'Quiz de Programação';


--listar todos os quizzes e seus respectivos autores:
SELECT 
    quizzes.titulo AS titulo_quiz,
    autores.nome AS autor
FROM 
    quizzes
JOIN 
    autores ON quizzes.id_autor = autores.id;

-- Listar os quizzes, suas categorias e o nome do autor:
SELECT 
    quizzes.titulo AS titulo_quiz,
    categorias.nome AS nome_categoria,
    autores.nome AS nome_autor
FROM 
    quizzes
JOIN 
    categorias ON quizzes.id_categoria = categorias.id
JOIN 
    autores ON quizzes.id_autor = autores.id;    

--consulta para retornar todos os dados de quizzes, autores, categorias, e perguntas:
SELECT 
    quizzes.id AS id_quiz,
    quizzes.titulo AS titulo_quiz,
    autores.id AS id_autor,
    autores.nome AS nome_autor,
    categorias.id AS id_categoria,
    categorias.nome AS nome_categoria,
    perguntas.id AS id_pergunta,
    perguntas.pergunta AS pergunta,
    perguntas.resposta_correta AS resposta_correta
FROM 
    quizzes
JOIN 
    autores ON quizzes.id_autor = autores.id
JOIN 
    categorias ON quizzes.id_categoria = categorias.id
JOIN 
    perguntas ON quizzes.id = perguntas.id_quiz;
  
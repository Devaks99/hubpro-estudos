
const hubproData = {
    // Módulos de Conteúdo
    modules: [
        {
            id: 1,
            title: 'Fundamentos de Protheus',
            description: 'Conceitos básicos e arquitetura do Protheus',
            topics: [
                { id: 1, title: 'O que é Protheus?', content: 'Protheus é um ERP (Enterprise Resource Planning) desenvolvido pela TOTVS, especializado em gestão empresarial.' },
                { id: 2, title: 'Arquitetura do Protheus', content: 'Protheus utiliza arquitetura cliente-servidor com banco de dados relacional e interface gráfica.' },
                { id: 3, title: 'Módulos Principais', content: 'Financeiro, Estoque, Vendas, Compras, Contábil, Folha de Pagamento e outros.' },
                { id: 4, title: 'Ambiente de Desenvolvimento', content: 'O AppServer, AppClient e AppWeb são os principais componentes do ambiente Protheus.' },
                { id: 5, title: 'Banco de Dados', content: 'Protheus suporta SQL Server, Oracle, PostgreSQL e outros bancos de dados relacionais.' }
            ]
        },
        {
            id: 2,
            title: 'ADVPL Essencial',
            description: 'Sintaxe e estruturas fundamentais de ADVPL',
            topics: [
                { id: 1, title: 'Introdução ao ADVPL', content: 'ADVPL (Advanced Protheus Language) é a linguagem de programação do Protheus, baseada em Clipper.' },
                { id: 2, title: 'Tipos de Dados', content: 'Character, Numeric, Date, Logical, Array, Object e User Function.' },
                { id: 3, title: 'Estruturas de Controle', content: 'IF, ELSE, WHILE, FOR, DO WHILE, SWITCH para controlar o fluxo do programa.' },
                { id: 4, title: 'Funções Integradas', content: 'Substr(), Len(), Upper(), Lower(), Val(), Str(), Date(), Time() e muitas outras.' },
                { id: 5, title: 'Programação Orientada a Objetos', content: 'Classes, Herança, Polimorfismo e Encapsulamento em ADVPL.' }
            ]
        },
        {
            id: 3,
            title: 'Banco de Dados',
            description: 'Queries, índices e otimização de banco de dados',
            topics: [
                { id: 1, title: 'Conceitos de SQL', content: 'SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, HAVING e ORDER BY.' },
                { id: 2, title: 'Índices', content: 'Índices melhoram a performance das queries. Tipos: Simples, Composto e Único.' },
                { id: 3, title: 'Otimização de Queries', content: 'Usar índices apropriados, evitar SELECT *, usar WHERE clauses eficientes.' },
                { id: 4, title: 'Transações', content: 'BEGIN TRANSACTION, COMMIT e ROLLBACK para garantir integridade dos dados.' },
                { id: 5, title: 'Backup e Restore', content: 'Estratégias de backup, restore e disaster recovery em Protheus.' }
            ]
        }
    ],

    // Flashcards
    flashcards: [
        { id: 1, front: 'O que é Protheus?', back: 'Protheus é um ERP desenvolvido pela TOTVS para gestão empresarial integrada.' },
        { id: 2, front: 'Qual é a linguagem de programação do Protheus?', back: 'ADVPL (Advanced Protheus Language), baseada em Clipper.' },
        { id: 3, front: 'Quais são os módulos principais do Protheus?', back: 'Financeiro, Estoque, Vendas, Compras, Contábil, Folha de Pagamento.' },
        { id: 4, front: 'O que é AppServer?', back: 'AppServer é o servidor de aplicação do Protheus que processa as requisições.' },
        { id: 5, front: 'Qual é a função Substr()?', back: 'Extrai uma substring de uma string: Substr(string, inicio, comprimento).' },
        { id: 6, front: 'Como criar uma função em ADVPL?', back: 'User Function: User Function NomeFuncao(parametros) ... Return resultado' },
        { id: 7, front: 'O que é um índice em banco de dados?', back: 'Estrutura que melhora a performance de buscas e ordenações.' },
        { id: 8, front: 'Qual é a diferença entre WHILE e FOR?', back: 'WHILE executa enquanto condição é verdadeira. FOR executa número fixo de vezes.' },
        { id: 9, front: 'Como conectar ao banco de dados em ADVPL?', back: 'Usando funções como FwSqlQuery(), SqlQuery(), ou TCSqlServer().' },
        { id: 10, front: 'O que é uma classe em ADVPL?', back: 'Estrutura que encapsula dados e métodos, permitindo POO em ADVPL.' }
    ],

    // Quizzes
    quizzes: [
        {
            id: 1,
            title: 'Fundamentos de Protheus',
            questions: [
                {
                    id: 1,
                    question: 'Qual é o principal objetivo do Protheus?',
                    options: [
                        'Gestão de redes de computadores',
                        'Gestão empresarial integrada (ERP)',
                        'Desenvolvimento de websites',
                        'Criação de aplicativos mobile'
                    ],
                    correct: 1
                },
                {
                    id: 2,
                    question: 'Em qual linguagem o Protheus é programado?',
                    options: [
                        'Python',
                        'Java',
                        'ADVPL',
                        'C++'
                    ],
                    correct: 2
                },
                {
                    id: 3,
                    question: 'Qual é a arquitetura do Protheus?',
                    options: [
                        'Monolítica',
                        'Cliente-Servidor',
                        'Peer-to-Peer',
                        'Descentralizada'
                    ],
                    correct: 1
                },
                {
                    id: 4,
                    question: 'Qual banco de dados o Protheus NÃO suporta?',
                    options: [
                        'SQL Server',
                        'Oracle',
                        'MongoDB',
                        'PostgreSQL'
                    ],
                    correct: 2
                },
                {
                    id: 5,
                    question: 'O que é AppClient?',
                    options: [
                        'Servidor de aplicação',
                        'Cliente de aplicação para desktop',
                        'Banco de dados',
                        'Sistema operacional'
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 2,
            title: 'ADVPL Essencial',
            questions: [
                {
                    id: 1,
                    question: 'Qual é a sintaxe correta para uma User Function?',
                    options: [
                        'function NomeFuncao() {}',
                        'User Function NomeFuncao() ... Return',
                        'def NomeFuncao():',
                        'function NomeFuncao() begin'
                    ],
                    correct: 1
                },
                {
                    id: 2,
                    question: 'O que faz a função Len()?',
                    options: [
                        'Converte para letras maiúsculas',
                        'Retorna o comprimento de uma string',
                        'Remove espaços em branco',
                        'Converte para número'
                    ],
                    correct: 1
                },
                {
                    id: 3,
                    question: 'Qual é a diferença entre IF e SWITCH?',
                    options: [
                        'Nenhuma diferença',
                        'IF é para múltiplas condições, SWITCH para uma variável',
                        'SWITCH é mais rápido',
                        'IF é para loops'
                    ],
                    correct: 1
                },
                {
                    id: 4,
                    question: 'Como declarar um array em ADVPL?',
                    options: [
                        'aArray = []',
                        'aArray := {}',
                        'aArray = new Array()',
                        'aArray := Array(10)'
                    ],
                    correct: 1
                },
                {
                    id: 5,
                    question: 'O que é herança em ADVPL?',
                    options: [
                        'Cópia de código',
                        'Reutilização de propriedades e métodos de uma classe pai',
                        'Variável global',
                        'Função recursiva'
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            title: 'Banco de Dados',
            questions: [
                {
                    id: 1,
                    question: 'Qual comando SQL retorna dados de uma tabela?',
                    options: [
                        'INSERT',
                        'UPDATE',
                        'SELECT',
                        'DELETE'
                    ],
                    correct: 2
                },
                {
                    id: 2,
                    question: 'Para que serve um índice?',
                    options: [
                        'Armazenar dados',
                        'Melhorar performance de buscas',
                        'Fazer backup',
                        'Criptografar dados'
                    ],
                    correct: 1
                },
                {
                    id: 3,
                    question: 'O que é uma transação?',
                    options: [
                        'Um tipo de índice',
                        'Sequência de operações que deve ser executada completamente ou não',
                        'Um backup automático',
                        'Uma senha de banco de dados'
                    ],
                    correct: 1
                },
                {
                    id: 4,
                    question: 'Qual comando desfaz uma transação?',
                    options: [
                        'COMMIT',
                        'ROLLBACK',
                        'SAVE',
                        'UNDO'
                    ],
                    correct: 1
                },
                {
                    id: 5,
                    question: 'O que faz o comando JOIN?',
                    options: [
                        'Deleta dados',
                        'Combina dados de múltiplas tabelas',
                        'Cria um índice',
                        'Faz backup'
                    ],
                    correct: 1
                }
            ]
        }
    ]
};

// Função para obter dados de localStorage ou usar dados padrão
function getStoredData(key, defaultValue) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
}

// Função para salvar dados em localStorage
function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Inicializar dados de flashcards estudados
function initFlashcardsStudied() {
    const studied = getStoredData('flashcards_studied', {});
    if (Object.keys(studied).length === 0) {
        hubproData.flashcards.forEach(fc => {
            studied[fc.id] = false;
        });
        saveData('flashcards_studied', studied);
    }
    return studied;
}

// Inicializar dados de quiz
function initQuizResults() {
    return getStoredData('quiz_results', {
        totalQuestions: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        percentage: 0,
        byModule: {}
    });
}

// Atualizar resultado do quiz
function updateQuizResults(moduleId, correct, total) {
    const results = initQuizResults();
    results.totalQuestions += total;
    results.correctAnswers += correct;
    results.wrongAnswers += (total - correct);
    results.percentage = Math.round((results.correctAnswers / results.totalQuestions) * 100);
    
    if (!results.byModule[moduleId]) {
        results.byModule[moduleId] = { correct: 0, total: 0 };
    }
    results.byModule[moduleId].correct += correct;
    results.byModule[moduleId].total += total;
    
    saveData('quiz_results', results);
    return results;
}

// Dados para gráficos
function getChartData() {
    const results = initQuizResults();
    return {
        pie: {
            labels: ['Acertos', 'Erros'],
            data: [results.correctAnswers, results.wrongAnswers],
            backgroundColor: ['#16a34a', '#dc2626']
        },
        bar: {
            labels: hubproData.modules.map(m => m.title),
            data: hubproData.modules.map(m => {
                const moduleResults = results.byModule[m.id] || { correct: 0, total: 0 };
                return moduleResults.total > 0 ? Math.round((moduleResults.correct / moduleResults.total) * 100) : 0;
            }),
            backgroundColor: '#3b82f6'
        },
        line: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            data: [65, 72, 68, 76, 80, 75, 78],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)'
        }
    };
}

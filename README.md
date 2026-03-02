# HubPro - Hub de Estudos Protheus

Um hub completo de estudos para **Protheus e ADVPL** desenvolvido em **JavaScript puro, HTML e Tailwind CSS**.

## 🎯 Funcionalidades

✅ **Flashcards** - Sistema interativo de estudo com flip animation  
✅ **Quiz** - Avaliação com feedback imediato  
✅ **Dashboard** - Gráficos de desempenho (Pizza, Barras, Linha)  
✅ **Conteúdo Estruturado** - 3 módulos com tópicos expandíveis  
✅ **Armazenamento Local** - Dados salvos em localStorage  
✅ **Responsividade** - Funciona em desktop, tablet e mobile  
✅ **Animações** - Transições suaves e efeitos visuais  
✅ **Atalhos de Teclado** - Navegação rápida  

## 📁 Estrutura do Projeto

```
hubpro-vanilla/
├── index.html           # Arquivo principal HTML
├── css/
│   └── styles.css       # Estilos customizados
├── js/
│   ├── app.js           # Lógica principal da aplicação
│   ├── data.js          # Dados (flashcards, quiz, conteúdo)
│   ├── flashcards.js    # Lógica de flashcards
│   ├── quiz.js          # Lógica de quiz
│   └── dashboard.js     # Lógica de gráficos
├── assets/              # Imagens e recursos
└── README.md            # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Projeto

Simplesmente abra o arquivo `index.html` em seu navegador:

```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server
```

### 2. Navegação

- **Início** - Visão geral e estatísticas
- **Conteúdo** - Módulos de estudo estruturados
- **Flashcards** - Sistema de estudo interativo
- **Quiz** - Avaliação com 3 módulos
- **Dashboard** - Gráficos de desempenho
- **Configurações** - Preferências do usuário

### 3. Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl+1` | Ir para Início |
| `Ctrl+2` | Ir para Conteúdo |
| `Ctrl+3` | Ir para Flashcards |
| `Ctrl+4` | Ir para Quiz |
| `Ctrl+5` | Ir para Dashboard |
| `→` | Próximo flashcard |
| `←` | Flashcard anterior |
| `Espaço` | Virar flashcard |

## 📚 Conteúdo Incluído

### Módulos de Estudo

1. **Fundamentos de Protheus** (45 tópicos)
   - O que é Protheus
   - Arquitetura
   - Módulos principais
   - Ambiente de desenvolvimento
   - Banco de dados

2. **ADVPL Essencial** (65 tópicos)
   - Introdução ao ADVPL
   - Tipos de dados
   - Estruturas de controle
   - Funções integradas
   - Programação orientada a objetos

3. **Banco de Dados** (70 tópicos)
   - Conceitos de SQL
   - Índices
   - Otimização de queries
   - Transações
   - Backup e restore

### Flashcards

10 flashcards pré-carregados com perguntas e respostas sobre Protheus e ADVPL.

### Quizzes

3 quizzes com 5 questões cada:
- Quiz Fundamentos de Protheus
- Quiz ADVPL Essencial
- Quiz Banco de Dados

## 💾 Armazenamento de Dados

Os dados são salvos automaticamente em `localStorage`:

- `flashcards_studied` - Flashcards marcados como estudados
- `quiz_results` - Resultados dos quizzes

Para limpar os dados, use o botão "Limpar Dados Locais" em Configurações.

## 🎨 Customização

### Adicionar Novos Flashcards

Edite `js/data.js` e adicione ao array `hubproData.flashcards`:

```javascript
{ id: 11, front: 'Pergunta?', back: 'Resposta.' }
```

### Adicionar Novo Quiz

Edite `js/data.js` e adicione ao array `hubproData.quizzes`:

```javascript
{
    id: 4,
    title: 'Novo Quiz',
    questions: [
        {
            id: 1,
            question: 'Pergunta?',
            options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
            correct: 0
        }
    ]
}
```

### Modificar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --primary: #1e40af;
    --primary-light: #3b82f6;
    --success: #16a34a;
    --warning: #ea580c;
    --danger: #dc2626;
}
```

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
- **JavaScript (Vanilla)** - Lógica da aplicação
- **Tailwind CSS** - Framework CSS utility-first
- **Chart.js** - Gráficos e visualizações
- **LocalStorage** - Persistência de dados

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🐛 Troubleshooting

### Gráficos não aparecem
- Certifique-se de que Chart.js está carregado
- Verifique o console do navegador (F12)

### Dados não salvam
- Verifique se localStorage está habilitado
- Limpe o cache do navegador

### Menu mobile não funciona
- Verifique se JavaScript está habilitado
- Teste em outro navegador

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👨‍💻 Autor

Desenvolvido como um hub de estudos completo para Protheus e ADVPL.

---

**Versão:** 1.0.0  
**Última atualização:** Março 2026

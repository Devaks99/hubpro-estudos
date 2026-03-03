# TODO - Correção dos Dashboards

## Tarefas Concluídas:
- [x] 1. Atualizar index.html - Adicionar IDs para obter dados dinâmicos na Home
- [x] 2. Atualizar index.html - Adicionar IDs para obter dados dinâmicos no Dashboard
- [x] 3. Atualizar data.js - Adicionar funções para obter stats da Home
- [x] 4. Atualizar data.js - Adicionar funções para obter stats do Dashboard
- [x] 5. Atualizar data.js - Adicionar função para obter progresso semanal real
- [x] 6. Atualizar data.js - Adicionar função para calcular sequência (streak)
- [x] 7. Atualizar dashboard.js - Gráficos já usam dados de getChartData()
- [x] 8. Atualizar app.js - Adicionar funções de atualização de stats
- [x] 9. Atualizar app.js - Chamar funções de stats nas páginas corretas
- [x] 10. Atualizar quiz.js - Salvar progresso diário ao terminar quiz

## Resumo das Alterações:

### Página Home:
- Valores dinâmicos: módulos, flashcards, quizzes, tópicos
- Performance: taxa de acerto, questões respondidas, sequência

### Página Dashboard:
- Valores dinâmicos: taxa de acerto, total de questões, sequência, tempo total
- Gráficos: usam dados reais do localStorage

### Dados em tempo real:
- Resultados dos quizzes salvos no localStorage
- Sequência (streak) calculada automaticamente
- Progresso semanal rastreado
- Tempo estimado baseado no número de questões respondidas

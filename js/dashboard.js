// HubPro - Lógica de Dashboard

let charts = {};

// Inicializar dashboard
function initDashboard() {
    setTimeout(() => {
        renderCharts();
    }, 100);
}

// Renderizar gráficos
function renderCharts() {
    const chartData = getChartData();

    // Gráfico Pizza (Acertos vs Erros)
    const pieCtx = document.getElementById('chart-pie');
    if (pieCtx && !charts.pie) {
        charts.pie = new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: chartData.pie.labels,
                datasets: [{
                    data: chartData.pie.data,
                    backgroundColor: chartData.pie.backgroundColor,
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { size: 12 },
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // Gráfico Barras (Desempenho por Módulo)
    const barCtx = document.getElementById('chart-bar');
    if (barCtx && !charts.bar) {
        charts.bar = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: chartData.bar.labels,
                datasets: [{
                    label: 'Taxa de Acerto (%)',
                    data: chartData.bar.data,
                    backgroundColor: '#3b82f6',
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Gráfico Linha (Progresso Semanal)
    const lineCtx = document.getElementById('chart-line');
    if (lineCtx && !charts.line) {
        charts.line = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: chartData.line.labels,
                datasets: [{
                    label: 'Questões Respondidas',
                    data: chartData.line.data,
                    borderColor: chartData.line.borderColor,
                    backgroundColor: chartData.line.backgroundColor,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#3b82f6',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            font: { size: 12 },
                            padding: 15
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Destruir gráficos ao sair da página
function destroyCharts() {
    Object.values(charts).forEach(chart => {
        if (chart) chart.destroy();
    });
    charts = {};
}

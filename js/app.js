// HubPro - Aplicação Principal

// Páginas disponíveis
const pages = ['home', 'content', 'flashcards', 'quiz', 'dashboard', 'settings'];
const pageTitles = {
    home: 'Bem-vindo ao HubPro',
    content: 'Conteúdo de Estudos',
    flashcards: 'Flashcards',
    quiz: 'Quiz',
    dashboard: 'Dashboard de Desempenho',
    settings: 'Configurações'
};

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    renderContentPage();
    navigateTo('home');
});

// Configurar navegação
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navigateTo(page);
            closeMobileMenu();
        });
    });

    // Menu toggle mobile
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
}

// Navegar para página
function navigateTo(page) {
    if (!pages.includes(page)) return;

    // Atualizar links ativos
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active', 'bg-blue-50', 'text-blue-600');
        link.classList.add('text-gray-700', 'hover:bg-gray-100');
    });

    const activeLink = document.querySelector(`[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.remove('text-gray-700', 'hover:bg-gray-100');
        activeLink.classList.add('active', 'bg-blue-50', 'text-blue-600');
    }

    // Esconder todas as páginas
    pages.forEach(p => {
        const pageEl = document.getElementById(`page-${p}`);
        if (pageEl) pageEl.classList.add('hidden');
    });

    // Mostrar página selecionada
    const selectedPage = document.getElementById(`page-${page}`);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
        selectedPage.classList.add('animate-fade-in');
    }

    // Atualizar título
    document.getElementById('page-title').textContent = pageTitles[page];

    // Inicializar lógica específica da página
    initPage(page);

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Inicializar página específica
function initPage(page) {
    switch(page) {
        case 'flashcards':
            destroyCharts();
            initFlashcards();
            break;
        case 'quiz':
            destroyCharts();
            initQuiz();
            break;
        case 'dashboard':
            initDashboard();
            break;
        case 'content':
            destroyCharts();
            renderContentPage();
            break;
    }
}

// Renderizar página de conteúdo
function renderContentPage() {
    const contentList = document.getElementById('content-list');
    if (!contentList) return;

    contentList.innerHTML = '';

    hubproData.modules.forEach(module => {
        const moduleEl = document.createElement('div');
        moduleEl.className = 'bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all';
        
        let topicsHTML = module.topics.map(topic => `
            <div class="px-6 py-4 border-t border-gray-200 hover:bg-gray-50 transition-all">
                <h5 class="font-medium text-gray-900">${topic.title}</h5>
                <p class="text-sm text-gray-600 mt-2">${topic.content}</p>
            </div>
        `).join('');

        moduleEl.innerHTML = `
            <div class="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                <h3 class="text-lg font-bold text-gray-900">${module.title}</h3>
                <p class="text-sm text-gray-600 mt-1">${module.description}</p>
                <p class="text-xs text-blue-600 font-medium mt-2">${module.topics.length} tópicos</p>
            </div>
            <div class="max-h-96 overflow-y-auto">
                ${topicsHTML}
            </div>
        `;

        contentList.appendChild(moduleEl);
    });
}

// Toggle menu mobile
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

// Fechar menu mobile
function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('-translate-x-full');
}

// Fechar menu ao clicar fora
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
    }
});

// Suporte a teclado
document.addEventListener('keydown', function(e) {
    // Atalhos de navegação
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                navigateTo('home');
                break;
            case '2':
                e.preventDefault();
                navigateTo('content');
                break;
            case '3':
                e.preventDefault();
                navigateTo('flashcards');
                break;
            case '4':
                e.preventDefault();
                navigateTo('quiz');
                break;
            case '5':
                e.preventDefault();
                navigateTo('dashboard');
                break;
        }
    }

    // Navegação em flashcards
    if (document.getElementById('page-flashcards').classList.contains('hidden') === false) {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextFlashcard();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevFlashcard();
        } else if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        }
    }
});

// Inicializar dados ao carregar
initFlashcardsStudied();
initQuizResults();

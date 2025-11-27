// ===== DADOS DAS DICAS =====
const tipsData = {
    inv1: {
        title: "Renda Variável",
        icon: "📈",
        content: `
            <p>A renda variável é uma forma de investimento onde os retornos não são previsíveis. Diferente da renda fixa, aqui você pode ter ganhos expressivos, mas também perdas.</p>
            
            <h3>Por onde começar?</h3>
            <ul>
                <li><strong>Ações:</strong> São pedaços de empresas. Ao comprar uma ação, você se torna sócio daquela companhia.</li>
                <li><strong>FIIs (Fundos Imobiliários):</strong> Permitem investir em imóveis sem precisar comprar um. Pagam dividendos mensais.</li>
                <li><strong>ETFs:</strong> Fundos que replicam índices como o Ibovespa. Ótimos para diversificação.</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Nunca invista em renda variável o dinheiro que você vai precisar no curto prazo. Tenha sua reserva de emergência antes!
            </div>
            
            <h3>Passo a Passo</h3>
            <ul>
                <li>Abra conta em uma corretora (XP, Clear, Rico, etc)</li>
                <li>Transfira dinheiro para a conta</li>
                <li>Estude a empresa antes de comprar</li>
                <li>Comece com pouco e vá aumentando</li>
                <li>Diversifique seus investimentos</li>
            </ul>
        `
    },
    inv2: {
        title: "Renda Fixa",
        icon: "🏦",
        content: `
            <p>A renda fixa é ideal para quem está começando ou quer segurança. Você sabe exatamente quanto vai receber ou tem uma boa previsibilidade.</p>
            
            <h3>Principais Tipos</h3>
            <ul>
                <li><strong>Tesouro Direto:</strong> Títulos do governo federal. O mais seguro do Brasil.</li>
                <li><strong>CDB:</strong> Certificado de Depósito Bancário. Empréstimo aos bancos.</li>
                <li><strong>LCI/LCA:</strong> Letras de Crédito. Isentas de IR para pessoa física.</li>
                <li><strong>Debêntures:</strong> Títulos de empresas. Maior risco, maior retorno.</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Para sua reserva de emergência, use o Tesouro Selic ou CDBs com liquidez diária. Você pode resgatar a qualquer momento!
            </div>
            
            <h3>Quanto rende?</h3>
            <p>Geralmente atrelados ao CDI (próximo à Selic) ou à inflação (IPCA). Em 2024, com a Selic alta, a renda fixa está muito atrativa!</p>
        `
    },
    inv3: {
        title: "Reserva de Emergência",
        icon: "🎯",
        content: `
            <p>Antes de investir em qualquer coisa, você precisa ter sua reserva de emergência. Ela é seu colchão financeiro para imprevistos.</p>
            
            <h3>Quanto guardar?</h3>
            <ul>
                <li><strong>CLT:</strong> 6 meses de gastos mensais</li>
                <li><strong>Autônomo:</strong> 12 meses de gastos mensais</li>
                <li><strong>Empresário:</strong> 12-18 meses de gastos mensais</li>
            </ul>
            
            <h3>Onde deixar?</h3>
            <ul>
                <li>Tesouro Selic (mais seguro)</li>
                <li>CDB com liquidez diária (100% CDI ou mais)</li>
                <li>Contas que rendem como Nubank, PicPay</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Sua reserva NÃO é investimento. Não busque rentabilidade alta aqui. O importante é segurança e liquidez!
            </div>
            
            <h3>Como montar</h3>
            <p>Defina um valor mensal (ex: 10% do salário) e separe automaticamente assim que receber. Trate como uma conta obrigatória!</p>
        `
    },
    tre1: {
        title: "Treino Push Pull Legs",
        icon: "🏋️",
        content: `
            <p>O PPL é uma das divisões de treino mais eficientes para hipertrofia. Divide o treino em empurrar (push), puxar (pull) e pernas (legs).</p>
            
            <h3>Divisão Semanal</h3>
            <ul>
                <li><strong>Segunda:</strong> Push (Peito, Ombro, Tríceps)</li>
                <li><strong>Terça:</strong> Pull (Costas, Bíceps, Antebraço)</li>
                <li><strong>Quarta:</strong> Legs (Quadríceps, Posterior, Panturrilha)</li>
                <li><strong>Quinta:</strong> Push</li>
                <li><strong>Sexta:</strong> Pull</li>
                <li><strong>Sábado:</strong> Legs</li>
                <li><strong>Domingo:</strong> Descanso</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Comece os treinos com exercícios compostos (supino, agachamento, terra) quando está com mais energia!
            </div>
            
            <h3>Exemplo de Push</h3>
            <ul>
                <li>Supino reto: 4x8-10</li>
                <li>Desenvolvimento: 3x10-12</li>
                <li>Supino inclinado: 3x10-12</li>
                <li>Elevação lateral: 3x12-15</li>
                <li>Tríceps corda: 3x12-15</li>
            </ul>
        `
    },
    tre2: {
        title: "HIIT em 20 Minutos",
        icon: "🏃",
        content: `
            <p>O HIIT (High Intensity Interval Training) é o método mais eficiente para queimar gordura em pouco tempo. Alterna períodos intensos com descanso.</p>
            
            <h3>Protocolo Básico</h3>
            <ul>
                <li>20 segundos de esforço máximo</li>
                <li>10 segundos de descanso</li>
                <li>Repetir 8x = 4 minutos (1 round)</li>
                <li>Descanso de 1 minuto entre rounds</li>
                <li>Fazer 4-5 rounds = 20 minutos</li>
            </ul>
            
            <h3>Exercícios Sugeridos</h3>
            <ul>
                <li>Burpees</li>
                <li>Mountain climbers</li>
                <li>Jumping jacks</li>
                <li>Agachamento com salto</li>
                <li>Corrida no lugar (joelho alto)</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Faça HIIT no máximo 3x por semana. Seu corpo precisa de recuperação. Mais não é melhor!
            </div>
            
            <h3>Benefícios</h3>
            <p>Queima calorias até 24h depois do treino (efeito EPOC), melhora condicionamento cardiovascular e preserva massa muscular.</p>
        `
    },
    tre3: {
        title: "Mobilidade Matinal",
        icon: "🧘",
        content: `
            <p>15 minutos de mobilidade pela manhã podem transformar seu dia. Melhora postura, reduz dores e aumenta energia.</p>
            
            <h3>Rotina de 15 Minutos</h3>
            <ul>
                <li><strong>Cat-Cow:</strong> 10 repetições (mobilidade coluna)</li>
                <li><strong>World's Greatest Stretch:</strong> 5 cada lado</li>
                <li><strong>Circles de quadril:</strong> 10 cada direção</li>
                <li><strong>Rotação torácica:</strong> 10 cada lado</li>
                <li><strong>Agachamento profundo:</strong> Segurar 30 segundos</li>
                <li><strong>Hang passivo:</strong> 30 segundos (se tiver barra)</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Faça essa rotina ANTES de olhar o celular. Cria um hábito positivo para começar o dia!
            </div>
            
            <h3>Benefícios</h3>
            <ul>
                <li>Reduz rigidez matinal</li>
                <li>Melhora circulação</li>
                <li>Prepara corpo para o dia</li>
                <li>Reduz risco de lesões</li>
            </ul>
        `
    },
    ali1: {
        title: "Déficit Calórico",
        icon: "🍎",
        content: `
            <p>Para emagrecer, você precisa gastar mais calorias do que consome. Isso é déficit calórico. Não existe outra forma!</p>
            
            <h3>Como Calcular</h3>
            <ul>
                <li>Descubra sua taxa metabólica basal (TMB)</li>
                <li>Multiplique pelo fator de atividade</li>
                <li>Subtraia 300-500 calorias para déficit moderado</li>
            </ul>
            
            <h3>Exemplo Prático</h3>
            <p>Se você gasta 2000 kcal/dia, coma entre 1500-1700 kcal. Isso gera perda de 0,5 a 1kg por semana.</p>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Déficit muito agressivo (-1000 kcal) causa perda de músculo, fome extrema e efeito sanfona. Vá devagar!
            </div>
            
            <h3>Dicas para Manter</h3>
            <ul>
                <li>Priorize proteína (saciedade)</li>
                <li>Coma vegetais à vontade (volume)</li>
                <li>Evite bebidas calóricas</li>
                <li>Durma bem (regula hormônios da fome)</li>
            </ul>
        `
    },
    ali2: {
        title: "Suplementos Essenciais",
        icon: "🥤",
        content: `
            <p>A maioria dos suplementos são desnecessários. Foque primeiro na alimentação. Mas alguns realmente ajudam:</p>
            
            <h3>Vale a Pena</h3>
            <ul>
                <li><strong>Creatina:</strong> O suplemento mais estudado. 3-5g por dia, todo dia. Melhora força e ganho muscular.</li>
                <li><strong>Whey Protein:</strong> Praticidade para bater meta de proteína. Não é mágico, só conveniência.</li>
                <li><strong>Vitamina D:</strong> Se você pega pouco sol. Faça exame antes.</li>
                <li><strong>Ômega 3:</strong> Se você não come peixe regularmente.</li>
            </ul>
            
            <h3>Não Vale a Pena</h3>
            <ul>
                <li>BCAAs (já vem no whey e na comida)</li>
                <li>Glutamina (corpo já produz suficiente)</li>
                <li>Termogênicos (efeito mínimo, caro)</li>
                <li>Pré-treinos (só se precisar do estímulo)</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Suplementos são responsáveis por no máximo 5% dos seus resultados. Dieta e treino são 95%!
            </div>
        `
    },
    ali3: {
        title: "Meal Prep Semanal",
        icon: "📋",
        content: `
            <p>Preparar refeições com antecedência economiza tempo, dinheiro e ajuda a manter a dieta. Domingo é o dia ideal!</p>
            
            <h3>Passo a Passo</h3>
            <ul>
                <li><strong>1.</strong> Planeje o cardápio da semana</li>
                <li><strong>2.</strong> Faça lista de compras</li>
                <li><strong>3.</strong> Compre tudo de uma vez</li>
                <li><strong>4.</strong> Separe 2-3 horas no domingo</li>
                <li><strong>5.</strong> Cozinhe proteínas, carbos e vegetais em batch</li>
                <li><strong>6.</strong> Divida em marmitas individuais</li>
            </ul>
            
            <h3>O que preparar</h3>
            <ul>
                <li><strong>Proteínas:</strong> Frango grelhado, carne moída, ovos cozidos</li>
                <li><strong>Carbos:</strong> Arroz, batata doce, macarrão integral</li>
                <li><strong>Vegetais:</strong> Brócolis, abobrinha, cenoura</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Invista em potes de vidro bons. Duram mais, não mancham e vão ao micro-ondas!
            </div>
            
            <h3>Conservação</h3>
            <p>Na geladeira dura 4-5 dias. No freezer até 3 meses. Descongele na geladeira na noite anterior.</p>
        `
    },
    mod1: {
        title: "Guarda-Roupa Cápsula",
        icon: "👕",
        content: `
            <p>O guarda-roupa cápsula consiste em ter poucas peças versáteis que combinam entre si. Menos roupas, mais combinações!</p>
            
            <h3>As 20 Peças Essenciais</h3>
            <ul>
                <li>3 camisetas básicas (branca, preta, cinza)</li>
                <li>2 camisas (branca e azul clara)</li>
                <li>2 calças jeans (clara e escura)</li>
                <li>1 calça de alfaiataria</li>
                <li>1 bermuda/short</li>
                <li>2 blusas de frio (moletom e suéter)</li>
                <li>1 jaqueta versátil</li>
                <li>1 blazer</li>
                <li>3 pares de sapatos (casual, social, esportivo)</li>
                <li>4 peças extras conforme seu estilo</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Invista em peças de qualidade nas cores neutras. Tendências compre barato, clássicos compre bom!
            </div>
            
            <h3>Benefícios</h3>
            <ul>
                <li>Economia de dinheiro e tempo</li>
                <li>Menos decisões pela manhã</li>
                <li>Sempre bem vestido</li>
                <li>Armário organizado</li>
            </ul>
        `
    },
    mod2: {
        title: "Teoria das Cores",
        icon: "🎨",
        content: `
            <p>Saber combinar cores é fundamental para se vestir bem. Não é difícil quando você entende as regras básicas!</p>
            
            <h3>Regras de Ouro</h3>
            <ul>
                <li><strong>Monocromático:</strong> Tons da mesma cor. Elegante e alongador.</li>
                <li><strong>Complementar:</strong> Cores opostas no círculo (azul + laranja). Impacto visual.</li>
                <li><strong>Análogo:</strong> Cores vizinhas (azul + verde). Harmonia natural.</li>
            </ul>
            
            <h3>Combinações Certeiras</h3>
            <ul>
                <li>Azul marinho + branco + bege</li>
                <li>Cinza + preto + branco</li>
                <li>Verde militar + marrom + bege</li>
                <li>Bordô + cinza + preto</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> Na dúvida, use no máximo 3 cores por look. Neutros não contam (preto, branco, cinza, bege)!
            </div>
            
            <h3>Cores por Tom de Pele</h3>
            <p>Pele quente: tons terrosos, laranja, amarelo. Pele fria: azul, roxo, rosa. Não sabe? Branco e azul marinho funcionam para todos!</p>
        `
    },
    mod3: {
        title: "Estilo Minimalista",
        icon: "✨",
        content: `
            <p>O minimalismo na moda foca em peças simples, bem cortadas e atemporais. Menos estampas, mais caimento perfeito.</p>
            
            <h3>Características</h3>
            <ul>
                <li>Cores neutras predominantes</li>
                <li>Linhas retas e limpas</li>
                <li>Poucos acessórios</li>
                <li>Tecidos de qualidade</li>
                <li>Caimento perfeito</li>
            </ul>
            
            <h3>Marcas Referência</h3>
            <ul>
                <li>COS</li>
                <li>Uniqlo</li>
                <li>Muji</li>
                <li>Everlane</li>
                <li>Zara (linha básicos)</li>
            </ul>
            
            <div class="tip-box">
                <strong>💡 Dica de Ouro:</strong> No minimalismo, o caimento é tudo. Leve suas roupas ao alfaiate para ajustes. Faz toda diferença!
            </div>
            
            <h3>Como Começar</h3>
            <ul>
                <li>Doe/venda peças que não usa</li>
                <li>Mantenha apenas o que ama</li>
                <li>Compre menos, compre melhor</li>
                <li>Pense antes de cada compra</li>
            </ul>
        `
    }
};

// ===== VARIÁVEIS GLOBAIS =====
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initFavorites();
    initFilters();
    initSearch();
    initScrollEffects();
    initNewsletter();
    initAnimations();
    updateFavoritesSection();
});

// ===== TEMA CLARO/ESCURO =====
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        toggle.textContent = '☀️';
    }
    
    toggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.body.removeAttribute('data-theme');
            toggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            toggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ===== FAVORITOS =====
function initFavorites() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const id = btn.dataset.id;
        
        if (favorites.includes(id)) {
            btn.classList.add('active');
            btn.textContent = '♥';
        }
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(id, btn);
        });
    });
}

function toggleFavorite(id, btn) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
        btn.classList.remove('active');
        btn.textContent = '♡';
        showToast('Removido dos favoritos');
    } else {
        favorites.push(id);
        btn.classList.add('active');
        btn.textContent = '♥';
        showToast('Adicionado aos favoritos! ⭐');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesSection();
}

function updateFavoritesSection() {
    const container = document.getElementById('favoritesContainer');
    
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span>💫</span>
                <p>Você ainda não tem favoritos. Clique no ♡ para salvar dicas!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    favorites.forEach(id => {
        const originalCard = document.querySelector(`.card[data-id="${id}"]`);
        if (originalCard) {
            const clone = originalCard.cloneNode(true);
            clone.querySelector('.favorite-btn').classList.add('active');
            clone.querySelector('.favorite-btn').textContent = '♥';
            
            // Re-attach event listeners
            clone.querySelector('.favorite-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(id, clone.querySelector('.favorite-btn'));
            });
            
            clone.querySelector('.card-btn').addEventListener('click', () => {
                openModal(id);
            });
            
            container.appendChild(clone);
        }
    });
}

// ===== FILTROS =====
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('.section[data-category]');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            if (filter === 'all') {
                sections.forEach(s => s.style.display = 'block');
                cards.forEach(c => c.classList.remove('hidden'));
            } else if (filter === 'favoritos') {
                sections.forEach(s => s.style.display = 'none');
                document.getElementById('favoritos').style.display = 'block';
                document.getElementById('favoritos').scrollIntoView({ behavior: 'smooth' });
            } else {
                sections.forEach(s => {
                    if (s.dataset.category === filter || s.id === 'favoritos') {
                        s.style.display = 'block';
                    } else {
                        s.style.display = 'none';
                    }
                });
                
                const targetSection = document.getElementById(filter);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== BUSCA =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.card');
        
        if (query === '') {
            cards.forEach(card => card.classList.remove('hidden'));
            return;
        }
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            const category = card.dataset.category.toLowerCase();
            
            if (title.includes(query) || desc.includes(query) || category.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

// ===== MODAL =====
function openModal(id) {
    const modal = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    const tip = tipsData[id];
    
    if (tip) {
        content.innerHTML = `
            <span class="modal-icon">${tip.icon}</span>
            <h2>${tip.title}</h2>
            ${tip.content}
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fechar modal com ESC ou clicando fora
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
});

// ===== CALCULADORAS =====
function calcularJuros() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value) || 0;
    const aporteMensal = parseFloat(document.getElementById('aporteMensal').value) || 0;
    const taxaAnual = parseFloat(document.getElementById('taxaJuros').value) / 100 || 0;
    const anos = parseFloat(document.getElementById('periodo').value) || 0;
    
    const taxaMensal = Math.pow(1 + taxaAnual, 1/12) - 1;
    const meses = anos * 12;
    
    let montante = valorInicial;
    for (let i = 0; i < meses; i++) {
        montante = montante * (1 + taxaMensal) + aporteMensal;
    }
    
    const totalInvestido = valorInicial + (aporteMensal * meses);
    const jurosGanhos = montante - totalInvestido;
    
    document.getElementById('resultJuros').innerHTML = `
        <strong>Montante Final: R$ ${montante.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong><br>
        <small>Investido: R$ ${totalInvestido.toLocaleString('pt-BR', {minimumFractionDigits: 2})} | Juros: R$ ${jurosGanhos.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</small>
    `;
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value) || 0;
    const alturaCm = parseFloat(document.getElementById('altura').value) || 0;
    const altura = alturaCm / 100;
    
    if (peso <= 0 || altura <= 0) {
        document.getElementById('resultIMC').innerHTML = 'Preencha peso e altura';
        return;
    }
    
    const imc = peso / (altura * altura);
    let classificacao = '';
    let cor = '';
    
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        cor = '#3498db';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
        cor = '#2ecc71';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
        cor = '#f1c40f';
    } else if (imc < 35) {
        classificacao = 'Obesidade Grau I';
        cor = '#e67e22';
    } else if (imc < 40) {
        classificacao = 'Obesidade Grau II';
        cor = '#e74c3c';
    } else {
        classificacao = 'Obesidade Grau III';
        cor = '#c0392b';
    }
    
    document.getElementById('resultIMC').innerHTML = `
        <strong style="color: ${cor}">IMC: ${imc.toFixed(1)}</strong><br>
        <small>${classificacao}</small>
    `;
}

function calcularCalorias() {
    const idade = parseFloat(document.getElementById('idadeCal').value) || 0;
    const sexo = document.getElementById('sexoCal').value;
    const peso = parseFloat(document.getElementById('pesoCal').value) || 0;
    const alturaCm = parseFloat(document.getElementById('alturaCal').value) || 0;
    const atividade = parseFloat(document.getElementById('atividadeCal').value) || 1.2;
    
    if (!sexo || idade <= 0 || peso <= 0 || alturaCm <= 0) {
        document.getElementById('resultCalorias').innerHTML = 'Preencha todos os campos';
        return;
    }
    
    let tmb;
    if (sexo === 'm') {
        tmb = 88.362 + (13.397 * peso) + (4.799 * alturaCm) - (5.677 * idade);
    } else {
        tmb = 447.593 + (9.247 * peso) + (3.098 * alturaCm) - (4.330 * idade);
    }
    
    const tdee = tmb * atividade;
    
    document.getElementById('resultCalorias').innerHTML = `
        <strong>Manutenção: ${Math.round(tdee)} kcal/dia</strong><br>
        <small>Emagrecer: ${Math.round(tdee - 500)} kcal | Ganhar: ${Math.round(tdee + 500)} kcal</small>
    `;
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Menu mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Scroll effects
    window.addEventListener('scroll', () => {
        // Navbar shadow
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 40px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
        }
        
        // Back to top button
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== NEWSLETTER =====
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const success = document.getElementById('newsletterSuccess');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        
        // Simular envio
        form.style.display = 'none';
        success.classList.add('show');
        
        showToast(`Bem-vindo(a), ${name}! 🎉`);
        
        // Salvar localmente
        localStorage.setItem('newsletter', JSON.stringify({ name, email }));
    });
}

// ===== ANIMAÇÕES =====
function initAnimations() {
    // Contador animado
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            const count = +counter.innerText;
            const inc = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    };
    
    // Intersection Observer para cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card, .calculator-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Iniciar contadores quando hero estiver visível
    const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            heroObserver.disconnect();
        }
    });
    
    heroObserver.observe(document.querySelector('.hero'));
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
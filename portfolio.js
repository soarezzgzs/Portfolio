
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkgdbqoj'; // Substitua pelo seu ID real

let currentLang = 'pt';
let currentSection = 'estudos';

function projects(){
  showContent('projetos');
}

const texts = {
  pt: {
    sidebar: {
      quemSou: 'Quem Sou',
      portfolio: 'Portfólio',
      contato: 'Fale Comigo',
      baixarCV: 'Baixar CV',
      temaClaro: '<i class="fa-solid fa-moon"></i> Tema Claro',
      temaEscuro: '<i class="fa-solid fa-sun"></i> Tema Escuro',
      idiomaBtn: '<i class="fa-solid fa-language"></i> English'
    },
    estudos: `
      <h2 class="reveal" style="--d:0s">Quem Sou</h2>

      <p class="headline">Desenvolvedor Full Stack em formação, construindo soluções modernas com <strong>React</strong>, <strong>Node.js</strong> e <strong>PostgreSQL</strong>.</p>

<p class="reveal intro" style="--d:.1s">
  Olá, eu sou <strong>Leonardo Augusto Soares</strong>
</p>

<p class="reveal" style="--d:.2s">
  Sou <strong>Jovem Aprendiz em Engenharia de Produto</strong> e estudante de
  <strong>Engenharia de Software</strong>, apaixonado por tecnologia,
  desenvolvimento web e resolução de problemas através da programação.
</p>

<p class="reveal" style="--d:.3s">
  Atualmente atuo com análises técnicas de desenhos e suporte a processos de
  desenvolvimento, enquanto aprimoro minhas habilidades em
  <strong>React</strong>, <strong>Node.js</strong>,
  <strong>TypeScript</strong> e <strong>PostgreSQL</strong>,
  construindo projetos Full Stack modernos e escaláveis.
</p>

<p class="reveal" style="--d:.4s">
  Meu objetivo é transformar ideias em soluções digitais intuitivas,
  eficientes e capazes de gerar valor para empresas e usuários.
</p>

<div class="stats reveal" style="--d:.5s">
  <div class="stat-card">
    <h3>10+</h3>
    <span>Tecnologias</span>
  </div>

  <div class="stat-card">
    <h3>10+</h3>
    <span>Projetos Publicados</span>
  </div>

  <div class="stat-card">
    <h3>4</h3>
    <span>Projetos Fullstack</span>
  </div>

  <div class="stat-card">
    <h3>3</h3>
    <span>Formações Concluídas</span>
  </div>
</div>

<div class="chips reveal" style="--d:.6s">
  <span class="chip"><i class="devicon-html5-plain colored"></i> HTML</span>
  <span class="chip"><i class="devicon-tailwindcss-plain colored"></i> TailwindCSS</span>
  <span class="chip"><i class="devicon-typescript-plain colored"></i> TypeScript</span>
  <span class="chip"><i class="devicon-react-original colored"></i> React</span>
  <span class="chip"><i class="devicon-nodejs-plain colored"></i> Node.js</span>
  <span class="chip"><i class="devicon-express-original"></i> Express.js</span>
  <span class="chip"><i class="devicon-prisma-original"></i> Prisma</span>
  <span class="chip"><i class="devicon-postgresql-plain colored"></i> PostgreSQL</span>
  <span class="chip"><i class="devicon-git-plain colored"></i> Git</span>
  <span class="chip"><i class="devicon-github-plain colored"></i> GitHub</span>
</div>

<div class="journey reveal" style="--d:.7s">

  <h3><i class="fa-solid fa-graduation-cap"></i> Formação & Experiência</h3>

  <div class="timeline-item">
    <span class="year">2025</span>

    <ul>
      <li>🏢 Inicio de Jovem Aprendiz em Engenharia de Produto</li>
      <li>🏆 Conclusão do curso de Lógica de Programação - Danki Code</li>
      <li>💻 Início da jornada no desenvolvimento web</li>
      <li>🏆 Conclusão do curso de JavaScript - Gustavo Guanabara</li>
      <li>🌐 Desenvolvimento dos primeiros projetos Front-end</li>
    </ul>
  </div>

  <div class="timeline-item">
    <span class="year">2026</span>

    <ul>
      <li>🎓 Conclusão da Formação Full Stack Rocketseat</li>
      <li>⭐ Desenvolvimento do HelpDesk (Full Stack)</li>
      <li>💰 Desenvolvimento do Refund System (Full Stack)</li>
      <li>🎵 Desenvolvimento do Vinil Tracker (Full Stack)</li>
      <li>🚀 Evolução contínua em React, Node.js, TypeScript e PostgreSQL</li>
      <li>🎯 Atualmente buscando evoluir como Desenvolvedor Full Stack.</li>
    </ul>
  </div>

</div>

<div class="about-buttons reveal" style="--d:.8s">
  <a href="assets/Leonardo_Soares_Curriculo.pdf" download="Leonardo_Soares_Curriculo.pdf" class="btn-secondary" target="_blank">
    Baixar CV
  </a>

  <a href="https://github.com/LeonardoAugustoSoares" class="btn-secondary" target="_blank">
    <i class="fa-brands fa-github"></i> GitHub
  </a>

  <a href="https://www.linkedin.com/in/leonardoaugustosoares/" class="btn-secondary" target="_blank">
    <i class="fa-brands fa-linkedin"></i> LinkedIn
  </a>

  <a href="javascript:void(0)" onclick="showContent('projetos')" class="btn-secondary">
    <i class="fa-solid fa-clipboard-list"></i> Ver Projetos
  </a>
</div>
    `,
    portfolioTitle: 'Portfólio',
    filter: `
      <div class="filter reveal" style="--d:.1s">
        <button onclick="filterProjects('all')">Todos</button>
        <button onclick="filterProjects('web')">Front-end</button>
        <button onclick="filterProjects('back')">Back-end</button>
        <button onclick="filterProjects('full')">Full-stack</button>
      </div>
    `,
    cards: {
      crDesc: 'Site institucional responsivo para escritório de contabilidade, desenvolvido com HTML, CSS e JavaScript. Projeto focado em responsividade, semântica, Flexbox e manipulação de DOM.',
      crOpen: 'Abrir',
      crGit: 'GitHub',
      webDesc: 'Formulário de cadastro com validação em tempo real utilizando JavaScript puro. Implementa manipulação de DOM, controle de eventos e feedback visual para melhorar a experiência do usuário.',
      webOpen: 'Abrir',
      webGit: 'GitHub',
      certDesc: 'Sistema de geração automática de certificados desenvolvido com Angular e TypeScript. Utiliza componentização, tipagem estática e organização modular para manter escalabilidade e manutenção facilitada. O projeto permite gerar certificados dinâmicos com base em dados inseridos pelo usuário, aplicando conceitos de arquitetura front-end moderna.',
      certOpen: 'Abrir',
      certGit: 'GitHub',
      sdnDesc: 'Aplicação web para geração de números aleatórios com parâmetros personalizados. Desenvolvida com JavaScript e foco em manipulação de DOM, eventos e atualização dinâmica da interface',
      sdnOpen: 'Abrir',
      sdnGit: 'GitHub',
      rtDesc: 'Sistema para solicitação e gerenciamento de reembolsos. Desenvolvido com foco em organização de dados, responsividade e interação dinâmica com JavaScript.',
      rtOpen: 'Abrir',
      rtGit: 'GitHub',
      lcDesc: 'Aplicação para gerenciamento de listas de compras com adição, remoção e marcação de itens. Projeto focado em manipulação de DOM e gerenciamento de estado local.',
      lcOpen: 'Abrir',
      lcGit: 'GitHub',
      psDesc: 'Sistema de agendamento para petshops com seleção de serviços, datas e horários. Desenvolvido com HTML, CSS e JavaScript, incluindo validações e interface responsiva',
      psOpen: 'Abrir',
      psGit: 'GitHub',
      cvDesc: 'Projeto de e-commerce desenvolvido para simular uma loja de discos de vinil. Possui catálogo, carrinho de compras e checkout responsivo.',
      cvOpen: 'Abrir',
      cvGit: 'GitHub',
      arDesc: 'API RESTful para gerenciamento de pratos e categorias, desenvolvida com Node.js, TypeScript, Express, Knex e SQLite. Inclui documentação completa para testes.',
      arOpen: 'Abrir',
      arGit: 'GitHub',
      vtDesc: 'Plataforma Full Stack para gerenciamento de coleções de discos de vinil. Possui autenticação, CRUD completo, estatísticas interativas e compartilhamento público de coleções.',
      vtOpen: 'Abrir',
      vtGit: 'GitHub',
      hdDesc: 'Projeto Full Stack desenvolvido como desafio final da Rocketseat. Sistema de Help Desk com autenticação, gerenciamento de chamados, painel administrativo, controle de perfis e integração completa entre React, Node.js, Prisma e PostgreSQL.',
      hdOpen: 'Abrir',
      hdGit: 'GitHub',
      rfDesc: "Sistema Full Stack de solicitação de reembolsos com autenticação JWT, upload de comprovantes e controle de acesso por perfis. Desenvolvido com React, Node.js, Prisma e SQLite simulando um fluxo corporativo real.",
      rfOpen: 'Abrir',
      rfGit: 'GitHub'
    },
    contatoTitle: 'Fale Comigo',
    contatoLabels: { nome: 'Nome', email: 'E-mail', assunto: 'Assunto', mensagem: 'Mensagem', enviar: 'Enviar' }
  },
  en: {
    sidebar: {
      quemSou: 'About Me',
      portfolio: 'Portfolio',
      contato: 'Contact Me',
      baixarCV: 'Download CV',
      temaClaro: '<i class="fa-solid fa-moon"></i> Light Theme',
      temaEscuro: '<i class="fa-solid fa-sun"></i> Dark Theme',
      idiomaBtn: '<i class="fa-solid fa-language"></i> Português'
    },
    estudos: `
      <h2 class="reveal" style="--d:0s">About Me</h2>

<p class="reveal" style="--d:.1s">
  <strong>Hello, I'm Leonardo Augusto Soares 👋</strong>
</p>

<p class="reveal" style="--d:.2s">
  I am 17 years old and currently work as a
  <strong>Junior Apprentice in Product Engineering</strong> at
  <strong>Versigent</strong>, performing technical analysis of engineering drawings
  and supporting product development processes.
</p>

<p class="reveal" style="--d:.3s">
  Passionate about technology and software development, I focus on creating
  modern and user-friendly applications using
  <strong>React</strong>, <strong>Node.js</strong>,
  <strong>TypeScript</strong> and <strong>PostgreSQL</strong>.
</p>

<p class="reveal" style="--d:.4s">
  My goal is to grow as a Full Stack Developer, continuously learning,
  applying best practices and building solutions that solve real-world problems.
</p>

<div class="stats reveal" style="--d:.5s">
  <div class="stat-card">
    <h3>10+</h3>
    <span>Technologies</span>
  </div>

  <div class="stat-card">
    <h3>10+</h3>
    <span>Projects Built</span>
  </div>

  <div class="stat-card">
    <h3>2</h3>
    <span>Full Stack Systems</span>
  </div>

  <div class="stat-card">
    <h3>100%</h3>
    <span>Learning Mindset</span>
  </div>
</div>

<div class="chips reveal" style="--d:.6s">
  <span class="chip"><i class="devicon-html5-plain colored"></i> HTML</span>
  <span class="chip"><i class="devicon-tailwindcss-plain colored"></i> TailwindCSS</span>
  <span class="chip"><i class="devicon-typescript-plain colored"></i> TypeScript</span>
  <span class="chip"><i class="devicon-react-original colored"></i> React</span>
  <span class="chip"><i class="devicon-nodejs-plain colored"></i> Node.js</span>
  <span class="chip"><i class="devicon-express-original"></i> Express.js</span>
  <span class="chip"><i class="devicon-prisma-original"></i> Prisma</span>
  <span class="chip"><i class="devicon-postgresql-plain colored"></i> PostgreSQL</span>
  <span class="chip"><i class="devicon-git-plain colored"></i> Git</span>
  <span class="chip"><i class="devicon-github-plain colored"></i> GitHub</span>
</div>

<div class="journey reveal" style="--d:.7s">

  <h3>🚀 Education & Experience</h3>

  <div class="timeline-item">
    <span class="year">2025</span>

    <ul>
      <li>🏢 Beginning of a Young Apprenticeship in Product Engineering</li>
      <li>🏆 Completion of the Logic Programming Course - Danki Code</li>
      <li>💻 Start of the web development journey</li>
      <li>🏆 Completion of the JavaScript Course - Gustavo Guanabara</li>
      <li>🌐 Development of the first front-end projects</li>
    </ul>
  </div>

  <div class="timeline-item">
    <span class="year">2026</span>

    <ul>
      <li>🎓 Completion of the Full Stack Formation - Rocketseat</li>
      <li>⭐ Development of the HelpDesk (Full Stack)</li>
      <li>💰 Development of the Refund System (Full Stack)</li>
      <li>🎵 Development of the Vinil Tracker (Full Stack)</li>
      <li>🚀 Currently seeking to evolve as a Full Stack Developer.</li>
      <li>🎯 Continuous Evolution in React, Node.js, TypeScript and PostgreSQL</li>
    </ul>
  </div>

</div>
    `,
    portfolioTitle: 'Portfolio',
    filter: `
      <div class="filter reveal" style="--d:.1s">
        <button onclick="filterProjects('all')">All</button>
        <button onclick="filterProjects('web')">Front-end</button>
        <button onclick="filterProjects('back')">Back-end</button>
        <button onclick="filterProjects('full')">Full-stack</button>
      </div>
    `,
    cards: {
      crDesc: 'Responsive institutional website for an accounting firm, developed with HTML, CSS, and JavaScript. Application of best practices, semantic organization, and structured layout with Flexbox. 🔎 Responsiveness, DOM manipulation, and media queries.',
      crOpen: 'Open',
      crGit: 'GitHub',
      certDesc: 'Registration form with real-time validation, developed with pure JavaScript and DOM manipulation. Structured with best practices and a focus on user experience. 🔎 Event control, personalized validation, and visual feedback.',
      certOpen: 'Open',
      certGit: 'GitHub',
      webDesc: 'An automated certificate generation system developed with Angular and TypeScript. It uses componentization, static typing, and modular organization to maintain scalability and ease of maintenance. The project allows the generation of dynamic certificates based on user-entered data, applying modern front-end architecture concepts.',
      webOpen: 'Open',
      webGit: 'GitHub',
      sdnDesc: 'Web application for dynamic random number generation, with user-defined parameter control. Developed using JavaScript for logic and DOM manipulation, with a responsive interface and a focus on user experience. Implementation of mathematical functions, event handling, and dynamic interface updates.',
      sdnOpen: 'Open',
      sdnGit: 'GitHub',
      rtDesc: 'Front-end system for managing and requesting reimbursements, allowing for the registration and organization of user-entered data. The application was developed with a focus on layout structuring, data manipulation via JavaScript, and full responsiveness. It features an administrative workflow simulation with information organization and dynamic interaction.',
      rtOpen: 'Open',
      rtGit: 'GitHub',
      lcDesc: 'Web application for managing shopping lists, allowing users to dynamically add, remove, and mark items. The project was developed using JavaScript for DOM manipulation and application state control, prioritizing simplicity and efficiency. It includes implementation of events, local state control, and dynamic interface updates.',
      lcOpen: 'Open',
      lcGit: 'GitHub',
      psDesc: 'Scheduling system for a pet shop, allowing users to book services for their pets. Developed with HTML, CSS, and JavaScript, the project features an intuitive and responsive interface, with functionalities for selecting services, available dates, and times. Implementation of form validation, DOM manipulation, and visual feedback to enhance user experience.',
      psOpen: 'Open',
      psGit: 'GitHub',
      cvDesc: 'Pratical training for e-commerce, created for my dad, simulating a vinyl disc store with a catalog, cart, and responsive checkout.',
      cvOpen: 'Open',
      cvGit: 'GitHub',
      arDesc: 'Back-end project developed with Node.js, TypeScript, Express, Knex, and SQLite3. RESTful API for managing dishes and categories, with complete Insomnia file for easier testing.',
      arOpen: 'Open',
      arGit: 'GitHub',
      vtDesc: 'Full-stack application for managing vinyl record collections. Allows user registration, CRUD operations for vinyl records, detailed collection statistics, and public sharing via link. Includes interactive graphs for data visualization.',
      vtOpen: 'Open',
      vtGit: 'GitHub',
      hdDesc: 'Full-stack help desk system with authentication, ticket management, admin panel, profile control, and complete integration between React, Node.js, Prisma, and PostgreSQL.',
      hdOpen: 'Open',
      hdGit: 'GitHub',
      rfDesc: "Full-stack reimbursement request system with JWT authentication, proof of payment upload, and profile-based access control. Developed with React, Node.js, Prisma, and SQLite, simulating a real corporate workflow.",
      rfOpen: 'Open',
      rfGit: 'GitHub'
    },
    contatoTitle: 'Contact Me',
    contatoLabels: { nome: 'Name', email: 'Email', assunto: 'Subject', mensagem: 'Message', enviar: 'Send' }
  }
};

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

// Scroll suave
document.querySelectorAll('.sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Modo Claro/Escuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const tside = texts[currentLang].sidebar;
  themeToggle.innerHTML = document.body.classList.contains('light-theme')
    ? tside.temaEscuro
    : tside.temaClaro;
});

// Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function initReveal(scope = document) {
  scope.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Renderiza conteúdo dinâmico
function showContent(section) {
  currentSection = section;
  const t = texts[currentLang];
  const contentArea = document.getElementById('content-area');
  let html = '';

  if (section === 'estudos') {
    html = t.estudos;
  } else if (section === 'projetos') {
    html = `
      <h2 class="reveal" style="--d:0s">${t.portfolioTitle}</h2>
      ${t.filter}
      <div class="cards">

       <div class="card reveal" data-tech="full" style="--d:.05s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div>
          <h3>HelpDesk</h3>
          </div>
          <p>${t.cards.hdDesc}</p>
          <div class="chips">
          <span class="chip"><i class="devicon-nodejs-plain-wordmark colored"></i> Node.js</span>
          <span class="chip"><i class="devicon-express-original"></i> Express</span>
          <span class="chip"><i class="devicon-typescript-plain colored"></i> TypeScript</span>
          <span class="chip"><i class="devicon-prisma-plain"></i> Prisma</span>
          <span class="chip"><i class="devicon-postgresql-plain"></i> PostgreSQL</span>
          <span class="chip"><i class="devicon-react-original colored"></i> React</span>
          <span class="chip"><i class="devicon-tailwindcss-plain colored"></i> Tailwindcss</span>
          <span class="chip"><i class="devicon-docker-plain colored"></i> Docker</span>

          </div>
          <div class="actions">
            <button onclick="window.open('projects/helpdesk/index.html')">
              <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.hdOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/helpdesk')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.hdGit}
            </button>
          </div>
        </div>

        <div class="card reveal" data-tech="full" style="--d:.05s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div>
          <h3>Refund 2.0</h3>
          </div>
          <p>${t.cards.rfDesc}</p>
          <div class="chips">
          <span class="chip"><i class="devicon-react-original colored"></i> React</span>
          <span class="chip"><i class="devicon-typescript-plain colored"></i> TypeScript</span>
          <span class="chip"><i class="devicon-nodejs-plain-wordmark colored"></i> Node.js</span>
          <span class="chip"><i class="devicon-express-original"></i> Express</span>
          <span class="chip"><i class="devicon-prisma-plain"></i> Prisma</span>
          <span class="chip"><i class="devicon-sqlite-plain"></i> SQLite</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/refund (fullstack)/index.html')">
              <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.rfOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/web')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.rfGit}
            </button>
          </div>
        </div>


        <div class="card reveal" data-tech="web" style="--d:.05s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>CR Contabilidade</h3></div>
          <p>${t.cards.crDesc}</p>
          <div class="chips">
            <span class="chip">
            <i class="devicon-html5-plain colored"></i>
          </i> HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
            <span class="chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/cr-contabilidade/index.html')">
              <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.crOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/cr-contabilidade')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.crGit}
            </button>
          </div>
        </div>

        <div class="card reveal" data-tech="full" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Vinil tracker</h3></div>
          <p>${t.cards.vtDesc}</p>

          <div class="chips">
            <span class="chip"><i class="devicon-react-original colored"></i> React</span>
            <span class="chip"><i class="devicon-express-original"></i> Express</span>
              <span class="chip"><i class="devicon-nodejs-plain-wordmark colored"></i> Node.js</span>
          <span class="chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          <span class="chip"><i class="devicon-sqlite-plain colored"></i> SQLite</span>
          <span class="chip"><i class="devicon-chartjs-plain colored"></i> Chart.js</span>
          <span class="chip"><i class="devicon-knexjs-original colored"></i> Knexjs</span>
          <span class="chip"><i class="devicon-tailwindcss-original colored"></i> Tailwindcss</span>
          <span class="chip"><i class="devicon-sqlite-plain colored"></i> SQLite</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/Viniltracker/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.vtOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/backend')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.vtGit} Backend
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/frontend')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.vtGit} Frontend
            </button>
          </div>

        </div>

        <div class="card reveal" data-tech="full" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Agendamento de Petshop</h3></div>
          <p>${t.cards.psDesc}</p>
          <div class="chips">
            <span class="chip">
            
            <i class="devicon-html5-plain colored"></i>
          
           HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
              <span class="chip"><i class="devicon-nodejs-plain-wordmark colored"></i> Node.js</span>
<span class="chip">
  <i class="devicon-typescript-plain colored"></i> TypeScript
</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/agendamento-petshop/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.psOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/petshop-scheduler')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.psGit}
            </button>
          </div>
        </div>
        <div class="card reveal" data-tech="back" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>API Restaurant</h3></div>
          <p>${t.cards.arDesc}</p>
          <div class="chips">

<span class="chip">
  <i class="devicon-nodejs-plain-wordmark colored"></i> Node.js
</span>

<span class="chip">
  <i class="devicon-typescript-plain colored"></i> TypeScript
</span>

<span class="chip">
  <i class="devicon-sqlite-plain colored"></i> SQLite
</span>

<span class="chip">
  <i class="devicon-express-original"></i>Express
</span>

<span class="chip">
  <i class="devicon-knexjs-plain colored"></i> Knex.js
</span>

          </div>
          <div class="actions">
            <button onclick="window.open('projects/agendamento-petshop/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.arOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/api-restaurant')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.arGit}
            </button>
          </div>
        </div>

        



        <div class="card reveal" data-tech="web" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Vintage Vinyl</h3></div>
          <p>${t.cards.cvDesc}</p>
          <div class="chips">
            <span class="chip">
            <i class="devicon-html5-plain colored"></i>
          </i> HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
            <span class="chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/vintage-vinyl/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.cvOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/vintage-vinyl)">
              <i class="fab fa-github fa-2x"></i> ${t.cards.cvGit}
            </button>
          </div>
        </div>
        <div class="card reveal" data-tech="web" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Forms</h3></div>
          <p>${t.cards.webDesc}</p>
          <div class="chips">
            <span class="chip">
            <i class="devicon-html5-plain colored"></i>
          </i> HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
            <span class="chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/forms/index.html')">
              <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.webOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/Form')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.webGit}
            </button>
          </div>
        </div>
        <div class="card reveal" data-tech="web" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Gerador Certificado</h3></div>
          <p>${t.cards.certDesc}</p>
          <div class="chips">
            <span class="chip">
            <i class="devicon-html5-plain colored"></i>
          </i> HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
            <span class="chip"><i class="fa-brands fa-js"></i> TypeScript</span>
            <span class="chip">
            <i class="devicon-angularjs-plain colored"></i>
           Angular</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/certificado/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.certOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/sorteador-de-numeros')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.certGit}
            </button>
          </div>
        </div>
        <div class="card reveal" data-tech="web" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Gerador de números</h3></div>
          <p>${t.cards.sdnDesc}</p>
          <div class="chips">
            <span class="chip">
            <i class="devicon-html5-plain colored"></i>
          </i> HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
            <span class="chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/gerador-numeros/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.sdnOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/sorteador-de-numeros)">
              <i class="fab fa-github fa-2x"></i> ${t.cards.sdnGit}
            </button>
          </div>
        </div>
        <div class="card reveal" data-tech="web" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Sistema de reembolso</h3></div>
          <p>${t.cards.rtDesc}</p>
          <div class="chips">
            <span class="chip">
            <i class="devicon-html5-plain colored"></i>
          </i> HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
            <span class="chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/refund/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.rtOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/refund-template')">
              <i class="fab fa-github fa-2x"></i> ${t.cards.rtGit}
            </button>
          </div>
        </div>
        <div class="card reveal" data-tech="web" style="--d:.15s">
          <div class="top"><div class="icon"><i class="fa-solid fa-clipboard-list"></i></div><h3>Lista de compras</h3></div>
          <p>${t.cards.lcDesc}</p>
          <div class="chips">
            <span class="chip">
            <i class="devicon-html5-plain colored"></i>
          </i> HTML</span>
            <span class="chip">
            <i class="devicon-css3-plain colored"></i>
           CSS</span>
            <span class="chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          </div>
          <div class="actions">
            <button onclick="window.open('projects/lista-compras/index.html')">
             <i class="fa-solid fa-up-right-from-square"></i> ${t.cards.lcOpen}
            </button>
            <button class="gitBtn" onclick="window.open('https://github.com/soarezzgzs/Lista-de-compras)">
              <i class="fab fa-github fa-2x"></i> ${t.cards.lcGit}
            </button>
          </div>
        </div>
      </div>
    `;
  } else if (section === 'contato') {
    html = `
    
      <div class="form-card reveal" style="--d:0s">
        <h2 class="form-title"><i class="fa-solid fa-paper-plane"></i> ${t.contatoTitle}</h2>
        <form id="contact-form" class="form-grid">
          <div class="form-group"><label for="name"><i class="fa-solid fa-user"></i> ${t.contatoLabels.nome}</label><input type="text" id="name" name="name" required /></div>
          <div class="form-group"><label for="email"><i class="fa-solid fa-envelope"></i> ${t.contatoLabels.email}</label><input type="email" id="email" name="email" required /></div>
          <div class="form-group full"><label for="subject"><i class="fa-solid fa-heading"></i> ${t.contatoLabels.assunto}</label><input type="text" id="subject" name="subject" required /></div>
          <div class="form-group full"><label for="message"><i class="fa-solid fa-comment-dots"></i> ${t.contatoLabels.mensagem}</label><textarea id="message" name="message" required></textarea></div>
          <input type="hidden" name="_subject" value="Novo contato do portfólio" />
          <input type="text" name="_gotcha" hidden />
          <div class="form-actions full"><button type="submit"><i class="fa-solid fa-paper-plane"></i> ${t.contatoLabels.enviar}</button><span class="status" id="form-status"></span></div>
        </form>
      </div>
      <div class="contact-extra reveal" style="--d:.2s">

  <div class="social-icons">

    <a href="https://www.linkedin.com/in/leonardo-soares-57a19039b/"
       target="_blank"
       class="linkedin social-card">
      <i class="fab fa-linkedin"></i>
      <span>LinkedIn</span>
    </a>

    <a href="https://github.com/soarezzgzs"
       target="_blank"
       class="github social-card">
      <i class="fab fa-github"></i>
      <span>GitHub</span>
    </a>

  </div>

</div>

    `;
  }

  contentArea.style.opacity = 0;
  setTimeout(() => {
    contentArea.innerHTML = html;
    contentArea.style.opacity = 1;
    initReveal(contentArea);
    const form = document.getElementById('contact-form');
    if (form) attachFormspreeHandler(form);
  }, 200);
}

// Filtro de projetos
function filterProjects(tech) {
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = (tech === 'all' || card.dataset.tech === tech) ? 'block' : 'none';
  });
}

// Formspree
function attachFormspreeHandler(form) {
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = currentLang === 'pt' ? 'Enviando...' : 'Sending...';
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        status.textContent = currentLang === 'pt' ? 'Mensagem enviada! ✅' : 'Message sent! ✅';
        status.className = 'status success';
        form.reset();
      } else {
        status.textContent = currentLang === 'pt' ? 'Erro ao enviar. Tente novamente.' : 'Error sending. Try again.';
        status.className = 'status error';
      }
    } catch {
      status.textContent = currentLang === 'pt' ? 'Erro inesperado.' : 'Unexpected error.';
      status.className = 'status error';
    }
  });
}

// Alternar idioma e atualizar tudo na hora
const langToggleBtn = document.getElementById('lang-toggle');
langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  const tside = texts[currentLang].sidebar;

  // Atualiza sidebar
  document.getElementById('menu-estudos').innerHTML = `<i class="fa-solid fa-user"></i> ${tside.quemSou}`;
  document.getElementById('menu-projetos').innerHTML = `<i class="fa-solid fa-briefcase"></i> ${tside.portfolio}`;
  document.getElementById('menu-contato').innerHTML = `<i class="fa-solid fa-comments"></i> ${tside.contato}`;
  document.querySelector('.sidebar-footer .btn-cv').innerHTML = `<i class="fa-solid fa-file-arrow-down"></i> ${tside.baixarCV}`;
  langToggleBtn.innerHTML = tside.idiomaBtn;

  // Atualiza botão de tema
  themeToggle.innerHTML = document.body.classList.contains('light-theme') ? tside.temaEscuro : tside.temaClaro;

  // Re-renderiza seção atual
  showContent(currentSection);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initReveal(document);
  showContent(currentSection);
});

// MENU

const menuBtn = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');

const menuEstudos = document.getElementById('menu-estudos');
const menuProjetos = document.getElementById('menu-projetos');
const menuContato = document.getElementById('menu-contato');
const nameMenu = document.getElementById('nameMenu');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});


menuEstudos.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  menuBtn.style.marginLeft = sidebar.classList.contains('open') ? '0' : '15px';
});

menuProjetos.addEventListener('click', () => {
  sidebar.classList.toggle('open');
})

menuContato.addEventListener('click', () => {
  sidebar.classList.toggle('open');
})
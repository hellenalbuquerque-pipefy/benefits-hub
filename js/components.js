// components.js
// Injeta header e footer em todas as páginas.
//
// Cada HTML declara BASE antes de importar este script:
//   - páginas na raiz (ex: index.html):        const BASE = './';
//   - páginas em /pilares/ ou subpastas:        const BASE = '../';

function renderHeader() {
  return `
    <header class="site-header" role="banner">
      <div class="container">

        <a href="${BASE}index.html" class="header-logo" aria-label="Benefits Hub — Página inicial">
          <span class="logo-wordmark" aria-hidden="true">pipefy</span>
          <span class="logo-divider" aria-hidden="true"></span>
          <span class="logo-label">Benefits Hub</span>
        </a>

        <nav class="site-nav" role="navigation" aria-label="Navegação principal">
          <a href="${BASE}index.html">Home</a>
          <a href="${BASE}parentalidade.html">Parentalidade</a>
          <a href="${BASE}links-uteis.html">Links Úteis</a>
          <a href="${BASE}fale-com-o-time.html" class="nav-cta">Fale com o Time</a>
        </nav>

      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-inner">
          <p class="footer-copy">© ${year} Pipefy · People &amp; Total Rewards</p>
          <nav class="footer-nav" aria-label="Links do rodapé">
            <a href="${BASE}index.html">Home</a>
            <a href="${BASE}parentalidade.html">Parentalidade</a>
            <a href="${BASE}links-uteis.html">Links Úteis</a>
            <a href="${BASE}fale-com-o-time.html">Fale com o Time</a>
          </nav>
        </div>
      </div>
    </footer>
  `;
}

function markActiveLink() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .footer-nav a').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();

  markActiveLink();
});

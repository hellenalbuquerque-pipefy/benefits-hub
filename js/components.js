// components.js — injeta header e footer em todas as páginas
// Cada HTML declara BASE antes deste script:
//   raiz (index.html etc.):     const BASE = './';
//   subpastas (/pilares/):      const BASE = '../';

const LOGO_PATH = 'M245.43 51.1485C245.43 51.0985 245.43 49.5185 245.44 49.4585C245.95 40.4285 254.89 38.9685 256.14 38.8585V28.9785C253.12 28.8085 233.56 31.7185 233.76 51.1285C233.77 51.1285 233.78 51.1485 233.78 51.1485H228.18V60.6685H233.72V97.6185H245.44V60.6685H257.84L269.48 82.0385L252.63 112.938H266.04L282.9 82.0285L266.06 51.1585H245.42L245.43 51.1485ZM286.46 51.1485L279.24 64.4985L285.9 76.6885L299.9 51.1285H286.47L286.46 51.1485ZM161.58 76.9585C160.45 81.9685 156.53 85.8385 151.45 86.9585C141.57 89.1285 132.93 80.5885 135.13 70.8385C136.26 65.8285 140.18 61.9585 145.25 60.8385C155.13 58.6685 163.78 67.2085 161.58 76.9585ZM158.04 51.2085C145.06 46.3085 134.68 53.9685 134.68 53.9685L132.62 51.2285H123.06V113.028H134.61V93.6485C134.61 93.6485 140.88 98.2485 149.25 98.2485C163.68 98.2485 175.25 85.9385 173.77 71.3985C172.85 62.3385 166.66 54.4685 158.05 51.2185L158.04 51.2085ZM189.98 67.0085L189.981 67.0061C190.055 66.8564 193.06 60.7385 202.48 60.7385C211.97 60.7385 214.98 66.9985 214.98 67.0085H189.98ZM202.53 49.3185C188.89 49.3185 177.83 60.2685 177.83 73.7785C177.83 87.2885 188.89 98.2385 202.53 98.2385C210.04 98.2385 219.78 94.5085 224.97 83.9285H211C210.23 84.5985 209.33 85.2185 208.28 85.7285C206.7 86.4785 204.8 86.9685 202.49 86.9685C193.98 86.9685 190.62 80.5285 190.44 78.7285H226.72C226.766 78.2739 226.831 77.8163 226.896 77.355L226.896 77.3544C226.999 76.6288 227.103 75.8942 227.14 75.1485C227.93 60.2585 215.95 49.3285 202.55 49.3285L202.53 49.3185ZM105.01 97.6885H116.58V51.2185H105.01V97.6885ZM77.4 86.9584C82.47 85.8384 86.39 81.9684 87.52 76.9584C89.72 67.2084 81.07 58.6684 71.19 60.8384C66.12 61.9584 62.2 65.8284 61.07 70.8384C58.87 80.5884 67.52 89.1284 77.4 86.9584ZM60.62 53.9684C60.62 53.9684 71 46.3084 83.98 51.2084L83.99 51.2184C92.6 54.4684 98.79 62.3384 99.71 71.3984C101.19 85.9384 89.62 98.2484 75.19 98.2484C66.81 98.2484 60.54 93.6484 60.54 93.6484V113.028H49V51.2284H58.56L60.62 53.9684Z';

function renderHeader() {
  return `
    <header class="site-header" role="banner">
      <div class="container">
        <a href="${BASE}index.html" class="header-logo" aria-label="Benefits Hub — Página inicial">
          <svg width="82" height="34" viewBox="49 18 250.9 106" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="${LOGO_PATH}" fill="white"/>
          </svg>
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
    </header>`;
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
    </footer>`;
}

function markActiveLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .footer-nav a').forEach(link => {
    if (link.getAttribute('href').split('/').pop() === current) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const h = document.getElementById('header-placeholder');
  const f = document.getElementById('footer-placeholder');
  if (h) h.innerHTML = renderHeader();
  if (f) f.innerHTML = renderFooter();
  markActiveLink();
});
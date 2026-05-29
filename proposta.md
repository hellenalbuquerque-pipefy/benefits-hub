# Benefits Hub — Proposta de Projeto

**People & Total Rewards · Pipefy · Versão 1.0 · Maio 2026**

---

## 1. Objetivo

O Benefits Hub é o ponto único de entrada para tudo relacionado a benefícios na Pipefy — substituindo os PDFs, o Google Sites e o canvas do Slack por uma experiência coesa, acessível e alinhada ao valor *People First*.

O hub não é uma lista de benefícios. Ele comunica o porquê deles existirem — o cuidado holístico, o bem-estar integral, o compromisso real com as pessoas — e só então mostra o como usar. A ordem importa.

**Público:** toda a população Pipefy global, com foco inicial em Brasil (CLT, Estagiários e Aprendizes).
**Acesso:** via link na intranet, sem login.

---

## 2. Estrutura de Conteúdo

### 2.1 Mapa do site

```text
/ Home
├── /pilares/emocional
├── /pilares/financeiro
├── /pilares/social
├── /pilares/ocupacional
├── /pilares/fisico
├── /pilares/intelectual
├── /pilares/comunitario
├── /parentalidade
├── /links-uteis
└── /fale-com-o-time
```

---

### 2.2 Home — o que entra

A home não é um sumário — é uma declaração de intenção.

| Bloco                   | Conteúdo                                                                   |
| ----------------------- | -------------------------------------------------------------------------- |
| Hero                    | Headline com a filosofia *People First* + frase âncora do Guia             |
| O Cuidado em Foco       | 3 cards com os pilares de cuidado mútuo, direto do Guia de Aplicação       |
| Por que temos a mandala | Bloco explicativo de cuidado holístico + como usar a mandala               |
| Mandala interativa      | Gráfico em SVG: os 7 pilares clicáveis — cada fatia leva à página do pilar |
| Cuidado na Prática      | 4 marcadores visuais (*Protagonismo*, *Cuidado no cotidiano*, etc.)        |
| Números em destaque     | 3 stats de impacto (ex: “R$ 525/mês em apoio psicológico”)                 |
| Acesso rápido           | Cards de atalho para Parentalidade, Links Úteis e Fale com o Time          |

---

### 2.3 Páginas de Pilar — arquitetura de conteúdo

Cada um dos 7 pilares tem a mesma estrutura:

#### Introdução do pilar

Texto curto explicando o porquê do pilar existir.

#### Cards de benefício com 4 camadas

1. **O que é:** descrição objetiva
2. **Por que importa:** impacto no bem-estar
3. **Como usar:** passo a passo prático + links
4. **FAQ inline:** perguntas frequentes em accordion (embutido no card)

---

### 2.4 Guia de Parentalidade

Cruzamento de benefícios por jornada:

* **Chegada do bebê:** Licença Maternidade/Paternidade, Cesta Natalidade, Pinguim
* **Primeiros meses:** Assistência Nutricional, Plano de Saúde do bebê
* **Crescimento:** Assistência Escolaridade Infantil e Babá
* **Transversal:** Apoio Psicológico Keiken, Seguro de Vida, Wellhub

---

### 2.5 Links Úteis

Cards de acesso rápido às plataformas parceiras.

---

### 2.6 Fale com o Time

SLA de acionamento via Slack.

---

## 3. Decisões Técnicas

### Stack recomendada

* HTML puro + CSS + JavaScript vanilla ✅
* Zero dependências
* Deploy no GitHub Pages
* Simples de manter

---

### Injeção de Componentes

Um script JS simples injeta header/footer compartilhados nas páginas.

---

### Roteamento e Caminhos (Paths)

Como o projeto possui subpastas, a IA deve garantir que:

* O caminho dos links no menu injetado
* As chamadas de CSS (`style.css`)
* E os scripts

funcionem perfeitamente tanto para a Home (na raiz do projeto) quanto para as páginas dentro da pasta `/pilares`.

#### Regra

Utilizar caminhos relativos corretos (usando `../` quando for necessário “sair da pasta” para encontrar o arquivo raiz).

---

### Acessibilidade (WCAG AA)

* Contraste mínimo 4.5:1 (fundo principal `#101A49`)
* Navegação por teclado em elementos interativos
* Estrutura de headings semântica (`h1 → h2 → h3`)

---

### Design System (Identidade Visual Pipefy)

O arquivo CSS deve obrigatoriamente utilizar variáveis (`:root`) com a paleta de cores oficial da Pipefy.

#### Paleta Principal (Main)

| Nome                    | Cor       |
| ----------------------- | --------- |
| Flowing Blue (Primary)  | `#005EFC` |
| Deep Focus Blue (Shade) | `#101A49` |
| Comfy Gray              | `#E6E6E6` |
| Plain White             | `#FFFFFF` |
| Focus Black             | `#000000` |

#### Paleta HR Service Delivery (Secundária)

| Nome                | Cor       |
| ------------------- | --------- |
| HR Primary          | `#7215D8` |
| HR Shade            | `#520F9A` |
| HR Tint             | `#9544ED` |
| HR Gradient Support | `#E13C7D` |

#### Regras de Aplicação

* O gradiente da marca HR deve ser construído usando o **HR Primary** e o **HR Gradient Support**
* O gradiente deve ser aplicado estritamente na orientação horizontal (`to right` ou `to left`)

---

## 4. Fora de Escopo (MVP)

* Versão US
* Personalização por perfil
* Fluxo de enrollment/solicitação interno
* Busca por palavra-chave
* Autenticação

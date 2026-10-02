# Charline Margotti

Website institucional one-page premium da **Dra. Charline Margotti — Biomédica Esteta • Patologista Clínica — CRBM 3766**, São Borja — RS.

> Conhecimento para transformar. Cuidado para preservar a essência.

## Estrutura

```
index.html              → página única (HEADER → HERO → SOBRE → PROCEDIMENTOS →
                          MANIFESTO → FILOSOFIA → LOCALIZAÇÃO → CTA → FOOTER)
assets/css/styles.css   → identidade visual, layout e responsivo
assets/js/main.js       → configuração de contato, menu, animações de entrada
assets/img/             → fotografias da profissional e favicon
```

## Como abrir

Basta abrir `index.html` no navegador. Para melhor resultado (mapa, fontes e SEO), sirva a pasta por HTTP:

```bash
npx serve .
```

## Configurar WhatsApp

Edite o topo de `assets/js/main.js`:

```js
const SITE_CONFIG = {
  whatsapp: "5555991140659",  // 55 (Brasil) + 55 (DDD) + número
  mensagem: "Olá, Dra. Charline! Gostaria de agendar um atendimento."
};
```

Todos os botões **Agendar**, o link **WhatsApp** (CTA final e footer) e o botão flutuante abrem a conversa com a mensagem automática.

## Conteúdo editável

| Onde | O quê |
|---|---|
| `index.html` → `#sobre` | Texto institucional da profissional |
| `index.html` → `#procedimentos` | Categorias de procedimentos (01 / 02 / 03) |
| `index.html` → `#localizacao` | Endereço e link do Google Maps |
| `assets/css/styles.css` → `:root` | Paleta de cores e tipografia |

### Paleta

| Cor | Hex | Uso |
|---|---|---|
| Espresso | `#2E2723` | Textos, fundos escuros, footer |
| Marfim | `#F6F1E8` | Fundo principal |
| Areia | `#DCCDBD` | Blocos secundários |
| Nude | `#B9A394` | Elementos de apoio / CTA final |
| Oliva acinzentado | `#7B7A68` | Detalhes mínimos |
| Champagne | `#C9B18A` | Linhas e microdetalhes de luxo |

## SEO

- **Title:** Dra. Charline Margotti | Biomédica Esteta em São Borja
- **Meta description:** Dra. Charline Margotti, Biomédica Esteta e Patologista Clínica — CRBM 3766. Harmonização facial e estética avançada em São Borja-RS, com foco em naturalidade e cuidado personalizado.
- Dados estruturados (JSON-LD), `lang="pt-BR"`, Open Graph, lazy loading e `prefers-reduced-motion`.

## Notas

- Substituir as fotos em `assets/img/` por arquivos **WebP/AVIF** quando houver versões otimizadas.
- Não publicar depoimentos, avaliações, antes/depois ou credenciais não fornecidos.

© 2026 Charline Margotti

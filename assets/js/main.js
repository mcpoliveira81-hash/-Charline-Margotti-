/* =========================================================
   CHARLINE MARGOTTI — interações do site
   ---------------------------------------------------------
   ⚙️  CONFIGURAÇÃO EDITÁVEL
   Preencha os campos abaixo e salve o arquivo.
   ========================================================= */

const SITE_CONFIG = {
  /* Número do WhatsApp no formato: 55 + DDD + número
     Exemplo: "5555991140659"                              */
  whatsapp: "5555991140659",

  /* Mensagem automática enviada ao clicar em Agendar */
  mensagem: "Olá, Dra. Charline! Gostaria de agendar um atendimento.",

  /* Link completo do Instagram
     Exemplo: "https://www.instagram.com/charline.margotti"   */
  instagram: "[INSERIR INSTAGRAM]"
};

/* =========================================================
   Não editar abaixo desta linha
   ========================================================= */
(function () {
  "use strict";

  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Links de contato ---------- */
  function montarWhatsapp() {
    const numero = SITE_CONFIG.whatsapp.replace(/\D/g, "");
    if (!numero || SITE_CONFIG.whatsapp.indexOf("[") === 0) return null;
    const texto = encodeURIComponent(SITE_CONFIG.mensagem || "");
    return "https://wa.me/" + numero + (texto ? "?text=" + texto : "");
  }

  const urlWhats = montarWhatsapp();
  const instaOK = SITE_CONFIG.instagram &&
                  SITE_CONFIG.instagram.indexOf("[") !== 0 &&
                  SITE_CONFIG.instagram.trim() !== "";

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    if (urlWhats) {
      el.setAttribute("href", urlWhats);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  document.querySelectorAll("[data-instagram]").forEach(function (el) {
    if (instaOK) {
      el.setAttribute("href", SITE_CONFIG.instagram.trim());
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  /* ---------- 2. Header ao rolar ---------- */
  const header = document.getElementById("header");

  function aoRolar() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    const flutuante = document.querySelector(".float-wa");
    if (flutuante) flutuante.classList.toggle("is-visible", window.scrollY > 320);
    parallax();
  }

  /* ---------- 3. Parallax sutil no retrato ---------- */
  const fotoHero = document.getElementById("heroImg");
  let pendente = false;

  function parallax() {
    if (reduzMovimento || !fotoHero || window.innerWidth < 901) return;
    if (pendente) return;
    pendente = true;
    requestAnimationFrame(function () {
      const desloc = Math.min(window.scrollY * 0.05, 26);
      fotoHero.style.translate = "0 " + desloc + "px";
      pendente = false;
    });
  }

  window.addEventListener("scroll", aoRolar, { passive: true });

  /* ---------- 4. Menu mobile ---------- */
  const botao = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  function alternarMenu(abrir) {
    if (!botao || !menu) return;
    botao.setAttribute("aria-expanded", String(abrir));
    botao.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
    menu.hidden = false;
    menu.classList.toggle("is-open", abrir);
    document.body.style.overflow = abrir ? "hidden" : "";
    if (!abrir) {
      setTimeout(function () { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 500);
    }
  }

  if (botao && menu) {
    menu.hidden = true;
    botao.addEventListener("click", function () {
      alternarMenu(botao.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { alternarMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") alternarMenu(false);
    });
  }

  /* ---------- 5. Animações de entrada ---------- */
  const alvos = document.querySelectorAll("[data-reveal]");

  if (reduzMovimento || !("IntersectionObserver" in window)) {
    alvos.forEach(function (el) { el.classList.add("is-inview"); });
  } else {
    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-inview");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    alvos.forEach(function (el) { observador.observe(el); });
  }

  /* ---------- 6. Marca o bloco ativo no menu ---------- */
  const secoes = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window && secoes.length) {
    const marcaNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        const link = document.querySelector('.nav a[href="#' + entrada.target.id + '"]');
        if (link) link.classList.toggle("is-active", entrada.isIntersecting);
      });
    }, { threshold: 0.35 });
    secoes.forEach(function (s) { marcaNav.observe(s); });
  }

  /* ---------- início ---------- */
  aoRolar();
})();

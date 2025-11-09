// ==UserScript==
// @name         YouTube CORS-Patcher (Loader)
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Nada muito importante, apenas o importante pra carregar o script.
// @author       henryykkkk
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const scriptUrl = 'https://raw.githubusercontent.com/henryykkkk/youtube-cors-patcher/refs/heads/main/youtube-cors-patcher.js';
    const PREFIX = '%c[YTCORSFix Loader]';
    const PREFIX_STYLE = 'color: #4a90e2; font-weight: bold;';
    const SUCCESS_STYLE = 'color: #7ed321; font-weight: bold;';
    const ERROR_STYLE = 'color: #d0021b; font-weight: bold;';

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = false;

    script.onload = function() {
        console.log(
            `%c ██████╗ ██╗  ██╗\n██╔═══██╗██║ ██╔╝\n██║   ██║█████╔╝ \n██║   ██║██╔═██╗ \n╚██████╔╝██║  ██╗\n ╚═════╝ ╚═╝  ╚═╝\n%c${PREFIX} Script principal carregado com sucesso! Os vídeos agora devem funcionar.`,
            'color: #7ed321; font-weight: bold;',
            PREFIX_STYLE,
            SUCCESS_STYLE
        );
        this.remove();
    };

    script.onerror = function() {
        console.error(`${PREFIX} %cFalha ao carregar o script principal de:`, PREFIX_STYLE, ERROR_STYLE, scriptUrl);
        this.remove();
    };

    // Adiciona o script à página para que o navegador o baixe e execute
    (document.head || document.documentElement).appendChild(script);

})();

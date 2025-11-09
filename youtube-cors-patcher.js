(function() {
    'use strict';

    const PREFIX = '%c[YTCORSFix]';
    const PREFIX_STYLE = 'color: #4a90e2; font-weight: bold;';
    const INFO_STYLE = 'color: #888;';

    // função que contém a lógica do patch
    const applyPatch = () => {
        // se o fetch já foi corrigido, não faz nada novamente.
        if (window.fetch && window.fetch.ytCorsFixPatched) {
            return;
        }

        // verifica se o fetch existe antes de tentar corrigir
        if(!window.fetch) {
            console.warn(`${PREFIX} %cwindow.fetch não está disponível. Não foi possível aplicar o patch.`, PREFIX_STYLE);
            return;
        }

        // armazena a função fetch original
        const originalFetch = window.fetch;

        // substitui a função fetch global pela nossa versão modificada
        window.fetch = function(resource, options = {}) {
            // verifica se a requisição é para um URL de vídeo do YouTube que precisa ser corrigido
            if (typeof resource === 'string' && resource.includes('googlevideo.com') && resource.includes('videoplayback')) {
                console.info(`${PREFIX} %cRequisição de videoplayback corrigida.`, INFO_STYLE, 'color: #555;');

                // a correção principal: remove as credenciais da requisição.
                const modifiedOptions = { ...options, credentials: 'omit' };

                // chama o fetch original com as opções modificadas
                return originalFetch.call(this, resource, modifiedOptions);
            }

            // para todas as outras requisições, usa o fetch original sem alterações
            return originalFetch.apply(this, arguments);
        };

        // marca a função fetch como "corrigida" para evitar que o script seja aplicado novamente
        window.fetch.ytCorsFixPatched = true;
    };

    // 1. aplica o patch imediatamente no carregamento inicial da página
    applyPatch();

    // 2. o youtube é uma SPA (single page application) e para garantir que o patch
    // permaneça ativo durante as navegações (ex: da página inicial para um vídeo),
    // nós ouvimos o evento de navegação do YouTube.
    document.addEventListener('yt-navigate-finish', applyPatch);

})();

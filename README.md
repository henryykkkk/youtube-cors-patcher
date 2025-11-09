# YouTube CORS-Patcher

> Um userscript que corrige o erro "Access to fetch... blocked by CORS policy" no YouTube, permitindo que os vídeos sejam carregados normalmente.

[![GitHub release](https://img.shields.io/github/v/release/henryykkkk/youtube-cors-patcher?style=flat-square)](https://github.com/henryykkkk/youtube-cors-patcher/releases)
[![License: MIT](https://img.shields.io/github/license/henryykkkk/youtube-cors-patcher?style=flat-square)](https://opensource.org/licenses/MIT)
[![Tampermonkey Compatible](https://img.shields.io/badge/Tampermonkey-Compatible-blue?style=flat-square&logo=tampermonkey)](https://www.tampermonkey.net/)

## 📖 Sobre este projeto

Você já tentou assistir a um vídeo no YouTube e ele simplesmente não carrega, exibindo um erro de CORS no console do desenvolvedor? Este problema ocorre devido a uma incompatibilidade entre a forma como o player do YouTube faz a requisição do vídeo e a forma como os servidores do Google respondem.

O **YouTube CORS-Patcher** é uma solução leve e não invasiva que corrige esse problema em tempo real, permitindo que você desfrute do YouTube sem interrupções.

### O Problema: O Erro de CORS

O erro que você vê no console se parece com isto:

![ERRO](https://iili.io/Kb8tJJ1.png)

**Isso acontece porque:**
1.  O player do YouTube solicita o vídeo enviando credenciais (`credentials: 'include'`).
2.  Por uma regra de segurança do navegador, se uma requisição envia credenciais, o servidor de destino **não pode** responder com um cabeçalho `Access-Control-Allow-Origin: *` (curinga). Ele precisa especificar a origem exata (`https://www.youtube.com`).
3.  O servidor do Google Video está respondendo com `*`, o que entra em conflito com a requisição que inclui credenciais. O navegador bloqueia a requisição para sua segurança, e o vídeo não carrega.

### A Solução: Como o Script Funciona

💡 Este script utiliza uma técnica chamada "Monkey Patching" para interceptar todas as requisições de rede (`fetch`) feitas pela página.

Quando uma requisição para um vídeo do YouTube (`videoplayback`) é detectada, o script modifica a opção `credentials` de `'include'` para `'omit'`. Isso torna a requisição compatível com a resposta `*` do servidor, resolvendo o conflito de CORS e permitindo que o vídeo seja carregado com sucesso.

A modificação é mínima e direcionada, afetando apenas as requisições problemáticas e garantindo que o resto do site continue funcionando perfeitamente.

---

## 🚀 Instalação

Usar este script é fácil e só leva um minuto. Você precisará de um gerenciador de userscripts. Recomendamos o **Tampermonkey**.

### Passo 1: Instalar o Tampermonkey

Se você ainda não o tem, instale a extensão do Tampermonkey para o seu navegador:

*   [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
*   [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
*   [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
*   [Safari](https://www.tampermonkey.net/?browser=safari)
*   [Opera](https://addons.opera.com/extensions/details/tampermonkey/)

### Passo 2: Instalar o Script

Você tem duas maneiras de instalar o **YouTube CORS-Patcher**:

#### Opção A: Instalação Direta (Recomendado)

Clique no link abaixo. O Tampermonkey deve abrir automaticamente e perguntar se você deseja instalar o script.

[![Install directly with Tampermonkey](https://img.shields.io/badge/INSTALAR-blue?style=for-the-badge)](https://github.com/henryykkkk/youtube-cors-patcher/raw/main/youtube-cors-patcher.user.js)

#### Opção B: Instalação Manual

1.  Clique [aqui](https://github.com/henryykkkk/youtube-cors-patcher/blob/main/youtube-cors-patcher.user.js) para ver o código do script.
2.  Copie todo o código (`Ctrl+C` ou `⌘+C`).
3.  Clique no ícone do Tampermonkey no seu navegador e selecione **"Painel"** (Dashboard).
4.  Clique no ícone de **"mais"** (`+`) para criar um novo script.
5.  Apague o código padrão e cole o código que você copiou.
6.  Pressione `Ctrl+S` (ou `⌘+S`) para salvar.

---

## ✅ Uso

Após a instalação, o script funciona **automaticamente**.

1.  Simplesmente acesse o YouTube.
2.  Tente reproduzir um vídeo que antes não carregava.
3.  Pronto! O vídeo deve começar a tocar normalmente.

Para verificar se o script está ativo, abra o console do desenvolvedor (`F12`) na página do YouTube. Você deverá ver esta mensagem:

![OK](https://iili.io/KbU5SeV.png)

---

## ❓ Perguntas Frequentes (FAQ)

**Este script é seguro?**

Sim. O código é open source, o que significa que qualquer pessoa pode inspecioná-lo. Ele faz uma única e específica modificação em requisições de rede para o domínio `googlevideo.com`, não coletando nenhum dado pessoal ou interferindo em outras partes do site.

**Funciona em navegadores móveis?**

Sim. Se você tiver um navegador móvel que suporte extensões (como Firefox para Android com Tampermonkey), o script funcionará.

**Isso vai quebrar outras funcionalidades do YouTube?**

Não. O script foi projetado para ser o mais específico possível, modificando apenas as requisições que causam o erro de CORS. Outras funcionalidades do YouTube devem permanecer intactas.

**Este script está afiliado ao Google ou ao YouTube?**

Não, de forma alguma. Este é um projeto independente criado para resolver um problema técnico enfrentado por usuários.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você encontrar um bug ou tiver uma sugestão de melhoria, sinta-se à vontade para:

1.  Abrir uma **[Issue](https://github.com/henryykkkk/youtube-cors-patcher/issues)** para descrever o problema.
2.  Fazer um **[Pull Request](https://github.com/henryykkkk/youtube-cors-patcher/pulls)** com sua correção ou melhoria.

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ⚠️ Aviso Legal

Este software é fornecido "como está", sem garantia de qualquer tipo. O uso deste script é por sua conta e risco. Os desenvolvedores não são responsáveis por qualquer problema que possa surgir de seu uso.

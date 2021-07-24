base packages

- electron -> devDependece
- concurrently -> devDependece
- electron-builder -> devDependece
- wait-on -> devDependece
- electron-is-dev -> NormalDependence

base Scripts

- "dev": "concurrently \"npm run start\" \"wait-on http://localhost:3000 && electron .\""
  Serve para rodar o desktopapp em modo de desenvolvimento, o pacote concurrently é usado para esse fim, ele roda primeiro o npm run start e dois o pacote wait-on para esperar a url http://localhost:3000 subir e apartir disso rodar o electron

- "startAlone": "electron ." 
  Roda o electron independente, start o electron sozinho, usado para testar se o electron esta sendo aberto corretamente.

- "pack": "electron-builder --dir"
  apenas gera o diretório do pacote sem realmente empacotá-lo. Isso é útil para fins de teste

- "dist": "electron-builder"
  para empacotar em um formato distribuível (por exemplo, dmg, windows installer, deb package, gera um instalador.

Observações

- Para gerar uma build do desktopapp com react, primeiro é necessário buildar o app react, depois que a pasta build estivar gerada você pode rodar o comando npm run pack ou npm run dist, para gerar um executavel do desktopapp.
- -OBS: o arquivo electron tem que estar dentro da public

- Se faz necessário falar para o react qual é baseUrl do servidor, para que quando acessar o /build/index.html não venha uma página em branco, então adicione ao package.json "homepage": "." e execute npm run build, e pronto, o electron vai renderizar corretamente o conteudo de /build/index.html, caso você tente file://C:/<seusDiretórios>/build/index.html você ainda verá uma tela em branco, pois o chrome irá gerar um erro de CORS.

- O pacote electron-builder pede para que você crie um arquivo electron.js ao invés de main.js e como estamos usando react, fica mais omenos dessa forma /public/electron.js

- nodeIntegration: true, contextIsolation: false, enableRemoteModule: true
  -> O primeiro fala para o electron que uma integração com o node será requisitada
  -> O segundo desbloqueia o contexto de módulos electron
  -> O terceiro permite que seja acessada de forma remota os módulos node do electron através do frontEnd.


# Projeto Mettzer-FrontEnd

## Principais tecnologias utilizadas

<code><img height="30" src="https://bognarjunior.files.wordpress.com/2018/09/typescript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>
<code><img height="30" src="https://v4.mui.com/static/logo.png"></code>

### Desenvolvido com api pública do Github, ReactJS, Material UI, JavaScript e TypeScript.

# Iniciando

1. VS code instalado, caso não tenha <a href="https://code.visualstudio.com/download">clique aqui para instalar</a> .
2. Tenha o git instalado em sua máquina, caso não tenha <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">clique aqui para instalar</a> .
3. Em seu Github crie um repositório vazio, caso não saiba <a href="https://docs.github.com/pt/get-started/quickstart/create-a-repo">clique aqui para criar</a> .

## Exemplo de como usar

Caso não deseje ter um repositório no seu GitHub, apenas faça o clone.
Criando uma nova pasta do projeto:

Windows:

1. Crie uma nova pasta em algum local que deseja.
2. Abra o terminal do GitBash dentro da pasta criada, depois de entrar nela clique com botão direito, a opção vai aparecer.
3. Copie esta linha: <code>git clone git@github.com:DanielTrybe/mettzer-frontend.git</code> e tecle enter.
4. Entre na pasta com <code>cd mettzer-FrontEnd</code>
5. Execute <code>git remote remove origin</code>
6. Pegue o link do seu respositório criado no inicio!
7. Execute <code>git remote add origin https://github.com/seurepositorioaqui</code>
8. Execute <code>git add .</code> <code>git commit -m "novo projeto"</code> <code>git push origin main</code>
9. Execute <code>code .</code>

Linux:

1. Abra o terminal do linux e navegue até a pasta que deseja.
2. Copie esta linha: <code>git clone git@github.com:DanielTrybe/mettzer-frontend.git</code> e tecle enter.
3. Entre na pasta com <code>cd mettzer-FrontEnd</code>
4. Execute <code>git remote remove origin</code>
5. Pegue o link do seu respositório criado no inicio!
6. Execute <code>git remote add origin https://github.com/seurepositorioaqui</code>
7. Execute <code>git add .</code> <code>git commit -m "novo projeto"</code> <code>git push origin main</code>
8. Execute <code>code .</code>

Com isto inicializamos um novo repositório, associamos o remoto com o link do repositório e atualizamos a pasta.

## Segunda parte

1. Abra o VS code, vá em arquivos e procure a pasta do projeto.
2. Clique no menu terminal e depois em novo terminal, execude o comando: <code>npm install</code>
3. Não interrompa a instalação, ou terá que executar o comando acima novamente.
4. Após tudo instalado, execute no terminal: <code>npm start</code>
5. Aguarde um pouco, dependendo da sua máquina pode levar bastante tempo.
6. Quando terminar, será aberto em seu navegador o website.
7. Pronto! A aplicação está pronta para uso!

# Conteúdo

## Página inicial

Consiste em listar a pesquisa feita por um usuário no campo de busca, nesta página será exibido em cards para cada resultado com título, autores, tipo, favorito e links para ir a página.

![SnapCrab_NoName_2022-9-5_10-5-36_No-00](https://user-images.githubusercontent.com/78499630/188461607-e499dbde-249a-4a20-81ac-edc96b6df639.png)
![SnapCrab_NoName_2022-9-5_10-7-30_No-00](https://user-images.githubusercontent.com/78499630/188461677-56c7596c-7ed1-487a-b7af-dc0897923576.png)

## Favoritos

Nesta página você vai poder ver todos os cards favoritados anteriormente.

![SnapCrab_NoName_2022-9-5_10-7-44_No-00](https://user-images.githubusercontent.com/78499630/188461716-69b96a4a-f13b-425a-b812-aaf27649821c.png)
![SnapCrab_NoName_2022-9-5_10-7-54_No-00](https://user-images.githubusercontent.com/78499630/188461744-d50ca347-5156-44f1-a1af-95879262256f.png)

### Estrutura

O código contém a seguinte estrutura:

```
  src
  |  |-__mocks__
  |  |-__tests__
  |  |-components
  |    |-items
  |    |-layouts
  |    |-modal
  |  |-hooks
  |  |-images
  |  |-pages
  |    |-CardDetails
  |    |-Cards
  |  |-routes
  |  |-services
  |  |-api
  |  |-context
  |  |-templates
```

# 🍽️ Restaurante Dinâmico com EJS

Este é um projeto de um site para um restaurante, construído com **Node.js**, **Express** e **EJS**. O projeto foi refatorado a partir de arquivos HTML estáticos para uma arquitetura dinâmica e baseada em componentes (partials).

## 🚀 Funcionalidades

- **Página Inicial:** Apresentação do restaurante.
- **Cardápio Dinâmico:** Leitura e renderização automática de itens do cardápio a partir de um arquivo de dados JSON (`cardapio.json`).
- **Reservas de Mesa:** Formulário interativo para reservas com validação de campos.
- **Fale Conosco:** Formulário para envio de mensagens e contato.
- **Páginas de Sucesso Dinâmicas:** Ao enviar um formulário, o usuário é redirecionado para uma tela de sucesso personalizada gerada dinamicamente pelo servidor, sem o uso de scripts de alerta nativos.
- **Arquitetura de Partials:** Reaproveitamento de código em todo o site usando componentes do EJS (`head`, `nav` e `footer`).

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para gerenciamento de rotas e requisições HTTP.
- **EJS (Embedded JavaScript)**: Motor de templates para gerar HTML com JavaScript injetado.
- **HTML5 & CSS3**: Estruturação e estilização limpa e responsiva.

## 📁 Estrutura do Projeto

```text
novo-restaurante-ejs/
├── public/               # Arquivos estáticos servidos para o navegador
│   ├── css/
│   │   └── estilo.css    # Folha de estilos principal
│   └── img/              # Imagens do site
├── routes/
│   └── index.js          # Definição de todas as rotas (GET/POST) da aplicação
├── views/                # Templates EJS (Páginas)
│   ├── partials/         # Pedaços de código reaproveitáveis (Componentes)
│   │   ├── head.ejs
│   │   ├── nav.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── cardapio.ejs
│   ├── reserva.ejs
│   ├── faleconosco.ejs
│   └── sucesso.ejs
├── app.js                # Arquivo principal (Ponto de entrada do servidor)
├── cardapio.js           # Módulo para leitura dos dados do cardápio
└── package.json          # Dependências do projeto
```

## ⚙️ Como executar localmente

1. Certifique-se de ter o **Node.js** instalado na sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/novo-restaurante-ejs.git
   ```
3. Acesse a pasta do projeto:
   ```bash
   cd novo-restaurante-ejs
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o servidor:
   ```bash
   node app.js
   ```
6. Abra o seu navegador e acesse: http://localhost:3000
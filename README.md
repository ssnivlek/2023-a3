# AluTools

AluTools é uma aplicação CRUD que utiliza IBM Cloudant (NoSQL DB).

## Requisitos

- Node.js e npm instalados
- Conta na IBM Cloud para criar a API Key do Cloudant
- Conta na SendGrid para utilizar SMTP para email

## Documentação

A documentação para SendGrid está disponível [aqui](<https://pages.twilio.com/sendgrid-emailbrand-brazil-latam-1?utm_source=google&utm_medium=cpc&utm_term=sendgrid&utm_campaign=SendGrid_G_S_LATAM_Brand_(PTG)&cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&gad=1&gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K30j6GRVYsloiGfCwoReAePMVDzx9isgsNbowklLOOv6VwIQXHIqy4aArbPEALw_wcB>).

A documentação da API está disponível [aqui](https://documenter.getpostman.com/view/17417879/2s93sXcuu2).

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm i
```

## Testes

Para rodar os testes utilizando Jest, execute o seguinte comando:

```bash
npm run test
```

## Iniciando a Aplicação

Para iniciar a aplicação, você pode usar o seguinte comando:

```bash
npm run dev
```

Este comando utiliza o Nodemon para desenvolvimento e autostart. Se preferir, você pode usar o seguinte comando para iniciar a aplicação:

```bash
npm start
```

## Configuração

É necessário um arquivo `.env` com os seguintes parâmetros:

```env
CLOUDANT_APIKEY = "api-key cloudant"
CLOUDANT_URL = "url acesso cloudant"
CLOUDANT_DATABASE = "db cloudant, pode ser qualquer nome, ele será criado sozinho"
SENDGRID_SENDER = "email cadastrado no sendgrid"
SENDGRID_APIKEY = "apikey sendgrid"
```

Por favor, substitua os valores acima pelos seus respectivos dados de configuração.

## Referenciar em ABNT

Abaixo segue como referenciar este repositório nas normas ABNT:

```
ALUTOOLS. AluTools: uma aplicação CRUD que utiliza IBM Cloudant (NoSQL DB). Disponível em: <https://github.com/ssnivlek/2023-a3>. Acesso em: 18 jun. 2023.
```

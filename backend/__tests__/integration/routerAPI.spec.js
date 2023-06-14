const request = require("supertest");
const app = require('../../server/server');
const router = require("../../server/routes/router");
const { addDocController } = require("../../server/useCases/addManagement/addController");
const { updateDocController } = require("../../server/useCases/updateDocManager/updateDocController");
require('dotenv').config()

describe("Router API Tests", () => {
  
    beforeEach(() => {
      app.use("/", router);
    });
  
    afterEach(() => {
      // Cleanup app instance after each test
    });
  
    test("POST /add should call addDocController", async () => {
      app.post("/add", addDocController);
  
      await request(app)
        .post("/add")
        .send({
            "nome_produto": "Chave Teste",
            "funcao": "Apertar parafusos 4/2mm",
            "alocado": false,
            "periodo": "",
            "etiqueta": "JKXICDF",
            "email_alugado": "",
            "email_responsavel": "teste@mail.com",
            "preco": "R$20.00"
          })
        .expect(200)
    });
  test("PUT /update/:id should call updateDocController", async () => {
      const id = "ChaveTeste";
      app.put(`/update/${id}`, updateDocController);
  
      await request(app)
        .put(`/update/${id}`)
        .send({
            "nome_produto": "Chave Teste",
            "funcao": "Apertar parafusos 4/2mm",
            "alocado": true,
            "periodo": "30/05/2023-26/05/2023",
            "etiqueta": "JKXICDF",
            "email_alugado": "alugador-email@email.com",
            "email_responsavel": "seu-email@mail.com",
            "preco": "R$20.00"
          })
        .expect(200)
    });

  
  });

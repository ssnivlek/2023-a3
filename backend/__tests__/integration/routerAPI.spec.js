const request = require("supertest");
const app = require('../../server/server');
const router = require("../../server/routes/router");
const { addDocController } = require("../../server/useCases/addManagement/addController");
const { getAllDocsController } = require("../../server/useCases/getAllManager/getAllController");
require("../../server/useCases/getAllManager/getAllController");
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

    test("GET /allDocs should call getAllDocsController", async () => {
      app.get("/allDocs", getAllDocsController);

      await request(app)
        .get("/allDocs")
        .expect(200)
    });
  });
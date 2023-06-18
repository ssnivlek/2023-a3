const request = require("supertest");
const app = require("../../server/server");
const router = require("../../server/routes/router");
const { addDocController } = require("../../server/useCases/addManagement/addController");
const {
  updateDocController,
} = require("../../server/useCases/updateDocManager/updateDocController");
const {
  deleteDocController,
} = require("../../server/useCases/deteleteDocManager/deleteDocController");
const { getAllDocsController } = require("../../server/useCases/getAllManager/getAllController");
const { getDocController } = require("../../server/useCases/getDocManager/getDocController");
require("dotenv").config();

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
        nome_produto: "Chave Teste",
        funcao: "Apertar parafusos 4/2mm",
        alocado: false,
        periodo: "",
        etiqueta: "JKXICDF",
        email_alugado: "",
        email_responsavel: "teste@mail.com",
        foto_ferramenta:
          "https://www.hfmultiferramentas.com.br/media/catalog/product/cache/90dbb86a669057d15fdb380e69490e5a/0/7/07d60d41-a5c5-408d-9f7f-416557434284ch_fenda_sata_6x100_2.jpg",
        preco: "R$20.00",
      })
      .expect(200);
  });

  test("PUT /update/:id should call updateDocController", async () => {
    const id = "ChaveTeste";
    app.put(`/update/${id}`, updateDocController);

    await request(app)
      .put(`/update/${id}`)
      .send({
        nome_produto: "Chave Teste",
        funcao: "Apertar parafusos 4/2mm",
        alocado: true,
        periodo: "30/05/2023-26/05/2023",
        etiqueta: "JKXICDF",
        email_alugado: "alugador-email@email.com",
        email_responsavel: "seu-email@mail.com",
        foto_ferramenta:
          "https://www.hfmultiferramentas.com.br/media/catalog/product/cache/90dbb86a669057d15fdb380e69490e5a/c/h/chave_philips_crownman_5.jpg",
        preco: "R$20.00",
      })
      .expect(200);
  });

  test("DELETE /delete/:id should call deleteDocController", async () => {
    const id = "example_id";
    app.delete(`/delete/${id}`, deleteDocController);

    await request(app).delete(`/delete/${id}`).expect(200);
  });

  test("GET /allDocs should call getAllDocsController", async () => {
    app.get("/allDocs", getAllDocsController);

    await request(app).get("/allDocs").expect(200);
  });

  test("GET /get/:id should call getDocController", async () => {
    const id = "ChaveTeste";
    app.get(`/get/${id}`, getDocController);

    await request(app).get(`/get/${id}`).expect(200);
  });
});

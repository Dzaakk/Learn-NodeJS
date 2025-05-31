import express from "express";
import expressFileUpload from "express-fileupload";
import request from "supertest";


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(expressFileUpload())

app.post('/json', (req, res) => {
    const name = req.body.name;
    res.json({
        hello: `Hello ${name}`
    })
})

app.post('/form', (req, res) => {
    const name = req.body.name;
    res.json({
        hello: `Hello ${name}`
    })
})

app.post('/file', async (req, res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname + "/upload/" + textFile.name);

    res.send(`Hello ${req.body.name}, you uploaded ${textFile.name}`)
})

test('Test Request File Upload', async () => {
    const response = await request(app)
        .post("/file")
        .set("Contet-Type", "multipart/form-data")
        .field("name", "Dzak")
        .attach("article", __dirname + "/example.txt")

    expect(response.text).toBe("Hello Dzak, you uploaded example.txt")
});

test('Test Request JSON', async () => {
    const response = await request(app)
        .post("/json")
        .set("Contet-Type", "application/json")
        .send({ name: "Dzak" });

    expect(response.body).toEqual({
        hello: `Hello Dzak`
    })

});

test('Test Request Form', async () => {
    const response = await request(app)
        .post("/form")
        .set("Contet-Type", "application/x-www-form-urlencoded")
        .send("name=Dzak");

    expect(response.body).toEqual({
        hello: `Hello Dzak`
    })

});
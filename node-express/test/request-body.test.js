import express from "express";
import request from "supertest";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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
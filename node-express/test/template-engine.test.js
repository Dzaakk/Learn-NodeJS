import express from "express";
import mustacheExpress from "mustache-express";
import request from "supertest";

const app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "html")
app.engine("html", mustacheExpress())

app.get('/', (req, res) => {
    res.render('index', {
        title: "Say Hello",
        say: "Hello Bro"
    })
})

test("Test Response", async () => {
    const response = await request(app).get("/");
    console.info(response.text);
    expect(response.text).toContain("Say Hello")
    expect(response.text).toContain("Hello Bro")
})
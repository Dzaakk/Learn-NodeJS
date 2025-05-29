import express from "express";
import request from "supertest";

const app = express()

app.use("/static", express.static(__dirname + "/static"))

app.get('/', (req, res) => {
    res.send(`Hello Response`);
})

app.get('/word.txt', (req, res) => {
    res.send(`Hello Response`);
})

test("Test Static File", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response")
})
test("Test Static File /contoh.txt", async () => {
    const response = await request(app).get("/word.txt");
    expect(response.text).toBe("Hello Response")
})
test("Test Static File /static/contoh.txt", async () => {
    const response = await request(app).get("/static/word.txt");
    expect(response.text).toBe("Hello World")
})

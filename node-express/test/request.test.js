import express from "express";
import request from "supertest";

const app = express()

app.get('/', (req, res) => {
    res.send("Hello")
})

test("Test ExpressSJ", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello")
})

import express from "express";
import request from "supertest";

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/example.txt")
})

test("Test Response Send File", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("This is sample text")
})
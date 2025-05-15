import express from "express";
import request from "supertest";

const app = express()

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
})
test("Test Request Query Parameter", async () => {
    const response = await request(app).
        get("/").
        query({ firstName: "Dzak", lastName: "M" });
    expect(response.text).toBe("Hello Dzak M")
})
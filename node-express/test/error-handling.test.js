import express from "express";
import request from "supertest";

const app = express()
const errorMiddleware = (err, req, res, nex) => {
    res.status(500).send(`Error: ${err.message}`);
};

app.get('/', (req, res) => {
    throw new Error("whoops");
});

app.use(errorMiddleware);

test("Test Error Handling", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(500)
    expect(response.text).toBe("Error: whoops")
});
import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

const app = express();
app.use(cookieParser("secret-key-yeah"));
app.use(express.json())

app.get('/', (req, res) => {
    const name = req.signedCookies["Login"];
    res.send(`Hello ${name}`)
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, { path: "/", signed: true })
    res.send(`Hello ${name}`)
});


test('Test Signed Cookie Read', async () => {
    const response = await request(app).get("/")
        .set("Cookie", "Login=s%3ADzak.SYmZUcRwFfuOPam04HFRRMHK3lweMOqSnIsg%2FORA9iY; Path=/");
    expect(response.text).toBe("Hello Dzak")
});

test('Test Signed Cookie Write', async () => {
    const response = await request(app).post("/login")
        .send({ name: "Dzak" });
    console.info(response.get("Set-Cookie"));
    expect(response.get("Set-Cookie").toString()).toContain("Dzak")
    expect(response.text).toBe("Hello Dzak")
});
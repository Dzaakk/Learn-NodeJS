import http from "http";
import { TodolistService } from "./todolis-service.mjs";

const service = new TodolistService()
const server = http.createServer((request, response) => {
    if (request.method === "GET") {
        response.setHeader("Content-Type", "application/json")
        service.getTodoList(request, response);
    } else if (request.method === "POST") {
        service.createTodo(request, response);
    }
});

server.listen(3000);
export class TodolistService {

    todolist = ["Agent A", "Agent B", "Agent C"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })

    }
    getTodoList(request, response) {
        response.write(this.getJsonTodoList());
        response.end();
    }
}
export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Dzak") {
        throw new MyException("this is exception")
    } else {
        return "OK"
    }
}
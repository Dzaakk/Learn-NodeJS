import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true,
            handleRejections: true,
            filename: "rejection.log"
        })
    ]
})
async function callAsync() {
    return Promise.reject("reject");
}

callAsync();
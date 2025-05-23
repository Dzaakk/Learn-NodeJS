import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true,
            filename: "exception.log"
        })
    ]
})

hello();

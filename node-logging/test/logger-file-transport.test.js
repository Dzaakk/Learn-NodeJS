import winston from "winston"

test("create new logger with file transport", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            })
        ]
    })

    logger.log({
        level: "info",
        message: "this is info"
    })
})
import winston from "winston"

test("create new logger transport level", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "application-error.log"
            })
        ]
    })

    logger.info("this is info")
    logger.info("this is info")
    logger.info("this is info")
    logger.error("this is error")
    logger.error("this is error")
    logger.error("this is error")
})
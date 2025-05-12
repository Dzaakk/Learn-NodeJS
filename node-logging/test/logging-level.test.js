import winston from "winston"

test("logging with level", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.log({ level: "error", message: "this is error" })
    logger.log({ level: "warn", message: "this is warn" })
    logger.log({ level: "info", message: "this is info" })
    logger.log({ level: "http", message: "this is http" })
    logger.log({ level: "verbose", message: "this is verbose" })
    logger.log({ level: "debug", message: "this is debug" })
    logger.log({ level: "silly", message: "this is silly" })
})

test("logging with shortuct level", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.error("this is error")
    logger.warn("this is warn")
    logger.info("this is info")
    logger.http("this is http")
    logger.verbose("this is verbose")
    logger.debug("this is debug")
    logger.silly("this is silly")
})
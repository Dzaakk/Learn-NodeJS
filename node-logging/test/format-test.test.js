import winston from "winston"

test("logging with format", () => {
    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.logstash(),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.info("this is info")
})

test("logging with printf format", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.printf(log => {
            // return JSON.stringify(log)
            // return `${log.level}: ${log.message}`
            return `${new Date()} : ${log.level.toUpperCase()}: ${log.message}`
        }),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.error("this is error")
    logger.warn("this is warn")
    logger.info("this is info")
})
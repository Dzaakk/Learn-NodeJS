import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
    class MyTransport extends TransportStream {
        constructor(option) {
            super(option);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }
    }

    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new MyTransport({})
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
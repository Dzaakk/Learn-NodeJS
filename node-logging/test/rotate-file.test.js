import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("loggin with daily rotate file", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "7d"
            })
        ]
    });

    for (let i = 0; i < 100000; i++) {
        logger.info("this is info")
    }
})
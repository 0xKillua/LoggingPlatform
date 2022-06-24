const { createLogger, transports, format } = require("winston");
const morgan = require("morgan");

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    format.colorize(),
    format.errors({ stack: true }) // <-- use errors format
  ),
  transports: [
    // new transports.File({
    //   filename: "./logs/all-logs.log",
    //   json: false,
    //   maxsize: 5242880,
    //   maxFiles: 5
    // }),
    new transports.Console(),
    new transports.File({
      filename: `backlog.log`,
      format: format.uncolorize(),
    }),
  ],
});

logger.stream = {
  write: (message) =>
    logger.info(message.substring(0, message.lastIndexOf("\n"))),
};

const httpLogger = morgan(
  ":method :url :status :response-time ms - :res[content-length]",
  { stream: logger.stream }
);

module.exports = { logger, httpLogger };

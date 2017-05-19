'use strict';

// legacy debug with the ability to specify a winston transport;

const winston = require('winston');

module.exports = function debug(name, transport) {
  transport = transport || winston.transports.Console;

  const logger = new winston.Logger().add(transport, {
    level: 'debug'
  });

  const legacyDebugger = require('debug')(name);
  legacyDebugger.log = logger.log.bind(logger, 'debug');

  return legacyDebugger;
};

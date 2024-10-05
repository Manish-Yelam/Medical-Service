const moment = require('moment');
const { socketLogger } = require('../../Config/Setting/logger.config');
const { io, server } = require('../../Config/Setting/socket.config');

require('./socket.events');

const PORT = process.env.WEBSOCKET_PORT || 8080;

server.listen(PORT, () => {
  socketLogger.info(`WebSocket server running on port ${PORT} on ${moment().format('llll')}.`);
});

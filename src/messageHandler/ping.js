const { Message } = require("discord.js");
const MessageController = require('../classes/MessageController')

const pattern = /ping$/;

/**
 * @param {Message} message 
 */
const process = async (message) => {
  message.reply('pong')
}
module.exports = new MessageController({ pattern, process })

const { Message } = require("discord.js");
const MessageController = require('../classes/MessageController')
const package = require('../../package.json')

const pattern = /version$/;

/**
 * @param {Message} message 
 */
const process = async (message) => {
  message.reply(`version: ${package.version}`)
}

module.exports = new MessageController({ pattern, process, onReply: true })

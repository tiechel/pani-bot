const { Message, Client } = require('discord.js');
const fs = require('fs');

const handlers = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.js'))
  .filter(file => file !== 'index.js')
  .map((file) => {
    return require(`${__dirname}/${file}`);
  });

/**
 * メッセージハンドラ
 * @param {Client} client
 * @param {Message} message 
 */
const handleMessage = async (client, message) => {
  if (message.author.bot) return false;
  if (message.mentions.everyone) return false;

  for (const handler of handlers) {
    await handler.execute(client, message);
  }
}

module.exports = {
  handleMessage
}
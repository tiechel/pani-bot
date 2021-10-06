const { Message } = require("discord.js");
const horoscope = require('../api/horoscope');
const MessageController = require('../classes/MessageController')

const pattern = /www.fantasy-earth.com/;

const process = async (message) => {
  const rand = Math.floor(Math.random() * 100);
  if (rand > 75) {
    const horo = await horoscope.random(new Date())
    message.reply(horo.content);
  } else {
    message.reply('ﾍｱｯ')
  }
  setTimeout(() => { message.delete() }, 1000);
}

module.exports = new MessageController({ pattern, process })

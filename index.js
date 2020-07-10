process.on('unhandledRejection', console.dir);

require('dotenv').config();
const horoscope = require('./horoscope.js');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', message => {
  if(message.content.match(/www.fantasy-earth.com/)) {
    const rand = Math.floor(Math.random() * 100);

    if (rand > 80) {
      const today = moment().format('YYYY/MM/DD');
      const horo = horoscope.date(today);
      horo.then((h) => {
        message.reply(h.content);
      })
      .catch((err) => {
        message.reply('ﾍｱｯ');
        console.log(err);
      })
    } else {
      message.reply('ﾍｱｯ');
    }

    message.delete({timeout: 100})
  }
})

client.login(token)

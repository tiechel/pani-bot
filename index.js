require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

const token = process.env.DISCORD_BOT_TOKEN

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message => {
  if(message.content.match(/www.fantasy-earth.com/)) {
    message.reply('ﾍｱｯ')
    message.delete(500)
  }
})

client.login(token)
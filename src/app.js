const { Client, Intents } = require('discord.js');
const client = new Client({ intents: Object.keys(Intents.FLAGS) });
const { handleMessage } = require('./messageHandler')

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on('messageCreate', async (message) => {
  await handleMessage(client, message)
})


module.exports = client;

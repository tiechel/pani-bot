require('dotenv').config();
process.on('unhandledRejection', console.dir);

const token = process.env.DISCORD_BOT_TOKEN;
const client = require('./src/app')

client.login(token)

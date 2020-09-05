const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config()

const {getQuran, getJoke} = require('./helpers')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}, ${client.user.id}`);
});

client.on('message', message => {
    if (message.author === client.user)
        return;

    if (message.content.toLowerCase() === '!quran') {
        getQuran().then(data => message.channel.send(data))
    }

    if (message.content.toLowerCase() === '!joke') {
        getJoke().then(data => message.channel.send(data))
    }
});

client.login(process.env.DISCORD_TOKEN);

require('dotenv').config()
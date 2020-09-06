const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

require('dotenv').config()

const { getQuran, getJoke, getLebron } = require('./helpers')

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

    if (message.content.toLowerCase() === '!lebron') {
        getLebron().then(data => message.channel.send("Here's a wild Lebron", { files: [data] }))

        const lebronEmbed = new Discord.MessageEmbed()
            .setColor('#830037')
            .setTitle("Here's a Wild Lebron")
        getLebron().then(data => {return lebronEmbed.setImage(data)}).then(finalEmbed => message.channel.send(finalEmbed))
    }
});

client.login(process.env.DISCORD_TOKEN);

require('dotenv').config()
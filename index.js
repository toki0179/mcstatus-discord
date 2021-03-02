const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const { channel } = require('./config.json');
const { server } = require('./config.json');

const client = new Discord.Client();

client.once('ready', async () => {
	console.log('Ready!');
        client.user.setActivity('Checking Minecraft Server Status')
});

client.login(token);

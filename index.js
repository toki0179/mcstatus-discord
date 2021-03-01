const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const { channel } = require('./config.json');
const { ShardingManager } = require('discord.js');


const client = new Discord.Client();

client.once('ready', async () => {
	console.log('Ready!');
        
	
});

client.login(token);

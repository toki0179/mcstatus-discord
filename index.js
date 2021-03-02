const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const { channelid } = require('./config.json');
const { server } = require('./config.json');
const util = require('minecraft-server-util');

const client = new Discord.Client();

client.once('ready', async () => {
	console.log('Ready!');
        client.user.setActivity('Checking Minecraft Server Status')
	util.status('play.hypixel.net') // port is default 25565
    	.then((response) => {
        	message.channelid.send(response);
    })

});

client.login(token);

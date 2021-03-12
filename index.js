const fs = require('fs');
const Discord = require('discord.js');
const { token, channelid, server } = require('./config.json');
const util = require('minecraft-server-util');
const client = new Discord.Client();
const status = require('minecraft-server-status');

client.once('ready', async() => {
	console.log('Ready!');
	client.user.setActivity('toki0179/mcStatus-discord')
	var channel = client.channels.cache.get(channelid)
	var msg = await channel.send(`**Server Status:**`)
	setInterval(() => {
		util.status(server) // port is default 25565
			.then(async(response) => {

			let embed = new Discord.MessageEmbed()
			.addFields(
				{ name: `Players Online: `, value: `${response.onlinePlayers}`, },
				{ name: `Max Players: `, value: `${response.maxPlayers}`, },
				{ name: `Server IP: `, value:`${response.host}`, }, 
				{ name: `Version:`, value: `${response.version}` }
			)
			.setFooter('Created by toki#0999')
			msg.edit(embed);
		}, 60)
	})
});

client.login(token);

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
	let i = 0
	setInterval(() => , 600000);
	util.status(server) // port is default 25565
    	.then((response) => {
        	let playersOnline = response.playersOnline
		let serverHost = response.host
		let serverPort = response.port
		let serverMax = response.maxPlayers
		let serverVer = response.version
		
		const embed = new Discord.messageEmbed()
		.setTitle(`${serverHost} Status: `)
		.addFields(
			{ name: `Players Online: `, value: `${playersOnline}` },
			{ name: `Max players:`, value: `${serverMax}` },
			{ name: `Server Host: `, value:`${serverHost}:${serverPort}` },
			{ name: `Version:`, value: `${serverVer}` }
		)
		.setFooter('Created by toki#0999')
		
		var Msg = client.channels.get(channelid).send(embed);
			setInterval(() => Msg.edit(embed), 60);
    })

});

client.login(token);

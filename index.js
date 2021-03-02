const fs = require('fs');
const Discord = require('discord.js');
const { token, channelid, server } = require('./config.json');
const util = require('minecraft-server-util');
const client = new Discord.Client();

client.once('ready', async() => {
	console.log('Ready!');
	client.user.setActivity('Checking Minecraft Server Status')
	let i = 0
	  util.status(server) // port is default 25565
		  .then((response) => {
		  let playersOnline = response.onlinePlayers
		  let serverHost = response.host
		  let serverPort = response.port
		  let serverMax = response.maxPlayers
		  let serverVer = response.version
		
		  const embed = new Discord.MessageEmbed()
		  .setTitle(`${serverHost}'s Status: `)
		  .addFields(
			  { name: `Players Online: `, value: `${playersOnline}`, },
			  { name: `Max Players: `, value: `${serverMax}`, },
			  { name: `Server IP: `, value:`${serverHost}`, }, 
			  { name: `Version:`, value: `${serverVer}` }
		  )
		  .setFooter('Created by toki#0999')
		  channel = client.channels.cache.get(channelid)
		  let msg = await channel.send(embed)
		  setInterval((), async() => {
			  msg.edit(embed);
		  }, 60)

	  })

});

client.login(token);

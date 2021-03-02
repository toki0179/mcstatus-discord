const fs = require('fs');
const Discord = require('discord.js');
const { token, channelid, server } = require('./config.json');
const util = require('minecraft-server-util');
const client = new Discord.Client();

client.once('ready', async() => {
	console.log('Ready!');
	client.user.setActivity('toki0179/mcStatus-discord')
	let i = 0
	  util.status(server) // port is default 25565
		  .then(async(response) => {

		  const embed = new Discord.MessageEmbed()
		  .setTitle(`${response.host}'s Status: `)
		  .addFields(
			  { name: `Players Online: `, value: `${response.onlinePlayers}`, },
			  { name: `Max Players: `, value: `${response.maxPlayers}`, },
			  { name: `Server IP: `, value:`${response.host}`, }, 
			  { name: `Version:`, value: `${response.version}` }
		  )
		  .setFooter('Created by toki#0999')
		  channel = client.channels.cache.get(channelid)
		  let msg = await channel.send(embed)
		  setInterval(() => {
			  msg.edit(embed);
		  }, 60)

	  })

});

client.login(token);

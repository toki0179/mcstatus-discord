const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const { channel } = require('./config.json');
const { ShardingManager } = require('discord.js');


const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', async () => {
	console.log('Ready!');
        
	
});

client.login(token);

const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const db = require('quick.db');
const { defaultCipherList } = require('constants');
const { aliases } = require('./commands/avatar');
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
        
	let i = 0
	client.user.setActivity(`+help || Serving ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users || Serving ${client.guilds.cache.size} servers`)
	setInterval(() => client.user.setActivity(`+help || Serving ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users || Serving ${client.guilds.cache.size} servers`), 600000);
	
});

client.on('message', message => {
	let prefix = db.get(`prefix_${message.guild.id}`)

	const defaultprefix = '+'

	if(prefix === null) prefix = defaultprefix

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	let args = message.content.slice(prefix.length).trim().split(/ +/);
	let command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).run(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);

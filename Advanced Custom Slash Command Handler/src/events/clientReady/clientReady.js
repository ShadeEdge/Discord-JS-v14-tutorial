// Import Events and place the name of the event depending on what eventFolder you are in
const { Events } = require('discord.js');
// Import the guild Id you copied and pasted in your config.json
const { guildId } = require('../../../config.json');

module.exports = {
	name: Events.ClientReady,
	once: true,
  // Pass in guild mainly as the parameter since you're dealing with guild commands
	async execute(client, guild) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

    // Deploy Commands function
		try {
			console.log('Reloading Slash Commands...')
			const guild = client.guilds.cache.get(guildId);
			const commands = client.commands.map((cmd) => cmd.data.toJSON());
			const commandNames = client.commands.map((cmd) => cmd.data.name).join(', ');
			await guild.commands.set(commands)
			console.log(`Sucessfully Reloaded ${commands.length} Slash Commands: ${commandNames}`)
		} catch (error) {
			console.error(`There was an error Reloading the Slash Commands: ${error}`)
		}
	}
};

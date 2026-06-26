// Import the SlashCommandBuilder from discord.js
const { SlashCommandBuilder } = require('discord.js');

// The two properites that we required in the if statement in index.js are placed here. This is how they are placed
module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    // The execution function
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

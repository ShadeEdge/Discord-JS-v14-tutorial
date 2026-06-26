// We arent really doing a ban command today. I will do it in a later video
const { SlashCommandBuilder } = require('discord.js');

// Make sure to make the user option required in this case because its a ban command
module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user from the server')
    .addUserOption(option =>
        option
        .setName('user')
        .setDescription('The user to ban')
        .setRequired(true)
    )
    .addStringOption(option =>
        option
        .setName('reason')
        .setDescription('The reason for the ban')
    ),

    async execute (interaction) {
        await interaction.reply('Ban!')
    }
}

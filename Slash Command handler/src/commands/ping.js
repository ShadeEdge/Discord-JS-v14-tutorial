const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),

   async run ({ interaction }) {
    interaction.reply('Pong!')
   }
}

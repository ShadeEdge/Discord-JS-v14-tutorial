require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'hello') {
    message.reply('hello')
  }
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand) {
    return;
  }

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder().setTitle('Embed').setDescription('This is an embed').setColor('Random').addFields(
      {
        name: '1st Field',
        value: 'Some random value'
      },
      {
        name: '2nd Field',
        value: 'Some random value'
      }
    )

    interaction.reply({embeds: [embed]})
  }
});

client.login(process.env.TOKEN);

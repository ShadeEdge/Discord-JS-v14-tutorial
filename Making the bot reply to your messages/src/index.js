require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('clientReady', () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'hello') {
    interaction.reply('hello')
  }
})

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }


  if (interaction.commandName === 'ping') {
    interaction.editreply('Pong!')
  }
})

client.login(process.env.TOKEN);

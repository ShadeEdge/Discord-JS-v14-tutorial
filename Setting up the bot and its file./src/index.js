const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// To not get any deprecation warning on the console, use clientReady instead.
client.on('clientReady', () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

client.login('Your bot's token');

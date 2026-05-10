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

client.login(process.env.TOKEN);

// The ready in the client on has been changed because there is a deprecation warning from it.

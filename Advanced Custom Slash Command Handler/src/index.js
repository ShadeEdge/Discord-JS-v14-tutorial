require('dotenv').config();
const { Client, IntentsBitField, Collection } = require('discord.js');
// Import the event handler file from the handlers folder
const eventHandler = require('./handlers/eventHandler');
// Reads the context of the directory
const fs = require('fs');
// Defines the path of the directory you want
const path = require('path');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

// New collection of commands
client.commands = new Collection();

// Define the path of the commandFolders
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

      // If these two properties that are in a set of strings are in the file, then its gonna be a command file. The else does the opposite and logs a warn
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command)
        } else {
            console.warn(`[WARNING]: The command at ${filePath} is missing a required 'data' or 'execute' property`)
        }
    }
}

// Use the eventHandler function and pass in the client as a parameter
eventHandler(client);

client.login(process.env.TOKEN);

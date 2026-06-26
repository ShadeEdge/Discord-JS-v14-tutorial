const { Events, MessageFlags } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    once: false,
     async execute (interaction) {
        if (!interaction.isChatInputCommand()) return;

       // Define and get the command
        const command = interaction.client.commands.get(interaction.commandName);

       // If the command isnt found then it will console an error
        if (!command) {
            console.error(`There is no command matching ${interaction.commandName}`)
            return;
        }

       // Command execution function
        try {
          // Interaction is the main parameter to pass in
            await command.execute(interaction);
        } catch (error) {
            console.error(`There was an error executing this command: ${error}`)
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: 'There was an error executing this command.',
                  // Ephemeral will make the bot's response visible only to the user who invoked the interaction
                    flags: MessageFlags.Ephemeral
                })
            }
        }
    }
}

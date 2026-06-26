// Defines the path of the events folder
const path = require('path');
// Reads the context of the directory which in our case is the events folder
const fs = require('fs');

// This is all similar to what we did in the index.js file when we were defining the path of the commands folder
module.exports = (client) => {
    const foldersPath = path.join(__dirname, '..', 'events');
    const eventFolders = fs.readdirSync(foldersPath);

  // Loop through the event Folders
    for (const folder of eventFolders) {
        const eventsPath = path.join(foldersPath, folder);
        const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.js'));

      // Loop through the event Files
        for (const file of eventFiles) {
            const filePath = path.join(eventsPath, file);
            const event = require(filePath);

          // Event execution
            if (event.once) {
                client.once(event.name, (...args) => event.execute (...args))
            } else {
                client.on(event.name, (...args) => event.execute (...args))
            }
        }
    }
};

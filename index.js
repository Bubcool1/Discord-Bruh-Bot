const { Client, MessageAttachment, Message } = require('discord.js');
const client = new Client();

require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function slashCommand(command, description, response) {
    client.on('ready', () => {
        client.api.applications(client.user.id).guilds('855023117348765728').commands.post({
            data: {
                name: command,
                description: description
            }
        });
    
    
        client.ws.on('INTERACTION_CREATE', async interaction => {
            const command = interaction.data.name.toLowerCase();
            const args = interaction.data.options;
    
            if (command === 'bruh'){ 
                client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            content: response
                        }
                    }
                })
            }
        });
    });
}

client.on('ready', () => {
    //TODO: Fix this
  console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
      client.user.setStatus('online')
      client.user.setPresence({
          game: {
              name: 'FOR RESPONSES',
              type: "Watching",
              url: "http://obeardsall.media/wat/"
          }
      });
});

slashCommand("bruh", "Bruh boi", "<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>")

client.login(process.env.TOKEN);

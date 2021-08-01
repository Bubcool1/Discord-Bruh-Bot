const {
    Client,
    MessageAttachment,
    Message
} = require('discord.js');
const client = new Client();

require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

var commandName = ['bruh', 'wat', 'goosegif', 'honks', 'badgoose', 'pls goose', 'pls goose mods', 'wot', 'shut', 'noice'];
var commandDesc = ['bruh', 'wat', 'goosegif', 'honks', 'badgoose', 'pls goose', 'pls goose mods', 'wot', 'shut', 'noice'];
var commandRes = ['<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>', new MessageAttachment('assets/wat.jpg'), new MessageAttachment('assets/GooseDance.gif'), new MessageAttachment('assets/GooseHonks.png'), new MessageAttachment('assets/GooseBonk.png'), "https://samperson.itch.io/desktop-goose?download", "https://desktopgooseunofficial.github.io/ResourceHub/", new MessageAttachment('assets/YOUWOTM9-1.jpg'), new MessageAttachment('assets/shut.png'), new MessageAttachment('assets/noice.gif')];

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

            if (command === 'bruh') {
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
    console.log('Bot: Hosting ' + `${client.users.cache.size}` + ' users, in ' + `${client.channels.cache.size}` + ' channels of ' + `${client.guilds.cache.size}` + ' guilds/servers.');
    client.user.setStatus('online')
    client.user.setPresence({
        game: {
            name: 'FOR RESPONSES',
            type: "Watching",
            url: "http://obeardsall.media/wat/"
        }
    });
});

for (var i = 0; i < commandName.length; i++) {
    slashCommand(commandName[i], commandDesc[i], commandRes[i]);
};
// slashCommand("bruh", "Bruh boi", "<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>")

client.login(process.env.TOKEN);
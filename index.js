const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');

const client = new Discord.Client();

require('dotenv').config()

const data = [{
    name: 'bruh',
    description: 'bruh'
}, {
    name: 'wat',
    description: 'wat'
}, {
    name: 'goosegif',
    description: 'goosegif'
}, {
    name: 'honks',
    description: 'honks'
}, {
    name: 'badgoose',
    description: 'badgoose'
}, {
    name: 'pls goose',
    description: 'pls goose'
}, {
    name: 'pls goose mods',
    description: 'pls goose mods'
}, {
    name: 'wot',
    description: 'wot'
}, {
    name: 'shut',
    description: 'shut'
}, {
    name: 'noice',
    description: 'noice'
}]
const testData = [{
    name: 'ping',
    description: 'Replies with Pong!'
  }]; 

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

// client.once('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// client.once('ready', () => {
    // console.log('Bot: Hosting ' + `${client.users.cache.size}` + ' users, in ' + `${client.channels.cache.size}` + ' channels of ' + `${client.guilds.cache.size}` + ' guilds/servers.');
//     client.user.setStatus('online')
//     client.user.setPresence({
//         game: {
//             name: 'FOR RESPONSES',
//             type: "Watching",
//             url: "http://obeardsall.media/wat/"
//         }
//     });
// });

(async () => {
    try {
      console.log('Started refreshing application (/) commands');
    
      await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
        { body: testData },
      );
    
      console.log('Sucessfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
})();


// client.on('interactionCreate', async interaction => {
//     if (!interaction.isCommand()) return;
//     if (interaction.commandName === 'bruh') await interaction.reply('<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>');
//     if (interaction.commandName === 'wat') await interaction.reply(new MessageAttachment('assets/wat.jpg'));
//     if (interaction.commandName === 'goosegif') await interaction.reply(new MessageAttachment('assets/GooseDance.gif'));
//     if (interaction.commandName === 'honks') await interaction.reply(new MessageAttachment('assets/GooseHonks.png'));
//     if (interaction.commandName === 'badgoose') await interaction.reply(new MessageAttachment('assets/GooseBonk.png'));
//     if (interaction.commandName === 'pls goose') await interaction.reply("https://samperson.itch.io/desktop-goose?download");
//     if (interaction.commandName === 'pls goose mods') await interaction.reply("https://desktopgooseunofficial.github.io/ResourceHub/");
//     if (interaction.commandName === 'wot') await interaction.reply(new MessageAttachment('assets/YOUWOTM9-1.jpg'));
//     if (interaction.commandName === 'shut') await interaction.reply(new MessageAttachment('assets/shut.png'));
//     if (interaction.commandName === 'noice') await interaction.reply(new MessageAttachment('assets/noice.gif'));
// });

// client.login(process.env.TOKEN);
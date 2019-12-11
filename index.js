const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!bruh') {
    msg.channel.send("Bruh Moment")
    msg.channel.send(":bruh: :bruh: :bruh:")
  }
});

client.login(process.env.token);
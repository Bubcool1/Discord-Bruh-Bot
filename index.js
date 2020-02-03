const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
      client.user.setStatus('online')
      client.user.setPresence({
          game: {
              name: 'RESPONSES',
              type: "Playing",
              url: "http://obeardsall.media/wat/"
          }
      });
  });

client.on('message', msg => {
  if (msg.content === '!bruh') {
    msg.delete(1)
    msg.channel.send("Bruh Moment")
    msg.channel.send("<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>")
  }
});
client.on('message', msg => {
  if (msg.content === '🥚') {
    msg.channel.send("You're an egg.")
    msg.channel.send("🥚🥚🥚")
  }
})
client.on('message', msg => {
  if (msg.content === "<:EJ:629372599432118292>") {
    msg.channel.send("AH IT'S MUFFIN TIME <:squarenitin:632113566874599444>")
  }
})
client.on('message', msg => {
  if (msg.content === '!egg') {
    msg.channel.send("You're an egg.")
    msg.channel.send("🥚🥚🥚")
  }
})
client.on('message', msg => {
  if (msg.content === 'wat') {
    msg.channel.send(" ", {files: ["https://bubcool1.github.io/wat/wat.jpg"]});
  }
})
client.on('message', msg => {
  if (msg.content === 'Wat') {
    msg.channel.send(" ", {files: ["https://bubcool1.github.io/wat/wat.jpg"]});
  }
})
client.login(process.env.token);
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

// Added for local testing
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
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

client.on('message', msg => {
  if (msg.content === '!bruh') {
    msg.delete({ timeout: 1})
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
  if (msg.content.toLowerCase() === 'wat') {
    msg.channel.send(" ", {files: ["assets/wat.jpg"]});
  }
})

client.on('message', msg => {
  if (msg.content === '!goosegif') {
    msg.delete({ timeout: 1})
    msg.channel.send("HONK HONK HONK")
    const attachment = new MessageAttachment('assets/GooseDance.gif');
    msg.channel.send(attachment);
  }
})
client.on('message', msg => {
  if (msg.content === '!honks') {
    msg.delete({ timeout: 1})
    msg.channel.send("HONK HONK HONK")
    msg.channel.send(" ", {files: ["assets/GooseHonks.png"]});
  }
})
client.on('message', msg => {
  if (msg.content === '!badgoose') {
    msg.delete({ timeout: 1})
    msg.channel.send("HONK HONK HONK")
    msg.channel.send(" ", {files: ["assets/GooseBonk.png"]});
  }
})
client.on('message', msg => {
  if(msg.content === "!oli"){
    msg.channel.send("Ha no.")
  }
})
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pls goose') {
    msg.channel.send("https://samperson.itch.io/desktop-goose?download")
  }
})

client.on('message', msg => {
  if(msg.content.toLowerCase() === "pls goose mods"){
    msg.channel.send("https://desktopgooseunofficial.github.io/ResourceHub/")
  }
})

client.on('message', msg => {
  if (msg.content === 'wot') {
    msg.channel.send(" ", {files: ["assets/YOUWOTM9-1.jpg"]});
  }
})
client.on('message', msg => {
  if (msg.content === 'Wot') {
    msg.channel.send(" ", {files: ["assets/YOUWOTM9-2.jpg"]});
  }
})
client.on('message', msg => {
  if (msg.content === '!shut') {
    msg.delete({ timeout: 1})
    msg.channel.send(" ", {files: ["assets/shut.png"]});
  }
});

// cl)ient.on('message', msg => {
//   if (msg.content === '!nerd') {
//     // msg.delete({ timeout: 1})
//     // msg.channel.send("You are a nerd");
//     msg.react('🇳').then(r => {
//       msg.react('🇪');
//       });
//     // msg.react('🇪').then(r => {
//     //   msg.react('🇷');
//     //   });
//     // msg.react('🇷'.then(r => {
//     //   msg.react('🇩');
//     //   });
//   }
// })

client.on('message', msg => {
  if (msg.content.toLowerCase() == 'noice') {
    msg.delete({ timeout: 1})
    msg.channel.send(" ", {files: ["assets/noice.gif"]})
  }
})

// client.login(process.env.token);

// Added for local testing
const TOKEN = process.env.TOKEN;
client.login(TOKEN);

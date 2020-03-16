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
              name: 'FOR RESPONSES',
              type: "Watching",
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
client.on('message', msg => {
  if (msg.content === '!goosegif') {
    msg.delete(1)
    msg.channel.send("HONK HONK HONK")
    msg.channel.send("http://obeardsall.media/bruh-bot/GooseDance.gif")
  }
})
client.on('message', msg => {
  if (msg.content === '!honks') {
    msg.delete(1)
    msg.channel.send("HONK HONK HONK")
    msg.channel.send("http://obeardsall.media/bruh-bot/Meme2.png")
  }
})
client.on('message', msg => {
  if (msg.content === '!badgoose') {
    msg.delete(1)
    msg.channel.send("HONK HONK HONK")
    msg.channel.send("http://obeardsall.media/bruh-bot/Meme6.png")
  }
})
client.on('message', msg => {
  if(msg.content === "!oli"){
    msg.channel.send("Ha no.")
  }
})
client.on('message', msg => {
  if (msg.content === 'pls goose') {
    msg.delete(1)
    msg.channel.send("GOOSE")
    msg.channel.send("https://samperson.itch.io/desktop-goose?download")
  }
})
client.on('message', msg => {
  if (msg.content === 'Pls goose') {
    msg.delete(1)
    msg.channel.send("GOOSE")
    msg.channel.send("https://samperson.itch.io/desktop-goose?download")
  }
})
client.on('message', msg => {
  if(msg.content === "pls goose mods"){
    msg.channel.send("https://desktopgooseunofficial.github.io/ResourceHub/")
  }
})
client.on('message', msg => {
  if(msg.content === "Pls goose mods"){
    msg.channel.send("https://desktopgooseunofficial.github.io/ResourceHub/")
  }
})

client.on('message', msg => {
  if msg.content === "!bruhgif"){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "api.giphy.com/v1/gifs/search?bruh+moment&api_key={apikey}&limit=1", true);

    xhr.send();

    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // time to partay!!!
        document.getElementById('randImg').src = JSON.parse(xhr.responseText).data.images.original.url;
      }
    }
    msg.channel.send("haha lol.")
    msg.channel.send(randImg)
  }
})
client.login(process.env.token);

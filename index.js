const { Client, MessageAttachment, Message } = require('discord.js');
const client = new Client();

// Added for local testing
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Firebase for Thermal telegram
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

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

  client.on('ready', () => {
    client.api.applications(client.user.id).guilds('855023117348765728').commands.post({
        data: {
            name: "bruh",
            description: "main bruh command"
            // possible options here e.g. options: [{...}]
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
                        content: "<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>"
                    }
                }
            })
        }
    });
});

client.on('message', msg => {
  if (!msg.content.startsWith('!print') || msg.author.bot) return;
    global.args = msg.content.slice(6).trim();
    if(args == "") {
        msg.channel.send("Please give a message.");
    }
    else {
      var content = args + " " + msg.author.tag
      console.log(content)

      db.collection('requests').doc('test').set({
        printed: false,
        text: content
      });
      console.log("Message sent:" + args)
    }
});



// const TOKEN = process.env.TOKEN;
client.login(process.env.TOKEN);

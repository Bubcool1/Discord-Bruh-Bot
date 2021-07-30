const {
    Client,
    MessageAttachment,
    Message
} = require('discord.js');
const client = new Client();

require('dotenv').config()

var commands = {
    "<:EJ:629372599432118292>": "AH IT'S MUFFIN TIME <:squarenitin:632113566874599444>",
    "wat": new MessageAttachment('assets/wat.jpg'),
    "!goosegif": new MessageAttachment('assets/GooseDance.gif'),
    "!honks": new MessageAttachment('assets/GooseHonks.png'),
    "!badgoose": new MessageAttachment('assets/GooseBonk.png'),
    "pls goose": "https://samperson.itch.io/desktop-goose?download",
    "pls goose mods": "https://desktopgooseunofficial.github.io/ResourceHub/",
    "wot": "assets/YOUWOTM9-1.jpg",
    "!shut": "assets/shut.png",
    "noice": "assets/noice.gif",
};


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Firebase for Thermal telegram
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

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

client.on('message', msg => {
    if (msg.content === '!bruh') {
        msg.delete({
            timeout: 1
        })
        msg.channel.send("Bruh Moment")
        msg.channel.send("<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>")
    }
    if (msg.content === '🥚') {
        msg.channel.send("You're an egg.")
        msg.channel.send("🥚🥚🥚")
    }
    if (msg.content === '!egg') {
        msg.channel.send("You're an egg.")
        msg.channel.send("🥚🥚🥚")
    }
    if (msg.content === 'Wot') {
        msg.channel.send(" ", {
            files: ["assets/YOUWOTM9-2.jpg"]
        });
    };
    if (msg.content.toLowerCase() in commands) {
        msg.delete({
            timeout: 0,
            reason: "clean"
        });
        msg.channel.send(commands[msg.content.toLowerCase()])
    }
});

// client.on('message', msg => {
//   if (msg.content === '!nerd') {
//     // msg.delete({ timeout: 1})
//     // msg.channel.send("You are a nerd");
//     msg.react('🇳').then(r => {
//       msg.react('🇪');
//       });
//     msg.react('🇪').then(r => {
//       msg.react('🇷');
//       });
//     msg.react('🇷').then(r => {
//       msg.react('🇩');
//       });
//   }
// })

// client.on('message', msg => {
//   if (msg.content === '!testnerd') {
//     msg.channel.fetchMessages({
//       limit: 1
//       })
//     .then(r => {
//       msg.react("✅")
//     });
// };

client.on('message', msg => {
    if (!msg.content.startsWith('!print') || msg.author.bot) return;
    global.args = msg.content.slice(6).trim();
    if (args == "") {
        msg.channel.send("Please give a message.");
    } else {
        var content = args + " " + msg.author.tag
        console.log(content)

        db.collection('requests').doc('test').set({
            printed: false,
            text: content
        });
        console.log("Message sent:" + args)
    }
});


client.login(process.env.TOKEN);
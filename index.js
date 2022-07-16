const { Client, MessageAttachment, Message } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

require("dotenv").config();
process.title = 'DiscordBruhBot'

var commands = {
  "<:EJ:629372599432118292>":
    "AH IT'S MUFFIN TIME <:squarenitin:632113566874599444>",
  "wat": { files: ["assets/wat.jpg"] },
  "!goosegif": { files: ["assets/GooseDance.gif"] },
  "!honks": { files: ["assets/GooseHonks.png"] },
  "!badgoose": { files: ["assets/GooseBonk.png"] },
  "pls goose": "https://samperson.itch.io/desktop-goose?download",
  "pls goose mods": "https://desktopgooseunofficial.github.io/ResourceHub/",
  "wot": { files: ["assets/YOUWOTM9-1.jpg"] },
  "!shut": { files: ["assets/shut.png"] },
  "noice": { files: ["assets/noice.gif"] },
};

var multiCommands = {
  "!bruh": ["Bruh Moment", "<:bruh:629372877388382209> <:bruh:629372877388382209> <:bruh:629372877388382209>",],
  "!egg": ["You're an egg.", "🥚🥚🥚"],
  "🥚": ["You're an egg.", "🥚🥚🥚"],
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Firebase for Thermal telegram
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

client.on("ready", () => {
  console.log(
    "Bot: Hosting " +
      `${client.users.cache.size}` +
      " users, in " +
      `${client.channels.cache.size}` +
      " channels of " +
      `${client.guilds.cache.size}` +
      " guilds/servers."
  );
  client.user.setStatus("online");
  client.user.setPresence({
    game: {
      name: "FOR RESPONSES",
      type: "Watching",
      url: "http://obeardsall.media/wat/",
    },
  });
});

client.on("messageCreate", (msg) => {
  // FIXME This possibly could be handled in with the other commands in the array.
  if (msg.content === "Wot") {
    msg.delete({
      timeout: 0,
      reason: "clean",
    });
    if (msg.type === "REPLY") {
      msg.fetchReference().then((res) => {
        res.reply({files: ["assets/YOUWOTM9-2.jpg"] });
      });
    } else {
      msg.channel.send({files: ["assets/YOUWOTM9-2.jpg"] });
    }
  }

  if (msg.content.toLowerCase() in commands && msg.content != "Wot") {
    msg.delete({
      timeout: 0,
      reason: "clean",
    });
    if (msg.type === "REPLY") {
      msg.fetchReference().then((res) => {
        res.reply(commands[msg.content.toLowerCase()]);
      });
    } else {
      msg.channel.send(commands[msg.content.toLowerCase()]);
    }
  }

  // TODO Handle having a different number of messages to send not just dealing with 2
  if (msg.content.toLowerCase() in multiCommands) {
    msg.delete({
      timeout: 0,
      reason: "clean",
    });
    if (msg.type === "REPLY") {
      msg.fetchReference().then((res) => {
        res.reply(multiCommands[msg.content.toLowerCase()][0]);
        msg.channel.send(multiCommands[msg.content.toLowerCase()][1]);
      });
    } else {
      msg.channel.send(multiCommands[msg.content.toLowerCase()][0]);
      msg.channel.send(multiCommands[msg.content.toLowerCase()][1]);
    }
  }
});

client.on("messageCreate", (msg) => {
  if (!msg.content.startsWith("!print") || msg.author.bot) return;
  global.args = msg.content.slice(6).trim();
  if (args == "") {
    msg.channel.send("Please give a message.");
  } else {
    var content = args + " " + msg.author.tag;
    console.log(content);

    db.collection("requests").doc("test").set({
      printed: false,
      text: content,
    });
    console.log("Message sent:" + args);
  }
});

client.login(process.env.TOKEN);

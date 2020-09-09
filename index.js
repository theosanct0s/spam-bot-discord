require('dotenv').config()

const fs = require("fs");
console.log("♨️ Ligando bot...");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { Client, Util } = require("discord.js");
const request = require("request")
var prefix = config.prefix;
var dono = config.dono;

////////////////////////// AQUI IRÁ CARREGAR OS COMANDOS DO BOT, NÃO MEXA! //////////////////////////

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    if (err.code == "MODULE_NOT_FOUND") return;
    console.error(err);
  }
});

////////////////////////// AQUI VOCÊ PODERÁ MUDAR O STATUS DO SEU BOT //////////////////////////

client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.\n\n`
  );

  let status = [
    { name: `status 1`, type: "STREAMING" },
    { name: `status 2`, type: "STREAMING" },
    { name: `status 3`, type: "STREAMING" }
  ];

  function st() {
    let rs = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 8000); //10000 = 10Ms = 10 segundos
  
});

////////////////////////// CONFIGURE PARA RECEBER AS NOTIFICAÇÕES DOS SERVIDORES EM QUE O BOT ENTROU //////////////////////////

client.on("guildCreate", async guild => {
  
  let nserver = `\`Estou em um novo servidor:\`\n\n  Nome: **${guild.name}**\n  ID: __**${guild.id}**__\n  Membros: __**${guild.memberCount}**__ \n\nAgora eu estou em __**${client.guilds.size}**__ servidores.`;
  client.guilds
    .get("id do servidor dos logs")
    .channels.get("id do canal dos logs")
    .send(nserver);
  console.log(`Entrei no servidor ${guild.name}`);
});

////////////////////////// O BOT ENVIARÁ UMA MENSAGEM PARA OS MEMBROS NOVATOS DOS SERVIDORES //////////////////////////

client.on("guildMemberAdd", async member => {
  
  member.send('Mensagem que deseja que o bot envie para membros novatos');

});

client.login(config.token);

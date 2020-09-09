const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  
  if (
    message.author.id !== "id do dono 1" &&
    message.author.id !== "id do dono 2"
  )
    return message.reply(
      ":x: | você não possui permissão para usar esse comando."
    );

  let servidores = client.guilds.size;
  let usuarios = client.users.size;

  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
        " **Olá, eu sou a " + client.user.username + ", um bot focado em anúncios e divulgação, estou aqui para te ajudar.**"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "Me adicione em seu servidor:",
      `\n**Clique aqui](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=2146958847&scope=bot)**\n`
    )
    .addField(
      "Aqui vai algumas informações:",
      ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __**${config.prefix}aviso**__ **e seja feliz!**`
    )
    .addField(
      "Configure as minhas permissões:",
      ` **Ler mensagens, Escrever mensagens e Gerenciar mensagens**`
    )
    .addField(
      "Use " + config.prefix + "ajuda para saber mais.",
      `** **`
    )
    .setColor("BLACK")
    .setFooter(client.user.username, client.useravatarURL)
    .setTimestamp();

  let on = client.users.filter(m => m.presence.status === "online");
  let todos = client.users.filter(
    m =>
      m.presence.status === "idle" &&
      m.presence.status === "dnd" &&
      m.presence.status === "online"
  );
  let off = client.users.filter(m => m.presence.status === "offline");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  
  message.channel.send(
    `_**\`Mensagem sendo enviada para:\`**_\n\n Online: **${on.size}**\n Não Perturbe: **${npertube.size}**\n Ausente: **${ausente.size}**\n\n Offline: __**${off.size}**__ **serão ignorados em um total de ${servidores} servidores.**`
  );

  npertube.forEach(f1 => {
    f1.send(mensagem);
  });

  on.forEach(f2 => {
    f2.send(mensagem);
  });

  ausente.forEach(f3 => {
    f3.send(mensagem);
  });

  message.channel.forEach(f4 => {
    message.channel.send(
      `_**\`A mensagem foi divulgada para:\`**_\n\n Online: **${on.size}**\n Não Perturbe: **${npertube.size}**\n Ausente: **${ausente.size}**\n\n Offline: __**${off.size}**__ **foram ignorados em um total de** __**${servidores}**__ **servidores.**`
    );
  }).then(
  message.channel.send(`Mensagem enviada para todos os membros.`))
};
